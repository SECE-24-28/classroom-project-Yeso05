let student=[{name:"John", age:20, fee:true},
{name:"Jane", age:22, fee:false},
{name:"Mike", age:21, fee:true}
]

//filter function to get students older than 20
let res=student.filter((stu)=>{
    
    return stu.age>20;
});
console.log(res);