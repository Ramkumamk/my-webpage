// ---- DATA ----
const products = [
  { id:"p1", category:"premium", name:"Musk Rijaali Premium", price:"Call for price", details:"Exquisite concentrated musk fragrance.", duration:"Pure Oil" },
  { id:"p2", category:"premium", name:"Musk Rijaali", price:"Call for price", details:"Premium musk blend with depth and character.", duration:"Pure Oil", popular:true },
  { id:"p3", category:"premium", name:"Kuwaity Oud", price:"Call for price", details:"Authentic Kuwaiti oud with rich undertones.", duration:"Pure Oil" },
  { id:"p4", category:"premium", name:"White Oud", price:"Call for price", details:"Rare white oud with bright, sophisticated notes.", duration:"Pure Oil" },
  { id:"p5", category:"premium", name:"Jannatul Firdous Swiss", price:"Call for price", details:"Heavenly blend inspired by paradise.", duration:"Pure Oil" },
  { id:"p6", category:"premium", name:"Jaguar Black", price:"Call for price", details:"Bold and mysterious black fragrance.", duration:"Pure Oil", popular:true },
  { id:"p7", category:"premium", name:"Royal Black", price:"Call for price", details:"Regal black fragrance for the discerning.", duration:"Pure Oil" },
  { id:"p8", category:"premium", name:"Royal Mirage", price:"Call for price", details:"Luxurious mirage of royal spices and florals.", duration:"Pure Oil" },
  { id:"p9", category:"premium", name:"CR7", price:"Call for price", details:"Iconic signature fragrance blend.", duration:"Pure Oil" },
  { id:"p10", category:"premium", name:"Majmua", price:"Call for price", details:"Classic oriental blend of precious oils.", duration:"Pure Oil" },
  { id:"p11", category:"premium", name:"Sabaya", price:"Call for price", details:"Sophisticated Arabian fragrance.", duration:"Pure Oil" },
  { id:"p12", category:"premium", name:"Shanaya", price:"Call for price", details:"Elegant feminine fragrance blend.", duration:"Pure Oil" },
  { id:"p13", category:"premium", name:"Dunhill Desire", price:"Call for price", details:"Sophisticated desire in a bottle.", duration:"Pure Oil" },
  { id:"p14", category:"premium", name:"Dunhill Icon", price:"Call for price", details:"Iconic fragrance for the modern man.", duration:"Pure Oil" },
  { id:"p15", category:"premium", name:"Tam Dao", price:"Call for price", details:"Refined sandalwood and spice blend.", duration:"Pure Oil" },
  { id:"p16", category:"premium", name:"Romance", price:"Call for price", details:"Timeless romantic fragrance.", duration:"Pure Oil" },
  { id:"p17", category:"premium", name:"Hugo Boss", price:"Call for price", details:"Powerful and elegant boss fragrance.", duration:"Pure Oil" },
  { id:"p18", category:"premium", name:"Blueberry", price:"Call for price", details:"Fresh fruity fragrance with blueberry notes.", duration:"Pure Oil" },
  { id:"p19", category:"premium", name:"Blackberry", price:"Call for price", details:"Rich blackberry fragrance blend.", duration:"Pure Oil" },
];

const features = [
  { title:"Authentic Attars", desc:"Pure and concentrated perfume oils with traditional Arabian craftsmanship.", icon:'<path d="M8 7h8v2H8z"/><path d="M9 9v8h6V9"/><path d="M10 2h4v4h-4z"/>' },
  { title:"Premium Ouds", desc:"Rare and precious oud sourced for unmatched depth and luxury.", icon:'<path d="M7 7h10v2H7z"/><path d="M8 9v6h8V9"/><path d="M10 15h4"/>' },
  { title:"International Brands", desc:"Curated collection of world-renowned fragrance brands and signature scents.", icon:'<path d="M6 4h12v4H6z"/><path d="M8 8v10h8V8"/><path d="M10 18h4"/>' },
  { title:"Wholesale & Bulk", desc:"Competitive pricing for retail resellers, wholesalers, and bulk orders.", icon:'<path d="M12 2l5 9h-10l5-9z"/><path d="M7 11h10v8H7z"/>' },
];

const stats = [
  { value:"200+", label:"Premium Fragrances", icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>' },
  { value:"5000+", label:"Satisfied Customers", icon:'<path d="M12 2l2 5 5 .7-4 3.9 1 5-4.5-2.4L7 16.6l1-5-4-3.9 5-.7z"/>' },
  { value:"15+", label:"Years in Perfumery", icon:'<path d="M12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"/><path d="M12 6v6l4 2"/>' },
  { value:"100%", label:"Authentic & Pure", icon:'<path d="M12 2C9.79 2 8 3.79 8 6c0 2 4 6 4 6s4-4 4-6c0-2.21-1.79-4-4-4z"/><path d="M12 18c-4.97 0-9 2.24-9 5v1h18v-1c0-2.76-4.03-5-9-5z"/>' },
];

// ---- RENDER ----
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('featuresGrid').innerHTML = features.map((f,i) =>
  `<div class="feature-card reveal" style="transition-delay:${i*.08}s">
    <div class="feature-icon gradient-accent"><svg viewBox="0 0 24 24" width="20" height="20">${f.icon}</svg></div>
    <h3>${f.title}</h3><p>${f.desc}</p>
  </div>`
).join('');

function renderPlans(container, list) {
  document.getElementById(container).innerHTML = list.map((p) =>
    `<div class="plan-slide">
      <div class="plan-card${p.popular?' popular':''}">
        ${p.popular?'<span class="plan-badge gradient-accent">Popular</span>':''}
        <h4>${p.name}</h4>
        <div class="plan-price">${p.price}</div>
        <p class="plan-details">${p.details}</p>
        <p class="plan-details">Size: ${p.duration}</p>
        <button class="plan-btn gradient-accent" onclick="openModal('${p.id}')">Order Now</button>
      </div>
    </div>`
  ).join('');
}
renderPlans('productsPlans', products);

setInterval(() => {
  slidePlans('products', 1);
}, 5000);

const sliders = {
  products: 0
};

function slidePlans(type, direction) {
  const track = document.getElementById(type + "Plans");
  const slides = track.querySelectorAll(".plan-slide");

  const visible = getVisibleCount();
  const total = slides.length;

  sliders[type] += direction;

  if (sliders[type] < 0) {
    sliders[type] = total - visible;
  }

  if (sliders[type] > total - visible) {
    sliders[type] = 0;
  }

  const move = (100 / visible) * sliders[type];
  track.style.transform = `translateX(-${move}%)`;
}

function getVisibleCount() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 4;
}

window.addEventListener("resize", () => {
  sliders.products = 0;

  document.getElementById("productsPlans").style.transform = "translateX(0)";
});

document.getElementById('statsGrid').innerHTML = stats.map((s,i) =>
  `<div class="stat-card glass-card reveal" style="transition-delay:${.15+i*.08}s">
    <svg viewBox="0 0 24 24" width="28" height="28">${s.icon}</svg>
    <div class="stat-value">${s.value}</div>
    <div class="stat-label">${s.label}</div>
  </div>`
).join('');

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

let currentProduct = null;
function openModal(id) {
  currentProduct = products.find(p=>p.id===id);
  if(!currentProduct) return;
  document.getElementById('modalContent').innerHTML = `
    <h3>Order ${currentProduct.name}</h3>
    <p class="plan-info">${currentProduct.price} - ${currentProduct.details} - ${currentProduct.duration}</p>
    <form class="space-y" onsubmit="submitPlan(event)">
      <input class="input" name="name" placeholder="Your Name" oninput="this.value=this.value.replace(/[^A-Za-z ]/g,'')" maxlength="100" required>
      <input class="input" name="mobile" placeholder="Mobile Number" oninput="this.value=this.value.replace(/[^0-9]/g,'')" pattern="[0-9]{10}" maxlength="10" required>
      <input class="input" name="email" type="email" placeholder="Email Address" maxlength="255" required>
      <button type="submit" class="btn btn-primary" id="planBtn" style="width:100%;justify-content:center;padding:.875rem;margin-top:.5rem">Submit Request</button>
      <small style="opacity:.7">You will be redirected to WhatsApp</small>
    </form>`;
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  currentProduct = null;
}

function showSuccess() {
  document.getElementById('modalContent').innerHTML = `
    <div class="success-view">
      <svg viewBox="0 0 24 24" width="56" height="56" style="color:var(--glow)"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <h3>Request Submitted!</h3>
      <p>We've received your order request for <strong>${currentProduct.name}</strong>. We will contact you shortly.</p>
      <button class="btn btn-primary" onclick="closeModal()" style="padding:.625rem 1.5rem">Close</button>
    </div>`;
}

async function submitPlan(e) {
  e.preventDefault();

  const fd = new FormData(e.target);
  const btn = document.getElementById('planBtn');

  const name = fd.get('name');
  const mobile = fd.get('mobile');
  const email = fd.get('email');

  btn.disabled = true;
  btn.textContent = 'Opening WhatsApp...';

  try {
    const message = `*New Order Inquiry*\n\nProduct: ${currentProduct.name}\nPrice: ${currentProduct.price}\nDetails: ${currentProduct.details}\nSize: ${currentProduct.duration}\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}`;

    const phoneNumber = "918883514919";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    document.getElementById('modalContent').innerHTML = `
      <div class="success-view">
        <h3>Opening WhatsApp...</h3>
        <p>Please click <strong>Send</strong> in WhatsApp to confirm your request.</p>
        <button class="btn btn-primary" onclick="showSuccess()" style="margin-top:1rem">I've Sent the Message</button>
      </div>`;
    setTimeout(() => {
      window.open(url, "_blank");
    }, 800);

  } catch (err) {
    alert('Something went wrong. Please try again.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Submit Request';
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({ behavior:'smooth' });
  });
});
