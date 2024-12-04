function enderecoCep() {
    // Pega o valor do campo e remove tudo que não for número
    const cepValue = document.getElementById('cep').value.replace(/\D/g, '');
 
    if (cepValue.length !== 8) { // Verifica se o CEP tem exatamente 8 dígitos
      // Exibe um alerta caso o usuario queira quebrar o sistema como sempre
      alert("CEP inválido!");
      return;
    }
   
    // link do API do VIACEP
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
      .then(response => response.json())  // Converte a resposta da API para um objeto JSON
      .then(data => {
        // Verifica se retornou um erro
        if (data.erro) {
          alert("CEP não encontrado");  // Alerta o usuário caso o CEP não exista
          return;
        }
        // Preenche os campos de rua, bairro e  cidade com os dados pego pela API
        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
      })
      .catch(() => alert("Erro ao buscar o CEP"));  // caso ocorra algum problema ele avisa
}
 
// Função para limpar os campos do formulário
function limparCampos() {
    // Limpa os valores dos campos de input com os respectivos ids
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
}
 


