// พารามิเตอร์และอาร์กิวเมนต์ (Parameters & Arguments)
console.log("=================================================================================================");
// โจทย์
// สร้างฟังก์ชัน greet ที่รับพารามิเตอร์เป็นชื่อ และคืนค่า "Hello, [ชื่อ]!"

        function greet (name) {
            return `Hello, ${name}`
        }
        console.log(greet("zerotwo"));

console.log("=================================================================================================");

// สร้างฟังก์ชัน multiply ที่รับเลขสองตัว และคืนค่าผลคูณของมัน

        function multiply (num1,num2) {
            return num1 * num2;
        }
        console.log(multiply(2,2));
        console.log(multiply(8)); // ลองดูแล้ว ทำไมถึงได้ผลลัพธ์เป็น NaN งงอ่ะ

console.log("=================================================================================================");

// สร้างฟังก์ชัน fullName ที่รับ firstName และ lastName แล้วรวมเป็น "firstName lastName"

        function fullName (firstName,lastName) {
            return `${firstName} ${lastName}`
            // return firstName + lastName;
        };
        console.log(fullName("tony","stark"));
        console.log(fullName("john")); // output john undefined เพราะส่งไปแค่ 1 argument


console.log("=================================================================================================");
console.log("=================================================================================================");
