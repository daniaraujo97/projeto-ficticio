// Adiciona rolagem suave manualmente
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Pega o ID da seção
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Rolagem suave
        });
    });
});

// Inicializa o EmailJS com sua chave pública
emailjs.init('sbiQwVtKonhJpOsWs');

window.onload = function() {
    // Função para enviar o formulário
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        // Obtém os dados do formulário manualmente
        const formData = {
            from_name: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            message: document.getElementById('mensagem').value
        };

        // Agora usamos os dados do formData corretamente
        const params = {
            nome: formData.from_name,
            email: formData.email,
            mensagem: formData.message
        };

        // Envia o e-mail através do serviço do EmailJS
        emailjs.send('service_wfp9pyr', 'template_m8echnm', params)
            .then(function(response) {
                console.log('Sucesso:', response);

                document.getElementById('nome').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mensagem').value = '';

            }, function(error) {
                alert('Falha ao enviar a mensagem. Tente novamente.');
                console.log('Erro:', error);
            });
    });
};

