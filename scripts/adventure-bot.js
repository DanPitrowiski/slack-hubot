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
  options: "Option1",
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
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },200);
      setTimeout(function(){
        msg.send(story.options);
      },400);
      setTimeout(function(){
        msg.send("Write to @redbot which option you choose. Go back a step with `back` or start over with `reset`");
      },600);
    });

    robot.respond(/back/i, function(msg) {
      historySkip = 1;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },200);
      setTimeout(function(){
        msg.send(story.options);
      },400);
    });

    robot.respond(/1/i, function(msg) {
      whereAmI = whereAmI + .1;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },200);
      setTimeout(function(){
        msg.send(story.options);
      },400);
    });

    robot.respond(/2/i, function(msg) {
      whereAmI = whereAmI + .2;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },200);
      setTimeout(function(){
        msg.send(story.options);
      },400);
    });

    robot.respond(/3/i, function(msg) {
      whereAmI = whereAmI + .3;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },200);
      setTimeout(function(){
        msg.send(story.options);
      },400);
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
      story.options = ">*1* - Keep listening\n>*2* - Turn the TV off";
      story.image = "https://i.ytimg.com/vi/-6uUruopJ7Y/maxresdefault.jpg";
      whereAmI = 2;
      return;
    }
    if (whereAmI === 2.1){
        story.maintext = "*The woman continues talking about the virus: 'Researchers have found that the only way to kill a zombie is by destroying the brain, were the virus lives' Hmm... You don't have a weapon, and this sounds serious...*";
        story.options = ">*1* - Check the break room for something\n>*2* - Head back into the store and see what other people know";
        story.image = "https://media.giphy.com/media/9DFSyoxNE3nJS/giphy.gif";
        whereAmI = 3;
        return;
    }
    if (whereAmI === 2.2){
        story.maintext = "*You think to yourself this is insane. What is really going on?*";
        story.options = ">*1* - Go back work\n>*2* - Keep eating, you need more time";
        whereAmI = 4;
        story.image = "https://media.giphy.com/media/3KCOFfdqmptLi/giphy.gif";
        return;
    }
    if (whereAmI === 3.1 ){
        story.maintext = "*You look around the break room. There are plastic knives and forks. Nothing you could use as a weapon.*";
        story.options = ">*1* - Go back work\n>*2* - Call your Mom, she might know something";
        whereAmI = 5;
        story.image = "https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif"
        return;
    }

    if (whereAmI === 4.1 || whereAmI === 3.2 || whereAmI === 5.1){
        story.maintext = "*You go back into the office supplies store you work at. Joane is at the cash register looking bored AF. Your manager Brad has a clipboard. He is looking at you, checking his watch, and writing something down.*";
        story.options = ">*1* - Ask Brad about zombies\n>*2* - Ask Joanna about zombies\n>*3* - Call your Mom";
        whereAmI = 6;
        story.image = "http://www.digitalfllad.com/wp-content/uploads/2014/10/staples_02.jpg";
        return;
    }
    if (whereAmI === 4.2){
        story.maintext = "*You eat the rest of your lunch and then start on Brad's. He'll never know. You fall asleep after your two meals... You wake up to Brad storming into the kitchen!*";
        story.options = ">*1* - Attack zombie Brad\n>*2* - Attack Brad your boss\n>*2* - Run away";
        whereAmI = 7;
        story.image = "https://www.photopinups.org/wp-content/uploads/2013/06/must_resist.jpg";
        return;
    }
}
