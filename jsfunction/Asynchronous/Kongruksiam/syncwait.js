// ฟังก์ชันที่จำลองการทำงานแบบ asynchronous (เช่น การดึงข้อมูลจากเซิร์ฟเวอร์)

let dataformapi = "this is data"

function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`ข้อมูลที่ดึงมาเสร็จแล้ว ${dataformapi}`);
      }, 3000);
    });
  }
  
  // ฟังก์ชันที่ใช้ async/await
  async function getData() {
    console.log("กำลังดึงข้อมูล...");
    
    // ใช้ await รอการทำงานของฟังก์ชัน fetchData
    const result = await fetchDataFromAPI();
  
    console.log(result); // เมื่อข้อมูลพร้อมแล้ว จะถูกแสดงผล
  }
  
  getData();  // เรียกใช้งานฟังก์ชัน
  


//   function calculateResult(a,b) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`ผลลัพธ์การคำนวณคือ`);
//         }, 2000);
//     }) 
//   }


//   async function 


function calculateResult(a,b,callback) {
    console.log(`กำลังคำนวณ...`);
    setTimeout(() => {
        callback(a / b)  
    }, 2000);
    
}

calculateResult(10,2, function (result) {
    console.log(`ผลลัพธ์คือ ${result}`);
});