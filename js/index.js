// JavaScript
const accordionBtn = document.querySelectorAll(".accordion-btn");
const accordionSectionParts = document.querySelectorAll(".accordion-part");

accordionBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.classList.toggle = "active";
    const iconSpan = e.target.querySelector("span");
    const accordionContent = e.target.nextElementSibling;

    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
    if (iconSpan.innerText === "+") {
      iconSpan.innerText = "-";
    } else {
      iconSpan.innerText = "+";
    }

    const sectionDivs = Array.from(
      e.target.parentElement.parentElement.children
    );
    let filteredDivs = sectionDivs.filter((sibling) => {
      return sibling != e.target.parentElement;
    });
    filteredDivs.forEach((e) => {
      e.lastChild.previousElementSibling.style.display = "none";
    });
  });
});

//Pure javascript get siblings amma isletmedim ozum yuxarida yazdim basqa cur.
let getSiblings = function (e) {
  let siblings = [];
  let sibling = e.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
//Pure javascript get siblings
// JavaScript

// // JQuery
// $(document).ready(function(){
//   $( function() {
//     $( ".accordion-part" ).accordion({
//       collapsible: true
//     });
//   } );
// });
// //Jquery
