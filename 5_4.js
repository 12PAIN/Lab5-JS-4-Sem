async function func(a, b)
{
    return new Promise((resolve, reject) => {
        
        setTimeout(async () => {
            let value;
            if (typeof(a) != "number" || typeof(b) != "number"){
                reject("Введены не числовые значения");
            } else{
                value = a + b;
                console.log("Count:", func.count, "Sum:", value)
                func.count++;

                if (func.count != 6){
                    value = await func(value, b);
                }

                

                resolve(value);
            }

            

        }, 2000);
    });
}

async function start(a,b){
    let value = await func(a,b);
    console.log("Value:" + value);
}

func.count = 1;
start(1,3);
