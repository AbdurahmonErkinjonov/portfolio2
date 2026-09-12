document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect
    const textToType = "Backend Developer | Python/Django | Telegram Bot Engineer";
    const typewriterElement = document.getElementById('typewriter');

    let i = 0;
    
    function typeWriter() {
        if (i < textToType.length) {
            typewriterElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 60);
        }
    }
    
    // Start typewriter after a small delay
    setTimeout(typeWriter, 1000);

    // Custom Cursor Glow
    const cursorGlow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Add glowing effect on hover for links and buttons
    const interactiveElements = document.querySelectorAll('a, .btn, .glass-card, .resume-block');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorGlow.style.width = '600px';
            cursorGlow.style.height = '600px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)';
        });
        el.addEventListener('mouseleave', () => {
            cursorGlow.style.width = '400px';
            cursorGlow.style.height = '400px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)';
        });
    });

    // Header scroll effect
    const header = document.querySelector('.glass-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 50px';
            header.style.background = 'rgba(5, 5, 15, 0.9)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.padding = '20px 50px';
            header.style.background = 'rgba(5, 5, 15, 0.6)';
            header.style.boxShadow = 'none';
        }
    });

    // Scroll Reveal Animation
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var j = 0; j < reveals.length; j++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[j].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[j].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // CV Modal Interactivity
    const cvModal = document.getElementById('cvModal');
    const openCvModalBtn = document.getElementById('openCvModalBtn');
    const openCvModalBtn2 = document.getElementById('openCvModalBtn2');
    const closeCvModalBtn = document.getElementById('closeCvModalBtn');

    function openModal() {
        if (cvModal) {
            cvModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (cvModal) {
            cvModal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    }

    if (openCvModalBtn) openCvModalBtn.addEventListener('click', openModal);
    if (openCvModalBtn2) openCvModalBtn2.addEventListener('click', openModal);
    if (closeCvModalBtn) closeCvModalBtn.addEventListener('click', closeModal);

    if (cvModal) {
        cvModal.addEventListener('click', (e) => {
            if (e.target === cvModal) {
                closeModal();
            }
        });
    }
});

