

    const url1 = "hello_dowload.com"

    function dowload (url) {
        console.log(`pending dowload ${url}`);
    }

    function complete () {
        console.log(`complete`);
    }

    dowload(url1);
    complete();


    