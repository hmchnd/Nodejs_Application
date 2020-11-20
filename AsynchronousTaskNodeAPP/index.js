var rectangle = require("./rectangle");

function solveRect(l,b){
console.log("Solving reactngle with l and b");

rectangle(l, b,(err,data)=>{
if(err){
    console.log("Error:",err.message);
}
else{
console.log( data.perimeter(l,b));
console.log( data.area(l,b));

}


});
console.log("Please wait for the results.....");

// if(l<=0|| b<=0){

//     console.log("Area will be zero as length or breadth is zero");

// }else{

// console.log(rectangle.area(l,b));
// console.log(rectangle.perimeter(l,b));

// }


}

solveRect(3,5);

//solveRect(3,10);
