const sidebar = document.querySelector(".sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebar");
const closeSidebarBtn = document.querySelector(".close-sidebar");
const main = document.querySelector("main");


function toggleSidebar() {
  sidebar.classList.toggle("open");
  main.classList.toggle("sidebar-open");
  if (sidebar.classList.contains("open")) {
    toggleSidebarBtn.querySelector("i").style.transform = "rotate(180deg)";
  } else {
    toggleSidebarBtn.querySelector("i").style.transform = "rotate(0deg)";
  }
}

toggleSidebarBtn.addEventListener("click", toggleSidebar);
closeSidebarBtn.addEventListener("click", toggleSidebar);



function toggleThread(threadId) {
  const thread = document.getElementById(threadId);
  const button = thread.previousElementSibling;
  const arrow = button.querySelector(".arrow");
  if (thread.style.display === "none" || thread.style.display === "") {
    thread.style.display = "block";
    arrow.textContent = "▼";
  } else {
    thread.style.display = "none";
    arrow.textContent = "▶";
  }
}

function toggleMethod(methodId) {
  const method = document.getElementById(methodId);
  const button = method.previousElementSibling;
  const arrow = button.querySelector(".arrow");
  if (method.style.display === "none" || method.style.display === "") {
    method.style.display = "block";
    arrow.textContent = "▼";
  } else {
    method.style.display = "none";
    arrow.textContent = "▶";
  }
}


document.querySelectorAll(".thread-content, .method-content").forEach((el) => {
  el.style.display = "none";
});
document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.textContent = "▶";
});
