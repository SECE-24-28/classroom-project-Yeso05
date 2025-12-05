let student=[{sna:"praveen",age:19,fee:true},
{sna:"prabhu",age:20,fee:false},
{sna:"kumar",age:21,fee:true}]

let newStu=student.map((stu)=>
{
    return {na:stu.sna,ma:stu.age+2}
})

console.log(newStu);