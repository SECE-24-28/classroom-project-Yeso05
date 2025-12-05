let mob={
    brand:"Samsung",color:"black"
}
//add new key,value pair
mob.price=35000
console.log(mob);
//update
mob.price=45000
console.log(mob);

console.log(mob.color);
console.log(mob["brand"]);

deletemob.brand;
console.log(mob);

delete mob["color"];    
console.log(mob);