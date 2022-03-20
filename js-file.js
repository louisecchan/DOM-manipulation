// your javascript file
// const container = document.querySelector("#container");
// const content = document.createElement("div");

// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// Task 1:  Add a <p> with red text that says “Hey I’m red!”

let para = document.createElement("p");
para.textContent = "Hey, I'm red.";
para.style.color = "red";
document.getElementById("container").appendChild(para);

// Task 2: Add an <h3> with blue text that says “I’m a blue h3!”

let head3 = document.createElement("h3");
head3.textContent = "I'm a blue h3!";
head3.style.color = "blue";
document.getElementById("container").appendChild(head3);

// Task 3: Add a <div> with a black border and pink background color with the following elements inside of it:

const newDiv = document.createElement("div");
newDiv.style.border = "thick solid black";
newDiv.style.backgroundColor = "pink";

// a. another <h1> that says “I’m in a div”

const head1 = document.createElement("h1");
head1.textContent = "I'm in a div";

newDiv.appendChild(head1);

// b. a <p> that says “ME TOO!”

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

newDiv.appendChild(para2);

document.body.insertBefore(newDiv, null);

