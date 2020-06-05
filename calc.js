// var age = prompt("Whats your age?")
// alert(age);
// var days = age * 365.25;
// alert(age + " years is roughly " + days + " days");

// let is_array = input => {
//   if (toString.call(input) === "[object Array]")
//     return true;
//   return false;   
//     };
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));