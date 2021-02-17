import fs from 'fs';

export default function generateOptions() {
  var optionsJSON;

  fs.readFile('./Options.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log('Error reading file from disk:', err);
      return;
    }
    try {
      optionsJSON = JSON.parse(jsonString.toString());
    } catch (err) {
      console.log('Error parsing JSON string:', err);
    }
  });
}

module.exports = generateOptions;
