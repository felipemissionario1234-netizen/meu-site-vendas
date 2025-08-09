// === CONFIGURE AQUI ===
const checkoutURL = "COLE_AQUI_O_LINK_DO_SEU_CHECKOUT"; // Mercado Pago/Pix
const whatsappNumber = "5591999999999"; // DDI+DDD+número
// ======================

const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('main-image');
thumbs.forEach(t => t.addEventListener('click', () => {
  thumbs.forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  mainImage.src = t.src;
}));

document.querySelectorAll('.chips').forEach(group => {
  group.addEventListener('click', e => {
    if(e.target.classList.contains('chip')){
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  });
});

const qty = document.getElementById('qty');
document.getElementById('plus').onclick = () => qty.value = +qty.value + 1;
document.getElementById('minus').onclick = () => qty.value = Math.max(1, +qty.value - 1);

function buildCheckoutUrl(){
  const size = document.querySelector('.chips[data-name="size"] .chip.selected')?.dataset.value;
  const color = document.querySelector('.chips[data-name="color"] .chip.selected')?.dataset.value;
  const quantity = qty.value;
  const params = new URLSearchParams({size, color, quantity});
  return checkoutURL.includes('?') ? `${checkoutURL}&${params}` : `${checkoutURL}?${params}`;
}

function goBuy(){
  if(checkoutURL.includes("COLE_AQUI")) {
    alert("Coloque seu link de checkout em app.js (variável checkoutURL).");
    return;
  }
  window.open(buildCheckoutUrl(), "_blank");
}

document.getElementById('btn-buy').addEventListener('click', (e) => { e.preventDefault(); goBuy(); });
document.getElementById('btn-buy-floating').addEventListener('click', (e) => { e.preventDefault(); goBuy(); });

document.getElementById('btn-whats').addEventListener('click', () => {
  const text = encodeURIComponent(`Oi! Tenho interesse. Minha seleção: tamanho ${document.querySelector('.chips[data-name="size"] .chip.selected')?.dataset.value}, cor ${document.querySelector('.chips[data-name="color"] .chip.selected')?.dataset.value}.`);
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
});

const u = document.getElementById('urgency');
setInterval(() => {
  const n = 5 + Math.floor(Math.random()*9);
  u.textContent = `⚡ ${n} pessoas estão vendo este produto agora`;
}, 7000);
