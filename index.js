// Your code here

saturdayFun();

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*'){
    return function(status = 'special'){
        return `You are ${status}`
    }
}

const encouragingPromptFunction = wrapAdjective("!!!")