


const call = document.getElementById('call')

const colors = ["Red", "Green", "Yellow", "Blue"]

const limbs = ["Right Hand", "Left Hand", "Right Foot", "Left Foot"]

function tick(arg){

	// Get random number between 1 and 4
	let color = Math.random() * colors.length

	// Round decimal down
	color = Math.floor(color)

	// Get color string from array	
	color = colors[color]


	// Do same thing for limbs
	let limb = Math.random() * limbs.length
	limb = Math.floor(limb)
	limb = limbs[limb]


	const str = limb + " " + color

	// Change text
	call.innerText = str

	// Speak
	const msg = new SpeechSynthesisUtterance(str)
    window.speechSynthesis.speak(msg)

    // Change background color
    document.body.style.backgroundColor = color.toLowerCase()

}





tick()
setInterval(tick, 9 * 1000)



