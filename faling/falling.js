

    const printNumbersForEvery2Sec = (n) => {
        for (let i = 1; i <= n; i++) {
            setTimeout(() => {
                var random_number = Math.floor(Math.random() * 10);
                if (random_number == 1) {
                    document.body.style.backgroundColor = "red";
                } else if (random_number == 2) {
                    document.body.style.backgroundColor = "blue";
                } else if (random_number == 3) {
                    document.body.style.backgroundColor = "yellow";
                } else if (random_number == 4) {
                    document.body.style.backgroundColor = "green";
                } else if (random_number == 5) {
                    document.body.style.backgroundColor = "black";
                } else if (random_number == 6) {
                    document.body.style.backgroundColor = "SlateBlue";
                } else if (random_number == 7) {
                    document.body.style.backgroundColor = "Orange";
                } else if (random_number == 8) {
                    document.body.style.backgroundColor = "Violet";
                } else if (random_number == 9) {
                    document.body.style.backgroundColor = " darkred";
                } else {
                    document.body.style.backgroundColor = "white";
                }
            }, i * 1500)
        }

    }
    printNumbersForEvery2Sec(100000);

