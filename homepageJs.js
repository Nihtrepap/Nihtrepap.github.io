window.onload = function() {
    document.getElementById('frontQuote').innerHTML = QuoteFrom();
    document.getElementById('abtMe').innerHTML = AboutMe();
    document.getElementById('enjoys').innerHTML = Enjoying()
    document.getElementById('foot').innerHTML = Footer()

}

function QuoteFrom() {
    return `<h4>
    Took this picture in 2018 enjoying an Irish coffee while trying to understand the C# language. It was
    at the very start of my journey to become a Software Developer.</h4><Br> 
    <h1>Philip Abrahamsson<Br> <i>Aspiring Software Developer<i></h1>`
}

function AboutMe() {
    return `<h2>Aspiring Software Developer!</h2>
    I have been working within the Graphical business for about ten years, 
    as a printmaker. But today I am aiming to become something else.

    Since early in 2018 I have taken courses to reach my new life goal.
    In August 2019 I finally became a student to become a Software Developer, one step 
    closer to reaching my goal.<Br><Br> 

    I like doing small projects as in this homepage, but also in other coding languages.
    So to become even better and increase my understanding of html and css i made this homepage project.
    More code projects can be found on my GitHub link in the upper right corner.  <Br><Br>
    Projects not including any coding happens as well. For example, we just made a huge renovation 
    project at our home, fixing floors, ceiling and walls.
    As a Substitute in our housing society I hold an ongoing project to implement fibre 
    into the two houses of our society. <Br><Br> Another side project I have is to help my partner
    with her company. So to help her I made a homepage with Wordpress and took a small course
    about SEO(search engine optimization).More about that later on the page.<Br><Br>
    Well that is a little bit about my projects. Up next is my competence level.

    `
}

function Enjoying() {
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
    I am at the PC. (PCM)<Br><Br><Br><Br>
        `
}

function Footer() {
    return `<h2>Thanks for checking out my page</h2><Br>
    Chek out my Github or LinkedIn page, you find it in the top right corner.&#129109;
    <Br><Br>
     
    Dont miss my Wordpress page &#10547; <a href="https://beccastattooportfolio.com/">My Wordpress homepage</a>! 
    <Br><Br> 
    `
}

// function AnimateBar(bar){
//     bar.style.width = "55%"; In progress
//     console.log("scrolling");
// }

var showInfo = document.getElementById("info");
var count = new Array();

function ExplainBar(bar){

   // showInfo.style.backgroundImage = "url(pics/testCode.png)";
    showInfo.style.backgroundColor = "#1E1E1E";
    showInfo.style.color = "#CE9178";
    if(bar.classList.contains("CSharp")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "I do enjoy writing in C#. One goal is to become an expert.<Br> The whole .net world is very interesting.<Br> A Long road awaits.";}
    else if(bar.classList.contains("Python")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "I like Python and would really like to call myself competent of it one day. The struggle with the indentations are something else.";}
    else if(bar.classList.contains("Html")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "Html is something i like to learn more about. Thats why im coding this right now.";}
    else if(bar.classList.contains("Css")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "Same here as with the Html language.";}
    else if(bar.classList.contains("Js")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "Have not used this as much as I would like to. Even thought this right here is made by it.";}
    else if(bar.classList.contains("Xaml")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "This reminds me of Html.<Br> I have used it while coding UWP and Xamarin applications. I like it!";}
    else if(bar.classList.contains("Git")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "I try to use Git as much as I can. Even in my own small projects. Such a great tool. Mostly used with GitHub.";}
    else if(bar.classList.contains("Vs")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE";showInfo.innerHTML = "Visual Studio and Visual Studio Code are the compilers i use.";}
    else if(bar.classList.contains("Wp")){showInfo.style.boxShadow = "2px 2px 5px 2px #CE9178";showInfo.innerHTML = "Using Wordpress for a tattoo artist(my girlfriend). Link to that page at the bottom of this page.";}
    else if(bar.classList.contains("Seo")){showInfo.style.boxShadow = "2px 2px 5px 2px #CE9178";showInfo.innerHTML = "Took a short education about search engine optimisation.<Br> Used that knowledge on the Wordpress page. ";}
    else if(bar.classList.contains("Novice")){showInfo.style.boxShadow = "2px 2px 5px 2px #9CDCFE"; showInfo.style.color = "#9CDCFE"; showInfo.innerHTML = "This level is set after experience from coding at home and school. No workplace exeperience yet.";}
    else if(bar.classList.contains("AdvBeg")){showInfo.style.boxShadow = "2px 2px 5px 2px #CE9178"; showInfo.style.color = "#CE9178"; showInfo.innerHTML = `This level is set after how much workplace experience gained.<Br> Or how much "real life" experience gained.`;}
    else if(bar.classList.contains("Comp")){showInfo.style.boxShadow = "2px 2px 5px 2px #D7BA7D"; showInfo.style.color = "#D7BA7D"; showInfo.innerHTML = `This level is also set after how much workplace experience gained. But within this level atleast 2 years of experience. Combined with personal projects.`;}
    else if(bar.classList.contains("Expert")){showInfo.style.boxShadow = "2px 2px 5px 2px #6A9955"; showInfo.style.color = "#6A9955"; showInfo.innerHTML = `This level is also set after how much workplace experience gained. But within this level atleast 5+ years of experience. Combined with personal projects.`;}

    console.log(bar.style.backgroundColor);

}

function NormalBar(bar){
   
    showInfo.style.boxShadow = "0px 0px 0px 0px";
    showInfo.style.color = "#6A9955";
    showInfo.style.backgroundColor = "#1E1E1E";
 
        count.push(bar.classList);
        if(count.length > 8) showInfo.innerHTML = `Thank you for taking your time to read!<Br><Br> You just checked<Br> <b>${bar.classList}</b> bar.`;
        else showInfo.innerHTML = `↑Hoover over level bars above for information.<Br><Br>←Hoover over any competence bar for information.<Br><Br> You just checked<Br> <b>${bar.classList}</b> bar.`;
    console.log(count.length);
  
}