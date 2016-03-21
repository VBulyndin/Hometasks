var array = [];
for (var i = 0; i < 5; i++) {
  array[i] = prompt('Ваше имя?','');
}
console.log('array', array);
var userLog = prompt('Введите имя пользователя для авторизации:','');
for (var i = 0; i < 5; i++) {
  if (userLog === array[i]) {
    var user = array[i];
    alert (userLog + ', Вы успешно авторизировались');
  }else if (user === undefined) {
    alert (userLog + ', Вам отказано в доступе');
    break;
  }
}
