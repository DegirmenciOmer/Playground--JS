// function giveCompliment(name) {
// 	const compliments = ['great', 'awesome', 'super', 'genious', 'brilliant',
// 	'strong', 'enjoyable', 'wonderful', 'perfect', 'gorgeous'];

// 	// https://www.youtube.com/watch?v=pqLS4oyJ8cA random select resource
// 	const randomSelect = Math.floor(Math.random() * compliments.length);
// 	return 'You are ' + compliments[randomSelect] + " " + name + "!";
// }

// console.log(giveCompliment("mik"));

// giveCompliment(2);

// giveCompliment('Mi');


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


// // Write a function named calculateDogAge.
// const puppyAge = age => {
//     const dogAge = age * 7;
//     return "Your doggie is " + dogAge + " years old in dog years!"
// }

// console.log(puppyAge(3));

//     // It takes 1 argument: your puppy's age (number).
//     // Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
//     // Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
//     // Call the function three times with different sets of values.


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\



    // Write a function named tellFortune.
// It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
// Randomly select Elements from the arrays.
// Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
// Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random Elements that make sense
// Call the function 1 time, by passing the arrays as the argument.

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Amy", "Sally", "Kathy", "Tiffany", "Angie"];
const locations = ["Amsterdam", "San Francicso", "Dublin", "Istanbul", "Budapest"];
const jobs = ["lawyer", "teacher", "web developer", "software programmer", "photographer"];


const tellFortune = (kid, partner, geo, job) => {
    const randomSelect = arr => {
        return arr[Math.floor(Math.random() * arr.length)];
    }   
   return "You will be a " + randomSelect(job) + " in " + randomSelect(geo) + 
           ", and married to " + randomSelect(partner) + " with " + randomSelect(kid) + " kids."
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs));



//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\



// const groceryItems = ['banana'];
// const add = item => {
//     groceryItems.push(item);
//     if (groceryItems.length > 3) {
//         groceryItems.shift();
//     }
	
//     return 'you got ' + groceryItems + "!";

// }

// console.log(add("cola"));
// console.log(add("cola"));console.log(add("cola"));
// console.log(add("gg"));


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// const cartForParty = {cola: 1.25, fruit: 11.2, popcorn: 3.50, wine: 40.4, tea: 5.90};
// function calculateTotalPrice(cartForParty){
// 	let total = 0;
// 	for (const propert in cartForParty) {
//     total += cartForParty[propert];
// 	}
// 	return Math.round(total);
// }

// console.log(calculateTotalPrice(cartForParty));


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
// map filter reduce

// const arr = [1, 2, 3, "4", "5", "7"];
// const reduced = arr.reduce((x, acc) => x + acc)
// console.log(reduced);

// const mapped = arr.map(x => x*2);
// console.log(mapped);

// const filt = arr.filter(x => typeof x === "string" );
// console.log(filt);

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

//Write and call a function that creates and appends a <p> tag to the <body> of an HTML file. 
//Make use of the already predefined 
//DOM methods createElement() and appendChild(). The innerText of the <p> should be “hello HackYourFuture!”.
// const body = document.querySelector('body');
// console.log(body);
// function func() {
//     const p = document.createElement('p');
// return document.body.appendChild(p).textContent = 'Helloworld';
// }

// console.log(func());




//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/*
//REMOVE THE STRING
//Add the variable to your file.
let myString = "hello,this,is,a,difficult,to,read,sentence";


//Log the length of myString.
console.log(myString.length);

//The commas make that the sentence is quite 
//hard to read. Find a way to remove the commas
//from the string and replace them with spaces. (use Google!)
myString = myString.replace(/,/g, ', ');
//https://www.youtube.com/watch?v=7a-a6lKoyIQ   (05:00-06:00)

//After replacing the commas, log myString 
//to see if you succeeded.
console.log(myString);
*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//2-TheEvenOddReporter
//Report whether or not a number is odd/even!

//Create a for loop, that iterates from 0 to 20.

//Create a conditional statement that checks 
//if the value of the counter variable is odd or even.

//If it's odd, log to the console 
//The number [PUT_NUMBER_HERE] is odd!.

//If it's even, log to the console 
//The number [PUT_NUMBER_HERE] is even!.

// for(let i = 0; i < 21; i ++) {
//     if(i % 2 === 0) {
//         console.log(i + ' is even')
//     }else { console.log(i + ' is odd')}
// }


/*/\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//3-RecipeCard
//DECLARE A VARIABLE THAT HOLDS AN OBJECT (YOUR MEAL RECIPE)
//GIVE THE OBJECT 3 PROPERTIES:
//A TITLE(STRING), A SERVINGS(NUMBER), 
//AND AN INGREDIENTS (ARRAY OF STRINGS) PROPERTY.
const recipe = {
    title: 'Creppe',
    serving: 2,
    imgredients: ['pepper', 'egg', 'salt']

}

for(const attr in recipe) {
    console.log(recipe[attr]);
}


//LOG EACH PROPERTY OUT SEPARATELY, USING A LOOP(FOR, WHILE OR DO/WHILE)

*///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/*
//Declare a variable that holds an array of 3 objects, 
//where each object describes a book and has properties 
//for the title (string), author (string), and 
//alreadyRead (boolean indicating if you read it yet).

const myBooks = [
	{
		title: "Pride and Prejudice",
		author: "Jane Austen", 
		finished: true
	},
	{
		title: "Harry Potter and the Goblet of Fire",
		author: "JK Rowling", 
		finished: true
	},
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee", 
		finished: false
	},
]; 
	
//Loop through the array of books.
//For each book, log the book title and book 
//author like so: "The Hobbit by J.R.R. Tolkien".

for(item of myBooks) {
	console.log(item['title'] + ' by ' + item['author']);
}
//Create a conditional statement to change 
//the log depending on whether you read it yet or not.
//If you read it, log a string like You already read 
//"The Hobbit" right after the log of the book details

for(item of myBooks) {
	if (item.finished === true) {
		console.log("You already read " + item['title']+ "!");	
	}
	else {console.log("You still need to read " + item['title'] + "!");}	
}
//If you haven't read it log a string like 
//You still need to read "The Lord of the Rings"

*/

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// Declare a variable that holds an empty array, 
// called drinkTray.
// There are 3 different types of drinks:
// Create a loop that runs 5 times. On each iteration, 
// push a drink into the drinkTray variable. 	
// The drinkTray can only hold at most two instances of 
// the same drink type, for example it can only hold 
// 2 colas, 2 lemonades, 2 waters.
// If there are already two instances of a drinkType 
// then start with the next drink in the array.
// const drinkTray = [];
// const drinkTypes = [" cola", " lemonade", " water"];
// for (let i = 0; i < 5; i++) {
// switch (i) {
// 	case 0:
// 	case 1:
//         drinkTray.push(drinkTypes[0]);
//     break;
//     case 2:
// 	case 3:
//     drinkTray.push(drinkTypes[1]);
//         break;
//     default:
//             drinkTray.push(drinkTypes[2]);
//     break;                                       
//     }

// if(i === 0 && 1) {
//     drinkTray.push(drinkTypes[0]);
// }
// else if (i === 2 && 3) {
//     drinkTray.push(drinkTypes[1]);
// }
// else {drinkTray.push(drinkTypes[2]);}
 //}

 
// Your drinkTray should contain 2 cola, 
// 2 lemonade and 1 water.
// Log to the console: "Hey guys, I brought 
// a [INSERT VALUES FROM ARRAY]!" (For example: 
// "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")

//console.log("Hey guys, I brought a" + drinkTray + "!")


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */





//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// const body = document.querySelector('body')

// // 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
// body.style.fontFamily = "Arial, sans-serif";

//  // 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
// const nickName = document.querySelector('#nickname');
// nickName.textContent = "Eddy";
// const favFood = document.querySelector('#fav-food');
// favFood.textContent = "Kebab";

// const homeTown = document.querySelector('#hometown');
// homeTown.textContent = "Small Ville";

// // 4. Iterate through each li and change the class to "list-item".
// const li = document.querySelectorAll('li');
// for (let i = 0; i < li.length; i++) {
// 	li[i].className = "list-item";
// }


// //6. Create a new img element and set its src attribute to a picture of you.
// //Append that element to the page.
// const myImg = document.createElement("img");
// myImg.setAttribute("src", "https://i.ibb.co/r0kyNH0/Knipsel.png");
// myImg.setAttribute("alt", "myImg");
// myImg.setAttribute("width", "150px");
// document.body.appendChild( myImg );

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\



//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\/