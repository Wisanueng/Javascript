        // ฟังก์ชันจำลองการคำนวณที่ใช้เวลา
        function calculateResult() {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = 10 / 2; // ตัวอย่างการคำนวณ
                resolve(result); // คืนค่าเมื่อคำนวณเสร็จ
            }, 2000); // ใช้เวลา 2 วินาที
            });
        }
        
        // ฟังก์ชันที่ใช้ async/await
        async function getCalculationResult() {
            console.log("กำลังคำนวณ...");
        
            // ใช้ await รอให้ฟังก์ชัน calculateResult() เสร็จ
            const result = await calculateResult();
        
            console.log(`ผลลัพธ์การคำนวณคือ: ${result}`); // เมื่อคำนวณเสร็จแล้วจะแสดงผล
        }
        
        getCalculationResult();  // เรียกใช้งานฟังก์ชัน


        //js typeof