// Object oriented programming.
// Constructor function. Prototypes, or ESX classes. First way starts with capital key and we pass in parameters which will be properties of the object, through 'THIS' keyword:
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = dob;
}
// Instantiate an object with the constructor function.
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1); // we created a Person object that looks like an object literal but its prefixed with the actual name of the object (Person).
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person2.firstName);
// in this example we passed data birth into a string but we may do it as a constructor function:
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
}
console.log(person2.dob); // this will show the actual date of birth
// There are plenty diff ways to show dates that are offered ones we pass in param values such as:
console.log(person2.dob.getFullYear()); // this will show us '1970' in this case.

// We can add methods to this Person object, which are functions:
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	this.getBirthYear = function() {
		return this.dob.getFullYear();
	};
}
console.log(person1.getBirthYear()); // this will show '1980'.
// another example using full name:
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	this.getBirthYear = function() {
		return this.dob.getFullYear();
	};
	this.getFullName = function() {
		return `${this.firstName} ${this.lastName}`;
	};
}
console.log(person1.getFullName()); // this will show 'John Doe'.
// So far, this isnt the best way to do Prototypes because when we console.log, we are shown also the functions in the object. Plus the prototypes which are other objects. What we rather want is not having the function with every object instance because we might not need to use those functions attached. We wanna put those in the prototype, like this:
// We go under the function:
Person.prototype.getBirthYear = function() {
	return this.dob.getFullYear(); // and then remove it from the function above
}; // or:
Person.prototype.getFullName = function() {
	// and then remove this from function above
};
// now we call these methods:
console.log(person2.getFullName());
console.log(person1); // and we'll see at the prototype both functions getFullName & getBirthYear along with the constructor instead of seeing the prototype inside the object.

// -------------------------------------------------
// ESX Classes does pretty much the same under the hood but its known as 'sintactic sugar', which implies a prettier and easier way to write it, more organised.
// To create a class, like we created a Constructor above, we add a function or a method (function inside a class) called Constructor and add properties to it:
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	getBirthYear() {
		return this.dob.getFullYear();
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
} // then to instantiate we do same thing as before:
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

// -------------------------------------------------------------
// DOM: Document Object Model. Tree structure of our documents. We use it to select things from a document.

// SELECTORS

// Single element selectors.
console.log(document.getElementById('my-form')); // or we can asign this to a variable:
const form = document.getElementById('my-form');
console.log(form);
// another example:
console.log(document.querySelector('.container')); // this querySelector used to be implemented in jQuery JS librarie that made easy to select other things than ids, like classes or tags themselves or anything. querySelector works just like jQuery in order to select anything.
console.log(document.querySelector('h1')); // it's a single element selector so if u have more than a h1 tag its gonna select just the 1st one.

// For these purpose we have
// Multiple element selectors
console.log(document.querySelectorAll('.item')); // this will show us a NodeList which is similar to a common array. We can in fact run array methods on them. querySelectorAll is the most used tool but there are older ones such as:
console.log(document.getElementsByClassName('item')); // it can only contain classes so we won't enter the dot.  This won't show us a NodeList but an HTMLCollection and if you wanna run array methods on them you'll need to manually convert them into arrays. We also have:
console.log(document.getElementsByTagName('li')); // this will also bring an HTMLCollection

// If we wanted to loop through and grab a list of items.
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item)); // we pass on an arrow function

// To manipulate the DOM items or to change things in the DOM which means de User Interface.
const ul = document.querySelector('.items');

ul.remove(); // the ul will be gone
ul.lastElementChild.remove(); // the last item will be removed from the list
ul.firstElementChild.textContent = 'Hello'; // the first item will be replaced for 'Hello'
// to manipulate an element in the middle of the item list
ul.childen[1].innerText = 'Brad'; // this will pick the 2nd item from the index and mod it to Brad
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // this will introduce HTML dinamically.

// ----------------------------------------------------
// To change sth's style
const btn = document.querySelector('.btn');
btn.style.background = 'red'; // we change any btn property we want and manipulate things from User's interface in real time.

// --------------
// EVENTS
// To create an event listener
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
	// this will take two things: the event listener we want (in this case Click), and secondly the function you wanna run when this event happens. You can just put in a regular function(), but in this case we used an ARROW FUNCTION. And since this is an event, it takes an '(e)' parameter.

	console.log('click'); // this will flash the effect fast and go away because its a Submit button and when u submit a form it submits a file and returns to its default behaviour. To avoid this we say:
	e.preventDefault();
	console.log('click'); // now it won't flash and then go away. The form won't be submitting and the console will just show "click".
});
// if we entered
btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e); // this would show us the evnt object wich has a lot of stuff in it. E.g. "target" will give us the actual element. So we may say:
	console.log(e.target); // it will give us the element where the event is on. Just the button.
});
// if we wanted to get the class
btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target.className); // we would get btn
});
// if we wanted to change stuff up when we Click on sth
btn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark'); // we will be adding a class to body tag content. The form background and then the body bckground will be changed to two diff colors. This shows what we can do in order to make User's interface interactive.
});
// if we want to change text
btn.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
// if we want to change sth when hovering. This will mod bckground color once we hover into the form
btn.addEventListener('mouseover', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
// if we want to change sth when hovering over. Once we exit the form the event will fire.
const btn = document.querySelector('.btn');

btn.addEventListener('mouseout', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

// There are input events also but not in this course //
// -----------------------------------------------------------

// To end a functional tinny little application where we add a User, grab the value and output the user down in the items list.
// We are gonna grab stuff from the DOM and put them into variables here.

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// now we submit an event from the form.
myForm.addEventListener('submit', onSubmit); // we don't need to call the function here, we can just name it.
function onSubmit(e) {
	// and now we create that function that takes an '(e)' for event parameter.
	e.preventDefault(); // since it's a submit we want to preventDefault
	console.log(nameInput); // now we test it by grabbing the name input that will bring the element type but we want the value. So instead we'll say:
	console.log(nameInput.value); // now it'll be shown the actual name.
}

// to make a form validation but not to submit unless both fields are filled out
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	if (nameInput.value === '' || emailInput.value === '') {
		// we wanna give the user a message with what to do
		alert('Please enter fields'); // but the standard alert is ugly looking, so instead we do as below.
	} else {
		console.log('success');
	}
	if (nameInput.value === '' || emailInput.value === '') {
		msg.innerHTML = 'Please enter all fields';
	} else {
		console.log('success'); // since we have a style of error in our style sheet, a class of error in it, before the msg.innerHTML we will add:
	}
	msg.classList.add('error'); // and this will add .error style as in css's.
	msg.innerHTML = 'Please enter all fields';

	setTimeout(() => msg.remove(), 3000); // this will make thar .error effect to disappear after 3 secs. We can set it to a regular function or to an arrow function with no parameters, like this example. msg.remove will remove it from the DOM. setTimeout takes in a second parameter of the time in miliseconds in which it should fire off. 3000 means 3 secs.
}
// if we entered the email and wanted to create a list item in the Users list, we can create an element:
if (nameInput.value === '' || emailInput.value === '') {
	msg.classList.add('error');
	msg.innerHTML = 'Please enter all fields';

	setTimeout(() => msg.remove(), 3000);
} else {
	const li = document.createElement('li'); // we created an element out of nowhere and insert them into the DOM
	li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); // we added a text node with the input values

	userList.appendChild(li);
	// clear fields
	nameInput.value = '';
	emailInput.value = '';
} // now we created an interactive application, by manipulating the DOM. But when we reload this app, data won't be saved anywhere. If we wanted it to save data, we would need a back-end to interact with database, e.g. with NodeJS or Python or PHP that are connected to database, and then we send a request from the Front-End using e.g AJAX or fetch API. There is also sth called local storage that's used to store data in the user's browser.
