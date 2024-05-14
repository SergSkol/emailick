export default {
  target: 'node',
  resolve: {
    fallback: {
      assert: false,
      http: false,
      https: false,
      net: false,
      path: false,
      tlc: false,
      url: false,
      zlib: false,
    },
  },
};
