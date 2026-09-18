//Introduction of closure on JavaScript
function outer(){
    const count = 10;
       function inner(){
        console.log(count);
        
       }
     return inner();

}
 outer();
