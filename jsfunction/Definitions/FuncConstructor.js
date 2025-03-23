// ใน JavaScript, การสร้างฟังก์ชันสามารถทำได้หลายวิธี และหนึ่งในวิธีที่สามารถใช้ได้คือการใช้ Function Constructor 
// ซึ่งเป็นวิธีการสร้างฟังก์ชันผ่านตัวสร้างฟังก์ชัน (constructor) ที่ชื่อว่า Function() นั่นเอง
// การใช้ Function() Constructor
// Function() constructor ใช้ในการสร้างฟังก์ชันในลักษณะของวัตถุใหม่ โดยสามารถระบุ พารามิเตอร์ และ โค้ดของฟังก์ชัน เป็น สตริง ได้

//Example
        const myFunction = new Function("a", "b", "return a * b");

        let x = myFunction(4, 3);
        console.log(x);  // ผลลัพธ์จะเป็น 12

console.log("===================================================================================================================");

//สร้างฟังก์ชันโดยใช้ Function() constructor ที่รับสองพารามิเตอร์ a และ b แล้วคืนค่าผลบวกของทั้งสอง

        const MyConstruc = new Function("a", "b", "return a + b");
        console.log(MyConstruc(2,3));

console.log("===================================================================================================================");

// ใช้ Function() constructor ในการสร้างฟังก์ชัน checkEven(num) ที่ตรวจสอบว่าเลขที่ให้มาเป็นเลขคู่หรือไม่

        const checkEven = new Function("num", "return num % 2 === 0")
        console.log(checkEven(7));

console.log("===================================================================================================================");

// เขียนฟังก์ชันโดยใช้ Function() constructor เพื่อรับชื่อและแสดงข้อความ "Hello, [name]!"

        const greet = new Function("name", "return 'hello ' + name");
        console.log(greet("zero two"));

console.log("===================================================================================================================");

// สร้างฟังก์ชัน multiplyNumbers(a, b) โดยใช้ Function() constructor ที่รับพารามิเตอร์สองตัวและคืนค่าผลคูณ

        const multiplyNumbers = new Function("a", "b", "return a * b");
        console.log(multiplyNumbers(2,5));

console.log("===================================================================================================================");

// ใช้ Function() constructor เพื่อสร้างฟังก์ชัน reverseString(str) ที่กลับด้านตัวอักษรของสตริง

        //ใช้ เมธอดของ Array และ เมธอดของ String โดยสามารถแปลงสตริงเป็นอาร์เรย์, พลิกค่าของอาร์เรย์, แล้วรวมค่ากลับเป็นสตริงอีกครั้ง
        const reverseString = new Function("str", "return str.split('').reverse().join('')");
        console.log(reverseString("hello"));

        // split(''): แปลงสตริงเป็นอาร์เรย์ของอักขระ (ใช้ split('') แยกตามตัวอักษร)
        // reverse(): พลิกลำดับของอาร์เรย์
        // join(''): รวมอาร์เรย์กลับเป็นสตริง

console.log("===================================================================================================================");
