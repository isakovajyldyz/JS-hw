object. freeze()-заморозка данных
обьект внутри обьекта замораживается отдельно

crud - от create, read, update, delete


    assign в переводе назначить, клонировать

let car{
    model:"mers",
    year: '2002'
    speed: 300,
}
let car = car2- клонирование, которое сопровождается синхронным изменением всех данных в обоих обьектах

let car2 = Object.assign({}, car)
car2.model = 'audi' - изменением значения свойств клонированного обьекта без изменения значений исходного обьекта

let car2 = JSON.parse(JSON.stringify(car))
car2.model = 'audi'
stringify - переводит обьект в строку
parse - переводит строку обратно в обьект
значения второго обьекта можно будет изменять не меняя значения исходного обьекта
внутри json формата нужно писать двойные ковычки

let user{
    name: 'kate'
    lastName:'johnson'   or  "last name": 'johnson'(in this case console.log(user["last name"]))
}

