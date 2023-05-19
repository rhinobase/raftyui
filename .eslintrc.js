module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-rhinobase`
  extends: ["rhinobase"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
