fetch('./pokemon.csv').then(response => response.text()) .then(csvString => {
    const results = Papa.parse(csvString, {"header": true}).data;});

