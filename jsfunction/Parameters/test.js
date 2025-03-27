// ฟังก์ชันที่ใช้พารามิเตอร์ประเภท Primitive (ค่า) ที่ถูกส่งผ่านการอ้างอิง
function modifyValue(num) {
   return num = num * 2;  // ค่าในฟังก์ชันถูกเปลี่ยน แต่ภายนอกยังเหมือนเดิม
  }
  
  let x = 10;
  modifyValue(x);
  console.log(modifyValue(x));  // 10 (ค่าภายนอกไม่เปลี่ยนแปลง)




  // ฟังก์ชันที่ใช้ `arguments` เพื่อหาผลรวมของอาร์กิวเมนต์ทั้งหมด
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];  // บวกทุกค่าใน arguments
    }

    console.log(sum);
    // return sum;
  }
  sumAll(1, 2, 3, 4, 5)
//   console.log(sumAll(1, 2, 3, 4, 5)); // 15 (1 + 2 + 3 + 4 + 5)
  
  