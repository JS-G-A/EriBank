document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
   
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'natnael@gmail.com' && userPassword == 'natnael1!'){
        window.location.href = 'eribank.html';
    }else if( userEmail == 'daniel@gmail.com' && userPassword == 'daniel1!'){
        window.location.href = 'eribank.html';

    }else{
        alert('Invalid Email or Password');
    }
})
