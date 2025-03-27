

    // 001
    // function cal (x,y) {
    //     return x + y;
    // }

    // function display (result) {
    //     console.log(`ผลบวกคือ ${result}`);
        
    // }

    // // เรียกใช้ปกติ
    // const sum = cal(20,40);
    // display(sum);
    // output ผลบวกคือ 60


    //002
    // function cal (x,y) {
    //     setTimeout(() => {
    //         return x + y;
    //     }, 2000);
    // }

    // function display (result) {
    //     console.log(`ผลบวกคือ ${result}`);
        
    // }

    // // เรียกใช้ปกติ
    // const sum = cal(20,40);
    // display(sum);
    // output ผลบวกคือ undefined  ที่เป็นแบบนี้เพราะ sum ยังไม่การรับค่าจาก cal และ display เรียกใช้ sum นั้น sum = undefined


    //003
    // function cal (x,y,callback) {
    //     console.log(`กำลังคำนวณ`);
    //     setTimeout(() => {
    //         let sum =  x + y;
    //         callback(sum);
    //     }, 2000);
    // }

    // function display (result) {
    //     console.log(`ผลบวกคือ ${result}`);
        
    // }

    // // เรียกใช้แบบ callback
    // cal(20,40,display);
    // output กำลังคำนวณ > รอสองวิ > ผลบวกคือ 60



    function cal (x,y,callback) {
        console.log(`กำลังคำนวณ`);
        setTimeout(() => {
            let sum =  x + y;
            callback(sum);
        }, 2000);
    }

    // เรียกใช้แบบ callback (อีกวิธีหนึ่ง)
    cal(20,40,function (result) {
        console.log(`ผลบวกคือ ${result}`);
    });
    // output กำลังคำนวณ > รอสองวิ > ผลบวกคือ 60
  



