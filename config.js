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
    vslEmbed: '<div id="ifr_697839e5020a7a30f0f551e9_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_697839e5020a7a30f0f551e9_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_697839e5020a7a30f0f551e9" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src=\'https://scripts.converteai.net/e6498671-4054-4f88-a3da-e606dc0c11ee/players/697839e5020a7a30f0f551e9/v4/embed.html\' +(location.search||\'?\') +\'&vl=\' +encodeURIComponent(location.href)"></iframe> </div> </div>',
    vslHeadline: '',

    // 🔗 Links
    linkMain: 'form_endereco.html',
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
