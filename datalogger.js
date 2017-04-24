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
  }
}

function updateTotal()
{
var total = 0;
for( var i = 0; i<numberValues.length; i++)
{
  total = total + numberValues[i];
}
document.getElementById("total").innerHTML= total;
//go through each element in an array and add it to a running total
//then update the screen to show what the total is
}

function updateAverage()
{

}
