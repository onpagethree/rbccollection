//JavaScript 출처
//https://abcdqbbq.tistory.com/93
//스승님



// 텍스트 팝업
var text01 = document.querySelectorAll('#text01');
var modaltext = document.querySelectorAll('#textFull01');;

// 팝업 열기
for (var i = 0; i < text01.length; i++) {
  text01[i].addEventListener('click', function () {
    modaltext = this.getAttribute('href');
    document.querySelector(modaltext).style.display = 'block';
  });
}

// 팝업 닫기
for (var x = 0; x < text01.length; x++) {
  modaltext[x].addEventListener('click', function () {
    this.style.display = 'none';
  });
}

//--------------

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
for (var x = 0; x < coffee02.length; x++) {
  modal02[x].addEventListener('click', function () {
    this.style.display = 'none';
  });
}


// 3번째 원두
var coffee03 = document.querySelectorAll('#coffee03');
var modal03 = document.querySelectorAll('#coffeeInfo03');;

// 팝업 열기
for (var i = 0; i < coffee03.length; i++) {
  coffee03[i].addEventListener('click', function () {
    modal03 = this.getAttribute('href');
    document.querySelector(modal03).style.display = 'block';
  });
}

// 팝업 닫기
for (var x = 0; x < coffee03.length; x++) {
  modal03[x].addEventListener('click', function () {
    this.style.display = 'none';
  });
}