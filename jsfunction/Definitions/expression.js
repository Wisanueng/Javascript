const sayHello = function(){
    console.log("hello world");
}


//1.  สร้างฟังก์ชันในรูปแบบของฟังก์ชันนิพจน์ subtract ที่รับพารามิเตอร์สองตัวและคืนค่าผลลบของสองตัวเลขนั้น

        const subtract = function (a,b){
            return a - b;
        }

        console.log(subtract(5,2));


console.log("=====================================================================================");


// สร้างฟังก์ชันในรูปแบบของฟังก์ชันนิพจน์ isPrime(number) ที่ตรวจสอบว่าเลขที่รับมาเป็นจำนวนเฉพาะหรือไม่


        // นี่คือคิดเอง (คิดได้ไง อายเขา 5555)
        const isPrime = function(number){
            return number % 1 === 0 && number % number === 0;
        }
        console.log(isPrime(20));

        console.log("-----------------------");

        // นี่คือที่ถูกต้อง
        const isPrimee = function(number) {
            if (number <= 1) return false; // จำนวนที่น้อยกว่าหรือเท่ากับ 1 ไม่ใช่จำนวนเฉพาะ
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false; // ถ้าหาเลขที่หารลงได้ก็ไม่เป็นจำนวนเฉพาะ
                }
            }
            return true; // ถ้าไม่พบเลขที่หารลงได้ ก็แสดงว่าเป็นจำนวนเฉพาะ
        };

        console.log(isPrimee(20)); // false (เพราะ 20 ไม่ใช่จำนวนเฉพาะ)
        console.log(isPrimee(17)); // true (เพราะ 17 เป็นจำนวนเฉพาะ)



console.log("=====================================================================================");

// เขียนฟังก์ชันในรูปแบบนิพจน์ power(a, b) ที่รับสองพารามิเตอร์แล้วคืนค่าผลลัพธ์ของการยกกำลัง

        const power = function(a,b){
            return a ** b;
        }

        console.log(power(2,3))

console.log("=====================================================================================");

// เขียนฟังก์ชันในรูปแบบนิพจน์ checkAge(age) ที่รับอายุแล้วคืนค่าข้อความว่า "วัยรุ่น" หากอายุน้อยกว่า 18 ปี และ "ผู้ใหญ่" หากอายุ 18 ปีขึ้นไป

            const checkAge = function(age){
                if(age < 18){
                    return `วัยรุ่น`;
                }else{
                    return `ผู้ใหญ่`;
                }
            }

            console.log(checkAge(25));


console.log("=====================================================================================");

// สร้างฟังก์ชันนิพจน์ concatStrings(str1, str2) ที่รับสองสตริงแล้วคืนค่าการรวมสตริงทั้งสอง

                const concatStrings = function(str1,str2){
                    return `นี่คือการรวมระหว่าง ${str1} และ ${str2} : ${str1} ${str2}`
                }
                
                console.log(concatStrings("hello","world"));

console.log("=====================================================================================");


