window.onload = function () {
    var captchaArry = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var arryLenght = 5;
    var captchaGen = '';

    for (var i = 0; i < arryLenght; i++) {
        var rand = Math.floor(Math.random() * captchaArry.length);
        console.log(rand);
        captchaGen += captchaArry.substring(rand, rand+1)
    }

    document.getElementById('captchaGen').value = captchaGen;
}

function checkCaptcha() {
    if (document.getElementById('humanVerify').value == document.getElementById('captchaGen').value) {
        
    } else {
        alert("Please Enter Captcha");
    }
}