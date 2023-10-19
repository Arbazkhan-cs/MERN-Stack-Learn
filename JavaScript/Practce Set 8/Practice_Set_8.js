// // Inner/Outer Html======================================================================
// let container = document.getElementById("header-container");
// console.log(container.innerHTML)
// container.innerHTML = "Hello <b>Worold</b>"
// console.log(container.innerHTML)
// console.clear()

// console.log(container.outerHTML)
// container.outerHTML = "<div>Hello Wolrd</div>"
// console.log(container.outerHTML)




// // Attrubute Methods======================================================================
// let container = document.getElementById("header-container");
// console.log(container);
// console.log(container.attributes); // Elem.attributes

// // Elem.getAttribute("attribute_name")
// console.log(container.getAttribute("class")); 

// // Elem.setAttribute("attribute_name", "attribute_value")
// container.setAttribute("style", "color:white; background:black; padding: 30px;");
// console.log(container.getAttribute("style"));

// // Elem.removeAttribute("attribute_name")
// container.removeAttribute("class")
// console.log(container.getAttribute("class"));

// // Elem.hasAttribute("attribute_name")
// console.log(container.hasAttribute("style")) //true
// console.log(container.hasAttribute("height")) //false




// // Insertion Methods =====================================================================
// let container = document.getElementsByTagName("div")[0];
// let div = document.createElement("div");
// div.innerHTML = "Hii This Is Cretaed Div";

//  container.append(div)  // It will add it to the end of the container
// // container.appendChild(div) //We can also use appendChild for the same.
// container.prepend(div) // It will add it to the starting of the container.
// container.before(div) // It will add it before the container.
// container.after(div) // It will add it after the container.
// container.replaceWith(div) // It will Replace container with div.




// // insertAdjacentHTML/Text/Element ======================================================
// let container = document.querySelector(".container");
// container.insertAdjacentHTML("afterbegin", "<div>HelloWorld</div>")
// container.insertAdjacentHTML("afterend", "<div>HelloWorld</div>")
// container.insertAdjacentHTML("beforebegin", "<div>HelloWorld</div>")
// container.insertAdjacentHTML("beforeend", "<div>HelloWorld</div>")





// // className and classList
// let container = document.querySelectorAll(".container")[0];
// console.log(container.classList)
// container.className = "color-white bg-black"  // Adding Overwiting classes in the container.
// console.log(container.classList)

// container.classList.add("font-100") // To add new classes in the container
// console.log(container.classList)
// // We have more methods like: elem.classList.remove/contain/...




