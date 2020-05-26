function Click() {
    var user = document.getElementById('username');
    var password = document.getElementById('password');

    const coreUser = 'Anand';
    const corePass = 'Anand@123';

    if (user.value == coreUser) {
        if (password.value == corePass) {
            window.alert('Hello, How are you' + user.value);
            window.open('www.instagram.com');
        } else {
            window.alert('Invalid Password');
        }
    } else {
        window.alert('Invalid username');
    }
}

function ShowPassword() {
    var x = document.getElementById('password');
    if (x.type == 'password') {
        x.type = 'text';
    } else {
        x.type = 'password';
    }
}