function carregaEndereco(){
let CEP = document.getElementById("CEP").value;
let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");
let url = `https://viacep.com.br/ws/${CEP}/json/`;

fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((viaCEP) => {
      rua.value = viaCEP.logradouro
      bairro.value = viaCEP.bairro
      cidade.value = viaCEP.localidade
      estado.value = viaCEP.estado
    })

    .catch((error) => {
      console.log("erro no carregamento do endereço");
    });
}
