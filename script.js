function sayHello(){ // appends 'hello world' to the document
	document.getElementById("helloExample").innerHTML += "hello world ";
}

function createTag(){
	let div = document.getElementById("createExample");
	let element = document.createElement("b");
	element.innerHTML = "This is a newly created bold element via Javascript ";
	div.appendChild(element);
}

function displayTime(){
	// display date and time
	let date = new Date();
	const options = {year: 'numeric',month: 'long',day: 'numeric'};
	document.getElementById("date").innerHTML = "Date: " + date.toLocaleString('en-CA', options);
	document.getElementById("time").innerHTML = "Time: " + date.toLocaleTimeString().slice(0,4) + date.toLocaleTimeString().slice(7);
}