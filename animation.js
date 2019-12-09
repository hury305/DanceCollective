function addCircle() {
    for (i = 0; i < 10; i++) {                                  //run the function 10 times
        var div = document.createElement("div");                //create an element named "div"
        div.classList.add("circle");                            //add class "circle" to "div"
        div.style.left = Math.random() * 800 + "px";            //randomize left margin
        div.style.top = Math.random() * 400 + "px";             //randomize right margin
        div.style.width = Math.random() * 1000 + "px";          //randomize width
        div.style.height = div.style.width;                     //make height the same as randomized width                                        //display "i" on console
        var bg = document.getElementById("bg");                 //get "bg" and assign to "bg"
        bg.appendChild(div);                                    //attach "div" to "bg"
        div.classList.add("resize");                            //add animation to "div"
    }
}

function stopCircle(){
    var circle = document.getElementsByClassName('circle');     //create element "circle" and assign class "circle"
    for (i = 0; i < circle.length; i++){                        //run function as many times as the number of circles
        console.log(circle[i]);                                 //log the assigned numbers of the circles
        circle[i].classList.add("pause");                       //add the "pause" animation to each circle
    }
    console.log('circle', circle );
}

function resumeCircle(){
    var circle = document.getElementsByClassName('circle');
    for (i = 0; i < circle.length; i++){
        console.log(circle[i]);
        circle[i].classList.remove("pause");                    //remove the "pause" animation and therefore make the "resize" animation resume
    }
    console.log('circle', circle );
}

var item = document.getElementsByClassName('item');
var title = document.getElementById('title');

for (var i = 0; i < item.length; i++) {                         //run the function as many times as the number of items
    item[i].addEventListener('mouseover', stopCircle);          //stop the animation when hovering each menu item
    item[i].addEventListener('mouseout', resumeCircle);         //resume the animation when cursor leaves
    title.addEventListener('mouseover', stopCircle);            //stop the animation when hovering title
    title.addEventListener('mouseout', resumeCircle);           //resume the animation when cursor leaves
}

addCircle();

var news = document.getElementsByClassName("news");

for (i = 0; i < news.length; i++) {                             //run the function as many times as the number of news items
  news[i].addEventListener("click", function() {                //run the function when each news item is clicked
    var content = this.nextElementSibling;                      //assing the following element as "content"
    if (content.style.display === "block") {                    //if content's display propert is block, then change to none
      content.style.display = "none";
    }
    else {                                                      //if not, change to block
      content.style.display = "block";
    }
  });
}
