//trigger header expand
const tombol = document.getElementById("headerExpand-trigger-open");
const teks = document.querySelector(".headerExpand");

tombol.addEventListener("click", function() {
  teks.style.display = "block";
});

//trigger header close
const tombol2 = document.getElementById("headerExpand-trigger-close");
const teks2 = document.querySelector(".headerExpand");

tombol2.addEventListener("click", function() {
  teks2.style.display = "none";
});
