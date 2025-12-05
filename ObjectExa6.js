let student=[{name:"John", age:20, fee:true},
{name:"Jane", age:22, fee:false},
{name:"Mike", age:21, fee:true}
]

//some function to check if at least one student has paid fee
let res=student.some((stu)=>{
    
    return stu.fee===true;
});
console.log(res);