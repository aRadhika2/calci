var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.button');


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}



function log() {
    screen.value = Math.log(screen.value);
}




function e() {
    
        screen.value = Math.exp(screen.value);
}

 
function equals(){
    if (screen.value.length >= 19) {
        screen.value = "Overload Error";
      }
    else if (eval(screen.value) == SyntaxError) {
        screen.value = "Syntax Error";
      }
    else screen.value = eval(screen.value);
    
}





function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
