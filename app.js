const rect = require('./rectangle');

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions should be greater than zero. Recieved: ${l}, ${w}`);
    } else {
        console.log(`The area of the rectangle is: ${rect.area(l, w)}`);
        console.log(`The perimeter of the rectangle is: ${rect.perimeter(l, w)}`);
    }
    
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);