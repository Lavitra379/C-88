var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object;

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        })
    
        canvas.add(player_object);
    });
}
player_update()

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y + 70,
            left: player_x + 20
        });

        canvas.add(block_image_object);
    });

}

window.addEventListener("keydown", function (e)
{
keyPressed = e.keyCode;
if(keyPressed == "38")
{
player_y = player_y - 30;
canvas.remove(player_object);
player_update();
}
if(keyPressed == "37")
{
player_x = player_x - 30;
canvas.remove(player_object);
player_update();
}
if(keyPressed == "40")
{
player_y = player_y + 30;
canvas.remove(player_object);
player_update();
}

if(keyPressed == "39")
{
player_x = player_x + 30;
canvas.remove(player_object);
player_update();
}

if(keyPressed == "84")
{
new_image('trunk.jpg');
console.log("t");
}

if(keyPressed == "68")
{
new_image('dark_green.png');
console.log("d");
}

if(keyPressed == "76")
{
new_image('light_green.png');
console.log("l");
}

if(keyPressed == "71")
{
new_image('ground.png');
console.log("g");
}

if(keyPressed == "87")
{
new_image('wall.jpg');
console.log("w");
}

if(keyPressed == "89")
{
new_image('yellow_wall.png');
console.log("y");
}

if(keyPressed == "85")
{
new_image('unique.png');
console.log("u");
}

if(keyPressed == "82")
{
new_image('roof.jpg');
console.log("r");
}

if(keyPressed == "67")
{
new_image('cloud.jpg');
console.log("c");
}

if(e.shiftKey == true && keyPressed == "80")
{
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;

console.log("Shift + p");
}

if(e.shiftKey == true && keyPressed == "77")
{
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
console.log("Shift + m");
}

});