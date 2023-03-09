var form = document.getElementById('form-deposito');





form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validaform();
})


function validaform() {
    
    const numero1 = document.getElementById('campo1');
    const numero2 = document.getElementById('campo2');
    const erro = document.querySelector('.error');
    
    

    

    if(numero2.value > numero1.value) {
        document.querySelector('.sucess').style.display = 'block';

        numero1.value = '';
        numero2.value = '';
        erro.style.display = 'none';
        numero2.style.border = '1px solid #7CFC00';
        
        

    } else {
        alert("O Campo B precisa ser maior do que o Campo A ");
    
    }

}












