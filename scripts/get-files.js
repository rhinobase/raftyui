const fs = require("fs");

function getFiles(entry, extensions = [], excludeExtensions = []) {
  let fileNames = [];

  const dirs = fs.readdirSync(entry);

  for (const dir of dirs) {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions),
      ];
    }

    if (
      !excludeExtensions.some((exclude) => dir.endsWith(exclude)) &&
      extensions.some((ext) => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  }

  return fileNames;
}

module.exports = getFiles;
