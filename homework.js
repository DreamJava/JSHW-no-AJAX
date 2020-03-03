/* Part 1 */

// 1.
function fib(n) {

    let nth = 0;
    let fib1 = 0; // 1st fibonacci
    nth++; // = 1
    let fib2 = 1; // 2nd fibonacci
    nth++; // = 2
    let fib3;

    while (nth != n) {

        fib3 = fib1 + fib2; // next fibonacci
        nth++; // next nth value
        fib1 = fib2; // setup for
        fib2 = fib3; // next fibonacci

    }

    return nth = fib3;

}

// 2.
function bubbleSort(numArray) {

    for (let pass = numArray.length; pass != 0; pass--) {

        for (let index = numArray.length; index != 0; index--) {

            if (numArray[index] > numArray[index - 1]) {
                let ni = numArray[index];

                numArray[index] = numArray[index - 1];
                numArray[index - 1] = ni;
            } else {} // next pair
        }
    }

    return numArray;
}

// 3.
function reverseStr(someStr) {
    let len = string.length + 1;
    let rev = new String;
    for (let i = len; i != -2; i--) {
        rev = rev + (string.slice(i, i + 1));
    }
    return rev;
}

// 4.
function factorial(someNum) {
    let fact = 1;
    for (let num = 1; num <= n; num++) {
        fact *= num;
    }
    return fact;
}

// 5.
function substring(someStr, length, offset) {
    return someStr.substring(offset, offset + length);
}

// 6.
function isEven(someNum) {
    let remainder = someNum;
    let ret = false;
    while (!((remainder -= 2) < 0))
        if (remainder == 0) ret = true;
    return ret;
}

// 7.
function isPalindrome(someStr) {
    someStr = someStr.toLowerCase();
    let lIndex = -1;
    let rIndex = someStr.length++;
    let palindrome = true;
    while (++lIndex < --rIndex)
        if (someStr.charAt(lIndex) != someStr.charAt(rIndex)) palindrome = false;
    return palindrome;
}

// 8.
function printShape(shape, height, character) {

    const shapes = {
        SQUARE: 'Square',
        TRIANGLE: 'Triangle',
        DIAMOND: 'Diamond'
    }

    let printStr = "";
    let itHeight = width = 0; // width = total height
    itHeight = itHeight;

    switch (shape) {

        case shapes.SQUARE:
            while (itHeight++ < height) {
                while (width++ < height) printStr += character;
                printStr += "\n";
                width = 0;
            }
            console.log(printStr);
            break;

        case shapes.TRIANGLE:
            while (itHeight++ < height) {
                while (width++ < itHeight) printStr += character;
                printStr += "\n";
                width = 0;
            }
            console.log(printStr);
            break;

            /*         case shapes.DIAMOND:
                        while (itHeight++ < height) {
                            let printStr = new String;
                            let halfway = --height / 2; // odd# (4-1)/(2)+1 = 3
                            halfway++;
                            width = 0;
                            while (width++ < height) {
                                if (itHeight == halfway) {
                                    printStr += character;
                                    console.log(printStr);
                                } else printStr += " " * (height - width + 1) + character * ((height - width) / 2) + " " * (height - width + 1)
                            }
                        }
             */
    }
}

let car = { type: 'Nissan', model: 'Kicks', color: 'white' };

// 9.
function traverseObject(someObj) {
    console.log(Object.values(someObj));
}

// 10.
function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

// 11.
function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
}

// 12.
function Person(name, age) {
    this.theirName = name;
    this.theirAge = age;
}

// 13.
function getPerson(name, age) {
    return new Person(name, age)
}

/* Part 2 */

// 1.
function getUSA() {
    let element = document.querySelector("h1").children[1];
    console.log(element.innerHTML);
}

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let ppl = document.querySelectorAll(".empName + td");
    let sales = document.querySelectorAll(".empName");
    for (let i = 0; i < ppl.length; i++)
        if (ppl[i].innerHTML === "Sales") console.log(sales[i].innerHTML);
}

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    let span = document.querySelectorAll("a span");
    for (let s of span) console.log(s.innerHTML);
}

// 4. Hobbies
// Define function getHobbies()
// Find the checked option in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies() {
    let hobbies = document.querySelectorAll("select[name=hobbies] > [selected=selected]");
    //console.log(hobbies.innerHTML);
    for (let selected of hobbies)
        console.log(selected.innerHTML);
    //     if (selected.getAttribute === "selected") console.log(selected.innerHTML);
}

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    let elements = document.getElementsByTagName("*"); //("[data-customAttr]");
    for (let element of elements)
        if (element.hasAttribute("data-customAttr")) {
            console.log(element.getAttribute("data-customAttr"));
            console.log(element);
            console.log("--");
        }
}

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
//
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.getElementById("num1").onkeypress = function() { sumOfTwo() };
document.getElementById("num2").onkeypress = function() { sumOfTwo() };

function sumOfTwo() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").vaule;
    if (n1 && n2) {
        document.getElementById('sum').innerHTML = `${Number(n1) + Number(n2)}`;
    }
    // let n1 = parseFloat(document.getElementById("num1").value);
    // let n2 = parseFloat(document.getElementById("num2").vaule);
    // if (n1 && n2) {
    //     document.getElementById('sum').innerHTML = n1 + n2;
    // }
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let skills = document.getElementsByName("skills")[0].addEventListener("change", function() { alert(`You may think you are good at ${this.value}, \nbut Matt Neal is better!!!`) }, false);
//     console.log("Skill event listener added.");

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let colors = document.getElementsByName("favoriteColor")[0].addEventListener("change", function() { alert(`Why did you change your favorite color to ${this.value}?`) }, false);
// console.log("Color event listener added.");

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function currentTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    document.getElementById('currentTime').innerHTML = h + ":" + m + ":" + s;
}

window.setInterval(function() { currentTime(); }, 1000);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).