/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */
// your code goes in here

// function createHTMLList(arr) {
//     const body = document.querySelector('body');
//     const ul = document.createElement('ul');
//     body.appendChild(ul);
//     myHobbies.forEach(hobby => {
//       let li = document.createElement('li');
//       li.innerHTML =  hobby;
//       ul.appendChild(li)
//     })
    
//   }

  
// const myHobbies = [
//   'Meditation',
//   'Reading',
//   'Programming',
//   'Hanging out with friends',
//   'Going to the gym',
// ];

// createHTMLList();




// function createHTMLList(arr) {
// 	// your code goes in here
// 	const body =document.querySelector('body');
// 	const ul = document.createElement('ul');
// 	body.appendChild(ul);
// 	arr.forEach(hobby => {
// 		let li = document.createElement('li');
// 		li.innerHTML = hobby;
// 		ul.appendChild(li);
// 	})
// }

// const myHobbies = [
//   'Meditation',
//   'Reading',
//   'Programming',
//   'Hanging out with friends',
//   'Going to the gym',
// ];

// createHTMLList(myHobbies);



// /**
 
//  ** Exercise 2: What 's your Monday worth? **
 
//  Write a function that finds out what your hourly rate on a Monday would be
//  Use the map array function to take out the duration time for each task.
//  Avoid using for loop or forEach.
//  Multiply each duration by a per - hour rate for billing and sum it all up.
//  Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
//  Make sure the function can be used on any array of objects that contain a 
//  duration property with a number value

//  */

// const mondayTasks = [{
//   name: 'Daily standup',
//   duration: 30, // specified in minutes
// },
// {
//   name: 'Feature discussion',
//   duration: 120,
// },
// {
//   name: 'Development time',
//   duration: 240,
// },
// {
//   name: 'Talk to different members from the product team',
//   duration: 60,
// },
// ];
// console.log(dayWorth(mondayTasks, 1))
// console.log(dayWorth(mondayTasks, 13.37))





// Write a JavaScript function to merge two arrays and remove all duplicated elements.

// Test data:
// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]


//////////\\\\\\\\\\\\\\\\\\/////////////\\\\\\\\\

//ADD SIX

// function createBase(num) {
// // Put here your logic...
// return function () {
// 	return num +=9;		
// 	}
// }



// const addSix = createBase(6);

// // Put here your function calls...


// console.log(addSix());
// console.log(addSix());
// console.log(addSix());

//////////\\\\\\\\\\\\\\\\\\/////////////\\\\\\\\\

// function() {
// let addBread = function() {
// console.log('Adding bread');
// }
// let spreadSoya = function() {
// console.log('Now spreading the soya magarine');
// }
// let spreadJam = function() {
// console.log('Spreading jam');
// }

// window.sandwich = function() {
// addBread();
// spreadSoya();
// spreadJam();
// }
// })();

// sandwich();


//////////\\\\\\\\\\\\\\\\\\/////////////\\\\\\\\\

/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
// function removeDuplicates(arr) {
// 	return [...new Set(arr)]; //resource: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
	
// } 

// const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// console.log(removeDuplicates(letters));

// // if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
// //   console.log("Hooray!")


//////////\\\\\\\\\\\\\\\\\\/////////////\\\\\\\\\
// function sayThree() {
// 	return 'Say three!'
//   }

//   function sayFive() {
// 	return 'Say five!'
//   }
// function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
// 	const numbers = [];
// 	// make array
// 	for (let i = startIndex; i <= stopIndex; i++) {
// 	 numbers.push(i);
//   }

//   for (let i = 0; i <= numbers.length; i++) {
// 	if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
// 		console.log(threeCallback() +' and ' + fiveCallback());
// 	}else if (numbers[i] % 3 === 0) {
// 		console.log(threeCallback());
// 	}else if (numbers[i] % 5 === 0) {
// 		console.log(fiveCallback());
// 	}
//  }
//   console.log(numbers)	
// 	// start at beginning of array and check if you should call threeCallback or fiveCallback 
// 	//or go on to next
//   }  
//  threeFive(10, 15,sayThree, sayFive);


//////////\\\\\\\\\\\\\\\\\\/////////////\\\\\\\\\
