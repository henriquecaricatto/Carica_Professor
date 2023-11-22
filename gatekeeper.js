// Defina uma função que verifica as condições de acesso
function checkAccess() {
    // Aqui você pode implementar lógica para verificar a autenticação,
    // permissões, ou qualquer outra condição que desejar.
    // Por exemplo, você pode usar uma variável de sessão, verificar cookies, etc.
    // Neste exemplo, vamos usar uma senha simples para demonstrar.
    const password = prompt("Digite a senha de acesso:");

    if (password === "senha123") {
        return true; // Acesso permitido
    } else {
        return false; // Acesso negado
    }
}

// Verifique o acesso antes de carregar o conteúdo da página
window.onload = function() {
    if (!checkAccess()) {
        alert("Acesso não autorizado.");
        window.location.href = "pagina_de_acesso_negado.html"; // Redirecione para uma página de acesso negado
    }
};