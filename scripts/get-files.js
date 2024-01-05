const fs = require("fs");

function getFiles(entry, extensions = [], excludeExtensions = []) {
  const paths = [];

  const dirs = fs.readdirSync(entry);

  for (const dir of dirs) {
    const path = `${entry}/${dir}`;
    paths.push(path);
  }

  return paths;
}

module.exports = getFiles;
