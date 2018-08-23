document.addEventListener("DOMContentLoaded", function(){
	//the entire game is going to be here
	//variables
	var name = document.getElementById('name')
	var startButton = document.getElementById('start button')
	name.addEventListener('keyup', function(event){
		if (event.target.value !== ""){
			startButton.className=""	
		} else {
			startButton.className="hide"
		}
		
	})


	//functions
})