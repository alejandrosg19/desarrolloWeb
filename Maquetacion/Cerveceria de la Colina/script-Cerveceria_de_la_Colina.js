/*cambiar de nav responsive al oprimir boton*/
const firs_div_responsive = document.querySelector(".nav-items__responsive-div");
const last_div_responsive = document.querySelector(".nav-items__responsive-div:last-child");

let change_style_first_div = ()=>{
    firs_div_responsive.style.backgroundColor = "#E9E9E9";
    last_div_responsive.style.backgroundColor = "#F5F5F5";
};
let change_style_last_div = ()=>{
    firs_div_responsive.style.backgroundColor = "#F5F5F5";
    last_div_responsive.style.backgroundColor = "#E9E9E9";
};
firs_div_responsive.addEventListener("click", change_style_first_div);
last_div_responsive.addEventListener("click", change_style_last_div);



/*mostrar nav responsive*/
let show_nav_items = ()=>{
    const nav_item = document.querySelector(".nav-items");
    nav_item.style.display = "block";
    change_style_first_div();
}

const nav_responsive = document.querySelector(".nav-responsive a")
nav_responsive.addEventListener("click", show_nav_items);

