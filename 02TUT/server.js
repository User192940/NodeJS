const fsPromises = require('fs').promises;
const path = require('path');



const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, "reply.txt"), 'utf-8');
        await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);
        await fsPromises.appendFile(path.join(__dirname, "promiseWrite.txt"), '\n\n nice to meet you.');
        const newData = await fsPromises.readFile(path.join(__dirname, "promiseWrite.txt"), 'utf-8');
        console.log(newData);
    } catch (err){
        console.error(err);
    }
}
fileOps();