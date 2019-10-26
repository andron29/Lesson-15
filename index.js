var valueA = parseInt(prompt("please enter value A"));
var valueB = parseInt(prompt("please enter value B"));
var valueC = parseInt(prompt("please enter value C"));
function getDiscriminant(){
   return ((valueB * valueB)-(4 * valueA * valueC));
}
var Discriminant = getDiscriminant()
function squareEquation(){
   if (Discriminant > 0){
       let numberX1 = ((-valueB + Math.sqrt(Discriminant))/(2* valueA));
       let numberX2 = ((-valueB - Math.sqrt(Discriminant))/(2* valueA));
       alert('Equation has two roots X1:'+ numberX1 +'X2:' + numberX2);
       return {
           numberX1,
           numberX2
       }
   } else if (Discriminant == 0) {
       let numberX = (-((valueB)/(2*valueA)));
       alert('Equation has only one root X:' + numberX);
       return {
           numberX
       }
   } else {
       alert('no valid Discriminant:' + Discriminant + '(it has to be positive)');
   }
}
console.log(getDiscriminant());
console.log(squareEquation());