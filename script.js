/*global $, console */

$(document).ready(function () {
    'use strict';
    var score = 0,
        circleR = 5,
        clickR = 15,
        remaining = true;
    
    $("body").click(function () { // $("html, body")->because some browsers resd html and some read body but                                    not good here because will click twice
        
        if (clickR > 0 && remaining === true) {
            clickR--;
            $("label.clicks-remaining span").text(clickR);
        }
        
        if(circleR > 0 && clickR === 0){
            $("h1.lose").fadeIn(500);
        }
    });
    
    $("div.lvl-1-circle").click(function () {
        score+=2;
        circleR--;
                
        $(this).remove(); //should use hide not fadeOut because .lvl-1 used animate,fade not work with animate
                          //also preferable use remove to remove it from browser dom to prevent problems cashes 
        
        $("label.score span").text(score);
        $("label.circles-remaining span").text(circleR);
        
        if(score === 10){
            $(".lvl-1-win").fadeIn(500);
            clickR--;
            $("label.clicks-remaining span").text(clickR);
            remaining = false;
        }
        
    });
    
    var min = -40,
        max = 120,
        random, random2;
    
    /******************************************
    ************* Level One Start *************
    ******************************************/
    
    function lvlOne(){
        setInterval(function () {
        
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-1-circle:nth-child(1)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 2200);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-1-circle:nth-child(2)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 2200);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-1-circle:nth-child(3)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 2200);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-1-circle:nth-child(4)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 2200);
            
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-1-circle:nth-child(5)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 2200);

        }, 0);
    }
    
    lvlOne();
    
    $(".lvl-1-win span").click(function () {   // moving to level 2
        $(".lvl-1-win").hide();
        $(".lvl-2").fadeIn();
        remaining = true;
        clickR++;
        circleR = 5;
        $("label.circles-remaining span").text(circleR);
        lvlTwo();
    });
    
    /******************************************
    ************* Level One End ***************
    ******************************************/
    
    
    
    
    /******************************************
    ************* Level two Start ***************
    ******************************************/
    
    function lvlTwo(){
        
        $("div.lvl-2-circle").click(function () {
            score+=4;
            circleR--;

            $(this).remove();

            $("label.score span").text(score);
            $("label.circles-remaining span").text(circleR);

            if(score === 30){
                $(".lvl-2-win").fadeIn(500);
                clickR--;
                $("label.clicks-remaining span").text(clickR);
                remaining = false;
            }

        });
        
        setInterval(function () {
        
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-2-circle:nth-child(1)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 1500);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-2-circle:nth-child(2)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 1500);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-2-circle:nth-child(3)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 1500);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-2-circle:nth-child(4)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 1500);
            
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-2-circle:nth-child(5)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 1500);

        }, 0);
    }
    
    $(".lvl-2-win span").click(function () {   // moving to level 2
        $(".lvl-2-win").hide();
        $(".lvl-3").fadeIn();
        remaining = true;
        clickR++;
        circleR = 5;
        $("label.circles-remaining span").text(circleR);
        lvlThree();
    });
    
    /******************************************
    ************* Level two End ***************
    ******************************************/
    
    
    
    /******************************************
    ************* Level three Start ***********
    ******************************************/
    
    function lvlThree(){
        clickR +=10;
        $("div.lvl-3-circle").click(function () {
            score+=6;
            circleR--;

            $(this).remove();

            $("label.score span").text(score);
            $("label.circles-remaining span").text(circleR);

            if(score === 60){
                $(".lvl-3-win").fadeIn(500);
                clickR--;
                $("label.clicks-remaining span").text(clickR);
                remaining = false;
            }

        });
        
        
        setInterval(function () {
        
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-3-circle:nth-child(1)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 8700);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-3-circle:nth-child(2)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 700);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-3-circle:nth-child(3)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 700);

            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-3-circle:nth-child(4)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 700);
            
            random = Math.floor(Math.random() * (max - min + 1) + min);
            random2 = Math.floor(Math.random() * (max - min + 1) + min);

            $("div.lvl-3-circle:nth-child(5)").animate({
                top: random + "%",
                left: random2 + "%"
            }, 700);

        }, 0);
    }
    
    /******************************************
    ************* Level three End ***************
    ******************************************/
   
});










/*
        // syntax
    
    var min = -50,
        max = 100;
    var x = Math.floor(Math.random()*(max - min + 1) + min);
    
    
    //$("div").animate({"left": "300px"}, 1000);
    
    function test() {
        score++;
        $("label.score").text("score: " + score);
    }
    
    var time = setInterval(function () {test()}, 500);
    
    $("button").click(function () {
        clearInterval(time);
    });
    
    */



/*
// notice
** absolute -> take from parent when make top=50px will start from parent
   relative -> when make top=50px will start from the position of the element not parent

** setInterval(func., time)-> الوقت ده اللى هيستناه بين كل مره هيعملها

** inline element like span -> don't accept width and height should be block or inline-block
                            take width and height for element in it only not for it

** if u make position absolute or relative to the element and also make text-align: center 
   should make width: 100% to text-align done correctly
   
****** fadeOut and fadeIn don't work with animate ******** important ************

*/