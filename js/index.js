function buscarCEP() {
    let input = document.getElementById('cep').value.trim();

    if (input !== "") {
        const ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
        ajax.send();

        ajax.onload = function () {
            let obj = JSON.parse(this.responseText);
            let logradouro = obj.logradouro;
            let bairro = obj.bairro;
            let cidade = obj.localidade;
            let estado = obj.uf;
            
            document.getElementById('texto').innerHTML = "logradouro: " + logradouro + "<br> Bairro: " + bairro +
            "<br> Cidade: " + cidade + "<br> Estado: " + estado;

            document.querySelector('.informacoes').style.display = 'flex';
        }
    } else {
        document.querySelector('.informacoes').style.display = 'none';
    }
}