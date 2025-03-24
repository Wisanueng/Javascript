// Arrow Functions (ฟังก์ชันลูกศร)
//  Arrow Functions คืออะไร?
// Arrow Function เป็นรูปแบบการเขียน Function Expression แบบย่อ ที่เพิ่มเข้ามาใน ES6 (ECMAScript 2015)
// เขียนสั้นกว่า
// ไม่ต้องใช้ function และ return (ถ้าเป็น single statement)
// this ภายใน Arrow Function ไม่เหมือนฟังก์ชันปกติ

// arrow function ทำให้การเขียน function สั้นลงเพราะ:
// ไม่ต้องใช้ function
// ไม่ต้องมี {} และ return (ถ้ามีแค่คำสั่งเดียว)

//  Syntax ของ Arrow Function
//  1. ถ้ามีแค่ 1 บรรทัด → ไม่ต้องมี {} และ return
        const square = x => x * x;
        console.log(square(5)); // Output: 25
        //  อธิบาย:
        // ไม่ต้องใช้ function
        // ไม่ต้องมี {} ถ้าคำสั่งมีแค่บรรทัดเดียว
        // ไม่ต้องมี return เพราะมัน implicit return ให้เลย

//  2. ถ้ามีมากกว่า 1 บรรทัด → ต้องใช้ {} และ return
        const add = (a, b) => {
        console.log("Adding numbers...");
        return a + b;
        };
        console.log(add(3, 7)); // Output: "Adding numbers..." และ 10
        //  อธิบาย:
        // มีหลายบรรทัด → ต้องใช้ {}
        // ต้องใช้ return เอง

//  3. ถ้ามีแค่ 1 พารามิเตอร์ → ไม่ต้องใช้ ()
        const double = x => x * 2;
        console.log(double(10)); // Output: 20
        //  อธิบาย:
        // ถ้ามี แค่พารามิเตอร์เดียว → ไม่ต้องใช้ ()

//  4. ถ้าไม่มีพารามิเตอร์ → ต้องใช้ () ว่างๆ
        const sayHello = () => "Hello!";
        console.log(sayHello()); // Output: "Hello!"
        //  อธิบาย:
        // ไม่มีพารามิเตอร์ → ต้องใส่ ()

//  Arrow Function เหมาะกับ:
// ✅ ใช้แทน Function Expression สำหรับโค้ดที่ไม่มี this
// ✅ ใช้กับ Array Method เช่น map(), filter(), reduce()
// ✅ ใช้กับ Callback Function เช่นใน setTimeout()

// แต่ไม่เหมาะกับ:
// ❌ ใช้เป็น Object Method
// ❌ ใช้เป็น Constructor Function

// Arrow Function คือ Function Expression แบบย่อ
// ไม่มี this ของตัวเอง → ไม่เหมาะกับการใช้ใน Object Method
// ไม่สามารถใช้เป็น constructor ได้
// เหมาะกับโค้ดที่สั้น ๆ เช่น Callback และ Array Method
// ใช้ Arrow Function เมื่อไม่ต้องการ this และต้องการโค้ดที่สั้นและอ่านง่าย! 
console.log("=====================================================================================");
console.log("=====================================================================================");
console.log("=====================================================================================");
// โจทย์:
// เขียนฟังก์ชันลูกศร add(a, b) ที่รับพารามิเตอร์สองตัวและคืนค่าผลบวกของทั้งสอง

        const addd =(a,b) => {
            return a + b;
        }
        console.log(addd(2,3));


        const addd2 = (a,b) => a + b;  // แบบสั้นกว่า single statment
        console.log(addd2(2,3));

console.log("=====================================================================================");

// สร้างฟังก์ชันลูกศร square(num) ที่รับพารามิเตอร์และคืนค่ากำลังสองของมัน

            const squaree = (num) => num ** 2;
            console.log(squaree(4));

console.log("=====================================================================================");

// เขียนฟังก์ชันลูกศร isOdd(num) ที่ตรวจสอบว่าเลขที่ให้มาเป็นเลขคี่หรือไม่

            const isOdd = (num) => `${num} คือเลขคี่หรือไม่ : ${num % 2 !== 0}`;
            console.log(isOdd(7));

console.log("=====================================================================================");

// สร้างฟังก์ชันลูกศร multiply(a, b) ที่รับพารามิเตอร์สองตัวและคืนค่าผลคูณ

            const multiply = (a,b) => a * b;
            console.log(multiply(2,3));

console.log("=====================================================================================");

// เขียนฟังก์ชันลูกศร greet(name) ที่รับชื่อและแสดงข้อความ "Hello, [name]!"

            const greet = (name) => `hello ${name}`;
            console.log(greet("zero two"));

console.log("=====================================================================================");
