  // ============================================================
    // 1. شاشة التحميل
    // ============================================================
    window.addEventListener("load", () => {
      const loader = document.getElementById("loader");
      setTimeout(() => loader.classList.add("hide"), 1200);
    });

    // ============================================================
    // 2. الناف بار
    // ============================================================
    const navbar = document.getElementById("navbar");
    setTimeout(() => navbar.classList.add("show"), 300);

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("solid", window.scrollY > 60);
    });

    // ============================================================
    // 3. القائمة الجانبية
    // ============================================================
    const burger = document.getElementById("navBurger");
    const menu = document.getElementById("navLinks");
    const overlay = document.getElementById("navOverlay");
    const closeMenuBtn = document.getElementById("closeMenu");
    const body = document.body;

    function closeMobileMenu() {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("menu-open");
      burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    function openMobileMenu() {
      menu.classList.add("active");
      overlay.classList.add("active");
      body.classList.add("menu-open");
      burger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    burger.addEventListener("click", () => {
      menu.classList.contains("active") ? closeMobileMenu() : openMobileMenu();
    });

    overlay.addEventListener("click", closeMobileMenu);
    closeMenuBtn.addEventListener("click", closeMobileMenu);

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileMenu();
    });

    // ============================================================
    // 4. الوضع الداكن
    // ============================================================
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("skyline-theme");

    if (savedTheme === "dark") {
      body.dataset.theme = "dark";
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      body.dataset.theme = "light";
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    themeToggle.addEventListener("click", () => {
      const isDark = body.dataset.theme === "dark";
      body.dataset.theme = isDark ? "light" : "dark";
      localStorage.setItem("skyline-theme", isDark ? "light" : "dark");
      themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    });

    // ============================================================
    // 5. العودة للأعلى
    // ============================================================
    const toTop = document.getElementById("toTop");
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 500);
    });

    // ============================================================
    // 6. المؤشر المخصص
    // ============================================================
    const cursor = document.querySelector(".cursor");
    if (window.matchMedia("(pointer: fine)").matches) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      });

      document.querySelectorAll("a, button, .featured-slide").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("active"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
      });
    } else {
      cursor.style.display = "none";
    }

    // ============================================================
    // 7. تأثيرات الظهور
    // ============================================================
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-up").forEach((el) => revealObserver.observe(el));

    // ============================================================
    // 8. تفعيل الروابط النشطة
    // ============================================================
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a:not(.close-menu)");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const top = section.offsetTop - 200;
        if (window.scrollY >= top) current = section.getAttribute("id");
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });

    // ============================================================
    // 9. التمرير السلس
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (id === "#") return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // ============================================================
    // 10. Swiper.js – سلايدر العقارات
    // ============================================================
    const swiper = new Swiper('.featured-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 28,
        }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      speed: 600,
      effect: 'slide',
      autoHeight: false,
    });

    // ============================================================
    // 11. الأسئلة الشائعة (FAQ) – Accordion
    // ============================================================
    function toggleFaq(element) {
      const item = element.closest('.faq-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    }

    // تفعيل أول سؤال افتراضياً
    document.addEventListener('DOMContentLoaded', () => {
      const firstFaq = document.querySelector('.faq-item');
      if (firstFaq) {
        firstFaq.classList.add('active');
      }
    });

    // ============================================================
    // 12. شات بوت
    // ============================================================
    function toggleChat() {
      const window = document.getElementById('chatWindow');
      const toggle = document.getElementById('chatToggle');
      window.classList.toggle('active');
      toggle.classList.toggle('active');

      if (window.classList.contains('active')) {
        document.getElementById('chatInput').focus();
      }
    }

    function sendMessage() {
      const input = document.getElementById('chatInput');
      const messages = document.getElementById('chatMessages');
      const text = input.value.trim();

      if (text === '') return;

      const userMsg = document.createElement('div');
      userMsg.className = 'chat-message user';
      userMsg.textContent = text;
      messages.appendChild(userMsg);

      input.value = '';
      messages.scrollTop = messages.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        const replies = [
          'شكراً لتواصلك! سيقوم فريقنا بالرد عليك قريباً.',
          'نحن هنا لمساعدتك! هل لديك سؤال محدد عن العقارات؟',
          'يمكنك الاطلاع على عقاراتنا المميزة في القسم أعلاه.',
          'تواصل مع مستشارنا عبر زر "ابدأ الآن" للحصول على استشارة مجانية.',
          'جميع عقاراتنا موثقة ومعتمدة، يمكنك طلب جولة افتراضية في أي وقت.'
        ];
        botMsg.textContent = replies[Math.floor(Math.random() * replies.length)];
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      }, 800);
    }

    document.getElementById('chatInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    console.log("%c SkyLine Premium ", "font-size:28px;color:silver;font-weight:bold");
    console.log("%c تم التطوير بنجاح ❤️ ", "font-size:14px;color:#888;");
    console.log("%c الصفحة الرئيسية جاهزة 🚀", "font-size:14px;color:silver;");