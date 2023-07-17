import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgo from 'vite-plugin-svgo';

import { join } from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: join(__dirname, 'src/index.ts'),
      name: 'r6data',
      formats: ['es', 'cjs'],
      fileName: 'index'
    }
  },
  plugins: [
    dts(),
    svgo({
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIds: false,
              removeHiddenElems: false,
              removeEmptyText: false,
              removeViewBox: false
            }
          }
        },
        {
          name: 'addClassesToSVGElement',
          params: { classNames: ['r6data'] }
        },
        {
          name: 'prefixIds',
          params: {
            prefixClassNames: false,
            delim: '__',
            prefix: (node, info) => {
              const [, file] = info.path?.match(/[/\\]?([^/\\]+)$/) ?? [];
              const [fileName] = file.split('.');
              if (node.name === 'svg') return 'r6data';
              return `r6data__${fileName!}`;
            }
          }
        }
      ]
    })
  ]
});
