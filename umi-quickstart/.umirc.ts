import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  //   history: 'hash',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        title: 'umi-quickstart',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};

export default config;
