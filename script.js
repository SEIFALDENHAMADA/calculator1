var dis = document.querySelector('#display');
var buttons = document.querySelectorAll('button');

var arBtn = Array.from(buttons);

var string = '';
arBtn.forEach((btn) => {
btn.addEventListener('click', (event) => {
    if (event.target.innerHTML == 'AC') {
        string = '';
        dis.value = string;
    } 
    else if(event.target.innerHTML == '÷'){
        dis.value = string + "÷";
        string = string + ' / ';
        
        
        
    }
    else if (event.target.innerHTML == 'DEL') {
        string = string.substring(0, string.length - 1);
        dis.value = string;
    } 
    else if (event.target.innerHTML == '=') {
        string = eval(string);
        dis.value = string;
    } 
    else {
        string = string + event.target.innerHTML;
        dis.value = string;
    }
    });
});
