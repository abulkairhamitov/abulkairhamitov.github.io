function face() {
	// let face = document.getElementsByClassName("animate_face");
	// for( let i = 0; i < face.length; i++){ 
	// 	face[i].style.animation = "husky-tongue 7s none infinite";
	// }
	let tongue = document.getElementsByClassName("husky-tongue");
	let mouth = document.getElementsByClassName("husky-mouth");

	mouth[0].classList.add('mouth');
	tongue[0].style.animation = "husky-tongue 4s none infinite";
	function remove() {
		let tongue = document.getElementsByClassName("husky-tongue");
		let mouth = document.getElementsByClassName("husky-mouth");
		tongue[0].style.animation = "none";
		mouth[0].classList.remove('mouth');
	}
	setTimeout(remove, 4000);
}
