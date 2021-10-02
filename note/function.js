// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function delclaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCarAndPoint -> createCard, createCarAndPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello')


// 2. Parameters
// - premitive parameters: passed by value
// - object parameters: passed by reference


function changeName(obj) {
    obj.name = 'coder';
}
const eunjin = { name: 'eunjin' };
changeName(eunjin);
console.log(eunjin);


// 3. Default Parameters (added in ES6)

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!')


// 4. Rest Parameters (added in ES6)

function printAll(...args) {                        // 배열 형태로 받음 
    for (let i = 0: i < args.length; i++) {
        console.log(args[i])
    }
}
printAll('dream', 'coding', 'eunjin')

// 5. Local scope

// 6. Return a value

// 7. Early return, Early exit

//-----------------------------------------------------

// First-class function
// - functions are treated like any other variable
// - can be assigned as a value to variable
// - can be passed as an argument to other functions.
// - can be returned by another function

// 1. Function expression
// - a function declaration can be called earlier than it its defined. (hoisted)
// - a function expression is created when the execution reaches it.

    const print = function () {         // anonymous function
        conole.log('print');
    };
    print()
    const printAgain = print;
    printAgain();
    const sumAgain = sum;
    console.log(sumAgain(1, 3));


// 2. Callback function using function expression
    
    function randomQuiz(answer, printYes, printNo) {
        if (answer === 'love you') {
            printYes();
        } else {
            printNo();
        }
    }

    // anonymous function
    const printYes = function () {
        console.log('yes!');
    };

    // named function
    // better debugging in debuggers stack traces
    // recursions

    const printNo = function print() {
        console.log('no!');
    };
    randomQuiz('wrong', printYes, printNo);
    randomQuiz('love you', printYes, printNo);

    //Arrow function
    // always anonymous

    const simplePrint = function () {
        console.log('simplePrint!');
    };

    const simplePrint = () => console.log('simplePrint!');
    const add = (a, b) => a + b;
    const simpleMultiply = (a, b) => {
        //do something more
        return a + b;
    };

