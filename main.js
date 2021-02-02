
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

var block_image_width = 70;
var block_image_height = 70;

var player_object= "";
var block_image_object= "";

function player_update(){
	
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
    
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    
        });
    
}

function new_image(get_image)
{

	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
    
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if (keyPressed == '70'){
    new_image('ironman_face.png');
}
if (keyPressed == '66'){
    new_image('spiderman_body.png');
}
if (keyPressed == '73'){
    new_image('hulk_legs.png');
}
if (keyPressed == '82'){
    new_image('thor_right_hand.png');
}
if (keyPressed == '72'){
    new_image('captain_america_left_hand.png');
}
if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '65'){
		new_image('ARM_SHAKTIMAN.png');
	}
	if (keyPressed == '83'){
new_image('https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/03/30/851798-501219-shaktiman.jpg');
	}
}


function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function YOURSUPERDUPERHERO(){
var URL_of_img = document.getElementById("URL_img_LIVE").value;
new_image(URL_of_img);
}