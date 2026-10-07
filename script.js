const NOMOR_WA = "6281233964272";

document.querySelectorAll('.btn-beli').forEach(btn => {
  btn.addEventListener('click', () => {
    const paket = btn.dataset.paket;
    const harga = parseInt(btn.dataset.harga).toLocaleString('id-ID');
    const pesan = `Halo, saya mau beli *Paket ${paket}* seharga Rp ${harga}. Mohon info cara pembayarannya.`;
    const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
  });
});

const stats = document.querySelectorAll('.angka');
const observerStats = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target === 49 ? "4.9" : target + "+";
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 20);
      observerStats.unobserve(el);
    }
  });
}, { threshold: 0.5 });
stats.forEach(s => observerStats.observe(s));

document.querySelectorAll('.faq-item').forEach(item => {
  const p = item.querySelector('p');
  p.style.display = 'none';
  item.addEventListener('click', () => {
    const isOpen = p.style.display === 'block';
    document.querySelectorAll('.faq-item p').forEach(x => x.style.display = 'none');
    if (!isOpen) p.style.display = 'block';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 50 ? '0 5px 20px rgba(0,0,0,0.5)' : 'none';
});

const fadeElements = document.querySelectorAll('.paket, .fitur-box, .kategori, .testi');
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observerFade.observe(el);
});

console.log("PromptMaster siap! Nomor WA: " + NOMOR_WA);
