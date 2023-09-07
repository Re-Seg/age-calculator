var days = document.querySelector('#days');
var months = document.querySelector('#months');
var years = document.querySelector('#years');
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth()+1;
var d = date.getDate();
var button = document.querySelector('#submit');
var s1 = document.querySelector('.days');
var s2 = document.querySelector('.months');
var s3 = document.querySelector('.years');

button.addEventListener('click', egine);
function egine() {
    var test= /./;
    var span1 = document.querySelector('#span1');
    var span2 = document.querySelector('#span2');
    var span3 = document.querySelector('#span3');
    var b = years.value%4;
    if (test.test(days.value)==false || test.test(months.value)==false || test.test(years.value)==false ) {
        if (test.test(days.value)==false){
            span1.innerHTML="This field is required";
            span1.style.display = 'inline';
        }if (test.test(months.value)==false){
            span2.innerHTML="This field is required";
            span2.style.display = 'inline';
        }if (test.test(years.value)==false){
            span3.innerHTML="This field is required";
            span3.style.display = 'inline';
        }
    }else if (((months.value==1  || months.value==3 || months.value==5 || months.value==7 || months.value==10 || months.value==12) && days.value>31) || ((months.value==4 || months.value==6 || months.value==9 || months.value==11)&& days.value>30 ) ||  (b>0 && months.value==2 && days.value>28) || (b==0 && months.value==2 &&  days.value>29) || days.value<=0  || months.value>12  || months.value<=0  ||  y<years.value) {
        span1.innerHTML = "Must be a valid day";
        span2.innerHTML = "Must be a valid month";
        span3.innerHTML = "Must be in past";
        span1.style.color = "rgba(255, 255, 255, 0)";
        span2.style.color = "rgba(255, 255, 255, 0)";
        span3.style.color = "rgba(255, 255, 255, 0)";
        if (((months.value==1  || months.value==3 || months.value==5 || months.value==7 || months.value==10 || months.value==12) && days.value>31) || ((months.value==4 || months.value==6 || months.value==9 || months.value==11)&& days.value>30 ) || (b>0 && months.value==2 && days.value>28) || (b==0 && months.value==2 &&  days.value>29) || days.value<=0){
            span1.style.display = 'inline';
            span1.style.color = "inherit";
        }if (months.value>12  || months.value<=0){
            span2.style.display = 'inline';
            span2.style.color = "inherit";
        }if (y<years.value) {
            span3.style.display = 'inline';
            span3.style.color = "inherit";
        }
    }else{
        span1.style.display = 'none';
        span2.style.display = 'none';
        span3.style.display = 'none';
        if (days.value>d) {
            if (m==1 || m==3 || m==5 || m==7 || m==10 || m==12) {
                m = m-1;
                d= d+31;
                s1.innerHTML = d-days.value;
            }else if (m==4 || m==6 || m==9 || m==11) {
                m = m-1;
                d= d+30;
                s1.innerHTML = d-days.value;
            }else{
                m = m-1;
                d= d+28;
                s1.innerHTML = d-days.value; 
            }
        }else{
            s1.innerHTML = d-days.value; 
        }
        if (months.value>m) {
            y= y-1;
            m = m+12;
            s2.innerHTML = m-months.value;
            
        }else{
            s2.innerHTML = m-months.value;
        }
        s3.innerHTML = y-years.value;
    }
}