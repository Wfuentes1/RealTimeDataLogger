var numberValues= [];//declared a global variable ARRAY
//numberValues = [1,5,9,2];

function addANewNUmber()
{
  //get the text input from the DOM and store it in a variable
  //check if varible is a number
  //IF IT IS ... add that number to the back of the array
  var newNum = document.getElementById("dataInput").value;
  if( isNaN(newNum) == false )
  {
    newNum = Number(newNum);
      numberValues.push(newNum);
  var newTotal = calculateTotal();
  document.getElementById("total").innerHTML= newTotal;
  document.getElementById("average").innerHTML= newTotal/ numberValues.length;
}
}

function calculateTotal()
{
var runningTotal = 0;
for( var i = 0; i<numberValues.length; i++)
{
  runningTotal = runningTotal + numberValues[i];
}
return runningTotal;
//document.getElementById("total").innerHTML= runningTotal;
//go through each element in an array and add it to a running total
//then update the screen to show what the total is
}

function updateAverage()
{
  var average = 0;
  for( var i = 0; i<numberValues.length; i++)
  {
    average = average + numberValues[i];
  }
  average= average/numberValues.length;
  document.getElementById("average").innerHTML=average;
   //go through each element in an array and add it to a running total
  //then divide by the number of elements in the array and
 //finally, update the screen to show what the average is

}
