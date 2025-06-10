const teachers = [
  "Ibu Siti - Matematika",
  "Pak Budi - Bahasa Indonesia",
  "Bu Nina - IPA",
];

const students = [
  "Andi - Kelas 7A",
  "Rina - Kelas 7B",
  "Budi - Kelas 7C",
  "Sari - Kelas 8A",
];

function populateList(id, items) {
  const listElement = document.getElementById(id);
  listElement.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
}

// Populate data on load
document.addEventListener("DOMContentLoaded", () => {
  populateList("teacher-list", teachers);
  populateList("student-list", students);
});
