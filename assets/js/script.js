let icon = document.querySelector(".box i");
let upload = document.querySelector(".box input");
let tBody = document.querySelector("table tbody");
let dragArea = document.querySelector(".box");

icon.addEventListener("click", function () {
  upload.click();
});

upload.addEventListener("change", function (e) {
  for (const file of e.target.files) {
    let reader = new FileReader();

    reader.onload = function (event) {
      tBody.innerHTML += `<tr>
            <td><img src="${event.currentTarget.result}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size / 1024} KB</td>
            <td><i class="delete fa-solid fa-trash"></i></td>
            </tr>`;

      let deleteIcons = document.querySelectorAll(".delete");

      deleteIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
          icon.parentNode.parentNode.remove();
        });
      });
    };

    reader.readAsDataURL(file);
  }
});

dragArea.ondragover = (e) => {
  e.preventDefault();
};

dragArea.ondrop = (e) => {
  e.preventDefault();

  let reader = new FileReader();

  reader.onload = function (event) {
      console.log(this);
    tBody.innerHTML += `<tr>
                <td><img src="${event.currentTarget.result}" alt=""></td>
                <td>${file.name}</td>
                <td>${file.size / 1024} KB</td>
                <td><i class="delete fa-solid fa-trash"></i></td>
                </tr>`;

                
    let deleteIcons = document.querySelectorAll(".delete");
    deleteIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        icon.parentNode.parentNode.remove();
      });    
    });
  };


};
