import "./index.css";

const loginBtn = document.getElementById("login");
const modal = document.getElementById("modal");
const clostBtn = document.getElementById("close");

loginBtn.addEventListener("click", () => {
  modal.classList.remove("opacity-0", "pointer-events-none");
});

clostBtn.addEventListener("click", () => {
  modal.classList.add("opacity-0", "pointer-events-none");
});

function renderList(id) {
  const cardUi = document.getElementById(id);

  let svgColor = "stroke-primary";

  if (id === "list2") {
    svgColor = "stroke-white";
  }

  const tempString = `
  <li class="flex items-center mt-5">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-7 h-7 mr-3 ${svgColor}"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
  />
</svg>item bla bla bla
    
  </li>
  `;

  let newRenderString = "";

  for (let i = 0; i < 5; i++) {
    newRenderString += tempString;
  }

  cardUi.innerHTML = newRenderString;
}

renderList("list1");
renderList("list2");
renderList("list3");
