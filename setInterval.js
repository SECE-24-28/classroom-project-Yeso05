/*console.log("Process1");
setTimeout(() => {
    console.log("Process2");
},2000);
console.log("Process3");
*/

//by default javascript programs are asynchronous

console.log("Process1");
setTimeout(()=>{
    console.log("Process2");
    setTimeout(()=>{
        console.log("Process3");
    },2000)
},2000)

