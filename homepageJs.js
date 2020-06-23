window.onload = function() {
    document.getElementById('frontQuote').innerHTML = quoteFrom();
    document.getElementById('abtMe').innerHTML = aboutMe();
    document.getElementById('enjoys').innerHTML = enjoying();
    document.getElementById('foot').innerHTML = footer();
    document.getElementById('bars').innerHTML = competenceFunc();
    document.getElementById('hardSkill').innerHTML = hardSkillFunc();

}

window.onscroll = function(){this.myFunction();}
/*grabbed from wc3*/ 
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

function quoteFrom() {
    return `
   <h1> Welcome to my homepage.<h1>
    <h4>I am currently studying in Linköping to become a software developer.
    This page is made as a project to learn more about Html and Css. With a little bit of Javascript.  </h4> 
    <h1>Philip Abrahamsson<Br> <i>Aspiring software developer<i></h1><Br>`
}

function aboutMe() {
    return `<h2>Aspiring software developer!</h2>
    I have been working within the Graphical business for about ten years, 
    as a printmaker. But today I am aiming to become something else.<Br>

    In August 2019 I finally became a student to become a Software Developer, one step 
    closer to reaching my goal.<Br><Br> 

    I like doing projects as in this homepage, but also in other coding languages.
    So to become even better and increase my understanding of html and css i made this homepage.
    More code projects can be found on my GitHub link in the upper right corner.  <Br><Br>
    Currently i'm working with a new Wordpress homepage with a friend, where i fix the style with
    css. And some minor functions with php. <Br>
    I am also working on a solo project with Xamarin and C#. Just to learn some more about how to consume API's. For fun
    it also includes a game.
    It will be up soon on Github.
     <Br><Br> Another old project I have is to help my partner
    with her company. So to help her I made a <a href="https://beccastattooportfolio.com/">homepage</a> with Wordpress and took a small course
    about SEO(search engine optimization).<Br><Br>
    Well that is a little bit about my projects.

    `
}

function enjoying() {
    return `<h2>When not practicing code</h2>
    I do love food, my favorite dish is not just one, but many! 
    From a bowl of ramen to a box with pizza. Sadly I am not the best chef, but I 
    sure make one hell of a good sushi.<Br><Br> 

    Going outside for a hike, even just a daytrip is
    something that I've started to enjoy more and more. Find a nice place, boil some water, drink
    some nice tea or coffe and make some food over the fire. That is relaxing.<Br><Br>

    Working out, as in going to the gym is also something I enjoy very much. To hit the gym and lift some
    weights, listen to some nice music, just makes you feel good. <Br><Br>

    Gaming is something I have done since the 8bit Nintendo. Nowadays I use the Ps4, but mostly
    I am at the PC.<Br><Br><Br><Br>
        `
}


function footer() {
    return `<h2>Thanks for checking out my page</h2><Br>
    Chek out my Github or LinkedIn page, you find it in the top right corner.&#129109;
    <Br><Br>
     
    Dont miss my Wordpress page &#10547; <a href="https://beccastattooportfolio.com/">My Wordpress homepage</a>! 
    <Br>
    `
}
var count = new Array();

function animateBar(){
    var showInfo = document.getElementById("bars").querySelectorAll(".Competence");
    var y = window.scrollY;
    console.log(y);
    
        //childNode.style.width = "80%";
}

//var showInfo = document.getElementById("info");
var count = new Array();

function competenceFunc(){
  return `<h2>Skills<h2>
  <h4><center>I am determined to become a software developer.<center><h4>`

}
function hardSkillFunc(){
    return`dsadsa`;
}

function NormalBar(bar){
   
    // showInfo.style.boxShadow = "0px 0px 0px 0px";
    // showInfo.style.color = "#6A9955";
    // showInfo.style.backgroundColor = "#1E1E1E";
 
    //     count.push(bar.classList);
    //     if(count.length > 8) showInfo.innerHTML = `Thank you for taking your time to read!<Br><Br> You just checked<Br> <b>${bar.classList}</b> bar.`;
    //     else showInfo.innerHTML = `↑Hoover over level bars above for information.<Br><Br>←Hoover over any competence bar for information.<Br><Br> You just checked<Br> <b>${bar.classList}</b> bar.`;
    // console.log(count.length);
  
}
/**This function creates new elements.
 * Elements are styled from the class "Boxes".
 * Each element are appended as childs to the "one"
 * element. 
 */
var stopRamen = true;
function getMoreBoxes() {
    deleteAll();
    if(!stopRamen){return stopRamen=true;}
    else if(stopRamen)
    {
        stopRamen=false;
        var move = 150;
        var score = 0;
        var myBoxWithBoxes = new Array();
        for (i = 0; i < 10; i++) {
            move += 50;
            let box = document.createElement("div");
            box.className = "Boxes";
            box.id = "clones";
            box.innerHTML = "&#127836;";
            box.style.fontSize = "50px"
            
            move += Math.random() * 60;
            box.style.left = move + 'px';
            myBoxWithBoxes.push(box);
            console.log(myBoxWithBoxes)
        }
        for (boxes in myBoxWithBoxes) {
            console.log(boxes);
            console.log(myBoxWithBoxes.length);
            let name = myBoxWithBoxes[boxes].id = `clone${boxes}`;
            document.getElementById("ramen").appendChild(myBoxWithBoxes[boxes]);
            console.log(myBoxWithBoxes[boxes]);
            console.log("is this the name ?" + name);
            moveBox(name);
        }
    }
}
/**This function is used to move elements.
 * It will go on forever.
 */
function moveBox(box) {
    let boxPosition = 1;
    var theBox = document.getElementById(box);
    setInterval(moveFrame, Math.random() * 15);

    function moveFrame() {
        if (boxPosition == 820) {
            boxPosition = 1;
        } else {
            boxPosition++;
            theBox.style.top = boxPosition + 'px';
        }
    }
}
/**This function is used to delete elements.
 * In this case it deletes all the cloned elements 
 * creted for getMoreBoxes() function.
 */
function deleteAll() {
    for (i = 0; i < 10; i++) {
        var myElements = document.getElementById(`clone${i}`);
        console.log(`clone${i}`)
        if (myElements != null) {
            myElements.remove();
        }
    }
}
