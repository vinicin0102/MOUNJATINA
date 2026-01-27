/**
 * =====================================================
 * 🚀 CONFIGURAÇÃO GLOBAL DO FUNIL MOUNJATINA
 * =====================================================
 * 
 * Gerado em: 24/01/2026, 11:50:21
 * 
 * ⚠️ ESTE ARQUIVO É A FONTE ÚNICA DE VERDADE!
 * Funciona em TODOS os dispositivos (Desktop e Mobile)
 */

// =====================================================
// ⏱️ TIMING DO CTA - 2 MINUTOS E 44 SEGUNDOS
// =====================================================
const CTA_DELAY_MINUTES = 2;
const CTA_DELAY_SECONDS = 44;
const CTA_DELAY_TOTAL_MS = 164000; // (2*60+44)*1000

// =====================================================
// 🔗 LINKS DE CHECKOUT
// =====================================================
const FUNNEL_CONFIG = {
    // ⏱️ Timing
    ctaMin: CTA_DELAY_MINUTES,
    ctaSec: CTA_DELAY_SECONDS,
    ctaDelayMs: CTA_DELAY_TOTAL_MS,

    // 📹 Vídeo
    vslEmbed: '<vturb-smartplayer id="vid-69781f5b0c4568e0eb9b6d3f" style="display: block; margin: 0 auto; width: 100%; max-width: 100%; height: 100%;"></vturb-smartplayer>',
    vslHeadline: '',

    // 🔗 Links
    linkMain: 'https://pay.cakto.com.br/5gmom9n_739520',
    linkUpsell: 'https://pay.kiwify.com.br/SEU-LINK-UPSELL',
    linkDownsell: 'https://pay.kiwify.com.br/SEU-LINK-DOWNSELL',
    linkWhatsapp: 'https://chat.whatsapp.com/SEU-GRUPO'
};

// Função para obter config
function getFunnelConfig() {
    return FUNNEL_CONFIG;
}

// Exportar globalmente
window.FUNNEL_CONFIG = FUNNEL_CONFIG;
window.getFunnelConfig = getFunnelConfig;
window.CTA_DELAY_MS = CTA_DELAY_TOTAL_MS;

// Log de confirmação
console.log('%c⏱️ TIMING DO CTA:', 'color: #ff003c; font-size: 14px; font-weight: bold;');
console.log('%c   → ' + CTA_DELAY_MINUTES + ' minutos e ' + CTA_DELAY_SECONDS + ' segundos (' + CTA_DELAY_TOTAL_MS + 'ms)', 'color: #16a34a; font-weight: bold;');
console.log('%c📱 Funciona em Desktop e Mobile!', 'color: #8b5cf6; font-weight: bold;');
