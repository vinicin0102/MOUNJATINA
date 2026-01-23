document.addEventListener('DOMContentLoaded', () => {

    // --- LER CONFIGURAÇÕES DO ADMIN (LocalStorage) ---
    const config = JSON.parse(localStorage.getItem('funnelConfig')) || {};

    // Configurações Padrão se não houver Admin configurado
    const defaultConfig = {
        ctaMin: 0,
        ctaSec: 10,
        linkMain: 'https://pay.kiwify.com.br/SEU-LINK',
        linkUpsell: 'obrigado.html', // Fallback
        linkDownsell: 'obrigado.html'
    };

    // Mesclar configs
    const finalConfig = { ...defaultConfig, ...config };

    console.log("Configurações Carregadas:", finalConfig);

    // ============================================
    // 1. VÍDEO E HEADLINE (Apenas na página principal)
    // ============================================
    const videoWrapper = document.querySelector('.video-wrapper');
    const headlineEl = document.querySelector('.hero h1');

    if (config.vslEmbed && config.vslEmbed.trim() !== '' && videoWrapper) {
        // Substitui o placeholder pelo embed real
        videoWrapper.innerHTML = config.vslEmbed;
        // Ajusta responsividade do iframe (CSS helper)
        const iframe = videoWrapper.querySelector('iframe');
        if (iframe) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
        }
    }

    if (config.vslHeadline && config.vslHeadline.trim() !== '' && headlineEl) {
        headlineEl.innerHTML = config.vslHeadline;
    }

    // ============================================
    // 2. DELAY DO BOTÃO CTA (Apenas na principal)
    // ============================================
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer) {
        const min = parseInt(finalConfig.ctaMin) || 0;
        const sec = parseInt(finalConfig.ctaSec) || 0;
        const delayMs = ((min * 60) + sec) * 1000;

        console.log(`Delay CTA: ${delayMs}ms`);

        // Reseta visibilidade (caso CSS não tenha escondido)
        ctaContainer.classList.add('hidden');
        ctaContainer.style.display = 'none';

        setTimeout(() => {
            ctaContainer.style.display = 'block';
            // Pequeno timeout para permitir transição de opacidade
            setTimeout(() => {
                ctaContainer.classList.remove('hidden');
                ctaContainer.style.opacity = 1;
            }, 50);
        }, delayMs);
    }

    // ============================================
    // 3. ATUALIZAÇÃO INTELIGENTE DE LINKS
    // ============================================

    // Botão Principal (Quiz/VSL)
    const btnMain = document.querySelector('.cta-button');
    // Na pagina principal, o botão tem class .cta-button. 
    // Vamos garantir que ele aponte para o linkMain se estiver na home.
    if (btnMain && window.location.pathname.includes('quiz_vsl')) {
        btnMain.href = finalConfig.linkMain;
    }

    // Botão Upsell (Sim) - Classe .btn-yes
    const btnYes = document.querySelector('.btn-yes');
    if (btnYes && window.location.pathname.includes('upsell')) {
        btnYes.href = finalConfig.linkUpsell;
    }

    // Botão Downsell (Sim) - Classe .btn-yes na página downsell
    if (btnYes && window.location.pathname.includes('downsell')) {
        btnYes.href = finalConfig.linkDownsell;
    }

    // Link WhatsApp (Geralmente no footer ou obrigado)
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp && finalConfig.linkWhatsapp) {
        btnWhatsapp.href = finalConfig.linkWhatsapp;
    }


    // ============================================
    // 4. FUNCIONALIDADES GERAIS (FAQ, DATA)
    // ============================================

    // Data Dinâmica
    const dateElement = document.getElementById('dynamic-date-vsl');
    if (dateElement) {
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        dateElement.innerText = new Date().toLocaleDateString('pt-BR', options);
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                faqItems.forEach(other => {
                    if (other !== item) other.classList.remove('active');
                });
                item.classList.toggle('active');
            });
        }
    });

});
