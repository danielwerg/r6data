<div align="center">
  <h1>R6 Data</h1>
  <h3>📊 Data for <a href="https://github.com/danielwerg/r6api.js">r6api.js</a> and similar projects</h3>
  <p>
    <a href="https://github.com/danielwerg/r6data/blob/master/license"><img
      src="https://img.shields.io/github/license/danielwerg/r6data?style=for-the-badge"
      alt="License"
    /></a>
    <a href="https://github.com/danielwerg/r6data/releases/latest"><img
      src="https://img.shields.io/github/v/release/danielwerg/r6data?style=for-the-badge&label=version"
      alt="Version"
    /></a>
    <a href="https://github.com/danielwerg/r6data/releases/latest"><img
      src="https://img.shields.io/github/release-date/danielwerg/r6data?style=for-the-badge&label=latest%20release"
      alt="Latest release"
    /></a>
    <a href="https://www.npmjs.com/package/r6data"><img
      src="https://img.shields.io/npm/dw/r6data?style=for-the-badge"
      alt="NPM weakly downloads"
    /></a>
    <a href="https://discord.gg/hshRpWk"><img
      src="https://img.shields.io/discord/612212753498767360?style=for-the-badge&label=discord&color=5865F2"
      alt="Discord guild"
    /></a>
  </p>
  <p>
    <a href="https://github.com/danielwerg/r6data"><img
      src="https://img.shields.io/static/v1?style=flat-square&logo=github&label=GitHub&message=%20&color=gray"
      alt="GitHub"
    /></a>
    <a href="https://www.npmjs.com/package/r6data"><img
      src="https://img.shields.io/static/v1?style=flat-square&logo=npm&label=NPM&message=%20&color=gray"
      alt="NPM"
    /></a>
    <a href="https://yarnpkg.com/package/r6data"><img
      src="https://img.shields.io/static/v1?style=flat-square&logo=yarn&label=Yarn&message=%20&color=gray"
      alt="Yarn"
    /></a>
    <a href="https://github.com/danielwerg/r6data/releases"><img
      src="https://img.shields.io/static/v1?style=flat-square&logo=github&label=Releases&message=%20&color=gray"
      alt="Releases"
    /></a>
    <a href="https://github.com/danielwerg/r6data/blob/master/changelog.md"><img
      src="https://img.shields.io/static/v1?style=flat-square&logo=github&label=Changelog&message=%20&color=gray"
      alt="Changelog"
    /></a>
  </p>
</div>

## 💾 Installation

```sh
yarn add r6data
```

or

```sh
npm install r6data
```

## 👀 Usage

Table of operators which are going to drop in price:

```ts
import { OPERATORS } from 'r6data';

console.table(
  OPERATORS.filter(({ isRecruit }) => !isRecruit)
    .filter(({ nextPriceDropSeasons }) => nextPriceDropSeasons)
    .map(({ name, price, nextPriceDropSeasons }) => ({
      name,
      price: price?.renown,
      priceDrop: nextPriceDropSeasons ?? 0
    }))
);
```

## 💌 Acknowledgments

Operator icons from [r6operators.marcopixel.eu](https://r6operators.marcopixel.eu)
