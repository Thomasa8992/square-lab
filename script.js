document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement('button');
    button.className = 'click-me';
    document.body.appendChild(button);
    button.innerHTML = 'Click me!';

    var container = document.createElement('div');
    document.body.appendChild(container);
    container.className = "container";

    var i = -1;
    // creates my boxes
    button.addEventListener('click', function(){
        var square = document.createElement('div');
        square.className = 'square';
        document.body.appendChild(square);
        i++;
        square.id = i;
        //Displays numbers when hovered on
    square.addEventListener('mouseenter', function (){
            square.innerText = square.id;
    });
         //Gets rid of text
    square.addEventListener('mouseleave', function(){
            square.innerText = '';
    });
        //Changes the color on click
    square.addEventListener ('click', function() {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        square.style.backgroundColor = hue;
    }); 
    square.addEventListener('dblclick', function(){
        var prevSquare = square.previousElementSibling;
        var nextSquare = square.nextElementSibling;
        if (square.id % 2 == 0 && nextSquare !== null) {
            nextSquare.remove();
        } else if (square.id % 2 !== 0 && prevSquare !== button) {
            prevSquare.remove();
        } else {
            alert('Element Does Not Exist');
        }
    });    
    });
});

