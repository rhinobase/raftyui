module.exports = {
  "{apps,libs,tools}/**/*.{ts,tsx}": (files) => {
    return `nx affected --target=typecheck --files=${files.join(",")}`;
  },
  "{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json}": [
    () => "pnpm dlx @biomejs/biome check --apply .",
  ],
};
