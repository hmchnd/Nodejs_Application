
module.exports = (x,y,callback)=>{
// error case
  if(x<=0|| y<=0){
    setTimeout(()=> callback(new Error("Area will be zero as length or breadth is zero")
    , null),
    2000);
}  
else{
// success case
 setTimeout(()=> callback( null, {
perimeter :(x,y) => (2*(x+y)),
area:(x,y)=> (x*y)

 }),
    2000);


}

}


//exports.perimeter = (x,y)=> (2*(x+y));
//exports.area = (x,y)=> (x*y);
