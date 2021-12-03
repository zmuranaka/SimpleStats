var calculateBtn = document.querySelector("button.btn.btn-primary.mt-3");
var calculateResultsFig = document.querySelector("figure.border.h-100.w-100");
var calculateResultsCaption = document.querySelector("figure.border.h-100.w-100 figcaption");
google.charts.load('current', {'packages':['corechart']});
var graph = null;

function greatestCommonDenominator(num1, num2)
{
    if (num2 > num1)
    {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    while (true)
    {
        if (!num2) return num1;
        num1 %= num2;
        if (!num1) return num2;
        num2 %= num1;
    }
}

function combination(n, r)
{
    if (n <= 0 || r <= 0 || n <= r) return 1;
    if (n - r < r) r = n - r;
    let top = 1;
    let bottom = 1;
    while (r)
    {
        top *= n;
        bottom *= r;

        let gcd = greatestCommonDenominator(top, bottom);

        if (gcd > 1)
        {
            top /= gcd;
            bottom /= gcd;
        }

        n--;
        r--;
    }
    return top / bottom;
}

function drawGraph(hAxisMin, hAxisTitle, arr, discrete)
{
    if (graph) graph.clearChart();
    graph = discrete ? new google.visualization.SteppedAreaChart(calculateResultsFig) : new google.visualization.AreaChart(calculateResultsFig);
    let options = {
        backgroundColor: theme === "dark" ? "#222" : "white",
        legend: {position: "none"},
        hAxis: {gridlines: {color: theme === "dark" ? "white" : "#ccc"}, textStyle: {color: theme === "dark" ? "#ddd" : "black"}, title: hAxisTitle, titleTextStyle: {color: theme === "dark" ? "#eee" : "black"}, viewWindow: {min: hAxisMin - (discrete ? 1 : 0)}},
        vAxis: {gridlines: {color: theme === "dark" ? "white" : "#ccc"}, textStyle: {color: theme === "dark" ? "#ddd" : "black"}, title: `Probability${discrete ? "" : " Density"}`, titleTextStyle: {color: theme === "dark" ? "#eee" : "black"}}
    };
    graph.draw(google.visualization.arrayToDataTable(arr), options);
}
