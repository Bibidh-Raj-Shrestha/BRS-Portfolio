const toggle = document.getElementById("toggle");
const toggle_ball = document.getElementById("toggle-ball");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const navbar = document.getElementById("navbar");

let links = document.querySelectorAll("a");
let headers = document.querySelectorAll("h2");
let parag = document.querySelectorAll("p");
let headers3 = document.querySelectorAll("h3");

let dark =[...links,...headers, ...parag, ...headers3]

toggle.addEventListener("click",()=>
{
    if(toggle_ball.classList.contains("toggle-ball-on"))
    {
        toggle_ball.classList.remove("toggle-ball-on");
        toggle_ball.classList.add("toggle-ball-off");
        toggle.classList.toggle("toggle-on");
        //  document.body.style.backgroundColor="#3f3f3d";
        document.body.classList.toggle("background-on");
        document.body.classList.toggle("background-off");
        sun.style.display = "none";
        moon.style.display = "block";
        navbar.classList.toggle("navbar-on");

        
        dark.forEach(el=>{
            el.style.color="black";
        })
    }
    else{
        toggle_ball.classList.remove("toggle-ball-off");
        toggle_ball.classList.add("toggle-ball-on");
        toggle.classList.toggle("toggle-on");
        // document.body.style.backgroundColor="white";
        document.body.classList.toggle("background-on");
        document.body.classList.toggle("background-off");
        moon.style.display = "none";
        sun.style.display = "block";
        navbar.classList.toggle("navbar-on");


        dark.forEach(el=>{
            el.style.color="black";
        })
    }
    
});