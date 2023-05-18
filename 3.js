
function fx(x){

    f1(x).then(f2).
    then((value)=>{console.log('F(x) = ' + value.toString())});

}

function f1(x){
    return new Promise((resolve)=>{
        let value = x*x;
        console.log("F1(x) = " + value);
        console.log("F(x) промежуточное = " + value);
        resolve([x, value]);
    });
}

function f2(x){
    return new Promise((resolve)=>{
        let res = 2*x[0];
        value = res + x[1];
        console.log("F2(x) = " + res);
        console.log("F(x) промежуточное = " + value);
        resolve(value);
    });
    
}

fx(3);