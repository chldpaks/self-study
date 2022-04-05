var Links = { //객체화
  setColor:function(color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length) {
    //     console.log(alist[i]);
    //     alist[i].style.color = color;
    //     i = i+1;
    // }
    $('a').css('color', color); //jQuery문법  
  }
}

// function LinksSetColor(color) { //함수
//   var alist = document.querySelectorAll('a');
//   var i = 0;
//   while(i<alist.length) {
//       console.log(alist[i]);
//       alist[i].style.color = color;
//       i = i+1;
//   }
// }

var Body = {
  setColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
// function BodySetColor(color) {
//   document.querySelector('body').style.color = color;
// }
// function BodySetBackgroundColor(color) {
//   document.querySelector('body').style.backgroundColor = color;
// }
function nightDayHandler(self){ //매개변수.
                                //this는 더 이상 input버튼이 아니다.
                                //즉 독립된 함수를 만들게 되면 전역객체를 가리키게 된다.
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setBackgroundColor('black');//BodySetBackgroundColor('black'); //target.style.backgroundColor = 'black';
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
