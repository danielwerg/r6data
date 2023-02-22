import fs from 'node:fs/promises';
import { join } from 'node:path';

(async () => {
  const operatorsDirPath = join(__dirname, '../src/operators');
  const newOperatorsDirPath = join(__dirname, '../dist/operators');

  const operatorSlugs = await fs
    .readdir(operatorsDirPath, {
      withFileTypes: true
    })
    .then(dirsOrFiles =>
      dirsOrFiles.flatMap(dirent => (dirent.isDirectory() ? dirent.name : []))
    );

  for (const operatorSlug of operatorSlugs) {
    const operatorNotesPath = join(operatorsDirPath, operatorSlug, 'notes.md');
    const newOperatorNotesPath = join(
      newOperatorsDirPath,
      operatorSlug,
      'notes.md'
    );
    await fs.copyFile(operatorNotesPath, newOperatorNotesPath);
  }
})();
