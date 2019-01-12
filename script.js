var userName = prompt("Как вас зовут?"),
    userNamelength = userName.length;
if (userNamelength == 6) {
    alert("ДОСВИДАНИЕ, " + userName + "!!!");
}   else if (userNamelength < 3) {
        alert("Добрый день, " + userName + "! У вас такое необычное имя.");
}   else if (userNamelength < 6) {
        alert("Добрый день, " + userName + "!");
}   else if (userNamelength > 12) {
        alert("Привет, " + userName + "! У тебя такое необычное имя.");
}   else if (userNamelength > 6) {
        alert("Привет, " + userName + "!");
}   else {
        alert("ДОСВИДАНИЕ, " + userName + "!!!");
}
