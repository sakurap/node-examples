const rectangle = require('./rectangle');
const rect = require('./rectangle');

function solveRect(l,w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l,w, (err, rectangle) => {
        if (err) {
            console.log('ERROR', err.message);
        } else {
            console.log(`The area of the rectangle with dimension ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`The perimeter of the rectangle is: ${rectangle.perimeter()}`);
        }
    }); 
    console.log('This statement is after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);