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

      document.querySelectorAll("a, button, .property-card").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("active"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
      });
    } else {
      cursor.style.display = "none";
    }

    // ============================================================
    // 7. بيانات العقارات للمودال
    // ============================================================
    const propertiesData = [{
      id: 0,
      title: 'فيلا فاخرة بإطلالة بحرية',
      price: '$1,250,000',
      location: 'دمشق - سوريا',
      description: 'تتميز هذه الفيلا الفاخرة بتصميم عصري وإطلالة بحرية ساحرة. تتكون من 4 غرف نوم واسعة، 3 حمامات، وصالة معيشة مفتوحة. المطبخ مجهز بأحدث التقنيات، والحديقة الخارجية توفر مساحة مثالية للاسترخاء.',
      specs: { area: '350م²', bedrooms: '4', bathrooms: '3', year: '2022' },
      images: ['img/9.jpg', 'img/8.jpg', 'img/7.jpg', 'img/6.jpg']
    }, {
      id: 1,
      title: 'شقة حديثة في قلب المدينة',
      price: '$890,000',
      location: 'دمشق - سوريا',
      description: 'شقة فاخرة في موقع استراتيجي وسط المدينة، قريبة من جميع الخدمات. تتميز بتصميم عصري ومساحات مفتوحة. تتكون من 3 غرف نوم، 2 حمامات، ومطبخ مجهز بالكامل.',
      specs: { area: '180م²', bedrooms: '3', bathrooms: '2', year: '2021' },
      images: ['img/8.jpg', 'img/9.jpg', 'img/7.jpg', 'img/6.jpg']
    }, {
      id: 2,
      title: 'بنتهاوس فاخر بإطلالة رائعة',
      price: '$3,500 / شهر',
      location: 'دمشق - سوريا',
      description: 'بنتهاوس فاخر يقع في الطابق العلوي مع إطلالة بانورامية على المدينة. يتميز بمساحات واسعة وتصميم عصري راقٍ. يتكون من 3 غرف نوم، 2 حمامات، وتراس كبير.',
      specs: { area: '200م²', bedrooms: '3', bathrooms: '2', year: '2023' },
      images: ['img/7.jpg', 'img/9.jpg', 'img/8.jpg', 'img/6.jpg']
    }, {
      id: 3,
      title: 'فيلا كلاسيكية فاخرة',
      price: '$2,100,000',
      location: 'دمشق - سوريا',
      description: 'فيلا كلاسيكية بتصميم أنيق ومساحات واسعة. تتكون من 5 غرف نوم، 4 حمامات، وصالة معيشة فاخرة. الحديقة الخلفية توفر خصوصية تامة.',
      specs: { area: '420م²', bedrooms: '5', bathrooms: '4', year: '2020' },
      images: ['img/6.jpg', 'img/9.jpg', 'img/8.jpg', 'img/7.jpg']
    }, {
      id: 4,
      title: 'فيلا عصرية بإطلالة جبلية',
      price: '$1,450,000',
      location: 'دمشق - سوريا',
      description: 'فيلا عصرية بإطلالة جبلية خلابة. تتميز بتصميم مفتوح ومساحات واسعة. تتكون من 4 غرف نوم، 3 حمامات، وحديقة خارجية مع مسبح.',
      specs: { area: '380م²', bedrooms: '4', bathrooms: '3', year: '2023' },
      images: ['img/5.jpg', 'img/9.jpg', 'img/8.jpg', 'img/7.jpg']
    }, {
      id: 5,
      title: 'شقة راقية بموقع مميز',
      price: '$750,000',
      location: 'دمشق - سوريا',
      description: 'شقة راقية في موقع مميز قريب من جميع الخدمات. تتميز بتصميم عصري ومساحات مريحة. تتكون من 2 غرف نوم، 2 حمامات، وصالة معيشة.',
      specs: { area: '140م²', bedrooms: '2', bathrooms: '2', year: '2022' },
      images: ['img/4.jpg', 'img/9.jpg', 'img/8.jpg', 'img/7.jpg']
    }];

    // ============================================================
    // 8. الفلتر والبحث مع تحديث الترقيم (الإصدار النهائي)
    // ============================================================
    const allCards = document.querySelectorAll('.property-card');
    let filteredCards = [];
    let currentPage = 1;
    const itemsPerPage = 4;

    // دالة التصفية
    function filterProperties() {
      const type = document.getElementById('propertyType').value;
      const offer = document.getElementById('offerType').value;
      const priceFrom = parseInt(document.getElementById('priceFrom').value) || 0;
      const priceTo = parseInt(document.getElementById('priceTo').value) || Infinity;
      const bedrooms = document.getElementById('bedrooms').value;

      filteredCards = [];

      allCards.forEach(card => {
        const cardType = card.dataset.type;
        const cardOffer = card.dataset.offer;
        const cardPrice = parseInt(card.dataset.price);
        const cardBedrooms = card.dataset.bedrooms;

        let show = true;

        if (type !== 'all' && cardType !== type) show = false;
        if (offer !== 'all' && cardOffer !== offer) show = false;
        if (cardPrice < priceFrom || cardPrice > priceTo) show = false;
        if (bedrooms !== 'all' && cardBedrooms !== bedrooms) show = false;

        if (show) {
          filteredCards.push(card);
        }
      });

      // إعادة تعيين الصفحة إلى 1
      currentPage = 1;
      updatePagination();
      showPage(currentPage);
    }

    // دالة تحديث الترقيم
    function updatePagination() {
      const totalPages = Math.ceil(filteredCards.length / itemsPerPage) || 1;
      const pagination = document.getElementById('pagination');
      const pageBtns = pagination.querySelectorAll('.page-btn');
      const prevBtn = pagination.querySelector('.prev-page');
      const nextBtn = pagination.querySelector('.next-page');

      // تحديث أزرار الصفحات
      pageBtns.forEach((btn, index) => {
        const pageNum = index + 1;
        if (pageNum <= totalPages) {
          btn.style.display = '';
          btn.dataset.page = pageNum;
          btn.textContent = pageNum;
        } else {
          btn.style.display = 'none';
        }
      });

      // إظهار/إخفاء أزرار التنقل
      if (totalPages <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = '';
        nextBtn.style.display = '';
      }

      // تحديث الزر النشط
      pageBtns.forEach(btn => {
        const btnPage = parseInt(btn.dataset.page);
        btn.classList.toggle('active', btnPage === currentPage);
      });
    }

    // دالة عرض الصفحة
    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      // إخفاء الكل أولاً
      allCards.forEach(card => {
        card.style.display = 'none';
      });

      // إظهار البطاقات المطلوبة من القائمة المفلترة
      filteredCards.forEach((card, index) => {
        if (index >= start && index < end) {
          card.style.display = '';
        }
      });

      currentPage = page;
      updatePagination();
    }

    // ============================================================
    // 9. أحداث الفلتر والترقيم
    // ============================================================
    // حدث الفلتر
    document.getElementById('filterForm').addEventListener('submit', function(e) {
      e.preventDefault();
      filterProperties();
    });

    // أزرار الصفحات
    document.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const page = parseInt(this.dataset.page);
        if (page && page !== currentPage) {
          showPage(page);
        }
      });
    });

    // السابق
    document.querySelector('.prev-page').addEventListener('click', function() {
      const totalPages = Math.ceil(filteredCards.length / itemsPerPage) || 1;
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });

    // التالي
    document.querySelector('.next-page').addEventListener('click', function() {
      const totalPages = Math.ceil(filteredCards.length / itemsPerPage) || 1;
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });

    // ============================================================
    // 10. تهيئة الصفحة (عرض الكل)
    // ============================================================
    // عرض جميع العقارات في البداية
    filteredCards = Array.from(allCards);
    currentPage = 1;
    updatePagination();
    showPage(1);

    // ============================================================
    // 11. نافذة التفاصيل (Modal)
    // ============================================================
    function openModal(index) {
      const data = propertiesData[index];
      if (!data) return;

      document.getElementById('modalMainImg').src = data.images[0];
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalPrice').textContent = data.price;
      document.getElementById('modalLocation').innerHTML =
        `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
      document.getElementById('modalDescription').textContent = data.description;

      const specs = document.querySelectorAll('.modal-specs .spec');
      if (specs.length >= 4) {
        specs[0].querySelector('strong').textContent = data.specs.area;
        specs[1].querySelector('strong').textContent = data.specs.bedrooms;
        specs[2].querySelector('strong').textContent = data.specs.bathrooms;
        specs[3].querySelector('strong').textContent = data.specs.year;
      }

      const thumbnails = document.querySelectorAll('.modal-gallery .thumbnails img');
      thumbnails.forEach((img, i) => {
        if (data.images[i]) {
          img.src = data.images[i];
        }
      });

      document.getElementById('modalOverlay').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('active');
      document.body.style.overflow = '';
    }

    function closeModalOutside(event) {
      if (event.target === document.getElementById('modalOverlay')) {
        closeModal();
      }
    }

    function changeMainImg(src) {
      document.getElementById('modalMainImg').src = src;
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
// ============================================================
// 12. تفعيل الفلتر من الرابط (للروابط القادمة من الفوتر)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const offer = urlParams.get('offer');
  
  if (offer === 'sale' || offer === 'rent') {
    // تعيين قيمة الفلتر
    const offerSelect = document.getElementById('offerType');
    if (offerSelect) {
      offerSelect.value = offer;
      // تنفيذ الفلتر تلقائياً بعد تحميل الصفحة
      setTimeout(filterProperties, 300);
    }
  }
});
    console.log("%c SkyLine Premium ", "font-size:28px;color:silver;font-weight:bold");
    console.log("%c صفحة استعرض العقارات جاهزة  ", "font-size:14px;color:silver;");
    console.log("%c الفلتر والترقيم يعملان معاً بشكل مثالي ✅", "font-size:14px;color:silver;");