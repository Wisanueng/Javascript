// 1. การใช้ตัวดำเนินการทางคณิตศาสตร์ (Arithmetic Operators)
// 🔹 ให้ประกาศตัวแปร a = 10; และ b = 3;
// 🔹 คำนวณค่า ผลบวก, ผลลบ, ผลคูณ, ผลหาร, และเศษจากการหาร ของ a และ b
// 🔹 แสดงผลลัพธ์ทาง console.log()


let a = 10;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


console.log("=======================================");


// 2. การใช้ตัวดำเนินการเพิ่มค่า (++) และลดค่า (--)
// 🔹 ให้ let x = 5;
// 🔹 ใช้ x++ และ x-- แล้วแสดงค่า x หลังจากการเปลี่ยนแปลง

let x = 5;

x++;
console.log(x);

x--;
console.log(x);

console.log("=======================================");


// 3. การใช้ตัวดำเนินการยกกำลัง (**)
// 🔹 ให้คำนวณ 5 ยกกำลัง 3 และ 2 ยกกำลัง 8
// 🔹 แสดงผลลัพธ์

let X = 5**3;
let Y = 2**8;

console.log(X,Y);

console.log("=======================================");


// 4. ตัวดำเนินการเปรียบเทียบ (>, <, >=, <=, ==, !=)
// 🔹 ให้ประกาศ let num1 = 10; และ let num2 = 20;
// 🔹 ใช้ตัวดำเนินการเปรียบเทียบระหว่าง num1 และ num2 แล้วแสดงผล (true หรือ false)



let num1 = 10;
let num2 = 20;

console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);
console.log(num1==num2);
console.log(num1!=num2);

console.log("=======================================");

// 5. ตัวดำเนินการเปรียบเทียบแบบเข้มงวด (===, !==)
// 🔹 ให้ประกาศ
// let value1 = 10;
// let value2 = "10";
// 🔹 ใช้ == และ === เปรียบเทียบ value1 กับ value2 แล้วอธิบายความแตกต่าง


let value1 = 10;
let value2 = "10";

console.log(value1 == value2);
console.log(value1 === value2);

// อธิบาย **
// == จะเป็นการถามว่ามีค่าเท่ากันหรือไม่
// === จะเป็นการถามว่ามีค่าเท่ากันและเป็นชนิดข้อมูลประเภทเดียวกันหรือไม่

console.log("=======================================");


// 6. ตัวดำเนินการตรรกะ (&&, ||, !)
// 🔹 ให้ประกาศ
// let isMember = true;
// let hasCoupon = false;
// 🔹 ใช้ &&, ||, และ ! เพื่อตรวจสอบว่า
// ผู้ใช้เป็นสมาชิก และ มีคูปองหรือไม่
// ผู้ใช้เป็นสมาชิก หรือ มีคูปองหรือไม่
// ผู้ใช้ ไม่ได้ เป็นสมาชิกหรือไม่


let isMember = true;
let hasCoupon = false;

let user = isMember && hasCoupon;
console.log(user);

user = isMember || hasCoupon;
console.log(user);

// user = isMember ! hasCounpon;
// console.log(user);

//ข้อนี้หมายถึงยังไง ไม่เข้าใจ??

//ถามครู gpt มา ได้ดังนี้
    user = !isMember;
    console.log(user); // แสดง false เพราะ isMember เป็น true


console.log("=======================================");


// 7. การใช้ +=, -=, *=, /=
// 🔹 ให้ประกาศ let score = 50;
// 🔹 ใช้ตัวดำเนินการ +=, -=, *=, /= กับ score และแสดงค่าใหม่แต่ละครั้ง

let score = 50;

score += 1;
console.log(score);
score -= 1;
console.log(score);
score *= 1;
console.log(score);
score /= 2;
console.log(score);


console.log("=======================================");


// 8. คำนวณค่าเฉลี่ย
// 🔹 ให้มีตัวแปร a = 10, b = 20, c = 30
// 🔹 คำนวณ ค่าเฉลี่ย ของสามตัวนี้และแสดงผล

let A = 10, B = 20, C = 30;

sum = A+B+C;
console.log(sum);

Average = sum/3;
console.log(Average);


console.log("=======================================");

// 9. คำนวณพื้นที่สี่เหลี่ยม
// 🔹 ให้ width = 5 และ height = 10
// 🔹 คำนวณพื้นที่ของสี่เหลี่ยม (กว้าง × สูง) และแสดงผลลัพธ์

let width = 5;
let height = 10;

let area = width*height;
console.log(area);

console.log("=======================================");

// 10. ตรวจสอบเลขคู่หรือเลขคี่
// 🔹 ให้ let num = 15;
// 🔹 ใช้ตัวดำเนินการ % เพื่อตรวจสอบว่า num เป็นเลขคู่หรือเลขคี่

let num = 15;

let o1 = num % 2 == 0;
let o2 = num % 2 != 0;

console.log(`${num} คือเลขคู่จริงหรือไม่ ${o1}`);
console.log(`${num} ไม่ใช่เลขคู่จริงหรือไม่ ${o2}`);

console.log("=======================================");


// 11. คำนวณค่าลบของตัวเลข
// 🔹 ให้ let number = 7;
// 🔹 ใช้ตัวดำเนินการ - เพื่อแปลงให้ number เป็นค่าลบ แล้วแสดงผลลัพธ์

let number = 7;
console.log(number - number * 2);

//หรือทำแบบนี้ก็ได้นะ สั้นกว่า ครู GPT บอกมา
    console.log(-number);

console.log("=======================================");


// 12. ใช้ตัวดำเนินการ ?? (Nullish Coalescing)
// 🔹 ให้
// let username = null;
// let defaultName = "Guest";
// 🔹 ใช้ ?? กำหนดให้ username มีค่าเริ่มต้นเป็น defaultName หาก username เป็น null หรือ undefined

let username = null;
let defaultName = "Guest";

let finalName = username ?? defaultName;
console.log(finalName);


console.log("=======================================");


// 13. แปลงค่าจาก string เป็น number
// 🔹 ให้
// let strNum = "50";
// 🔹 ใช้ตัวดำเนินการ + และ Number() เพื่อแปลง strNum เป็นตัวเลขและบวกกับ 10

// วิธีที่ 1: ใช้ Number()
let strNum = "50";
let result = Number(strNum) + 10;
console.log(result);

// วิธีที่ 2: ใช้ + (Unary Plus)
let result2 = +strNum + 10;
console.log(result2);


console.log("=======================================");



// 14. ตรวจสอบอายุสำหรับเข้าร่วมกิจกรรม
// 🔹 ให้
// let age = 18;
// 🔹 ใช้ตัวดำเนินการเปรียบเทียบเพื่อตรวจสอบว่า age มากกว่าหรือเท่ากับ 18 หรือไม่


let age = 18;
console.log(age >= 18);

console.log("=======================================");



// 15. การใช้ typeof ตรวจสอบประเภทข้อมูล
// 🔹 ให้
// let a = "Hello";
// let b = 100;
// let c = true;
// 🔹 ใช้ typeof แสดงประเภทของตัวแปรแต่ละตัว


let Aa = "hello";
let Bb = 100;
let Cc = true;

console.log(typeof Aa);
console.log(typeof Bb);
console.log(typeof Cc);

console.log("=======================================");


// 16. คำนวณส่วนลดสินค้า
// 🔹 ให้
// let price = 200;
// let discount = 15; // คิดเป็นเปอร์เซ็นต์
// 🔹 คำนวณราคาหลังหักส่วนลด และแสดงผลลัพธ์

let pricee = 200;
let discount = 15;

let discountamount = (pricee * discount) / 100;

let pricefinal = pricee - discountamount;
console.log(pricefinal);


console.log("=======================================");

// 17. ตรวจสอบปีอธิกสุรทิน (Leap Year)
// 🔹 ให้
// let year = 2024;
// 🔹 ใช้ตัวดำเนินการ % ตรวจสอบว่า year เป็นปีอธิกสุรทินหรือไม่ (หาร 4 ลงตัว)

let year = 2024;

let leapyear = year % 4;

console.log(`ปี ${year} เป็นปีอธิกสุรทินหรือไม่ถ้าเป็นคือ true ถ้าไม่เป็นคือ fault : ${leapyear == 0}`);


//หรือถ้าจะให้ถูกมากขึ้น (ตามที่ครู GPT บอกมา)
    // ✅ สามารถเขียนให้ตรวจสอบได้แม่นยำขึ้น
    // (เพราะปีอธิกสุรทินต้องหาร 400 ลงตัว หรือ 4 ลงตัวแต่ไม่ใช่ 100)
    let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(`ปี ${year} เป็นปีอธิกสุรทินหรือไม่: ${isLeapYear}`);


console.log("=======================================");

// 18. สลับค่าระหว่างตัวแปร
// 🔹 ให้
// let a = 5, b = 10;
// 🔹 สลับค่าของ a และ b โดยไม่ใช้ตัวแปรเสริม

let aA = 5, bB = 10;

// วิธีที่ 1: ใช้การคำนวณทางคณิตศาสตร์
aA = aA + bB; // a = 5 + 10 = 15
bB = aA - bB; // b = 15 - 10 = 5
aA = aA - bB; // a = 15 - 5 = 10

console.log(aA, bB); // Output: 10 5

// วิธีที่ 2: ใช้ Destructuring Assignment 
let aaa = 5,bbb = 10;
[aaa, bbb] = [bbb, aaa]; // สลับค่ากันโดยใช้ array destructuring

console.log(aaa, bbb); // Output: 10 5



console.log("=======================================");


// 19. ใช้ ?? แทนค่าถ้าเป็น null หรือ undefined
// 🔹 ให้
// let userInput = undefined;
// let defaultValue = "Not provided";
// 🔹 ใช้ ?? กำหนดค่าให้ userInput หากเป็น null หรือ undefined

let userInput = undefined;
let defaultValue = "Not provided";

let total = userInput ?? defaultValue;
console.log(total);

console.log("=======================================");


// 20. คำนวณอุณหภูมิจากเซลเซียสเป็นฟาเรนไฮต์
// 🔹 ให้
// let celsius = 30;
// 🔹 คำนวณอุณหภูมิในฟาเรนไฮต์โดยใช้สูตร
// Fahrenheit = (Celsius * 9/5) + 32

let celsius = 30;

let fahrenheit = (celsius * 9/5) + 32;

console.log(` ${celsius} celsius = ${fahrenheit} fahrenheit`);

console.log("=======================================");






