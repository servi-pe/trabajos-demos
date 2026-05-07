// Smooth scrolling para enlaces internos
document.querySelectorAll('.nav-links a, .btn-whats, .btn-large').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }
    });
});

// Animación de aparición con scroll
const animateElements = document.querySelectorAll('.pack-card, .servicio-item, .efecto-card, .contacto-info, .about-grid, .price-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(35px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
});

// Efecto header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.05)';
        header.style.padding = '12px 0';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.03)';
        header.style.padding = '16px 0';
    }
});

// Animación de pulso en botón WhatsApp
const whatsappBtn = document.querySelector('.hero .btn-whats');
if (whatsappBtn) {
    let pulseInterval = setInterval(() => {
        whatsappBtn.style.transform = 'scale(1.02)';
        setTimeout(() => {
            whatsappBtn.style.transform = 'scale(1)';
        }, 200);
    }, 3500);
    
    whatsappBtn.addEventListener('mouseenter', () => {
        clearInterval(pulseInterval);
        whatsappBtn.style.transform = 'scale(1)';
    });
}

// Año dinámico en footer
const yearSpan = document.querySelector('.footer-copyright');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
}

// Efecto hover en cards
const cards = document.querySelectorAll('.pack-card, .efecto-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
});

console.log("✅ Daniel Urrutia Eventos | Web premium con fondo blanco cargada");


// ============================================
// CÓDIGO RESPONSIVO MEJORADO - AGREGAR ESTO
// ============================================

// Detectar y ajustar según orientación del dispositivo
window.addEventListener('resize', function() {
    // Reajustar alturas de imágenes si es necesario
    const images = document.querySelectorAll('.servicio-imagen img, .pack-img, .efecto-card img');
    images.forEach(img => {
        img.style.height = 'auto';
    });
    
    // Forzar reflow
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
});

// Detectar si es dispositivo móvil y ajustar interacciones
function isMobileDevice() {
    return (window.innerWidth <= 768) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    // Ajustar comportamiento para móviles
    document.querySelectorAll('.pack-card, .efecto-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Cerrar menú al hacer click en enlace (útil si agregas menú hamburguesa)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // Aquí puedes agregar lógica para cerrar un menú hamburguesa si lo implementas
        }
    });
});

// Verificar y ajustar viewport
function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
setViewportHeight();

console.log("✅ Código responsivo adicional activado");