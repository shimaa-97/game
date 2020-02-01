function gamestart()
{
  location.replace("index1.html");
  
}
  
function fishgame()
{
  location.replace("fish.html")  
}

function lion()
{
  location.replace("lion.html")
}

function bear()
{
  location.replace("bear.html")
}

function gezelle()
{
  location.replace("gezelle.html")
}
function bird()
{
  location.replace("bird.html")
}
function wolf()
{
  location.replace("wolf.html")
}

function goback()
{
 location.replace("index1.html")
}

function closeWindow()
{
  window.close();
}

function video()
{
  location.replace("vedio.html")
}

 


//letters
function dragStart001(event) {
  event.dataTransfer.setData("choice001", event.target.id);
}

function dragStart002(event) {
  event.dataTransfer.setData("choice002", event.target.id);
}

function dragStart003(event) {
  event.dataTransfer.setData("choice003", event.target.id);
}

function dragStart004(event) {
  event.dataTransfer.setData("choice004", event.target.id);
}

function dragStart005(event) {
  event.dataTransfer.setData("choice005", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}


function drop006(event) {
  var data = event.dataTransfer.getData("choice003");
  event.target.appendChild(document.getElementById(data));

}

function drop007(event) {
  var data = event.dataTransfer.getData("choice001");
  event.target.appendChild(document.getElementById(data));

}

function drop008(event) {
  var data = event.dataTransfer.getData("choice005");
  event.target.appendChild(document.getElementById(data));

}

function drop009(event) {
  var data = event.dataTransfer.getData("choice002");
  event.target.appendChild(document.getElementById(data));

}


function drop(event) {
  event.preventDefault();
}


//images

function dragStart001(event) {
  event.dataTransfer.setData("choiceIMG001", event.target.id);
}

function dragStart002(event) {
  event.dataTransfer.setData("choiceIMG002", event.target.id);
}

function dragStart003(event) {
  event.dataTransfer.setData("choiceIMG003", event.target.id);
}

function dragStart004(event) {
  event.dataTransfer.setData("choiceIMG004", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault();
}
//chang here
function drop006(event) {
  var data = event.dataTransfer.getData("choiceIMG004");
  event.target.appendChild(document.getElementById(data));

}

function drop007(event) {
  var data = event.dataTransfer.getData("choiceIMG001");
  event.target.appendChild(document.getElementById(data));
}

function drop008(event) {
  var data = event.dataTransfer.getData("choiceIMG003");
  event.target.appendChild(document.getElementById(data));

  
}

function drop009(event) {
  var data = event.dataTransfer.getData("choiceIMG002");
  event.target.appendChild(document.getElementById(data));
}

