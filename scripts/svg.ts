import { optimize as svgo, type Config as SVGOConfig } from 'svgo';

import { basename, dirname, extname, join, relative } from 'node:path';
import fs from 'node:fs/promises';

import { isPathExists, readdirRecursive } from './utils';

const logPrefix = 'svg:';

(async () => {
  const assetsDirPath = join(__dirname, '../src/assets');
  const newAssetsDirPath = join(__dirname, '../dist/assets');

  const filePaths = await readdirRecursive(assetsDirPath, {
    directories: false
  });
  const svgFilePaths = filePaths.filter(path => /.*svgs.*/.test(path));
  console.log(logPrefix, `Found ${svgFilePaths.length} svgs`);

  await Promise.all(
    svgFilePaths.map(async filePath => {
      const relativeFilePath = relative(assetsDirPath, filePath);
      const newFilePath = join(
        newAssetsDirPath,
        dirname(relativeFilePath),
        // '../', // go backwards to remove "svgs" dir
        basename(relativeFilePath)
      );
      const newDirPath = dirname(newFilePath);

      if (!(await isPathExists(newDirPath)))
        await fs.mkdir(newDirPath, { recursive: true });

      const svg = await fs.readFile(filePath, 'utf8');

      const svgoConfig: SVGOConfig = {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
                removeHiddenElems: false,
                removeEmptyText: false
              }
            }
          },
          {
            name: 'addClassesToSVGElement',
            params: {
              classNames: [
                'r6data',
                basename(relativeFilePath, extname(relativeFilePath))
              ]
            }
          }
        ]
      };

      const { data: optimizedSVG } = svgo(svg, svgoConfig);

      await fs.writeFile(newFilePath, optimizedSVG);
    })
  );
  console.log(
    logPrefix,
    `Successfully optimized and copied ${svgFilePaths.length} svgs to dist dir`
  );
})();
