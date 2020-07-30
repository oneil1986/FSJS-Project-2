/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// global variables that store the DOM elements
const students = document.getElementsByClassName("student-item");
const itemPerPage = 10;

/**
 * `showPage` function will hide all of the items in the list except for the ten that needs to be shown.
 * @param  {Array} list Array of students
 * @param  {Number} page The page to be displayed
 **/

const showPage = (list, page) => {
  // set the start and end index
  const startIndex = page * itemPerPage - itemPerPage;
  const endIndex = page * itemPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    }

    if (i >= endIndex || i < startIndex) {
      list[i].style.display = "none";
    }
  }
};

showPage(students, 1);

/**
 * `appendPageLinks` function will generate, append, and add functionality to the pagination buttons.
 * @param  {Array} List Array of students
 **/

const appendPageLinks = list => {
  const pageCount = list.length / itemPerPage;

  // create a div, set className, append to .page div.
  const div = document.createElement("div");
  div.className = "pagination";
  const pageDiv = document.querySelector(".page");
  pageDiv.appendChild(div);

  // Add ul to the div
  const ul = document.createElement("ul");
  div.appendChild(ul);

  //   create the links
  const li = document.createElement("li");

  for (let i = 0; i < pageCount; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i + 1;
    li.appendChild(link);
  }

  //   Add active class to links
  const firstLink = li.firstElementChild;
  firstLink.className = "active";

  const allLinks = li.children;

  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", event => {
      const link = event.target;
      for (let j = 0; j < allLinks.length; j++) {
        allLinks[j].className = "";
      }
      if (link) {
        link.className = "active";
      }
      showPage(students, event.target.textContent);
    });
  }

  //   append the links to the ul
  ul.appendChild(li);
};

appendPageLinks(students);

// Search filed
function studentSearch(student) {
  function createElement(elementName, property, value) {
    const element = document.createElement(elementName, property, value);
    element[property] = value;
    return element;
  }
  const div = createElement("div", "className", "student-search");
  const input = createElement("input", "placeholder", "Search for students...");
  const button = createElement("button", "textContent", "Search");
  const pageHeader = document.querySelector(".page-header");

  div.appendChild(input);
  div.appendChild(button);

  pageHeader.insertBefore(div, pageHeader.firstElementChild);

  input.addEventListener("keyup", e => {
    let searchValue = e.target.value.toLowerCase();

    for (let i = 0; i < student.length; i++) {
      //  Get the first h3 that match searchValue
      const studentDiv = student[i].getElementsByTagName("h3")[0];
      const h3 = studentDiv.textContent;

      // Display only the student of searchValue and hide the rest
      h3.toLowerCase().indexOf(searchValue) !== -1
        ? (student[i].style.display = "")
        : (student[i].style.display = "none");

      //   If the input field is empty call the showPage function
      if (searchValue.length === 0) {
        showPage(student, 1);
      }
    }
  });

  button.addEventListener("click", e => {
    e.preventDefault();

    let searchValue = e.target.value.toLowerCase();

    for (let i = 0; i < student.length; i++) {
      //  Get the first h3 that match searchValue
      const studentDiv = student[i].getElementsByTagName("h3")[0];
      const h3 = studentDiv.textContent;

      // Display only the student of searchValue and hide the rest
      h3.toLowerCase().indexOf(searchValue) !== -1
        ? (student[i].style.display = "")
        : (student[i].style.display = "none");

      //   If the input field is empty call the showPage function
      if (searchValue.length === 0) {
        showPage(student, 1);
      }
    }
  });
}

studentSearch(students);
