// ?? - оператор нулевого слияния
console.log(false??5)//false
console.log(5??false)//5
всегда выводится значение слева, кроме случаев когда второе значение  null , undefined



// && - проверяеет до первого false

console.log(0 && undefined)//0
console.log(0 && true)//0
console.log(true && 0)//0
console.log(1 && true)//true

let a = 5
if (a>3){
    console.log(a)     or a>3 && console.log(a)
}

// || - проверяет до первого true

console.log(0||1)//1
console.log(1||0)//1
console.log(0||undefined)//undefined
console.log(1||true)//1

!=-неравно

