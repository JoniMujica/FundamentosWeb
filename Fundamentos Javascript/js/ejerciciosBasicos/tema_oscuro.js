const d = document;
const ls = localStorage;

export default function darkTheme(btn,classDark){

    const $themeBtn = d.querySelector(btn),
    $selectores = d.querySelectorAll("[data-dark]");
    //console.log($selectores);

    let moon = "🌙",
    sun = "☀️"

    const LightMode = () => {
        $selectores.forEach(e=> e.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light");
    }
    const DarkMode = () => {
        $selectores.forEach(e=> e.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme","dark");
    }

    d.addEventListener("click",e=>{
        if (e.target.matches(btn)) {
            //console.log($themeBtn.textContent);
            if ($themeBtn.textContent === moon) {
                DarkMode();
            }else{
               LightMode();
            }
        }
    })
    
    d.addEventListener("DOMContentLoaded", e=>{
        //console.log(ls.getItem("theme"));
        
        if (ls.getItem("theme") === null) ls.setItem("theme","light");
        if (ls.getItem("theme") === "light") LightMode();
        if (ls.getItem("theme") === "dark") DarkMode();
    })
}