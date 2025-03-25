// โจทย์ 1: ฟังก์ชันแสดงข้อความ
// สร้างฟังก์ชัน showMessage(message, callback) ที่รับข้อความและ callback function
// ✅ ให้ callback function แสดงข้อความนั้นใน console.log()

// ตัวอย่าง Input และ Output:

// showMessage("Hello, Callback!", console.log);

// 💡 Output:
// Hello, Callback!

        // function showMessage(message, callback) {
        //     callback(message); // เรียก callback function พร้อมส่ง message ไปให้
        // }
        
        // function logMessage(msg) {
        //     console.log(msg); // แสดงข้อความใน console
        // }
        
        // // ทดสอบฟังก์ชัน
        // showMessage("Hello, Callback!", logMessage);

        console.log("============================================================")

        // function showMessage(message, callback) {  // สร้างฟังชัน showMessage โดยมี parameters สองตัวคือ message, callback
        //     callback(message);  // การทำงานของฟังชันนี้คือ จะเรียกใช้ function callback โดย function callback นี้จะมี parameters คือ message
        // }
        
        // function logMessage (msg) {  // สร้างฟังชัน logMessage โดยมี parameters คือ msg
        //     console.log(msg);  // การทำงานของฟังชันนี้คือ จะทำการ console.log โดยค่าที่จะ log ออกมานั้นคือ msg
        // }

        // showMessage('hello , callback', logMessage("HI")); 
        // // เรียกใช้ function showMessage โดยส่ง argument เป็นข้อความ 'hello , callback' ไปที่ parameters message
        // // และส่ง argument ที่เป็น functoin logMessage ไปที่ parameters callback


        function dosumting(callback) {
            callback();
        }


        function mycallback () {
            console.log('i am callback');
        }

        dosumting(mycallback);
        
        console.log("============================================================")


        // function ProcessMessage (message ,callback) {
        //     console.log("กำลังประมวลผล");
        //     callback(message);
        // }

        // function showmessage (msg) {
        //     console.log("📢 ข้อความของคุณ: " + msg);
        // }

        // ProcessMessage("Hello, Callback!", showmessage);



        function showMessage (message ,call) {
            console.log(message);
            call();
        }

        function done () {
            console.log("callback is done");
        }

        showMessage("hello",done);

        console.log("============================================================")


        // function calculate (num1,num2,call) {
        //     return call(num1,num2);
        // }

        // function add (a,b) {
        //     return a + b;
        // }

        // console.log(calculate(5,3,add));


        console.log("============================================================")

        // เขียนฟังก์ชัน hello ที่รับ callback function และเรียกใช้ callback นั้น
        

        function hello (callback) {
            callback();
        }

        function greet (){
           console.log(`hello callback`);
        }

        hello(greet);



        // แก้ไขฟังก์ชัน processNumber ให้สามารถรับตัวเลขและ callback แล้วนำตัวเลขไปใช้กับ callback

        function processNumber (number,callback){
            return callback(number);
        }

        function shownum (num) {
            return `this is a ${num}`;
        }

        console.log(processNumber(2,shownum));


        // แก้ไขโค้ดให้ฟังก์ชัน delayedMessage ใช้ setTimeout เพื่อเรียกใช้ callback หลังจาก 2 วินาที

        function delayedMessage (callback) {
            console.log(`กรุณรารอ สองวิ`);
            setTimeout(() => {
                callback();
            }, 2000);
        }

        function Message(){
            console.log(`hello callback`);
        }

        delayedMessage(Message);  // ลองแล้วได้ผลลัพธ์ กรุณรารอ สองวิ // undefined // hello callback งงว่าทำไมได้ undefined


        // เติมโค้ดใน calculate ให้สามารถบวก, ลบ, คูณ หรือหารได้โดยใช้ callback

        function calculate(a, b, callback) {
            // ใช้ callback กับ a และ b
            return callback(a,b);
          }
          
          function add(x, y) {
            return x + y;
          }
          
          console.log(calculate(3, 7, add)); // ต้องแสดง 10


        // โจทย์ที่ 5: เรียก Callback หลายครั้ง
        // แก้ไขโค้ดให้ฟังก์ชัน repeat เรียกใช้ callback ตามจำนวนครั้งที่กำหนด

        function repeat(times, callback) {
            // เรียกใช้ callback ตามจำนวนครั้งที่กำหนด
            for (let i = 0 ; i < times; i++){
                callback();
            }
            
          }
          
          function sayHello() {
            console.log("Hello!");
          }
          
          repeat(3, sayHello);
          // ต้องแสดง "Hello!" 3 ครั้ง
          
          