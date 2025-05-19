document.getElementById('password_form').addEventListener('submit', (event)=>{
    event.preventDefault()
    const password = document.getElementById('password').value

    if(password == '12345678'){
        window.location.href = './cards.html'
    }else{
        alert('quem e tu bandido')
    }
});

