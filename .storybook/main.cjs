module.exports = {
  async viteFinal(config) {
    config.optimizeDeps.include.push(
        '@storybook/addon-actions',
        'msw-storybook-addon',
        '@storybook/addons',
        'msw',
        'is-node-process',
    );
    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  }
}
