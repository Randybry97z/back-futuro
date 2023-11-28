"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTest = exports.isProd = exports.isDev = void 0;
const isDev = () => {
  if (process.env.NODE_ENV === 'development') return true;
};
exports.isDev = isDev;
const isTest = () => {
  if (process.env.NODE_ENV === 'test') return true;
};
exports.isTest = isTest;
const isProd = () => {
  if (process.env.NODE_ENV === 'production') return true;
};
exports.isProd = isProd;
//# sourceMappingURL=index.js.map