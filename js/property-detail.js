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

      document.querySelectorAll("a, button, .similar-card").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("active"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
      });
    } else {
      cursor.style.display = "none";
    }

    // ============================================================
    // 7. تغيير الصورة الرئيسية
    // ============================================================
    function changeMainImage(src) {
      document.getElementById('mainImage').src = src;
    }

    // ============================================================
    // 8. بيانات العقار من الرابط (محاكاة)
    // ============================================================
    const propertyData = {
      id: 0,
      title: 'فيلا فاخرة بإطلالة بحرية',
      price: '$1,250,000',
      location: 'دمشق - سوريا',
      tag: 'للبيع',
      description: 'تتميز هذه الفيلا الفاخرة بتصميم عصري وإطلالة بحرية ساحرة. تتكون من 4 غرف نوم واسعة، 3 حمامات، وصالة معيشة مفتوحة. المطبخ مجهز بأحدث التقنيات، والحديقة الخارجية توفر مساحة مثالية للاسترخاء والاستمتاع بأجمل الأوقات مع العائلة.',
      specs: { area: '350م²', bedrooms: '4', bathrooms: '3', year: '2022' },
      images: ['img/9.jpg', 'img/8.jpg', 'img/7.jpg', 'img/6.jpg']
    };

    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id')) || 0;

    function loadPropertyData(data) {
      document.getElementById('propertyTitle').textContent = data.title;
      document.getElementById('propertyPrice').textContent = data.price;
      document.getElementById('propertyLocation').textContent = data.location;
      document.getElementById('propertyTag').textContent = data.tag;
      document.getElementById('propertyDescription').textContent = data.description;

      document.getElementById('specArea').textContent = data.specs.area;
      document.getElementById('specBedrooms').textContent = data.specs.bedrooms;
      document.getElementById('specBathrooms').textContent = data.specs.bathrooms;
      document.getElementById('specYear').textContent = data.specs.year;

      if (data.images && data.images.length > 0) {
        document.getElementById('mainImage').src = data.images[0];
        document.getElementById('imageCount').textContent = data.images.length;

        const thumbnails = document.getElementById('thumbnailsContainer');
        thumbnails.innerHTML = '';
        data.images.forEach(imgSrc => {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = '';
          img.onclick = function() { changeMainImage(this.src); };
          thumbnails.appendChild(img);
        });
      }
    }

    loadPropertyData(propertyData);

    // ============================================================
    // 9. شات بوت
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
          'نحن هنا لمساعدتك! هل لديك سؤال محدد عن هذا العقار؟',
          'يمكنك طلب جولة افتراضية لهذا العقار في أي وقت.',
          'تواصل مع مستشارنا للحصول على استشارة مجانية.'
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
    console.log("%c صفحة تفاصيل العقار جاهزة 🏠 ", "font-size:14px;color:silver;");