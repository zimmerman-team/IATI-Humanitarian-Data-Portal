// @ts-nocheck

function CSVToArray(csvData: any, delimiter?: string) {
  delimiter = delimiter || ',';
  const pattern = new RegExp(
    `(\\${delimiter}|\\r?\\n|\\r|^)` +
      `(?:"([^"]*(?:""[^"]*)*)"|` +
      `([^"\\${delimiter}\\r\\n]*))`,
    'gi'
  );
  const data = [[]];
  let matches = null;
  while ((matches = pattern.exec(csvData))) {
    var matchedDelimiter = matches[1];
    if (matchedDelimiter.length && matchedDelimiter != delimiter) {
      data.push([]);
    }
    if (matches[2]) {
      var matchedDelimiter = matches[2].replace(new RegExp('""', 'g'), '"');
    } else {
      var matchedDelimiter = matches[3];
    }
    data[data.length - 1].push(matchedDelimiter);
  }
  return data;
}

export function CSVToJSON(csvData: any) {
  const data = CSVToArray(csvData);
  const objData = [];
  for (let i = 1; i < data.length; i++) {
    objData[i - 1] = {};
    for (let k = 0; k < data[0].length && k < data[i].length; k++) {
      const key = data[0][k];
      objData[i - 1][key] = data[i][k];
    }
  }
  let jsonData = JSON.stringify(objData);
  jsonData = jsonData.replace(/},/g, '},\r\n');
  return JSON.parse(jsonData);
}
