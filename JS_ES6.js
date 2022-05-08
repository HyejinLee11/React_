// // 리액트 들어가기 전 많이 쓰는 JS ES6 문법 정리

// // 1. bjecct shorthand assignment
// let name="noona";
// let age = 17;

// // let person ={
// //   name: name,
// //   age: age
// // }
// // console.log(person); // { name: 'noona', age: 17 }

// // 리액트에서 많이 사용하는 JS ES6문법으로 키와 변수의 이름이 같을 때 사용한다.
// let person ={
//   name,
//   age
// }

// console.log(person); // { name: 'noona', age: 17 }



// // D2. estructuring
// let person ={
//   name:"noona",
//   age: 20
// }

// // let name = person.name;
// // let age = person['age']

// // 객체 안에서 가져오고 싶은 키 값을 배열에서도 적용 가능하다.
// let {name, age} = person;
// console.log(name, age); // noona 20


// // ...rest로 배열의 나머지 부분을 가져올 수 있다.
// let array = [1,2,3,4];
// let [a,b, ...rest] = array;

// console.log(a,b); // 1 2
// console.log(rest); // [ 3, 4 ]



// // 3. spread
// let person={name:"noona",age:12}

// // 깊은복사 (컴퓨터에 데이터 값만 일일히 복사해서 가져와 다시 주소 할당)
// // 내용은 같지만 다른 객체
// let person2 = {...person}
// console.log(person2); // { name: 'noona', age: 12 }
// console.log(person ==person2) //false

// // 복사하고 키값중 하나를 불러오면 내용 추가, 변경 할 수 있음
// let person2 = {...person, name:"jimin", address:"incheon"};
// console.log(person2); // { name: 'jimin', age: 12, address: "incheon" }
// console.log(person ==person3) //ture
 

// // 얕은복사 (주소를 가져온다. 같은 데이터를 다루게됨)
// // 바로 할당, 기존객체를 참조를 한다.
// let person3 = person;
// console.log(person3); // { name: 'noona', age: 12 }


// // 깊은 복사는 아래와 같이 사용할 수 있다.
// let a = [1,2]
// let b = [...a, 3]
// console.log(b)

// let c = [...a, ...b]
// console.log(c)



// //삼항연산자

// let person = {name:"noona", age:12}

// if(person) {
//   console.log(person.name)
// } else {
//   console.log("there is no person")
// }

// console.log (person? person.name:"threr is no perosn")