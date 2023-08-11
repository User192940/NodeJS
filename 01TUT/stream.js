const fs = require('fs');

const rs = fs.createReadStream('../promiseWrite.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./new-lorem.txt');

rs.on('data', (dataChuck) =>{
    ws.write(dataChuck);
})