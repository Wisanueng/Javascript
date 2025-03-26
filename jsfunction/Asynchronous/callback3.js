// ให้เขียนฟังก์ชัน process ที่รับ ค่าจำนวนเต็ม (number) และ Callback Function จากนั้นให้ process เรียกใช้งาน Callback พร้อมส่งค่าจำนวนเต็มนั้นไปให้


    function mycall (number) {
        console.log(`hello number ${number}`);
    }


    function process (number,callback) {
        callback(number);
    }

    process(5,mycall);



// // โจทย์ที่ 2: ใช้ Callback กับ setTimeout
// ให้สร้างฟังก์ชัน delayedMessage ที่รับข้อความ (string) และ Callback Function จากนั้นให้ใช้ setTimeout เพื่อรอ 2 วินาทีแล้วค่อยเรียก Callback พร้อมส่งข้อความไปให้


    function delayedMessage (string,callback) {
        console.log(`wait two sec`);
        setTimeout(() => {
            callback(string);
        }, 2000);
    }

    function showMessage () {
        console.log(`hello world `);
    }


    delayedMessage(`hello worldd`, showMessage);


// โจทย์ที่ 3: ใช้ Callback กับ Array
// ให้สร้างฟังก์ชัน mapArray ที่ทำงานเหมือน Array.map() โดยรับ
// อาร์เรย์ของตัวเลข
// Callback Function ที่ใช้แปลงค่าของแต่ละตัว

    function mapArray () {

    }
