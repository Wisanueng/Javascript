//  ค่าเริ่มต้นของพารามิเตอร์ (Default Parameters)
console.log("=================================================================================================");



//  โจทย์

        function multiply (x,y) {
            return x * y;
        }
        console.log(multiply(2,3));
// แก้ไขฟังก์ชัน multiply ให้ y มีค่าเริ่มต้นเป็น 1
        function multiply2 (x,y = 1) {
            return x * y;
        }
        console.log(multiply2(2,3));
        console.log(multiply2(2)); // ไม่ได้ส่งค่า y เข้าไป เพราะฉนั้น y จะเท่ากับ 1 และจะได้ output เป็นสองเพราะ 2 คูณ 1 เท่ากับ 2

console.log("=================================================================================================");

// สร้างฟังก์ชัน power ที่รับ base และ exponent (ค่าเริ่มต้นเป็น 2) และคืนค่าผลยกกำลัง

        function power (base,exponent) {
            return base ** exponent;
        };
        console.log(power(2,3));

console.log("=================================================================================================");

// สร้างฟังก์ชัน sayHello ที่รับ name (ค่าเริ่มต้นเป็น "Guest") แล้วคืนค่า "Hello, [name]!"

        function sayHello (name  = "Guest"){
            return `Hello ${name}`
        }
        console.log(sayHello("zero two")); // output Hello zero two
        console.log(sayHello()); // output Hello Guest เพราะไม่ได้ส่งค่าอะไรไปเลยได้ค่าเริ่มต้นที่กำหนดไว้
        console.log(sayHello(undefined)); // output Hello Guest เพราะไม่ได้ส่งค่าอะไรไปเลยได้ค่าเริ่มต้นที่กำหนดไว้ undefined == ไม่มีค่าอะไรเลย ??

console.log("=================================================================================================");

// กำหนดให้ฟังก์ชัน calculatePrice(price, tax = 0.07, discount = 0) คำนวณราคาสุทธิ
// ราคาสุทธื = ราคา + (ราคา * ภาษี) - ส่วนลด

        const calculatePrice = (price, tax = 0.07, discount = 0) => {
            let Netprice = price + (price * tax) - discount;
            return Netprice;
        }

        console.log(calculatePrice(100,undefined,20)); 
        // ข้อนี้ไม่รู้ทำถูกมั้ย ฮ่าๆ

console.log("=================================================================================================");



