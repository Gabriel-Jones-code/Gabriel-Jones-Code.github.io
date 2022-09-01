$(document).ready(function(){      //this is going to put some of school to the test. I'm a bit rusty on jQuery so This is a process
                                //Basic syntax is $(selector).action().     # selects id and . selects class

    //fade in text
    var div = $(".about");
    var text = $(".text")
    var pos = div.position();

    $(window).scroll(function () {
        var winpos = $(window).scrollTop();
        if (winpos >= (pos.top - 650)) {
            text.addClass("showText");
        }
    });
    //This starts a function when the about portion of the website is ready
    //I started to assign everything to a var to make things a little easier on myself
    //I started by looking for when the user scrolls. When a user does end up scrolling,
    //it'll get the position of the scroll bar. I then started to compare the position to where I want
    //the event to be triggered. After it reaches the point in which I want the text to show up, 
    //jQuery changes the text class to the showText class which now shows the contents of the about
    //section


});

