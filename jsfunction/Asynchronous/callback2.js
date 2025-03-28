    
    // มาทำโจทย์กัน

    // 1. ดีเลย์ข้อความ
    // เขียนฟังก์ชัน delayedMessage(message, delay, callback) ที่รับ

    // message (ข้อความที่ต้องการแสดง)

    // delay (หน่วยเป็นมิลลิวินาที)

    // callback (ฟังก์ชันที่ต้องเรียกหลังจากดีเลย์เสร็จ)

    // เมื่อเรียกใช้ฟังก์ชันนี้ ให้ดีเลย์ตามเวลาที่กำหนด แล้วแสดงข้อความก่อนเรียก callback

    // ตัวอย่างการใช้งาน

    // delayedMessage("Hello, world!", 2000, () => {
    //   console.log("ข้อความนี้แสดงหลังจาก 2 วินาที");
    // });

    // let value = Math.floor(Math.random());

    // function randomNumber(max,min,callback) {
    //     callback(Math.random() * (max - min + 1)) + min;
    // }    

    // function checkEvenOdd(number,callback) {
    //     if (number % 2 === 0){
    //         callback(console.log("เลขคู่"));
    //     }else{
    //         callback(console.log("เลขคี่"));
    //     }
    // }

    // randomNumber(1,100,function(num) {
    //     console.log(randomNumber);
    //     checkEvenOdd(num, function() {
    //         console.log("ตรวจสอบเสร็จแล้ว");
    //     });
    // });
    



    function delayedMessage(message, delay, callback) {
        // ดีเลย์การแสดงข้อความ
        setTimeout(() => {
            console.log(message);  // แสดงข้อความ
            callback();            // เรียก callback หลังจากแสดงข้อความ
        }, delay);
    }
    
    // ตัวอย่างการใช้งาน
    // delayedMessage("Hello, world!", 2000,function () {
    //     console.log("ข้อความนี้แสดงหลังจาก 2 วินาที");
    // });

    delayedMessage("Hello, world!", 2000,function () {console.log("ข้อความนี้แสดงหลังจาก 2 วินาที")});


    console.log("================================================================================================");
    // 2. แปลงข้อความเป็นตัวพิมพ์ใหญ่
    // สร้างฟังก์ชัน processText(text, callback) ที่

    // แปลง text เป็นตัวพิมพ์ใหญ่

    // เรียก callback พร้อมส่งข้อความที่แปลงแล้ว

    // ตัวอย่างการใช้งาน

    // processText("hello world", function(result) {
    //     console.log("ข้อความที่แปลงแล้ว:", result);
    // });


    function processText(text, callback){
        callback(text.toUpperCase());
    }

    processText("hello world", (result) => {
        console.log(` ข้อความที่แปลงแล้ว : ${result}`);
    })

    console.log("================================================================================================");

    // 3. คำนวณผลบวกของเลขสองตัว
    // สร้างฟังก์ชัน addNumbers(a, b, calblack) ที่

    // คำนวณ a + b

    // เรียก callback พร้อมส่งผลลัพธ์ไปให้

    // ตัวอย่างการใช้งาน

    // addNumbers(5, 10, function(result) {
    //     console.log("ผลรวมคือ:", result);
    // });


    function addNumbers(a,b,callback) {
        callback(a+b);
    }

    addNumbers(5,5, (result) => {
        console.log(`ผลรวมคือ : ${result}`);
    });





