document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('serviceModal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');

    const serviceImages = {
        residencial: [
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&h=400&fit=crop'
        ],
        comercial: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop'
        ],
        textura: [
            'https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop'
        ],
        decorativa: [
            'https://images.unsplash.com/photo-1581858726788-75bc0f1a4eaf?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500&h=400&fit=crop'
        ],
        reparos: [
            'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1534237886190-ced735ca4b73?w=500&h=400&fit=crop'
        ],
        impermeabilizacao: [
            'https://images.unsplash.com/photo-1590857839040-f94ac45a81e3?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=400&fit=crop'
        ],
        portoes: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=500&h=400&fit=crop'
        ],
        telhados: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=500&h=400&fit=crop'
        ],
        verniz: [
            'https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop'
        ],
        encanamento: [
            'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=500&h=400&fit=crop'
        ],
        piso: [
            'https://images.unsplash.com/photo-1581858726788-75bc0f1a4eaf?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1615873968403-89e068629265?w=500&h=400&fit=crop'
        ]
    };

    const serviceTitles = {
        residencial: 'Pintura Residencial - Trabalhos Realizados',
        comercial: 'Pintura Comercial - Trabalhos Realizados',
        textura: 'Textura e Grafiato - Trabalhos Realizados',
        decorativa: 'Pintura Decorativa - Trabalhos Realizados',
        reparos: 'Reparos e Massa Corrida - Trabalhos Realizados',
        impermeabilizacao: 'Impermeabilização - Trabalhos Realizados',
        portoes: 'Pintura de Portões e Grades - Trabalhos Realizados',
        telhados: 'Pintura de Telhados - Trabalhos Realizados',
        verniz: 'Aplicação de Verniz - Trabalhos Realizados',
        encanamento: 'Encanamento - Trabalhos Realizados',
        piso: 'Colocação de Piso - Trabalhos Realizados'
    };

    document.querySelectorAll('.btn-ver-trabalhos').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const serviceCard = this.closest('.service-card');
            const serviceType = serviceCard.getAttribute('data-service');
            
            modalTitle.textContent = serviceTitles[serviceType];
            modalGallery.innerHTML = '';
            
            serviceImages[serviceType].forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = serviceTitles[serviceType];
                modalGallery.appendChild(img);
            });
            
            modal.classList.add('active');
        });
    });

    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });


    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'Enviando...';
        button.disabled = true;
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                contactForm.reset();
            } else {
                alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            }
        } catch (error) {
            alert('Erro ao enviar mensagem. Por favor, tente novamente.');
        } finally {
            button.textContent = originalText;
            button.disabled = false;
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    navbar.style.transition = 'transform 0.3s ease';

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('.gallery-placeholder').textContent;
            alert(`Visualizando: ${text}\n\nAqui você poderia adicionar um lightbox com imagens reais do projeto.`);
        });
    });

    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = stat.textContent;
                    const isPercentage = target.includes('%');
                    const numericValue = parseInt(target);
                    
                    let current = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= numericValue) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
                        }
                    }, 30);
                });
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});
