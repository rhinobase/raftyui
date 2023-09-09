// Hex to RGB Code converter
const axios = require("axios");
const colors = require("tailwindcss/colors");

async function main() {
  const items = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "sky",
    "blue",
    "indigo",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    console.log(`.theme-${item} {`);
    await Promise.all(
      Object.entries(colors[item]).map(([w, c]) =>
        axios.get(`https://www.thecolorapi.com/id?hex=${c.slice(1)}`).then(
          ({
            data: {
              rgb: { r, g, b },
            },
          }) => console.log(`--color-primary-${w}: ${r} ${g} ${b};`),
        ),
      ),
    );
    console.log("}");
  }
}

main();
