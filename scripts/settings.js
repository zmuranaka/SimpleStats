var bodyClasses = document.body.classList;
var theme = localStorage.getItem("theme");
var font = localStorage.getItem("font");
var fontSize = localStorage.getItem("fontSize");

if (!theme)
{
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    {
        localStorage.setItem("theme", "dark");
        theme = "dark";
    }
    else
    {
        localStorage.setItem("theme", "light");
        theme = "light";
    }
}

if (theme === "dark") bodyClasses.toggle("dark-mode");
if (font) document.body.style.fontFamily = `${font}, sans-serif`;
if (fontSize === "Small") bodyClasses.toggle("small-font");
