function pow(a,n){
  if (n <= 0) {                 //Проверяем степень не должна быть меньше или равной 0
    alert('Введите целое число больше нуля');
  } else if (parseInt( a ) != a) {      //Проверяем целое ли число
      alert('Введите целое число');
    }else if (parseInt( n ) != n){      //Проверяем целое ли число
      alert('Введите целое число');
    }{
    var b = a;
    for (var i = 1; i < n; i++) {
      b *= a;
    }
    return b;
  }
}
var a = prompt('Введите целое число','');
var n = prompt('Введите целое число степени','');
var result = pow( a , n );
console.log('Число:', a );
console.log('В степени:', n );
console.log('Ответ:', result );
