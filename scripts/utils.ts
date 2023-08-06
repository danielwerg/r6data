import { join } from 'node:path';
import fs from 'node:fs/promises';

export interface ReaddirRecursiveOptions {
  /** `true` by default */
  directories?: boolean;
  /** `true` by default */
  files?: boolean;
}
export const readdirRecursive = async (
  path: string,
  options?: ReaddirRecursiveOptions
): Promise<string[]> => {
  const defaultOptions: ReaddirRecursiveOptions = {
    directories: true,
    files: true
  };
  const { directories, files } = { ...defaultOptions, ...options };
  const dir = await fs.readdir(path, { withFileTypes: true });
  const paths = await Promise.all(
    dir.map(async dirent => {
      const curPath = join(path, dirent.name);
      return dirent.isDirectory()
        ? [
            directories ? curPath : [],
            ...(await readdirRecursive(curPath, options))
          ].flat()
        : files
        ? curPath
        : [];
    })
  );
  return paths.flat();
};
