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
        // But early in 2018 I started to look at programming. Why?<br><br>
        // To start with, I used to be a superuser with the internal programs we used
        // at work, and many times started to wonder how the programs were built.
        // I made some research and eventually took the step into the world of programming.
        // <br><br>
        // A goal to become a Software Developer were set and I started to apply for courses, 
        // to get where I am now.
        // <Br><Br>
        // Currently I am a Student who is striving to become better and better within programming. 
        // `
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
    Don't miss out my Github or LinkedIn page, you find it in the top right corner.&#129109;
    <Br><Br>As you saw above on the competence bars, I have some more experience within
    SEO. That experience is gained through another page I have wich is made with Wordpress.
     It is about a Tattoo Artist(my partner).<Br>
    Go and check it out &#10547; <a href="https://beccastattooportfolio.com/">My Wordpress homepage</a>! 
    <Br><Br> 
    `
}