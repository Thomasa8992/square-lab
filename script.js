

// document.addEventListener('DOMContentLoaded', function(){
//     var button = document.createElement('button');
//     button.className = 'click-me';
//     document.body.appendChild(button);
//     button.innerHTML = 'Click me!';
//     button.addEventListener('click', function(){
//         var square = document.createElement('div');
//         square.className = 'square';
//         document.body.appendChild(square);
//         square.addEventListener('mouseover', function (){
//         square.addEventListener ('click', function() {
//             var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//             square.style.backgroundColor = hue;
//         square.addEventListener('dblclick', function(){
//         });
//         });
//         });
//         });
//     });

// var squares= Array.prototype.slice.call(document.querySelectorAll('div'));


/*document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement('button');
    button.className = 'click-me';
    document.body.appendChild(button);
    button.innerHTML = 'Click me!';
    // creates my boxes
    button.addEventListener('click', function(){
        var square = document.createElement('div');
        square.className = 'square';
        document.body.appendChild(square);
        //Displays numbers when hovered on
        square.addEventListener('mouseenter', function (){
            var squares= Array.prototype.slice.call(document.querySelectorAll('.square'));
            for(var i = 0; i < squares.length; i++){
                
         }
         //Gets rid of text
        square.addEventListener('mouseleave', function(){
            square.innerText = '';
        //Changes the color on click
        square.addEventListener ('click', function() {
            var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            square.style.backgroundColor = hue;
        square.addEventListener('dblclick', function(){
        });
        });
        });
        });
    });
});*/
     

document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement('button');
    button.className = 'click-me';
    document.body.appendChild(button);
    button.innerHTML = 'Click me!';
    // var container = document.createElement('div');
    // document.body.appendChild(container);
    var i = -1;
    // creates my boxes
    button.addEventListener('click', function(){
        var square = document.createElement('div');
            square.className = 'square';
            document.body.appendChild(square);
            i++;
            square.id = [i];
        //Displays numbers when hovered on
        square.addEventListener('mouseenter', function (){
            square.innerText = square.id;
         //Gets rid of text
        square.addEventListener('mouseleave', function(){
            square.innerText = '';
        //Changes the color on click
        square.addEventListener ('click', function() {
            var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            square.style.backgroundColor = hue;
        square.addEventListener('dblclick', function(){
            if(square.id % 2 === 0){
                document.body.previousElementSibling.removeChild();
            } else if (square.id % 2 !== 0) {
                documnet.body.nextElementSibling.removeChild();
            } 
        });
        });

        });
    });
});
     });