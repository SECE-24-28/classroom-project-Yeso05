let arr=["apple", "banana", "cherry"];
console.log(arr);
console.log(arr.toString());

//push function to add element at the end
arr.push("date");
console.log(arr); 

//unshift function to add element at the beginning  
arr.unshift("avocado");
console.log(arr);

//pop function to remove element at the end
arr.pop();
console.log(arr);   

//shift function to remove element at the beginning
arr.shift();
console.log(arr);

//delete function to remove specific element
delete arr[1];
console.log(arr);

//splice function to remove element at specific index
arr.splice(0, 1);
console.log(arr);
arr.splice(0, 0, "kiwi", "mango");
console.log(arr);   