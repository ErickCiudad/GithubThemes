/**
 * Created by session2 on 2/19/16.
 */
console.log('yooo');

//function changeTheme(choice){
//    if (choice === "blue") {
//        document.body.style.backgroundColor = "blue";
//        document.body.innerHTML = 'ABCDEFG';
//    }
//}
//document.getElementById('main-content').style.backgroundColor = "red";
var color = false;
document.body.style.backgroundColor = color;
var image = false;
document.body.style.backgroundImage = "url('http://www.hometopia.co.nz/portals/0/lowland%20gorilla,%20africa.jpg')";
//document.body.style.backgroundImage = image;


//var div = document.createElement("div");
//div.style.width = "100%";
//div.style.height = "100px";
//div.style.background = "transparent";
//div.style.color = "black";
//div.innerHTML = "Hello";

var blue = document.createElement('BUTTON');
var t = document.createTextNode("Blue");       // Create a text node
blue.appendChild(t);


document.body.appendChild(blue);
blue.onclick = function () {
    //alert("Success");
    color = '#05EDFF';
    document.body.appendChild(div);
};

////

var mint = document.createElement('BUTTON');
var p = document.createTextNode("Mint");       // Create a text node
mint.appendChild(p);


document.body.appendChild(mint);
mint.onclick = function () {
    //alert("Success");
    color = '#BDFCC9';
    document.body.appendChild(div);
};



var pic = document.createElement('BUTTON');
var r = document.createTextNode("Image");       // Create a text node
pic.appendChild(r);


document.body.appendChild(pic);
pic.onclick = function () {
    //alert("Success");
    image = prompt('Put in a url');
    document.body.appendChild(div);
};



function checkColor()
{
    document.body.style.backgroundColor = color;
    //document.body.style.backgroundImage.src = image;

}

setInterval(checkColor, 200);
