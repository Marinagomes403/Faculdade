function enviar(){
    const name = document.getElementById('name').value;
    if(name ===''){
        alert('Por favor, preencha o nome!');}
     else{
        document.getElementById("hzinn").innerText = 'seja bem vindo(a)✌️ ' + name  + '!';}
    }
    function imagem(){
        document.getElementById('imagem').style.display = 'block';
        document.body.style.backgroundColor = "pink";
    }