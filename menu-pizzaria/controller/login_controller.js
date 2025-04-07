const email_correto = 'bryam.assolini@docente.pr.senac.br';
const senha_correta = '123456789';

let password_view = false;

function verificarLogin() {
    let input_email = document.getElementById('input_email');
    let input_senha = document.getElementById('input_senha');

    let email_digitado = input_email.value;
    let senha_digitada = input_senha.value;

    if (email_digitado == email_correto) {
        if (senha_digitada == senha_correta) {
            alert("LOGIN REALIZADO COM SUCESSO!!!");
        } else {
            alert("Senha incorreta!");
        }
    } else {
        alert("E-mail, incorreto!");
    }
}

function inverterSenhaSkin() {
    let input_senha = document.getElementById('input_senha');
    let password_icon = document.getElementById('password_icon');

    if (password_view) {
        password_icon.className = 'fa-solid fa-eye';
        input_senha.type = 'password';
    } else {
        password_icon.className = 'fa-solid fa-eye-slash';
        input_senha.type = 'text';
    }
    password_view = !password_view;
}