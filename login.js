document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtém os valores do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Carrega os dados do JSON
    fetch('LoginMarlon.json')
        .then(response => response.json())
        .then(users => {
            // Verifica se o nome de usuário e senha correspondem a algum usuário no arquivo JSON
            var user = users.find(u => u.username === username && u.password === password);
            if (user) {
                alert('Login bem-sucedido!');
                // Redireciona o usuário para a página de perfil, por exemplo
                window.location.href = 'TelaAdm.html';
            } else {
                alert('Nome de usuário ou senha incorretos. Tente novamente.');
            }
        })
        .catch(error => console.error('Erro:', error));
});
