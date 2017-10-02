// Description:
// A short adventure if I can 
//
// Author:
// danpitrowiski
//

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/

var whereAmI = 1;
var history = [1];
var historySkip = 0;
var steps = -1;
var story = {
  maintext: "Test",
  option1: "Option1",
  option2: "Option2",
  option3: "Option3",
  options: 3,
};

module.exports = function(robot) {

    robot.respond(/start over|reset/i, function(msg) {
      whereAmI = 1;
      history = [1];
      msg.send("Back to the beginning. Ask Adventure Bot to 'start' to try again)");
    });

    robot.respond(/start/i, function(msg) {
      loadStory();
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.maintext);
      msg.send(whereAmI);
    });

    robot.respond(/back/i, function(msg) {
      historySkip = 1;
      loadStory();
      for (i=0; i < steps; i++){
        msg.send("Where am I?" + history[i]);
      };
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.maintext);
    });

    robot.respond(/1/i, function(msg) {
      whereAmI = whereAmI + .1;
      loadStory();
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.maintext);
    });

    robot.respond(/2/i, function(msg) {
      whereAmI = whereAmI + .2;
      loadStory();
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.maintext);
    });

    robot.respond(/3/i, function(msg) {
      whereAmI = whereAmI + .3;
      loadStory();
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.maintext);
    });

};


function setHistory(){
  if (historySkip === 0){
    steps++;
    history[steps] = whereAmI;
  } else {
    steps > 0 ? steps-- : "";
    whereAmI = history[steps]
  }
  historySkip = 0;
}

function loadStory(){
  setHistory();

  if (whereAmI === 1){
      story.maintext = "You are in the break room at work listening to the TV. Suddenly a news flash comes on and some woman is babbling about a zombie virus.";
      story.option1 = "(1) Keep listening";
      story.option2 = "(2) Turn the TV off";
      story.option3 = "Write to @adventure-bot which option you choose. Write 'back' to return to the previous step.";
      story.options = 3;
      whereAmI = 2;
    }
    if (whereAmI === 2.1){
        story.maintext = "The woman continues talking about the virus: 'Researchers have found that the only way to kill a zombie is by destroying the brain, were the virus lives' Hmm... You don't have a weapon, and this sounds serious...";
        story.option1 = "(1) Check the break room for something";
        story.option2 = "(2) Head back into the store and see what other people know";
        story.options = 2;
        whereAmI = 3;
    }
    if (whereAmI === 2.2){
        story.maintext = "You think to yourself this is insane. What is really going on?";
        story.option1 = "(1) Go back work";
        story.option2 = "(2) Keep eating, you need more time";
        story.options = 2;
        whereAmI = 4;
    }
    if (whereAmI === 3.1 ){
        story.maintext = "You look around the break room. There are plastic knives and forks. Nothing you could use as a weapon.";
        story.option1 = "(1) Go back work";
        story.option2 = "(2) Call your Mom, she might know something";
        story.options = 2;
        whereAmI = 5;
    }

    if (whereAmI === 4.1 || whereAmI === 3.2 || whereAmI === 5.1){
        story.maintext = "You go back into the office supplies store you work at. Joane is at the cash register looking bored AF. Your manager Brad has a clipboard. He is looking at you, checking his watch, and writing something down.";
        story.option1 = "(1) Ask Brad about zombies";
        story.option2 = "(2) Ask Joanna about zombies";
        story.option3 = "(3) Call your Mom";
        story.options = 3;
        whereAmI = 6;
    }
}
