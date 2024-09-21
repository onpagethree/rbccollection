// coffee01에 대한 flip 이벤트 리스너
document.getElementById("coffee01").addEventListener("click", function (e) {
  e.preventDefault();
  const content = this.closest('.contents');
  content.classList.toggle('flipped');
});

// coffee02에 대한 flip 이벤트 리스너
document.getElementById("coffee02").addEventListener("click", function (e) {
  e.preventDefault();
  const content = this.closest('.contents');
  content.classList.toggle('flipped');
});