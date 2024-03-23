module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@navigation": "./src/navigation",
            "@hooks": "./src/hooks",
            "@context": "./src/context",
            "@api": "./src/api",
            "@redux": "./src/redux",
            "@types": "./src/types",
          },
        },
      ],
    ],
  };
};
