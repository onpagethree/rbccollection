//JavaScript 출처
//https://abcdqbbq.tistory.com/93
//스승님


// 1번째 원두
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
var coffee02 = document.querySelectorAll('#coffee02');
var modal02 = document.querySelectorAll('#coffeeInfo02');;

// 팝업 열기
for (var i = 0; i < coffee02.length; i++) {
  coffee02[i].addEventListener('click', function () {
    modal02 = this.getAttribute('href');
    document.querySelector(modal02).style.display = 'block';
  });
}

// 팝업 닫기
for (var x = 0; x < coffee01.length; x++) {
  modal02[x].addEventListener('click', function () {
    this.style.display = 'none';
  });
}