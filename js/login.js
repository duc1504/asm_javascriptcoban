function checklogin(){
    var email = document.formlogin.mail.value;
    var pass = document.formlogin.pass.value;

    if (email==''|| pass=='') {
        alert('Vui lòng nhập email và mật khẩu');
    }
    else if (email=='ngocduc2k4@gmail.com'&& pass=='Ngocduc') {
        window.location.href = "index.html";
    }
    console.log(email, pass);
   return false;
}