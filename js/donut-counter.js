//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
const guests = parseInt(prompt("Please insert number of guests"));
const donuts = parseInt(prompt("Please insert number of donuts"));

if (donuts >= guests) {
  alert('There are '+donuts+' and '+guests+'' );
  else
  alert('There are not enough donuts')
}
