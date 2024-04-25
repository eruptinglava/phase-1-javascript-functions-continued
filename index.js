// code your solution here
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`;

const wrapAdjective = (par) => {
  return function (x = "special") {
    return `You are ${par}${x}${par}!`;
  };
};

const encouragingPromptFunction = wrapAdjective("*");