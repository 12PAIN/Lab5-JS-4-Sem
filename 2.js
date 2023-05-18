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

async function callback () {
    console.log('It is done!')
    doQuery('select * from cities', ()=>{
        console.log('It is done!')
        httpGet('http://google.com', ()=>{
            console.log('It is done!')
            readFile('README.md',()=>{
                console.log('It is done!')
                console.log('end')
            })
        })
    })
}

// Вызов функций
console.log('start')
readConfig('myConfig').then(doQuery('select * from cities').then(httpGet('http://google.com').then(readFile('README.md').then(()=>{console.log('It is done!'); console.log('end')}))))

    