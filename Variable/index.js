
// 1 ให้ประกาศตัวแปรชื่อ name และกำหนดค่าเป็น "John" จากนั้นใช้ console.log() แสดงค่าของตัวแปรนี้

let name = "john";

console.log(name);

console.log("==================================");

// ให้ประกาศตัวแปร let age = 25; และ const country = "Thailand";
// แล้วลองเปลี่ยนค่า age เป็น 30 และ country เป็น "Japan" ดูว่าเกิดอะไรขึ้น

let age = 25;
const country = "Thailand";


age = 30;
// country = "Thailand";  // it's error



console.log("==================================");

// ให้ประกาศตัวแปร 3 ตัวในบรรทัดเดียวกัน:
// fruit เก็บ "Apple"
// color เก็บ "Red"
// price เก็บ 10
// จากนั้นใช้ console.log() แสดงค่าทั้งหมด

let fruit="Apple", color = "red",price = "10";
console.log(fruit,color,price);


console.log("==================================");


// ให้ประกาศตัวแปร firstName และ lastName แล้วรวมกันเป็น fullName
// เช่น ถ้า firstName = "Alice"; และ lastName = "Brown"; ให้ fullName มีค่า "Alice Brown"

let firstName = "Alice";
let lastName = "Brown";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log("==================================");

// ให้ประกาศตัวแปร
// product = "Laptop"
// price = 15000
// แล้วใช้ Template Literal (``` ``) เพื่อสร้างข้อความ "สินค้าของเรา: Laptop ราคา 15000 บาท"`

let product = "Laptop";
let Price = 15000;

console.log(`สินค้าของเรา : ${product} ราคา ${Price} บาท`);

console.log("==================================");


// ให้ประกาศตัวแปร
// num1 = 10;
// num2 = 20;
// แล้วให้สร้างตัวแปร sum เพื่อเก็บผลบวกของสองตัวแปรนี้ จากนั้นแสดงค่าผลลัพธ์


let num1 = 10;
let num2 = 20;

let sum = num1+num2;
console.log(sum);

console.log("==================================");


// 7. การใช้ Boolean ในตัวแปร
// ให้ประกาศตัวแปร isStudent และกำหนดค่าเป็น true
// จากนั้นใช้ console.log() ตรวจสอบค่าของตัวแปร


let isStudent = true;
console.log(isStudent);

console.log("==================================");


// 8. การเปลี่ยนค่าของตัวแปร
// ให้ประกาศตัวแปร let score = 50;
// แล้วเปลี่ยนค่าของ score เป็น 75 จากนั้นแสดงค่าใหม่


let score = 50;
console.log(score);

score = 75;
console.log(score);

console.log("==================================");

// 9. การใช้ typeof เช็กประเภทของตัวแปร
// ให้ประกาศตัวแปร
// city = "Bangkok";
// population = 10000000;
// isCapital = true;
// จากนั้นใช้ console.log(typeof city, typeof population, typeof isCapital);
// เพื่อดูประเภทของแต่ละตัวแปร


let city = "Bangkok";
let population = 1000000;
let isCapital = true;

console.log(typeof city, typeof population, typeof isCapital);

console.log("==================================");




// 10. การใช้ null และ undefined
// ให้ประกาศตัวแปร
// let myVar;
// let myValue = null;
// จากนั้นใช้ console.log() แสดงค่าของตัวแปรทั้งสอง และใช้ typeof ตรวจสอบค่าของมัน


let myVar;
let myValue = null;
console.log(typeof myVar, typeof myValue);

console.log("==================================");



