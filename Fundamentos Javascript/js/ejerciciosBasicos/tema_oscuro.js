const d = document;

export default function darkTheme(btn,classDark){

    const $themeBtn = d.querySelector(btn),
    $selectores = d.querySelectorAll("[data-dark]");
    console.log($selectores);

    let moon = "🌙",
    sun = "☀️"

    d.addEventListener("click",e=>{
        if (e.target.matches(btn)) {
            console.log($themeBtn.textContent);
            if ($themeBtn.textContent === moon) {
                $selectores.forEach(e=> e.classList.add(classDark));
                $themeBtn.textContent = sun;
            }else{
                $selectores.forEach(e=> e.classList.remove(classDark));
                $themeBtn.textContent = moon;
            }
        }
    })
    
}