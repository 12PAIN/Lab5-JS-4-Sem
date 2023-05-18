function readConfig (name) {
    return new Promise((resolve)=>{
        console.log('(1) config from ' + name + ' loaded')
        resolve();
    });
}

function doQuery (statement) {
    return new Promise((resolve)=>{
        console.log('(2) SQL query executed: ' + statement)
        resolve();
    });
}

function httpGet (url) {
    return new Promise((resolve) => {
        console.log('(3) Page retrieved: ' + url)
        resolve();
    });
}

function readFile (path) {
    return new Promise((resolve) => {
        console.log('(4) Readme file from ' + path + ' loaded')
        resolve();
    });
}


async function start(){
    await readConfig('myConfig');
    await doQuery('select * from cities');
    await httpGet('http://google.com');
    await readFile('README.md');
    console.log('It is done!'); 
    console.log('end');

} 

// Вызов функций
console.log('start');
start();