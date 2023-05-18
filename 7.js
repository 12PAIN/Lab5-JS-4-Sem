
const timeMulti = 1000;
const restTime = 5; 

async function rest(time, name){
    console.log(name + " is resting.");

    return new Promise((resolve)=>{

        setTimeout( ()=>{
            resolve();
        }, time * timeMulti);
        
    });
}

async function startTask(time, name, taskNumber){
    console.log(name + " started the " + taskNumber + " task.");

    return new Promise((resolve)=>{

        setTimeout( ()=>{
            resolve();
        }, time * timeMulti);
        
    });
}

async function taskDefense(time, name, taskNumber){
    console.log(name + " moved on to the defense of the " + taskNumber + " task.");

    return new Promise((resolve)=>{

        setTimeout( ()=>{
            console.log(name + " completed the " + taskNumber + " task.");
            resolve();
        }, time * timeMulti);
        
    });

}

async function startCandidate(candidate){

    let name = candidate[0];
    let firstTaskPrepareTime = candidate[1];
    let firstTaskDefenceTime = candidate[2];
    let secondTaskPrepareTime = candidate[1];
    let secondTaskDefenceTime = candidate[2];
    let restT = restTime;

    await startTask(firstTaskPrepareTime, name, 1);
    await taskDefense(firstTaskDefenceTime, name, 1);
    await rest(restT, name);
    await startTask(secondTaskPrepareTime, name, 2);
    await taskDefense(secondTaskDefenceTime, name, 2);

    return new Promise((resolve)=>{resolve();});
}

async function startInterview(candidates){
    candidates.forEach(candidate => {
        startCandidate(candidate);
    });
}

candidates = [['Ivan', 5, 2, 7, 2], ['John', 3, 4, 5, 1], ['Sophia', 4, 2, 5, 1]];

startInterview(candidates);