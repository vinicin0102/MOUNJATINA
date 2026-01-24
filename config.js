/**
 * =====================================================
 * 🚀 CONFIGURAÇÃO GLOBAL DO FUNIL MOUNJATINA
 * =====================================================
 * 
 * ⚠️ IMPORTANTE: Este arquivo define o timing do CTA!
 * O valor aqui é FIXO e funciona em TODOS os dispositivos.
 * 
 * TIMING DO CTA: 2 minutos e 44 segundos (164 segundos)
 */

// =====================================================
// ⏱️ TIMING FIXO - 2 MINUTOS E 44 SEGUNDOS
// =====================================================
const CTA_DELAY_MINUTES = 2;
const CTA_DELAY_SECONDS = 44;
const CTA_DELAY_TOTAL_MS = ((CTA_DELAY_MINUTES * 60) + CTA_DELAY_SECONDS) * 1000; // 164000ms

// =====================================================
// 🔗 CONFIGURAÇÕES DE LINKS
// =====================================================
const FUNNEL_CONFIG = {
    // ⏱️ TIMING DO PITCH (FIXO - 2:44)
    ctaMin: CTA_DELAY_MINUTES,
    ctaSec: CTA_DELAY_SECONDS,
    ctaDelayMs: CTA_DELAY_TOTAL_MS,

    // 📹 EMBED DO VÍDEO (deixe vazio para usar placeholder)
    vslEmbed: '',

    // 📝 HEADLINE PERSONALIZADA
    vslHeadline: '',

    // 🔗 LINKS DE CHECKOUT (altere aqui)
    linkMain: 'https://pay.kiwify.com.br/SEU-LINK-PRINCIPAL',
    linkUpsell: 'https://pay.kiwify.com.br/SEU-LINK-UPSELL',
    linkDownsell: 'https://pay.kiwify.com.br/SEU-LINK-DOWNSELL',

    // 💬 LINK WHATSAPP/GRUPO VIP
    linkWhatsapp: 'https://chat.whatsapp.com/SEU-GRUPO'
};

/**
 * Retorna a configuração do funil
 * TIMING É SEMPRE FIXO (2:44) - não depende de localStorage
 */
function getFunnelConfig() {
    // TIMING É SEMPRE O DO CONFIG.JS (FIXO!)
    return {
        ...FUNNEL_CONFIG,
        ctaMin: CTA_DELAY_MINUTES,
        ctaSec: CTA_DELAY_SECONDS,
        ctaDelayMs: CTA_DELAY_TOTAL_MS
    };
}

// Exportar para uso global
window.FUNNEL_CONFIG = FUNNEL_CONFIG;
window.getFunnelConfig = getFunnelConfig;
window.CTA_DELAY_MS = CTA_DELAY_TOTAL_MS;

// Log de confirmação
console.log('%c⏱️ TIMING DO CTA CONFIGURADO:', 'color: #ff003c; font-size: 14px; font-weight: bold;');
console.log('%c   → ' + CTA_DELAY_MINUTES + ' minutos e ' + CTA_DELAY_SECONDS + ' segundos', 'color: #16a34a; font-weight: bold;');
console.log('%c   → ' + CTA_DELAY_TOTAL_MS + 'ms', 'color: #8b5cf6;');
