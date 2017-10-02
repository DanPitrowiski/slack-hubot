// Description:
// A short adventure with no ending.
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
      msg.send("Back to the beginning. Ask Redbot to `start` to try again)");
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
      },300);
      setTimeout(function(){
        msg.send(story.options);
      },600);
    });

    robot.respond(/1/i, function(msg) {
      whereAmI = whereAmI + .1;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },300);
      setTimeout(function(){
        msg.send(story.options);
      },600);
    });

    robot.respond(/2/i, function(msg) {
      whereAmI = whereAmI + .2;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },300);
      setTimeout(function(){
        msg.send(story.options);
      },600);
    });

    robot.respond(/3/i, function(msg) {
      whereAmI = whereAmI + .3;
      loadStory();
      msg.send(story.image);
      setTimeout(function(){
        msg.send(story.maintext);
      },300);
      setTimeout(function(){
        msg.send(story.options);
      },600);
    });

};


function setHistory(){
  if (historySkip === 0){
    steps++;
    history[steps] = whereAmI;
  } else {
    steps > 0 ? steps-- : "";
    whereAmI = history[steps];
  }
  historySkip = 0;
}

function loadStory(){
  setHistory();

  if (whereAmI === 1){
      story.maintext = "*You are in the break room at work listening to the TV. Suddenly a news flash comes on and some man is babbling about a zombie virus.*";
      story.options = ">*1* - Keep listening\n>*2* - Turn the TV off";
      story.image = "https://i.ytimg.com/vi/-6uUruopJ7Y/maxresdefault.jpg";
      whereAmI = 2;
      return;
    }

    if (whereAmI === 2.1){
        story.maintext = "*The man continues talking about the virus: 'Researchers have found that the only way to kill a zombie is by destroying the brain, were the virus lives' Hmm... You don't have a weapon, and this sounds serious...*";
        story.options = ">*1* - Check the break room for something\n>*2* - Head back into the store and see what other people know";
        story.image = "http://assets.nydailynews.com/polopoly_fs/1.2936083.1483639046!/img/httpImage/image.jpg_gen/derivatives/article_750/lvzombies6n-1-web.jpg";
        whereAmI = 3;
        return;
    }

    if (whereAmI === 2.2){
        story.maintext = "*You think to yourself this is insane. What is really going on?*";
        story.options = ">*1* - Go back to work\n>*2* - Keep eating, you need more time";
        story.image = "http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/thinking-face.png";
        whereAmI = 4;
        return;
    }

    if (whereAmI === 3.1 ){
        story.maintext = "*You look around the break room. There are plastic knives and forks. Nothing you could use as a weapon.*";
        story.options = ">*1* - Go back to work\n>*2* - Call your Mom, she might know something";
        story.image = "http://i.cdn.turner.com/adultswim/big/video/sneak-peek-pickle-rick/promo_RickMorty_303_Sun_35_forSocialV2.jpg";
        whereAmI = 5;
        return;
    }

    if (whereAmI === 4.1 || whereAmI === 3.2 || whereAmI === 5.1 ||whereAmI === 13.1){
        story.maintext = "*You go back into the Office Awesome store you work at. Joane is at the cash register looking bored AF. Your manager Brad has a clipboard. He is looking at you, checking his watch, and writing something down.*";
        story.options = ">*1* - Talk to them about the news\n>*2* - Call your Mom";
        story.image = "http://www.digitalfllad.com/wp-content/uploads/2014/10/staples_02.jpg";
        whereAmI = 6;
        return;
    }

    if (whereAmI === 6.1){
        story.maintext = "*'Brad! Joane! You won't believe what I just saw on the news!' Just then, a shambling man with blood all over his face and shirt, enters through the sliding doors and is headed towards Brad.*";
        story.options = ">*1* - Yell for Brad to get away\n>*2* - Brads a goner! Save Joane!";
        story.image = "http://barrelstrengthconsulting.com/wp-content/uploads/2013/09/Shaun-of-the-Dead.jpg";
        whereAmI = 7;
        return;
    }
    if (whereAmI === 6.2){
        story.maintext = "*You call your Mom. Her phone is busy. Weird... Her cellphone is never busy.*";
        story.options = ">*1* - Go back to work";
        story.image = "http://bit.ly/2wu7PTQ";
        whereAmI = 13;
        return;
    }

    if (whereAmI === 4.2){
        story.maintext = "*You eat the rest of your lunch and then start on Brad's. He'll never know. You fall asleep after your two meals... You wake up to Joane storming into the kitchen!*";
        story.options = ">*1* - Attack zombie Joane\n>*2* - Attack Joane your crush";
        story.image = "https://www.photopinups.org/wp-content/uploads/2013/06/must_resist.jpg";
        whereAmI = 8;
        return;
    }

    if (whereAmI === 8.1 || whereAmI === 8.2){
        story.maintext = "*You pick up whats left of your sandwhich and smack her across the face with it. She stumbles back, whipes the mustard out of her eyes, and looks at you. 'Brad is dead! Someone bit him!*";
        story.options = ">*1* - Explain to her whats happening";
        story.image = "https://img00.deviantart.net/1a83/i/2012/256/6/6/sandwich_slap_by_jackeyfaber-d5elt52.jpg";
        whereAmI = 14;
        return;
    }

    if (whereAmI === 7.1){
        story.maintext = "*'Brad get away from him! He's a zombie - I saw it on the news!' Brad turns to you and shakes his head 'Don't test me! Youre already on thin ice. Go help this custom...' The zombie is already on top of Brad and grabbing him.*";
        story.options = ">*1* - Go help Brad\n>*2* - Let the zombie attack Brad to convince Joane";
        story.image = "https://i.imgflip.com/71sme.jpg";
        whereAmI = 9;
        return;
    }

    if (whereAmI === 7.2){
        story.maintext = "*Brad yells as you sprint across the room, 'Stop acting crazy! Go help this customer!'. You reach Joane, 'Come with me! We're getting out of here'. Joana looks at you quizzically, 'What are you talking about?' You glance over and see the zombie man is almost on top of Brad now.*";
        story.options = ">*1* - Go help Brad\n>*2* - Let the zombie attack Brad to convince Joane";
        story.image = "https://i.pinimg.com/originals/6f/c7/b7/6fc7b71fd2122c91099ef004d9004f55.jpg";
        whereAmI = 10;
        return;
    }

    if (whereAmI === 9.1 || whereAmI === 10.1){
        story.maintext = "*You run over to Brad. But it's too late. The zombie man locks his jaw around Brad's shoulder. He starts to tare off a chunk. Joanne is screaming behind you.*";
        story.options = ">*1* - Escape with Joanna";
        story.image = "http://www.shockya.com/news/wp-content/uploads/walking-dead-season-3-zombie-bites-glen.jpg";
        whereAmI = 11;
        return;
    }

    if (whereAmI === 9.2 || whereAmI === 10.2 || whereAmI === 11.1){
        story.maintext = "*Joane is convinced. She is screaming louder than you've ever heard anyone before. You run to her, grab her hand, and start to bring her to the back of the store. You hear the sliding door open again as you run. You turn to see a whole zound of old Office Awesome customers coming into the store. All as dead as the last. You need to get somewhere safe!*";
        story.options = ">*1* - Run to the break room\n>*2* - Run to the supply room";
        story.image = "http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_image/public/maud-adams-bond-girl.jpg";
        whereAmI = 12;
        return;
    }

    if (whereAmI === 14.1){
        story.maintext = "*You reach the break room and slam the door. You turn to Joane and try to explain whats happening. 'Joane I saw something on the news. They said their are zombies out there. I thought they were making it up. But it's real. We need to barricade this door!'*";
        story.options = ">*1* - Barricade the door ";
        story.image = "http://www.campussafetymagazine.com/wp-content/uploads/2013/02/L-HCDE6.jpg";
        whereAmI = 16;
        return;
    }

    if (whereAmI === 14.1){
        story.maintext = "*'Joane I saw something on the news. They said their are zombies out there. I thought they were making it up. But it's real. We need to barricade this door!'*";
        story.options = ">*1* - Barricade the door ";
        story.image = "http://www.campussafetymagazine.com/wp-content/uploads/2013/02/L-HCDE6.jpg";
        whereAmI = 15;
        return;
    }

    if (whereAmI === 15.1 || whereAmI === 16.1){
        story.maintext = "*You grab the lunch room couch and push it in front of the door. Just as you do the door pushes open and into the couch. It's Brad! He still alive! He's holding the wound on his shoulder and trying to get in. You can see a group of zombies behind him. Maybe only a few seconds away*";
        story.options = ">*1* - Let Brad in\n>*2* - Shut the door on Brad\n>*3* - Find a weapon to defend yourself, you can't stop them from getting in";
        story.image = "http://cdn.ientry.com/sites/webpronews/article_pics/zombiedoor.jpg";
        whereAmI = 17;
        return;
    }

    if (whereAmI === 17.1){
        story.maintext = "*You let go of the door and pull the couch back. Brad rushes in as fast as he can and stumbles to the ground. You quickly push the couch again into the door and try to close it. A hand makes into into the doorway before it can close. Followed by another hand. And an arm.*";
        story.options = ">*1* - Ask Joane and Brad to help you hold the door\n>*2* - Find a weapon to defend yourself, you can't stop them from getting in";
        story.image = "http://cdn.ientry.com/sites/webpronews/article_pics/zombiedoor.jpg";
        whereAmI = 18;
        return;
    }

    if (whereAmI === 17.2){
        story.maintext = "*You push as hard as you can but Brad is too strong. He forces himself in. Barely squeezing through. But the blood he's soaked in helps him squeeze. He falls through past the couch and colapses on the ground*";
        story.options = ">*1* - Look for another way out\n>*2* - Ask Joane and Brad to help you hold the door\n>*3* - Find a weapon to defend yourself, you can't stop them from getting in";
        story.image = "http://cdn.ientry.com/sites/webpronews/article_pics/zombiedoor.jpg";
        whereAmI = 19;
        return;
    }

    if (whereAmI === 17.3){
        story.maintext = "*You let go of the door. Brad pushes the couch back and rushes in. He can barely hold himself up. Brad stumbles and falls to the ground. You looks around the break room for a weapon. It's all plastic knives and forks. There are medal chairs though!*";
        story.options = ">*1* - Grab a chair!\n>*2* - Look for another way out";
        story.image = "http://zombierightscampaign.org/images/misc/capcomzombiecook.png";
        whereAmI = 20;
        return;
    }

    else {
        whereAmI = Math.floor(whereAmI);
        story.maintext = "_You've either hit the end of the story or that option doesn't exist_";
        story.options = "";
        steps > 0 ? steps-- : "";
        story.image = "";
        return;
    }
}
