 var numberOfSquares=6;

var colors=generateColors(numberOfSquares);

var picked = pickColor();
var colorDisplay=document.querySelector("#colorDisplay")
var messageDisplay=document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click", function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numberOfSquares=3
	colors=generateColors(numberOfSquares);
	picked=pickColor();
	colorDisplay.textContent=picked;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];	
		}
		else{
			squares[i].style.display="none";
		}
		
	}
})

hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numberOfSquares=6;
	colors=generateColors(numberOfSquares);
	picked=pickColor();
	colorDisplay.textContent=picked;
	for(var i=0; i<squares.length; i++){
		
			squares[i].style.backgroundColor=colors[i];	
		
			squares[i].style.display="block";
		
		
	}	
})


reset.addEventListener("click", function(){
	colors=generateColors(numberOfSquares);
	picked=pickColor();
	colorDisplay.textContent=picked;
	this.textContent=("New colors");
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor=("steelblue");
	messageDisplay.textContent="";

})

colorDisplay.textContent=picked;
for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	
	squares[i].addEventListener("click", function(){
		// alert("Clicked");
	


	var clickedColor=this.style.backgroundColor;
	if(clickedColor===picked){
		messageDisplay.textContent="Correct";
		changeColors(clickedColor);
		h1.style.backgroundColor=clickedColor;
		reset.textContent=("Play Again?");

	}
		else{
		this.style.backgroundColor ="#232323";
		messageDisplay.textContent="Wrong";
		// console.log(clickedColor, picked);
	}
});

}
function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateColors(num){
	var arr = [];

	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";

}