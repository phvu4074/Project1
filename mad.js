function runSpeechRecognition() {
	var action = document.getElementById("action");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small>start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small>stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("noun").value = transcript;
	};
	
	recognition.start();
}

function runSpeechRecognition2() {
	var action = document.getElementById("action2");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small>start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small>stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("adj").value = transcript;
	};
	
	recognition.start();
}

function runSpeechRecognition3() {
	var action = document.getElementById("action3");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small>start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small>stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("name").value = transcript;
	};
	
	recognition.start();
}

function runSpeechRecognition4() {
	var action = document.getElementById("action4");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small>start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small>stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("number").value = transcript;
	};
	
	recognition.start();
}

var libButton = document.getElementById('lib-button');
var libIt = function() {
	var storyDiv = document.getElementById("story");
	var first = document.getElementById("noun").value;
	var second = document.getElementById("adj").value;
	var third = document.getElementById("name").value;
	var fourth = document.getElementById("number").value;
	storyDiv.innerHTML = "Many "+first+" are "+second+" and "+third+" likes to eat "+fourth+" of them everyday.";
};
libButton.addEventListener('click', libIt);




function runSpeechRecognition5() {
	var action = document.getElementById("action5");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small>start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small>stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("noun2").value = transcript;
	};
	
	recognition.start();
}

function runSpeechRecognition6() {
	var action = document.getElementById("action6");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small> start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small> stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("adj2").value = transcript;
	};
	
	recognition.start();
}

function runSpeechRecognition7() {
	var action = document.getElementById("action7");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small> start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small> stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("name2").value = transcript;
	};
	
	recognition.start();
}

function runSpeechRecognition8() {
	var action = document.getElementById("action8");
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	
	recognition.onstart = function() {
		action.innerHTML = "<small> start</small>";
	};
	
	recognition.onspeechend = function() {
		action.innerHTML = "<small> stop</small>";
		recognition.stop();
	}
	
	recognition.onresult = function(event) {
		var transcript = event.results[0][0].transcript;
		document.getElementById("number2").value = transcript;
	};
	
	recognition.start();
}

var libButton2 = document.getElementById('lib-button2');
var libIt2 = function() {
	var storyDiv = document.getElementById("story2");
	var first = document.getElementById("noun2").value;
	var second = document.getElementById("adj2").value;
	var third = document.getElementById("name2").value;
	var fourth = document.getElementById("number2").value;
	storyDiv.innerHTML = "Many "+first+" are "+second+" and "+third+" likes to eat "+fourth+" of them everyday.";
};
libButton2.addEventListener('click', libIt2);