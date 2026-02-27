document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // SOLO PARA PRUEBAS LOCALES - Guardar en localStorage
    const credentials = {
        username: username,
        password: password,
        timestamp: new Date().toISOString()
    };
    
    // Guardar credenciales (solo en tu máquina local)
    localStorage.setItem('lastLogin', JSON.stringify(credentials));
    
    // Mostrar mensaje
    document.getElementById('message').innerHTML = 'Credenciales guardadas localmente. Revisa localStorage.';
    
    console.log('Credenciales guardadas:', credentials);
    
    // Redirigir o limpiar formulario
    setTimeout(() => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }, 2000);
});
