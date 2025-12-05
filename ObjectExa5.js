let student=[{name:"John", age:20, fee:true},
{name:"Jane", age:22, fee:true},
{name:"Mike", age:21, fee:true}
]

//every function to check if all students have paid fee
let res=student.every((stu)=>{
    
    return stu.fee===true;
});
console.log(res);