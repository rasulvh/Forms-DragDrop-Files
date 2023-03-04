// "use strict";

// // let form = document.querySelector("form")
// // form.addEventListener("submit", function(e){
// //     e.preventDefault();
// //     console.log("Form submitted");
// // })

// let dragElems = document.querySelectorAll(".item")
// let dropElem = document.querySelector(".drop-elem")

// // dragElem.ondrag = () =>{
// //     console.log("drag-continues")
// // }

// // dragElem.ondragend = () =>{
// //     console.log("drag-end")
// // }

// for (const elem of dragElems) {
//     elem.ondragstart = (e) =>{
//         e.dataTransfer.setData("id", e.target.getAttribute("id"))
//     }
// }

// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dropElem.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id")
//     let elem = document.getElementById(id)
//     dropElem.append(elem)
// }



// let icon = document.querySelector(".box i");
// let upload = document.querySelector(".box input");
// let tBody = document.querySelector("table tbody");
// let dragArea = document.querySelector(".box");

// icon.addEventListener("click", function () {
//   upload.click();
// });

// upload.addEventListener("change", function (e) {
//   for (const file of e.target.files) {
//     let reader = new FileReader();

//     reader.onload = function (event) {
//       tBody.innerHTML += `<tr>
//             <td><img src="${event.currentTarget.result}" alt=""></td>
//             <td>${file.name}</td>
//             <td>${Math.floor(file.size / 1024)} KB</td>
//             </tr>`;
//     };

//     reader.readAsDataURL(file);
//   }
// });
