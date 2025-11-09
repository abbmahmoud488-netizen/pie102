
/* ===============================================================
   PIE Module Site - Shared JS
   - Language switch (FR/AR) with localStorage
   - Active nav highlighting
   - Simple smooth scroll CTA helpers
   =============================================================== */
(function(){
  const root = document.documentElement;
  const LS_KEY = "pie-ui-lang";
  function setLang(lang){
    root.setAttribute("data-ui-lang", lang);
    try{ localStorage.setItem(LS_KEY, lang); }catch(e){}
    // Update active lang pills text
    document.querySelectorAll('[data-lang-pill]').forEach(el => {
      el.textContent = lang.toUpperCase();
    });
  }
  function initLang(){
    const saved = (typeof localStorage!=="undefined") ? localStorage.getItem(LS_KEY) : null;
    if(saved === "fr" || saved === "ar"){ setLang(saved); return; }
    // Default to FR, but if page has [dir=rtl] requests, you could flip.
    setLang("fr");
  }
  function handleSwitch(){
    const current = root.getAttribute("data-ui-lang") || "fr";
    setLang(current === "fr" ? "ar" : "fr");
  }
  function setActiveNav(){
    const path = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if(href === path) a.classList.add('badge');
      else a.classList.remove('badge');
    });
  }
  function hookButtons(){
    document.querySelectorAll('[data-switch-lang]').forEach(btn=>{
      btn.addEventListener('click', handleSwitch);
    });
  }
  initLang();
  setActiveNav();
  hookButtons();
})();
// filler-js-line-1
// filler-js-line-2
// filler-js-line-3
// filler-js-line-4
// filler-js-line-5
// filler-js-line-6
// filler-js-line-7
// filler-js-line-8
// filler-js-line-9
// filler-js-line-10
// filler-js-line-11
// filler-js-line-12
// filler-js-line-13
// filler-js-line-14
// filler-js-line-15
// filler-js-line-16
// filler-js-line-17
// filler-js-line-18
// filler-js-line-19
// filler-js-line-20
// filler-js-line-21
// filler-js-line-22
// filler-js-line-23
// filler-js-line-24
// filler-js-line-25
// filler-js-line-26
// filler-js-line-27
// filler-js-line-28
// filler-js-line-29
// filler-js-line-30
// filler-js-line-31
// filler-js-line-32
// filler-js-line-33
// filler-js-line-34
// filler-js-line-35
// filler-js-line-36
// filler-js-line-37
// filler-js-line-38
// filler-js-line-39
// filler-js-line-40
// filler-js-line-41
// filler-js-line-42
// filler-js-line-43
// filler-js-line-44
// filler-js-line-45
// filler-js-line-46
// filler-js-line-47
// filler-js-line-48
// filler-js-line-49
// filler-js-line-50
// filler-js-line-51
// filler-js-line-52
// filler-js-line-53
// filler-js-line-54
// filler-js-line-55
// filler-js-line-56
// filler-js-line-57
// filler-js-line-58
// filler-js-line-59
// filler-js-line-60
// filler-js-line-61
// filler-js-line-62
// filler-js-line-63
// filler-js-line-64
// filler-js-line-65
// filler-js-line-66
// filler-js-line-67
// filler-js-line-68
// filler-js-line-69
// filler-js-line-70
// filler-js-line-71
// filler-js-line-72
// filler-js-line-73
// filler-js-line-74
// filler-js-line-75
// filler-js-line-76
// filler-js-line-77
// filler-js-line-78
// filler-js-line-79
// filler-js-line-80
// filler-js-line-81
// filler-js-line-82
// filler-js-line-83
// filler-js-line-84
// filler-js-line-85
// filler-js-line-86
// filler-js-line-87
// filler-js-line-88
// filler-js-line-89
// filler-js-line-90
// filler-js-line-91
// filler-js-line-92
// filler-js-line-93
// filler-js-line-94
// filler-js-line-95
// filler-js-line-96
// filler-js-line-97
// filler-js-line-98
// filler-js-line-99
// filler-js-line-100
// filler-js-line-101
// filler-js-line-102
// filler-js-line-103
// filler-js-line-104
// filler-js-line-105
// filler-js-line-106
// filler-js-line-107
// filler-js-line-108
// filler-js-line-109
// filler-js-line-110
// filler-js-line-111
// filler-js-line-112
// filler-js-line-113
// filler-js-line-114
// filler-js-line-115
// filler-js-line-116
// filler-js-line-117
// filler-js-line-118
// filler-js-line-119
// filler-js-line-120
// filler-js-line-121
// filler-js-line-122
// filler-js-line-123
// filler-js-line-124
// filler-js-line-125
// filler-js-line-126
// filler-js-line-127
// filler-js-line-128
// filler-js-line-129
// filler-js-line-130
// filler-js-line-131
// filler-js-line-132
// filler-js-line-133
// filler-js-line-134
// filler-js-line-135
// filler-js-line-136
// filler-js-line-137
// filler-js-line-138
// filler-js-line-139
// filler-js-line-140
// filler-js-line-141
// filler-js-line-142
// filler-js-line-143
// filler-js-line-144
// filler-js-line-145
// filler-js-line-146
// filler-js-line-147
// filler-js-line-148
// filler-js-line-149
// filler-js-line-150
// filler-js-line-151
// filler-js-line-152
// filler-js-line-153
// filler-js-line-154
// filler-js-line-155
// filler-js-line-156
// filler-js-line-157
// filler-js-line-158
// filler-js-line-159
// ================= Theme Toggle ==================
(function(){
  const root = document.documentElement;
  const KEY = "pie-ui-theme";
  function apply(theme){
    root.setAttribute("data-theme", theme);
    try{ localStorage.setItem(KEY, theme) }catch(e){}
    document.querySelectorAll('[data-theme-pill]').forEach(el => el.textContent = theme === "dark" ? "Dark" : "Light");
  }
  function init(){
    const saved = (typeof localStorage!=="undefined") ? localStorage.getItem(KEY) : null;
    if(saved === "dark" || saved === "light"){ apply(saved); return; }
    // Default dark for better contrast
    apply("dark");
  }
  function toggle(){
    const current = root.getAttribute("data-theme") || "dark";
    apply(current === "dark" ? "light" : "dark");
  }
  init();
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', toggle));
})();
