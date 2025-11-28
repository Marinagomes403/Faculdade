const url ="https://jsonplaceholder.typicode.com/todos/1";
const output = document.getElementById('output');
const status = document.getElementById('status');
function setLoading(on) {
    status.innerText = on 
    ? 'Loadding... <span class="spinner" aria-hidden="true"></span>' 
    :"";
}
// ---exemplo com fetch (promisses/async) ---
document
.getElementById("btn-fetch")
.addEventListener("click", async () => {
    output.textContent = "";
    setLoading(true);
    try {
        //fetch retorna uma promise que resolve para response
        const res = await fetch(url, { method: "GET" });
        if (!res.ok)  throw new Error("status HTTP: " + res.status);
        const data = await res.json(); //parce json automaticamente
        output.textContent = JSON.stringify(data, null, 2);
      } catch (err) {
        output.textContent = "Erro: " + err.message;
        output.classList.add("error");
      } finally {
        setLoading(false);
      }
    });

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