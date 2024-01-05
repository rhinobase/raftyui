const fs = require("fs");

function getFiles(entry, exclude = []) {
  const paths = [];

  const dirs = fs.readdirSync(entry);

  for (const dir of dirs) {
    if (exclude.includes(dir)) continue;

    const path = `${entry}/${dir}`;
    paths.push(path);
  }

  return paths;
}

module.exports = getFiles;
