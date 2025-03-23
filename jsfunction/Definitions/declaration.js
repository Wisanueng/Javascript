function seyHello() {
    console.log("Hello World");
}


//1.  ประกาศฟังก์ชัน addNumbers(a, b) ที่รับพารามิเตอร์สองตัวและคืนค่าผลบวกของสองตัวเลขนั้น

        function addNumbers(a, b){
            return a + b;
        }

        console.log(addNumbers(2,3));

console.log("=====================================================================================");




//2.  เขียนฟังก์ชัน greet(name) ที่รับพารามิเตอร์ชื่อแล้วแสดงข้อความ "Hello, [name]!"

        function greet(name){
            return `Hello ${name}`;
        }
        console.log(greet("zero two"));


console.log("=====================================================================================");

// เขียนฟังก์ชัน isEven(num) ที่รับพารามิเตอร์เป็นตัวเลขและคืนค่าจริง (true) หากตัวเลขนั้นเป็นเลขคู่ หรือเท็จ (false) หากเป็นเลขคี่

        function isEven(num){
            return num % 2 === 0;
        }

        console.log(isEven(21)); 


console.log("=====================================================================================");


// เขียนฟังก์ชัน multiply(a, b) ที่รับตัวเลขสองตัวและคืนค่าผลคูณของทั้งสอง


        function multiply(a,b){
            return a * b;
        }

        console.log(multiply(5,2));


console.log("=====================================================================================");

// เขียนฟังก์ชัน square(number) ที่รับพารามิเตอร์ตัวเลขและคืนค่ากำลังสองของมัน

        function square (numbers){
            return numbers ** 2;
        };

        console.log(square(10));


console.log("=====================================================================================");

