document.addEventListener("DOMContentLoaded", function () {
    const verifyuser = sessionStorage.getItem("user");
    const verifypass = sessionStorage.getItem("pass");
    const changeonnologin = document.querySelectorAll(".changeonnologin");
    const changeonlogin = document.querySelectorAll(".changeonlogin");
    if (verifyuser === "administrator" && verifypass === "admin1234") {
        for (let i = 0; i < changeonnologin.length; i++) {
            changeonnologin[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < changeonlogin.length; i++) {
            changeonlogin[i].style.display = "none";
        }
    }
});


function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if (user != "" && pass != "") {
        if (user === "administrator" && pass === "admin1234") {
            sessionStorage.setItem("user", user);
            sessionStorage.setItem("pass", pass);
            location.reload();
        } else {
            alert("datos incorrectos");
        }
    } else {
        alert("Todos los campos son obligatorios.")
    }

}

function buy() {
    
    const bookname = document.getElementById("bookname").innerHTML.toString()
    const bookautor = document.getElementById("bookautor").innerHTML.toString()
    const bookprice = document.getElementById("bookprice").innerHTML.toString()

    const qrtext = "Libro: " + bookname + "(" + bookautor + ")" + " Precio: " + bookprice;
    document.querySelector(".details-box").style.display = 'none';
    document.querySelector(".qr").style.display = 'flex';
    alert(qrtext)
    new QRious({
        element: document.querySelector("#qrcode"),
        value: qrtext.toString(), // La URL o el texto
        size: 200,
        backgroundAlpha: 0, // 0 para fondo transparente
        foreground: "#ff0202", // Color del QR
        level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
    });
  
}

function logout() {
    sessionStorage.clear();
    location.reload();
}
