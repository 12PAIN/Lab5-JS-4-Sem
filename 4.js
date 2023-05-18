async function func(a, b)
{
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (func.count == 6){
                reject(a);
            }
            else if (typeof(a) != "number" || typeof(b) != "number"){
                reject("Введены не числовые значения");
            }
            else{
                console.log("Count:", func.count, "Sum:", a + b)
                func.count++;
                resolve([a + b, b]);
            }
        }, 2000);
    });
}

func.count = 1;
func(1, 2).
then((n) => func(n[0], n[1])).
then((n) => func(n[0], n[1])).
then((n) => func(n[0], n[1])).
then((n) => func(n[0], n[1]))
.catch((rej) => console.log(rej));