// var coffee01 = document.querySelector("#coffee01");
// coffee01.addEventListener("focus", function () {

// var modal01 = document.querySelector("#coffeeInfo01");
// modal01.style.display = "block"; });


// coffee01.addEventListener("blur", function () {
// var modal01 = document.querySelector("#coffeeInfo01");
// modal01.style.display = "none";});



var coffee01 = document.querySelectorAll('#coffee01');
var modal01 = document.querySelectorAll('#coffeeInfo01');;

// 팝업 열기
for (var i = 0; i < coffee01.length; i++) {
  coffee01[i].addEventListener('click', function () {
    modal01 = this.getAttribute('href');
    document.querySelector(modal01).style.display = 'block';
  });
}

// 팝업 닫기
for (var x = 0; x < coffee01.length; x++) {
  modal01[x].addEventListener('click', function () {
    this.style.display = 'none';
  });
}




// 2번째 원두
var coffee02 = document.querySelector("#coffee02");
coffee02.addEventListener("focus", function () {

  var modal02 = document.querySelector("#coffeeInfo02");
  modal02.style.display = "block";
});

coffee02.addEventListener("blur", function () {

  var modal02 = document.querySelector("#coffeeInfo02");
  modal02.style.display = "none";
});