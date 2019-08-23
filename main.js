// Write your JavaScript here

let twenties = 0;
document.getElementById('twenties').innerHTML = twenties;
let tens = 0;
document.getElementById('tens').innerHTML = tens;
let fives = 0;
document.getElementById('fives').innerHTML = fives;
let ones = 0;
document.getElementById('ones').innerHTML = ones;
let quarters = 0;
document.getElementById('quarters').innerHTML = quarters;
let dimes = 0;
document.getElementById('dimes').innerHTML = dimes;
let nickels = 0;
document.getElementById('nickels').innerHTML = nickels;
let pennies = 0;
document.getElementById('pennies').innerHTML = pennies;


function handleClickEvent(){

let amountTendered = document.getElementById('amount-tendered').value * 100;
  
let amountSale = document.getElementById('amount-sale').value * 100; 
  
let totalCentsToReturn = (amountTendered - amountSale);

let twenties = Math.floor((totalCentsToReturn) / 2000);
document.getElementById('twenties').innerHTML = twenties;
  
let tens = Math.floor((totalCentsToReturn%2000) / 1000); 
document.getElementById('tens').innerHTML = tens; 
   
let fives = Math.floor(((totalCentsToReturn%2000)%1000) / 500);
document.getElementById('fives').innerHTML = fives;  
  
let ones = Math.floor((((totalCentsToReturn%2000)%1000)%500) / 100);
document.getElementById('ones').innerHTML = ones; 
  
let quarters = Math.floor(((((totalCentsToReturn%2000)%1000)%500)%100) / 25);
document.getElementById('quarters').innerHTML = quarters; 
  
let dimes = Math.floor((((((totalCentsToReturn%2000)%1000)%500)%100)%25) / 10);
document.getElementById('dimes').innerHTML = dimes; 
  
let nickels = Math.floor(((((((totalCentsToReturn%2000)%1000)%500)%100)%25)%10) / 5);
document.getElementById('nickels').innerHTML = nickels; 
 
let pennies = Math.ceil(((((((totalCentsToReturn%2000)%1000)%500)%100)%25)%10)%5);
document.getElementById('pennies').innerHTML = pennies; 
  
}
document.getElementById('calculate-button').addEventListener('click', handleClickEvent)