const SenhaInput = document.getElementById("senha");
const confirmeSenhaInput = document.getElementById("confirma");
const botaoEnviar = document.getElementById("botao-enviar");
const mensagem = document.getElementById("mensagem");
 
function verificarSenhas(){
if (SenhaInput.value === confirmeSenhaInput.value && SenhaInput.value !== "") {
botaoEnviar.disabled = false;
mensagem.textContent = "Senhas coincidem! você pode enviar.";
} else {
    botaoEnviar.disabled = true;
    mensagem.textContent = "As senhas não coincidem, tente novamente"
 }
}

SenhaInput.addEventListener("input", verificarSenhas);
confirmeSenhaInput.addEventListener("input", verificarSenhas);

document.getElementById("passwordbox").addEventListener("submit", function(event) {
    Event.prevenDefault();

    if(SenhaInput.value === confirmeSenhaInput.value) {
        mensagem.textContent = "formulário enviado com sucesso";
    }
});

