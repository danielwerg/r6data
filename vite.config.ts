import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgo from 'vite-plugin-svgo';

import { join } from 'node:path';

import pkg from './package.json' assert { type: 'json' };

const external = [
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/dot-notation
  ...Object.keys(pkg['dependencies'] ?? {}),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/dot-notation
  ...Object.keys(pkg['peerDependencies'] ?? {})
];

/** Matches `^DEPENDENCY_NAME($|/)` */
const makeExternalPredicate = (externalArr: string[]) =>
  externalArr.length
    ? (id: string) => new RegExp(`^(${externalArr.join('|')})($|/)`).test(id)
    : () => false;

export default defineConfig({
  build: {
    lib: {
      entry: join(__dirname, 'src/index.ts'),
      fileName: 'index'
    },
    rollupOptions: {
      external: makeExternalPredicate(external),
      output: [
        { format: 'cjs' },
        {
          format: 'esm',
          preserveModules: true,
          entryFileNames: '[name].mjs'
        }
      ]
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
              removeViewBox: false,
              removeUnknownsAndDefaults: false // Breaks svg mask by removing fill when it's equals to svg fill
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
