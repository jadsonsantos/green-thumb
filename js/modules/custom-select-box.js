export default function initCustomSelectBox() {
  const selected = document.querySelectorAll(".selected");
  const optionsList = document.querySelectorAll(".option");
  
  selected.forEach(o => {
    o.addEventListener("click", () => {
      o.previousElementSibling.classList.toggle("active");
    });
  });
  
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      const selectValue = o.querySelector('input').getAttribute('id');
      const selectBoxEl = o.closest('.select-box').querySelector('.selected');

      selectBoxEl.innerHTML = o.querySelector("label").innerHTML;
      selectBoxEl.setAttribute("value", selectValue);
      o.closest('.options-container').classList.remove("active");
    });
  });
}