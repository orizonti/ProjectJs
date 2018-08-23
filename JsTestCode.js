
console.log("=====     TESTING STRINGS WORK    ======");
var test_nbr = 12;
var test_str = " Testing strings"
var new_test_str = test_nbr + test_str;
console.log(new_test_str);

console.log("STRING LENGHT  - " + test_str.lenght);
console.log("SYBMOLS ACCESS - " + test_str.charAt(3));
console.log("SYBMOLS ACCESS - " + test_str[3]);


console.log("SPECIAL SYMBOLS");
console.log("\\b Backspcae\b");
console.log("\\f Form feed \f");
console.log("\\n New Line \n New Line");
console.log("\\r Carrige return \r");
console.log("\\t Tab\tTab");


console.log("=====      END TESTING STRINGS WORK   ======");





console.log("=====      TESTING FUNCTIONS WORK   ======");

//Function declaration
function showMessage() 
{
    console.log( 'SIMPLE FUNCTION DECLARATION' );
}
showMessage();

function showMessageLocVar()
{
    var message = 'SHOW MESSAGE LOCAL VARIABLE STRING'; // локальная переменная
    console.log( message );
}
showMessageLocVar();

//extern variables
var userName = 'EXTERN NAME JOHN';
function showMessageExternVar()
{
    var message = 'TESTING EXTERN VARIABLES ' + userName;
    console.log(message);
}
showMessageExternVar();
//Function expression
var showMessageExpression = function()
{
    var message = "Function expression";
    console.log(message);
}
showMessageExpression();


console.log("=====       TESTING FUNCTION CLOSURE ======");
//Замыкания ===============================
//Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны.
//Все переменные внутри функции – это свойства специального внутреннего объекта LexicalEnvironment, который создаётся при её запуске.
//Интерпретатор, при доступе к переменной, сначала пытается найти переменную в текущем LexicalEnvironment,
// а затем, если её нет – ищет во внешнем объекте переменных. В данном случае им является window.
function makeCounter() 
{
    var currentCount = 1;
  
    return function() 
    { // (**)
        // При создании функция получает скрытое свойство [[Scope]], которое ссылается на лексическое окружение, в котором она была создана.
      return currentCount++;
    };
}
  
  var counter = makeCounter(); // (*)
  
  // каждый вызов увеличивает счётчик и возвращает результат
  console.log( counter() ); // 1
  console.log( counter() ); // 2
  console.log( counter() ); // 3
  
  // создать другой счётчик, он будет независим от первого
  var counter2 = makeCounter();
  console.log( counter2() ); // 1
console.log("=====      END TESTING FUNCTION CLOSURE ======");
//Замыкания ===============================

console.log("=====    END TESTING FUNCTIONS WORK   ======");

//МАССИВЫ
console.log("  ===== TESTING MASSIVES WORK   ======");
var arr = ["element1" , {name:"MyName"},123];
console.log("size of arr       - " + arr.length);
console.log("ELEMENT 0         - " + arr[0]);
console.log("ELEMENT 1         - " + arr[1]);
console.log("ELEMENT 2         - " + arr[2]);
arr[3] ="element4";
console.log("ADD ELEMENT 4     - " + arr[3]);
console.log(arr[3]);
console.log("SIZE OF ARRAY     - " + arr.length);


console.log("OBJECT IN ARRAY   - " + arr[1].name);


console.log("=====     MASSIVES POP PUSH SHIFT UNSHIFT   ======");
console.log("POP ELEMENT       - " + arr.pop());
console.log("SHIFT ELEMENT     - " + arr.shift());
console.log("NEW SIZE OF ARRAY -" + arr.length);

console.log("=====     TESTING MASSIVES WORK   ======");
//МАССИВЫ


console.log("=====     TESTING WORK WITH OBJECTS   ======");
//OBJECTS
console.log("WORK WITH OBJECTS");
var NewObj = {name:"ObjName",
              size: 20,
              count: 30};

console.log("NewObj count - " + NewObj.count);
console.log("NewObj name  - " + NewObj.name);
console.log("NewObj size  - " + NewObj.size);

var NewObj2 = {};
    NewObj2["name"] = "ObjName2";
console.log("NewObj count - " + NewObj["name"]);
//OBJECTS

console.log("TRANSFORMING OBJECTS");
var TEST_OBJ = {

    firstName: 'Василий',
    toString: function() {
        return 'Пользователь ' + this.firstName;
    }
};
console.log(TEST_OBJ);

//Все объекты, включая встроенные, имеют свои реализации метода toString, например:
console.log( [1, 2] ); // toString для массивов выводит список элементов "1,2"
console.log( new Date ); // toString для дат выводит дату в виде строки
console.log( function() {} ); // toString для функции выводит её код


//Для численного преобразования объекта используется метод valueOf, а если его нет – то toString:
var room = {
    number: 777,

    valueOf: function() { return this.number; },
    toString: function() { return this.number; }
};

console.log( +room );  // 777, вызвался valueOf
delete room.valueOf; // valueOf удалён
console.log( +room );  // 777, вызвался toString
console.log("=====     END TESTING WORK WITH OBJECTS   ======");




