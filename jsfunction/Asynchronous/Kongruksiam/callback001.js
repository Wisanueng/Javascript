//  Asynchronous
    console.log(`start`); // 1
    console.log(`pending`); // 2
    console.log(`ending`); // 3
    

    console.log("=============================================================");


//  asynchronous
    console.log(`start`); // 1

    setTimeout(() => {
        console.log(`pending`); // 3
    }, 3000);

    console.log(`ending`); // 2
