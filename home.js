/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 02/10/2022 - 09:25:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/10/2022
    * - Author          : HP
    * - Modification    : 
**/
function getYear() {
  let yearOfBirth = Number(prompt("Enter the year of your birth"));
  let currentAge = new Date().getFullYear() - yearOfBirth;
  let yearDisplay = document.getElementById("display");
  yearDisplay.innerHTML = "Your age is " + currentAge + " and the  number of days is " + currentAge * 365;
}

function reset() {
  document.getElementById('display').remove();
}