"use strict";
var theme = localStorage.getItem("theme");

if (theme === null)
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

if (theme === "dark")
{
    document.body.classList.toggle("dark-mode");
}
