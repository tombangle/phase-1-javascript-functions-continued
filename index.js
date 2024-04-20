function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun(`bathe the dog`);

const mondayWork = function (activity = `go to the office`) {
    return (`This Monday, I will ${activity}.`)
}
mondayWork();
mondayWork(`work from home`);


function wrapAdjective(symbol){
    function inner(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    } return inner;
}
const result_star = wrapAdjective(`*`);
const result_pipe = wrapAdjective(`||`);

const emphatic_star = result_star("a hard worker");
const emphatic_pipe = result_pipe("a dedicated programmer");

console.log(emphatic_star);
console.log(emphatic_pipe);