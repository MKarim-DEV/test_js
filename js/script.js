
 const cells = document.querySelectorAll(".cell");
 cells.forEach((cell) => {
   cell.addEventListener("click", () => {
     cell.classList.remove("d-block");
     cell.classList.add("d-none");
   });
 });