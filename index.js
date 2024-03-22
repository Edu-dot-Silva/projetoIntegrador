const btn_enviar_contato = document.getElementById('btn_enviar_contato')
const formulario_contato = document.getElementById('formulario_contato')
const formulario = document.getElementById('formulario')

btn_enviar_contato.addEventListener('click',()=>{
    formulario_contato.innerHTML = ""

    formulario_contato.innerHTML = "<div class=tela_envio_contato><p>Solicitação enviada com sucesso, entraremos em contato em breve!!! 🐝✅</p></div>"
    
})