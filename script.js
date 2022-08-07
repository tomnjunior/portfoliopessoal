function Submit() {
  var nome = document.getElementById("name");

  if (nome.value != "") {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  }
}

// Decidi fazer um código simples em JS para mostrar um alerta após o envio do formulário