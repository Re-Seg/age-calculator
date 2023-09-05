var lowDays = document.querySelector('#l-days');
var lowMonths = document.querySelector('#l-months');
var lowYears = document.querySelector('#l-years');
var highMonths = document.querySelector('#h-months');
var highYears = document.querySelector('#h-years');
var days = document.querySelector('#days');
var months = document.querySelector('#months');
var years = document.querySelector('#years');
var body = document.querySelector('body');
setInterval(field,1000);
function field(){
    var test1= /./;
    if(test1.test(days.value)==true){
        lowDays.style.display = 'none';
        highMonths.style.left = '-120px';
    }else{
        lowDays.style.display = 'inline';
        highMonths.style.left ='inline';
    }
    if (test1.test(months.value)==true){
        lowMonths.style.display = 'none';
        highYears.style.left = '-120px';
    }else{
        lowMonths.style.display = 'inline';
        highMonths.style.left = 'inline';
    }if (test1.test(years.value)==true){
        lowYears.style.display = 'none';
    }else{
        lowYears.style.display = 'inline';
    }
}