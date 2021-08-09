var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;

hole.addEventListener('animationiteration', () => {
	var random = -((Math.random()*300)+150);
	var top = (random*100)+150;
	hole.style.top = -(top) + "px";
	counter++;
});

setInterval(function(){
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	if(jumping==0) {
		character.style.top = (characterTop+3)+"px";
	}
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
	if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(ctop>holeTop+130))))) {
		alert("Oh no! Game Over! Score: "+counter);
		chararcter.style.top = 100px + "px";
		counter=0;
	}
},10);

function jump() {
	jumping = 1;
	let jumpCount = 0;
	var jumpInterval = setInterval(function(){
		var characterTop = 
		parseInt(window.getComputedStyle(character).getProperty)
		if(characterTop>6)&&(counter<15)){
			character.style.top = (characterTop+3)+"px";
		}
		if(jumpCount>20){
			clearInterval(jumpInterval);
			jumping=0;
			jumpCount=0;
		}
		jumpCount++;
	});
}