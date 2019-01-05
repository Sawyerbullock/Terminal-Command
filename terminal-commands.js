const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return`${acc} ${file} `;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = (file) => {
  fs.writeFile(file, '', function(err) {
    if(err) throw err;
    console.log('Saved!')
  });
};

module.exports.mkdir = (directory) => {
  fs.mkdir(`./${directory}`, function(err) {
    if(err) throw err;
    console.log('Directory added!');
  });
};
