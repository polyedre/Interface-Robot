

var p_roues = document.getElementById("roues");
var p_tension = document.getElementById("tension");

var json;
var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', 'test.json', true); // Replace 'my_data' with the path to your file
xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
        json = xobj.responseText;
    }
};
var vrai_json = JSON.parse(json);
