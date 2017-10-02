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
  image: "",
};

module.exports = function(robot) {

    robot.respond(/start over|reset/i, function(msg) {
      whereAmI = 1;
      history = [1];
      msg.send("Back to the beginning. Ask Adventure Bot to 'start' to try again)");
    });

    robot.respond(/start/i, function(msg) {
      loadStory();
      msg.send(story.maintext);
      setTimeout(function(){},300);
      msg.send(story.option1);
      setTimeout(function(){},300);
      if(story.options > 1){msg.send(story.option2)};
      setTimeout(function(){},300);
      if(story.options > 2){msg.send(story.option3)};
      setTimeout(function(){},300);
      msg.send(story.image);
    });

    robot.respond(/back/i, function(msg) {
      historySkip = 1;
      loadStory();
      msg.send(story.maintext);
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.image);
    });

    robot.respond(/1/i, function(msg) {
      whereAmI = whereAmI + .1;
      loadStory();
      msg.send(story.maintext);
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.image);
    });

    robot.respond(/2/i, function(msg) {
      whereAmI = whereAmI + .2;
      loadStory();
      msg.send(story.maintext);
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.image);
    });

    robot.respond(/3/i, function(msg) {
      whereAmI = whereAmI + .3;
      loadStory();
      msg.send(story.maintext);
      msg.send(story.option1);
      if(story.options > 1){msg.send(story.option2)};
      if(story.options > 2){msg.send(story.option3)};
      msg.send(story.image);
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
      story.maintext = "*You are in the break room at work listening to the TV. Suddenly a news flash comes on and some woman is babbling about a zombie virus.*";
      story.option1 = "`(1) Keep listening`";
      story.option2 = "`(2) Turn the TV off`";
      story.option3 = "Write to @redbot which option you chose. Go back a step with `back` or start over with `reset`";
      story.options = 3;
      story.image = "https://media.giphy.com/media/3xz2BuuYbARSNcBBsI/giphy.gif";
      whereAmI = 2;
    }
    if (whereAmI === 2.1){
        story.maintext = "*The woman continues talking about the virus: 'Researchers have found that the only way to kill a zombie is by destroying the brain, were the virus lives' Hmm... You don't have a weapon, and this sounds serious...*";
        story.option1 = "`(1) Check the break room for something`";
        story.option2 = "`(2) Head back into the store and see what other people know`";
        story.options = 2;
        story.image = "https://media.giphy.com/media/9DFSyoxNE3nJS/giphy.gif";
        whereAmI = 3;
    }
    if (whereAmI === 2.2){
        story.maintext = "*You think to yourself this is insane. What is really going on?*";
        story.option1 = "`(1) Go back work`";
        story.option2 = "`(2) Keep eating, you need more time`";
        story.options = 2;
        whereAmI = 4;
        story.image = "https://media.giphy.com/media/3KCOFfdqmptLi/giphy.gif";
    }
    if (whereAmI === 3.1 ){
        story.maintext = "*You look around the break room. There are plastic knives and forks. Nothing you could use as a weapon.*";
        story.option1 = "`(1) Go back work`";
        story.option2 = "`(2) Call your Mom, she might know something`";
        story.options = 2;
        whereAmI = 5;
        story.image = "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif";
    }

    if (whereAmI === 4.1 || whereAmI === 3.2 || whereAmI === 5.1){
        story.maintext = "*You go back into the office supplies store you work at. Joane is at the cash register looking bored AF. Your manager Brad has a clipboard. He is looking at you, checking his watch, and writing something down.*";
        story.option1 = "`(1) Ask Brad about zombies`";
        story.option2 = "`(2) Ask Joanna about zombies`";
        story.option3 = "`(3) Call your Mom`";
        story.options = 3;
        whereAmI = 6;
        story.image = "https://media.giphy.com/media/yoJC2qNujv3gJWP504/giphy.gif";
    }
    if (whereAmI === 4.2){
        story.maintext = "*You eat the rest of your lunch and then start on Brad's. He'll never know. You fall asleep after your two meals... You wake up to Brad storming into the kitchen!*";
        story.option1 = "`(1) Attack zombie Brad`";
        story.option2 = "`(2) Attack Brad your boss`";
        story.option3 = "`(3) Run away`";
        story.options = 3;
        whereAmI = 7;
        story.image = "https://media.giphy.com/media/po1HNtTPPrx5e/giphy.gif";
    }
}
