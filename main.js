// ELEMENTS
let button = document.getElementById("button");
let canvas = document.getElementById("canvas");
let speed = document.getElementById("speed");

// VARIABLES
let status = true;

// FRAMES FOR ANIMATION (prbbly wont use)

// FUNCTIONS
// function changeTheFrame(index) {}
// function changeTheIndex() {}


// ANIMATION
if (status == true) {
	let index = 1;
	setInterval(() => {
		if (status == true) {
			canvas.innerHTML = "";
			canvas.insertAdjacentHTML("beforeend", `
				<img id="img" src="./img/${index}.png">
			`);
			console.log("the frame updated using number " + index);
			index++;
			console.info("current index " + index);
			if (index == 10) {
				index = 0;
				console.clear();
				console.warn("loop reseted");
			};
		}
	}, 130);
};


// BUTTON 
button.addEventListener("click", function changeStatus() {
		console.error("button clicked, but i have no clue why it doesnt work")
		let status = true;
	}
);


// DISABLED ANIMATION

/* else {
		canvas.innerHTML = `<img id="img" src="./img/${0}.png">`
	} */