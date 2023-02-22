import sharp from 'sharp';

import { join } from 'node:path';

import { readdirRecursive } from './utils';

const logPrefix = 'svg2png:';

(async () => {
  const assetsDirPath = join(__dirname, '../src/assets');

  const filePaths = await readdirRecursive(assetsDirPath, {
    directories: false
  });
  const svgFilePaths = filePaths.filter(path => /.*svgs.*/.test(path));
  console.log(logPrefix, `Found ${svgFilePaths.length} svgs`);

  if (!svgFilePaths.length) return;

  await Promise.all(
    svgFilePaths.map(async svgPath => {
      const pngPath = svgPath.replace(/svgs/, 'pngs').replace(/\.svg/, '.png');
      await sharp(svgPath).resize(500).png().toFile(pngPath);
    })
  );
  console.log(
    logPrefix,
    `Successfully converted ${svgFilePaths.length} svgs to pngs`
  );
})();
