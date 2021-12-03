function switchColorScheme()
{
    bodyClasses.toggle("dark-mode");
    if (bodyClasses.contains("dark-mode"))
    {
        localStorage.setItem("theme", "dark");
        return "dark";
    }

    localStorage.setItem("theme", "light");
    return "light";
}
