const randomPersonAPIURL = 'https://www.randomuser.me/api';

const myPromise = axios.get(randomPersonAPIURL);

// PROMISE CHAINING

myPromise.then((result) => {
    //get person1
    console.log(result.data.results[0].email);
    //call another request(start cahining)
    return axios.get(randomPersonAPIURL);
})
.then((result) => {
    //get person2
    console.log(result.data.results[0].email);
    //call another request(start cahining)
    return axios.get(randomPersonAPIURL);
})
.then((result) => {
    //get person3
    console.log(result.data.results[0].email);
    //call another request(start cahining)
    return null;
})
.catch((error) => {
    console.log('Error!')
})


// function fetchJSON(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';

//     xhr.onload = () => {
//         if(xhr.status >=200 && xhr.status < 400) {
//             callback(null, xhr.response);
//         }else{
//             callback(new Error(`HTTP eror status code ${xhr.status}`), null);
//         }
//     };

//     xhr.onerror = () => {
//         callback(new Error('Network error'), null);
//     }
//     xhr.open('GET', url);
//     xhr.send();
       
// }

//Callback Hell

// const randomPersonAPIURL = 'https://www.randomuser.me/api';
// fetchJSON(randomPersonAPIURL, (error, data) => {
//     if(error) {
//         console.log('Error!');
//     }else {
//         //print the first person's email
//         console.log(data.results[0].email)
//         //Request second person
//         fetchJSON(randomPersonAPIURL, (error2, data2) => {
//             if(error2) {
//             console.log('ERROR!');
//             }else {
//             console.log(data2.results[0].email);
//             //Request second person
//             fetchJSON(randomPersonAPIURL, (error3, data3) => {
//                 if(error3) {
//                 console.log('ERROR!');
//                 }else {
//                 console.log(data3.results[0].email);               
    
//             }
//         });

//         }
//     });
//     };

// });