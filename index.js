//1. შექმენით კლასი სახელად "Person". დააგენერირეთ ობიექტი, რომელსაც ექნება "name" და "age" 
//ფროფერთები და "sayHello" მეთოდი(ეს ყველაფერი კლასშივე უნდა გაუწეროთ). გამოაკონსოლეთ ობიექტის 
//ფროფერთები.
// class Person{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayHello(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }
// let person1 = new Person('sergi', 18)
// console.log(person1)
// person1.sayHello()

//2. მემკვიდრეობითობა: შექმენით კლასი "Student", რომელიც იქნება "Person"-ის შთამომავალი
//დაამატეთ ახალი "grade" ფროფერთი.
// class Person{
//     constructor(name,age ){
//         this.name = name
//         this.age = age
//     }
//     sayHello(){
//          console.log(`Hello, my name is ${this.name}`)
//      }
// }
// class Student extends Person{
//     constructor(name, age, grade){
//         super(name,age)
//         this.grade = grade
//     }
// }
// const student1 = new Student('sergi',18,100)
// console.log(student1)


//3. ენკაფსულაცია: შექმენით კლასი სახელად "BankAccount" private ფროფერთით - "balance". 
//დაამატეთ მეთოდები "deposit" და "withdraw" თანხის შეტანა-გამოტანისთვის. შესატან ან გამოსატან 
//თანხას მეთორები უნდა იღებდნენ პარამეტრად. bonus: თუ გამოსატანი თანხა მეტია  არსებულ ბალანსზე, 
//გმოიტანეთ შესაბამისი შეტყობინება.
// class BankAccount {
//     #balance;
//     constructor(initialBalance){
//         this.#balance = initialBalance
//     }
//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount
//             console.log(`deposited ${amount}. new balance ${this.#balance}`)
//         }else{
//             console.log('depositi meti unda ikos 0ze')
//         }
//     }
//     withdraw(amount){
//         if(amount > 0){
//             if(amount <= this.#balance){
//                 this.#balance -=amount
//                 console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
//             }else{
//                 console.log('gatanis tanxa balansze metia');
//             }
//         }else{
//             console.log('gasatani tanxa unda ikos 0is meti');
//         }
//     }
//     getBalance(){
//         return this.#balance
//     }
// }
// let account = new BankAccount(100)
// console.log(account)
// account.deposit(50);        
// account.withdraw(30);     
// account.withdraw(200);   
// console.log(account.getBalance()); 
//4. პოლიმორფიზმი:  შემქენით კლასი "Shape", რომელშიც იქნება მეთოდი სახელად "calculateArea". 
//შექმენით ქვეკლასები "Circle" და "Rectangle", რომლებშიც ახლადშექმნილ მეთოდს გადააწერთ მშობლის მეთოდს.
   // Parent class

  
//5. სტატიკური მეთოდი: შექმენით კლასი "Calculator" სტატიკური მეთოდით, რომელიც პარამეტრად მიიღებს
// ორ რიცხვს და დააბრუნებს მათ ჯამს.
// class Calculator{
//     static getNumbers(num1,num2){
//         return num1 + num2
//     }
// }
// console.log(Calculator.getNumbers(10,20))

//6. Getter and Setter: შექმენით კლასი "Temperature" private ფორფერთით - "celsius".
// დაამატეთ getter და setter მეთოდები. getter მეთოდი უნდა აბრუნებდეს celsius ფროფერთის.
// setter მეთოდი პარამეტრად უნდა იღებდეს ფარენჰეიტს, გადაჰყავდეს ცელსიუსში და ანიჭებდეს მიღებულ
// მნიშვნელობას celsius ფროფერთის.
// class Temperature{
//     #celsius
//     constructor(celsius){
//         this.#celsius = celsius
//     }
//     get Celsius(){
//         return this.#celsius
//     }
//     set Celsius(value){
//         this.#celsius = value;
//     }
//     get fahrenheit(){
//         return (this.#celsius * 9/5) + 32
//     }
//     set fahrenheit(value){
//         this.#celsius = (value - 32) * 5 / 9;
//     }
// }
// let temp = new Temperature(25);
// console.log(temp.Celsius);   
// console.log(temp.fahrenheit);

// temp.fahrenheit = 100;
// console.log(temp.Celsius);    
// console.log(temp.fahrenheit);

//7. შექმენით კლასი - "ArrayHelper" მეთოდით "rever  seArray", რომელიც პარამეტრად იღებს მასივს და
// აბრუნებს მის შებრუნებულ ვერსიას.
// class ArrayHelper{
//     constructor(initialArray){
//         this.array = initialArray
//     }
//     reverseArray(){
//         this.array.reverse()
//         return this.array
//     }
    
// }
// let arrayHelper = new ArrayHelper([1, 2, 3, 4, 5]);
// let reversedArray = arrayHelper.reverseArray();
// console.log(reversedArray);

    //8. შექმენით კლასი "Circle", რომელიც დააგენერირებს ობიექტებს "radius" ფროფერთით. დაამატეთ 
    //მეთოდები წრის ფართობისა და პერიმეტრის გასაგებად. შექმენით "createCircle" მეთოდი, რომელიც
    // დააბრუნებს რაიმე რადიუსის მქონე წრის ობიექტს. (ახალი წრე შექმენით Circle კლასიდან)
//     class Circle {
//         constructor(radius) {
//           this.radius = radius;
//         }

//         calculateArea() {
//           return Math.PI * this.radius ** 2;
//         }

//         calculatePerimeter() {
//           return 2 * Math.PI * this.radius;
//         }

//         static createCircle(radius) {
//           return new Circle(radius);
//         }
//       }
//       const circle = new Circle(5); 
// console.log("area circle:", circle.calculateArea()); 
// console.log("Perimeter  Circle:", circle.calculatePerimeter()); 

// const anotherCircle = Circle.createCircle(10); 
// console.log("Area of Another Circle:", anotherCircle.calculateArea());
// console.log("Perimeter of Another Circle:", anotherCircle.calculatePerimeter()); 
      