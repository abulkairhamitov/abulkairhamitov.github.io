// function face() {
// 	// let face = document.getElementsByClassName("animate_face");
// 	// for( let i = 0; i < face.length; i++){ 
// 	// 	face[i].style.animation = "husky-tongue 7s none infinite";
// 	// }
// 	let tongue = document.getElementsByClassName("husky-tongue");
// 	let mouth = document.getElementsByClassName("husky-mouth");

// 	mouth[0].classList.add('mouth');
// 	tongue[0].style.animation = "husky-tongue 4s none infinite";
// 	function remove() {
// 		let tongue = document.getElementsByClassName("husky-tongue");
// 		let mouth = document.getElementsByClassName("husky-mouth");
// 		tongue[0].style.animation = "none";
// 		mouth[0].classList.remove('mouth');
// 	}
// 	setTimeout(remove, 4000);
// }


// 

const tamagotchi = {
    state: 'l0',

    sleep() {
    	console.log("remove");
    },

    dispatch(actionName) {   // actionName - входные данные
        const action = this.transitions[this.state][actionName];    // Достаем метод текущего обьекта (состояния)

        if (action) {
          action.apply(tamagotchi);
        }
    },

    changeStateTo(newState) {
        this.state = newState;
    },


    eye: document.getElementsByClassName("husky-eye"),			//(1)
    f_eye() {
        this.eye[0].classList.add('eye');
        this.eye[1].classList.add('eye');    	
    },


    ear: document.getElementsByClassName("husky-ear"),
    f_ear1() {													//(2)
    	this.ear[0].classList.add('ear');
    },
    f_ear2() {													//(3)
    	this.ear[0].classList.add('ear');
        this.ear[1].classList.add('ear');
    },


    body: document.getElementsByClassName("husky-body"),		//(4)
    mane: document.getElementsByClassName("husky-mane"),
    face: document.getElementsByClassName("husky-face"),
    head: document.getElementsByClassName("husky-head"),
    nose: document.getElementsByClassName("husky-nose"),
    f_head() {
    	this.head[0].classList.add('head');
    	this.mane[0].classList.add('mane');
    	this.face[0].classList.add('face');
    	this.body[0].classList.add('body');
    	this.nose[0].classList.add('nose');
    },


    tail: document.getElementsByClassName("husky-tail"),		//(5)
    f_tail() {
    	for( let i = 1; i < this.tail.length; i++) { 
			this.tail[i].classList.add('tail');
		}
    },


    mouth: document.getElementsByClassName("husky-mouth"),		//(6)
    f_mouth() {
    	this.mouth[0].classList.add('mouth');
    },


    tongue: document.getElementsByClassName("husky-tongue"),	//(7)
    f_tongue() {
    	this.tongue[0].classList.add('tongue');
    },


    remove_all() {
		if(document.querySelector('.husky-eye.eye')) {
			let eye = document.getElementsByClassName("husky-eye");
    		eye[0].classList.remove('eye');
			eye[1].classList.remove('eye');
		}

		if(document.querySelector('.husky-ear.ear')) {
			let ear = document.getElementsByClassName("husky-ear");
			ear[0].classList.remove('ear');
			ear[1].classList.remove('ear');
		}

    	if(document.querySelector('.husky-head.head')) {
		    body = document.getElementsByClassName("husky-body");		//(4)
		    mane = document.getElementsByClassName("husky-mane");
		    face = document.getElementsByClassName("husky-face");
		    head = document.getElementsByClassName("husky-head");
		    nose = document.getElementsByClassName("husky-nose");
			head[0].classList.remove('head');
			mane[0].classList.remove('mane');
			face[0].classList.remove('face');
			body[0].classList.remove('body');
			nose[0].classList.remove('nose');
    	}


		if(document.querySelector('.husky-tail.tail')) {
			let tail = document.getElementsByClassName("husky-tail");
			for( let i = 1; i < this.tail.length; i++) { 
				tail[i].classList.remove('tail');
			}
		}

		if(document.querySelector('.husky-mouth.mouth')) {
			let mouth = document.getElementsByClassName("husky-mouth");
			mouth[0].classList.remove('mouth');
		}

		if(document.querySelector('.husky-tongue.tongue')) {
			let tongue = document.getElementsByClassName("husky-tongue");
			tongue[0].classList.remove('tongue');
		}
    },
    // li - i-ое состояния
    transitions: {
        'l0': {
            data_in1: function() {	// (1) Глаза
            	this.f_eye();
                this.changeStateTo('l1');
            },
            data_in2: function() {	// (1) (2) лУшко
            	this.f_eye();
            	this.f_ear1();
                this.changeStateTo('l2');
            },
            data_in3: function() {	// (1) (2) (3) (4) Голова
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
                this.changeStateTo('l4');
            },
        },
        'l1': {
            data_in1: function() { 	// Ничего
                this.changeStateTo('l1');
            },
            data_in2: function() { 	// (1) (2) (3) пУшко
            	this.f_eye();
            	this.f_ear2();
                this.changeStateTo('l3');
            },
            data_in3: function() {	// (1) (2) (3) (4) (5) Хвост
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
                this.changeStateTo('l5');
            },
        },
        'l2': {
            data_in1: function() {	// (1) (2) (3) пУшко
            	this.f_eye();
            	this.f_ear2();
                this.changeStateTo('l3');
            },
            data_in2: function() {	// Ничего
                this.changeStateTo('l2');
            },
            data_in3: function() {	// (1) (2) (3) (4) (5) (6) Рот
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
            	this.f_mouth();
                this.changeStateTo('l6');
            },
        },
        'l3': {
            data_in1: function() {	// Ничего
                this.changeStateTo('l3');
            },
            data_in2: function() {	// Ничего
                this.changeStateTo('l3');
            },
            data_in3: function() {	// (1) (2) (3) (4) (5) (6) (7) Язык
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
            	this.f_mouth();
            	this.f_tongue();
                this.changeStateTo('l7');
            },
        },
        'l4': {
            data_in1: function() {	// (1) (2) (3) (4) (5) Хвост
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
                this.changeStateTo('l5');
            },
            data_in2: function() {	// (1) (2) (3) (4) (5) (6) Рот
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
            	this.f_mouth();
                this.changeStateTo('l6');
            },
            data_in3: function() {	// Ничего
                this.changeStateTo('l4');
            },
        },
        'l5': {
            data_in1: function() {	// Ничего
                this.changeStateTo('l5');
            },
            data_in2: function() {	// (1) (2) (3) (4) (5) (6) (7) Язык
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
            	this.f_mouth();
            	this.f_tongue();
                this.changeStateTo('l7');
            },
            data_in3: function() {	// Ничего
                this.changeStateTo('l5');
            },
        },
        'l6': {
            data_in1: function() {	// (1) (2) (3) (4) (5) (6) (7) Язык
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
            	this.f_mouth();
            	this.f_tongue();
                this.changeStateTo('l7');
            },
            data_in2: function() {	// Ничего
                this.changeStateTo('l6');
            },
            data_in3: function() {	// (1) (2) (3) (4) (5) (6) (7) Язык
            	this.f_eye();
            	this.f_ear2();
            	this.f_head();
            	this.f_tail();
            	this.f_mouth();
            	this.f_tongue();
                this.changeStateTo('l7');
            },
        },
        'l7': {
        	// Удаление всех анимаций, переход на начальное состояние
            data_in1: function() {
            	this.remove_all();
                this.changeStateTo('l0');
            },
            data_in2: function() {
            	this.remove_all();
                this.changeStateTo('l0');
            },
            data_in3: function() {
            	this.remove_all();
                this.changeStateTo('l0');
            },
        },
    }
}

function data_in1() {
    tamagotchi.dispatch('data_in1');
}

function data_in2() {
    tamagotchi.dispatch('data_in2');
}

function data_in3() {
    tamagotchi.dispatch('data_in3');
}

// Функция dispatch - для проверки существования такого состояния
// Функция changeStateTo - для изменения состояния