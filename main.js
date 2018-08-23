document.addEventListener("DOMContentLoaded", function(){
	//the entire game is going to be here
	//variables
	var player
	var name = document.getElementById('name')
	var startButton = document.getElementById('start button')
	var top = document.getElementById('top')
	name.addEventListener('keyup', function(event){
		if (event.target.value !== ''){
			startButton.className=''	
		} else {
			startButton.className='hide'
		}
		
	})




	//functions
		function startGame(){
			player = name.value
			startButton.className = "hide"
			var label = document.createElement('p')
			label.innerHTML = 'Welcome ' + player
			label.className = 'center'
			top.append(label)
		}

		startButton.addEventListener('click', startGame)
		})

	// git fetch
	// git rebase origin/master
	// git branch
