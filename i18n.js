(function () {
const translations = {
    ru: {
        "meta.title": "pon4ikisdonut — личный сайт",
        "meta.desc": "гагагага да да это мой сайт я крутой да да ахахахахах.",
        "header.role": "System Administrator",
        "header.kyivTime": "Kyiv time",
        "about.title": "About",
        "about.text": "Работаю с низкоуровневой разработкой на C, системным администрированием и инфраструктурой. Люблю собирать свои сервера и поднимать игровые проекты.",
        "about.subtle": "Интересы: собственная 64‑битная ОС, игровые серверы Minecraft/CS2/CS:GO, немного нейросети и всё, что связано с железом. ну и игры естественно, но к сожалению видеокарта умерла.",
        "projects.title": "Projects",
        "projects.kyroos.tag": "OSDev · x86_64",
        "projects.kyroos.text": "64‑битная операционная система, написанная полностью с нуля. Загрузчик Limine, вывод через framebuffer, сейчас на стадии ранней альфы.",
        "projects.kyroos.subtle": "В активной разработке: планируется нормальная графика, звук и сетевая подсистема, а так же куча всего остального",
        "projects.zpsr.tag": "Toy language",
        "projects.zpsr.text": "Язык программирования‑прослойка над Python, который сохраняет структуру и простоту оригинала, но использует русскую раскладку для ключевых слов и операторов.",
        "projects.zpsr.subtle": "ZPSR расшифровывается как «Zaebis Pisat Suka na Russkom» — это эксперимент в дизайне языков и попытка сделать код максимально «нативным» для неанглийской раскладки клавиатуры.",
        "projects.zpsr.example": 'Пример синтаксиса: <code>зкште("Write anything"); еуче = штзге(); зкште(еуче)</code>',
        "projects.femboy.tag": "Web · Fun",
        "projects.femboy.text": "Список фембоев. Просто список. Просто фембои. Ничего лишнего — заходишь, смотришь, уходишь (или не уходишь).",
        "projects.femboy.subtle": "Хостится на <code>femboy.pp.ua</code>. Контент пополняется по мере поступления.",
        "projects.femboy.open": "Открыть femboy.pp.ua",
        "projects.raduga.tag": "Реклама · TG Чат",
        "projects.raduga.text": "Официальный чат ОПГ «Радуга». Общение, ламповая атмосфера и движ без духоты.",
        "projects.raduga.subtle": "Залетай в чат: <code>t.me/OPG_R4duga</code>",
        "projects.raduga.button": "Вступить",
        "projects.raduga.open": "Вступить в чат ОПГ «Радуга»",
        "hardware.title": "Hardware & Stack",
        "hw.pc.title": "Основной ПК",
        "hw.pc.meta": "Xeon E5‑2680 v3 · Разобран",
        "hw.pc.li0": "CPU: Intel Xeon E5‑2680 v3 (12C / 24T)",
        "hw.pc.li1": "Куллер: Adegrees A6 (3 вентилятора)",
        "hw.pc.li2": "RAM: Mougol DDR4 2133 MHz (2 × 8 GB)",
        "hw.pc.li3": 'GPU: RX 480 Nitro+ <span class="badge-moved">→ в Сервер</span>',
        "hw.pc.li4": "Motherboard: Mougol X99 P4 (C612)",
        "hw.pc.li5": 'PSU: GameMax VP‑700‑RGB <span class="badge-moved">→ в Сервер</span>',
        "hw.pc.li6": "Case: Gamemax G561 White",
        "hw.mac.meta": 'early 2014 · <span class="badge-subtle">-зарядка</span>',
        "hw.server.title": "Сервер → ПК",
        "hw.server.li1": "RAM: 2 × 8 GB Samsung DDR3 + 8 GB Kingston DDR3",
        "hw.server.storageLabel": "Storage:",
        "hw.server.st0": "Patriot Burst Elite [120 ГБ]",
        "hw.server.st1": "ST3250318AS [232 ГБ]",
        "hw.server.st2": "WDC WD3200BEVT‑24A23T0 [298 ГБ]",
        "hw.server.st3": "WDC WD3200AAJS‑00L7A0 [298 ГБ]",
        "hw.phone.title": "Телефон",
        "hw.phone.li1": 'Дисплей: 6.7" LTPO AMOLED, 120Hz (1440x3120)',
        "hw.phone.li2": "Камера: 50MP Main + 48MP Telephoto + 12MP Ultra-wide",
        "hw.phone.li3": "Батарея: 5003mAh, 30W fast charging",
        "hw.phone.li4": "Сборка: Gorilla Glass Victus, IP68 water resistance",
        "footer.title": "Contacts",
        "footer.text": "Я просто открыт к вопросам. Пишите по тех. части, или просто так. (если вы фанат Debian то не пишите)",
        "hw.dead.label": "МЁРТВ."
    },
    en: {
        "meta.title": "pon4ikisdonut — personal site",
        "meta.desc": "hehehe yeah yeah this is my site i'm cool yeah yeah lol.",
        "header.role": "System Administrator",
        "header.kyivTime": "Kyiv time",
        "about.title": "About",
        "about.text": "I work with low-level development in C, system administration, and infrastructure. I love building my own servers and running gaming projects.",
        "about.subtle": "Interests: my own 64-bit OS, Minecraft/CS2/CS:GO game servers, a bit of neural networks, and anything hardware-related. And games, of course, though sadly my GPU died.",
        "projects.title": "Projects",
        "projects.kyroos.tag": "OSDev · x86_64",
        "projects.kyroos.text": "A 64-bit operating system written entirely from scratch. Limine bootloader, framebuffer output, currently in early alpha.",
        "projects.kyroos.subtle": "Actively in development: proper graphics, sound, a network stack, and a ton of other stuff planned.",
        "projects.zpsr.tag": "Toy language",
        "projects.zpsr.text": "A programming language layer over Python that keeps the structure and simplicity of the original but uses a Russian keyboard layout for keywords and operators.",
        "projects.zpsr.subtle": "ZPSR stands for \"Zaebis Pisat Suka na Russkom\" (roughly: \"Great to code in Russian\") — an experiment in language design and an attempt to make code as \"native\" as possible for a non-English keyboard layout.",
        "projects.zpsr.example": 'Syntax example: <code>зкште("Write anything"); еуче = штзге(); зкште(еуче)</code>',
        "projects.femboy.tag": "Web · Fun",
        "projects.femboy.text": "A list of femboys. Just a list. Just femboys. Nothing else — you come in, you look, you leave (or you don't).",
        "projects.femboy.subtle": "Hosted at <code>femboy.pp.ua</code>. Content updates as it comes in.",
        "projects.femboy.open": "Open femboy.pp.ua",
        "projects.raduga.tag": "Ad · TG Chat",
        "projects.raduga.text": "Official chat of OPG \"Raduga\". Good vibes, friendly community, and fun without toxicity.",
        "projects.raduga.subtle": "Join the chat: <code>t.me/OPG_R4duga</code>",
        "projects.raduga.button": "Join",
        "projects.raduga.open": "Join OPG Raduga chat",
        "hardware.title": "Hardware & Stack",
        "hw.pc.title": "Main PC",
        "hw.pc.meta": "Xeon E5-2680 v3 · Disassembled",
        "hw.pc.li0": "CPU: Intel Xeon E5-2680 v3 (12C / 24T)",
        "hw.pc.li1": "Cooler: Adegrees A6 (3 fans)",
        "hw.pc.li2": "RAM: Mougol DDR4 2133 MHz (2 × 8 GB)",
        "hw.pc.li3": 'GPU: RX 480 Nitro+ <span class="badge-moved">→ moved to Server</span>',
        "hw.pc.li4": "Motherboard: Mougol X99 P4 (C612)",
        "hw.pc.li5": 'PSU: GameMax VP-700-RGB <span class="badge-moved">→ moved to Server</span>',
        "hw.pc.li6": "Case: Gamemax G561 White",
        "hw.mac.meta": 'early 2014 · <span class="badge-subtle">-charger</span>',
        "hw.server.title": "Server → PC",
        "hw.server.li1": "RAM: 2 × 8 GB Samsung DDR3 + 8 GB Kingston DDR3",
        "hw.server.storageLabel": "Storage:",
        "hw.server.st0": "Patriot Burst Elite [120 GB]",
        "hw.server.st1": "ST3250318AS [232 GB]",
        "hw.server.st2": "WDC WD3200BEVT-24A23T0 [298 GB]",
        "hw.server.st3": "WDC WD3200AAJS-00L7A0 [298 GB]",
        "hw.phone.title": "Phone",
        "hw.phone.li1": 'Display: 6.7" LTPO AMOLED, 120Hz (1440x3120)',
        "hw.phone.li2": "Camera: 50MP Main + 48MP Telephoto + 12MP Ultra-wide",
        "hw.phone.li3": "Battery: 5003mAh, 30W fast charging",
        "hw.phone.li4": "Build: Gorilla Glass Victus, IP68 water resistance",
        "footer.title": "Contacts",
        "footer.text": "I'm just open to questions. Write about tech stuff, or just because. (if you're a Debian fanboy, please don't)",
        "hw.dead.label": "DEAD."
    },
    zh: {
        "meta.title": "pon4ikisdonut — 个人网站",
        "meta.desc": "哈哈哈哈是的是的这是我的网站我很酷哈哈哈哈哈。",
        "header.role": "系统管理员",
        "header.kyivTime": "基辅时间",
        "about.title": "关于",
        "about.text": "我从事 C 语言底层开发、系统管理和基础设施工作。我喜欢搭建自己的服务器和运行游戏项目。",
        "about.subtle": "兴趣：自研 64 位操作系统、Minecraft/CS2/CS:GO 游戏服务器、一点神经网络，以及一切与硬件相关的东西。当然还有游戏，可惜显卡已经挂了。",
        "projects.title": "项目",
        "projects.kyroos.tag": "操作系统开发 · x86_64",
        "projects.kyroos.text": "一个完全从零编写的64位操作系统。使用 Limine 引导器,通过帧缓冲输出,目前处于早期 alpha 阶段。",
        "projects.kyroos.subtle": "正在积极开发中：计划加入正常的图形、声音和网络子系统，以及其他一大堆功能。",
        "projects.zpsr.tag": "玩具语言",
        "projects.zpsr.text": "一个基于 Python 的编程语言层，保留了原语言的结构和简洁性，但关键字和操作符使用俄语键盘布局。",
        "projects.zpsr.subtle": "ZPSR 是 \"Zaebis Pisat Suka na Russkom\"（大意为“用俄语打字真爽”）的缩写——这是一次语言设计实验，尝试让代码尽可能“原生”地适配非英语键盘布局。",
        "projects.zpsr.example": '语法示例：<code>зкште("Write anything"); еуче = штзге(); зкште(еуче)</code>',
        "projects.femboy.tag": "网页 · 娱乐",
        "projects.femboy.text": "一份娘化男孩（femboy）名单。仅仅是名单。只有 femboy，别无其他——你进来，看一看，然后离开（或者不离开）。",
        "projects.femboy.subtle": "托管在 <code>femboy.pp.ua</code>。内容会不断更新。",
        "projects.femboy.open": "打开 femboy.pp.ua",
        "projects.raduga.tag": "广告 · TG 群聊",
        "projects.raduga.text": "OPG \"Raduga\" 官方群聊。友好的交流氛围，畅聊与互动。",
        "projects.raduga.subtle": "加入群聊：<code>t.me/OPG_R4duga</code>",
        "projects.raduga.button": "加入",
        "projects.raduga.open": "加入 OPG Raduga 群聊",
        "hardware.title": "硬件与技术栈",
        "hw.pc.title": "主力电脑",
        "hw.pc.meta": "Xeon E5-2680 v3 · 已拆解",
        "hw.pc.li0": "CPU: Intel Xeon E5-2680 v3 (12核 / 24线程)",
        "hw.pc.li1": "散热器: Adegrees A6 (3 风扇)",
        "hw.pc.li2": "内存: Mougol DDR4 2133 MHz (2 × 8 GB)",
        "hw.pc.li3": 'GPU: RX 480 Nitro+ <span class="badge-moved">→ 已移至服务器</span>',
        "hw.pc.li4": "主板: Mougol X99 P4 (C612)",
        "hw.pc.li5": 'PSU: GameMax VP-700-RGB <span class="badge-moved">→ 已移至服务器</span>',
        "hw.pc.li6": "机箱: Gamemax G561 White",
        "hw.mac.meta": 'early 2014 · <span class="badge-subtle">-充电器</span>',
        "hw.server.title": "服务器 → PC",
        "hw.server.li1": "内存: 2 × 8 GB Samsung DDR3 + 8 GB Kingston DDR3",
        "hw.server.storageLabel": "存储:",
        "hw.server.st0": "Patriot Burst Elite [120 GB]",
        "hw.server.st1": "ST3250318AS [232 GB]",
        "hw.server.st2": "WDC WD3200BEVT-24A23T0 [298 GB]",
        "hw.server.st3": "WDC WD3200AAJS-00L7A0 [298 GB]",
        "hw.phone.title": "手机",
        "hw.phone.li1": 'Display: 6.7" LTPO AMOLED, 120Hz (1440x3120)',
        "hw.phone.li2": "Camera: 50MP Main + 48MP Telephoto + 12MP Ultra-wide",
        "hw.phone.li3": "Battery: 5003mAh, 30W fast charging",
        "hw.phone.li4": "Build: Gorilla Glass Victus, IP68 water resistance",
        "footer.title": "联系方式",
        "footer.text": "我随时欢迎提问。可以聊技术，也可以随便聊聊。（如果你是 Debian 死忠粉，请不要联系我）",
        "hw.dead.label": "已损坏"
    },
    uk: {
        "meta.title": "pon4ikisdonut — особистий сайт",
        "meta.desc": "гагагага да да це мій сайт я крутий да да ахахахахах.",
        "header.role": "System Administrator",
        "header.kyivTime": "Kyiv time",
        "about.title": "Про мене",
        "about.text": "Я працюю з нижньорівневим розробкою на C, системним адмініструванням та інфраструктурою. Люблю створювати власні сервери та запускати геймерські проєкти.",
        "about.subtle": "Інтереси: власна 64‑бітна ОС, ігрові сервери Minecraft/CS2/CS:GO, трохи нейромереж і все, що пов'язане з залізом. ну і ігри звісно, але жаль відеокарта померла.",
        "projects.title": "Проєкти",
        "projects.kyroos.tag": "OSDev · x86_64",
        "projects.kyroos.text": "64‑бітна операційна система, написана повністю з нуля. Завантажувач Limine, вивід через framebuffer, зараз на ранній альфа‑етапі.",
        "projects.kyroos.subtle": "Активно розраховується: планується нормальна графіка, звук та мережевий стек, а також куча іншого",
        "projects.zpsr.tag": "Іграшечна мова",
        "projects.zpsr.text": "Мова програмування‑надбудова над Python, яка зберігає структуру та простоту оригіналу, але використовує російську розкладку для слів‑ключових та операторів.",
        "projects.zpsr.subtle": "ZPSR розшифровується як «Zaebis Pisat Suka na Russkom» — це експеримент у дизайні мов та спроба зробити код максимально «нативним» для неросійської розкладки клавіатури.",
        "projects.zpsr.example": 'Приклад синтаксису: <code>зкште("Write anything"); еуче = штзге(); зкште(еуче)</code>',
        "projects.femboy.tag": "Web · Fun",
        "projects.femboy.text": "Список фембой. Просто список. Просто фембої. Нічого зайвого — зайшов, подивився, пішов (або не пішов).",
        "projects.femboy.subtle": "Хоститься на <code>femboy.pp.ua</code>. Контент оновлюється протягом часу.",
        "projects.femboy.open": "Відкрити femboy.pp.ua",
        "projects.raduga.tag": "Реклама · TG Чат",
        "projects.raduga.text": "Офіційний чат ОПГ «Радуга». Спілкування, лампова атмосфера та двіж без духоти.",
        "projects.raduga.subtle": "Залітай у чат: <code>t.me/OPG_R4duga</code>",
        "projects.raduga.button": "Вступити",
        "projects.raduga.open": "Вступити в чат ОПГ «Радуга»",
        "hardware.title": "Апаратне та Стек",
        "hw.pc.title": "Основний ПК",
        "hw.pc.meta": "Xeon E5‑2680 v3 · Розібраний",
        "hw.pc.li0": "CPU: Intel Xeon E5‑2680 v3 (12C / 24T)",
        "hw.pc.li1": "Кулер: Adegrees A6 (3 вентилятори)",
        "hw.pc.li2": "RAM: Mougol DDR4 2133 MHz (2 × 8 ГБ)",
        "hw.pc.li3": 'GPU: RX 480 Nitro+ <span class="badge-moved">→ на Сервер</span>',
        "hw.pc.li4": "Материнська плата: Mougol X99 P4 (C612)",
        "hw.pc.li5": 'Блок живлення: GameMax VP‑700‑RGB <span class="badge-moved">→ на Сервер</span>',
        "hw.pc.li6": "Корпус: Gamemax G561 White",
        "hw.mac.meta": 'early 2014 · <span class="badge-subtle">-зарядка</span>',
        "hw.server.title": "Сервер → ПК",
        "hw.server.li1": "RAM: 2 × 8 ГБ Samsung DDR3 + 8 ГБ Kingston DDR3",
        "hw.server.storageLabel": "Сховище:",
        "hw.server.st0": "Patriot Burst Elite [120 ГБ]",
        "hw.server.st1": "ST3250318AS [232 ГБ]",
        "hw.server.st2": "WDC WD3200BEVT‑24A23T0 [298 ГБ]",
        "hw.server.st3": "WDC WD3200AAJS‑00L7A0 [298 ГБ]",
        "hw.phone.title": "Телефон",
        "hw.phone.li1": 'Дисплей: 6.7" LTPO AMOLED, 120 Гц (1440x3120)',
        "hw.phone.li2": "Камера: 50 МП основна + 48 МП телефото + 12 МП ультраширококутна",
        "hw.phone.li3": "Батарея: 5003 мА·год, швидка зарядка 30 Вт",
        "hw.phone.li4": "Корпус: Gorilla Glass Victus, захист IP68",
        "footer.title": "Контакти",
        "footer.text": "Я просто відкритий до запитань. Пишіть за технічними питаннями, або просто так. (якщо ви фанат Debian, не пишіть)",
        "hw.dead.label": "ПОМЕР."
    }
};

  const LANG_KEY = "site_lang";
  const supported = ["ru", "en", "zh", "uk"];

  function detectDefaultLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && supported.includes(saved)) return saved;
    const nav = (navigator.language || "ru").toLowerCase();
    if (nav.startsWith("zh")) return "zh";
    if (nav.startsWith("en")) return "en";
    return "ru";
  }

  

/* Chinese-language / China-region notice. A manual language choice is respected. */
function setupChinaNotice(lang) {
  const notice = document.getElementById('cn-notice');
  const close = document.getElementById('cn-notice-close');
  if (!notice || !close) return;

  if (lang === 'zh') localStorage.removeItem('cnNoticeDismissed');
  const dismissed = localStorage.getItem('cnNoticeDismissed') === '1';
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const browserLanguages = [navigator.language, ...(navigator.languages || [])]
    .filter(Boolean)
    .map(value => value.toLowerCase());
  const chineseVisitor = lang === 'zh' || browserLanguages.some(value => value.startsWith('zh'))
    || timeZone === 'Asia/Shanghai' || timeZone === 'Asia/Urumqi';

  notice.hidden = !chineseVisitor || dismissed;
  close.onclick = function () {
    notice.hidden = true;
    localStorage.setItem('cnNoticeDismissed', '1');
  };
}

function applyLang(lang) {
    const dict = translations[lang] || translations.ru;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(";").forEach(function (pair) {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });

    const titleKey = document.title && document.querySelector("title[data-i18n]");
    if (titleKey) document.title = dict[titleKey.getAttribute("data-i18n")] || document.title;

    const current = document.getElementById("lang-current");
    if (current) current.textContent = lang.toUpperCase();

    document.querySelectorAll("#lang-menu li").forEach(function (li) {
      li.classList.toggle("active", li.getAttribute("data-lang") === lang);
    });

    localStorage.setItem(LANG_KEY, lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const lang = detectDefaultLang();
    applyLang(lang);
    setupChinaNotice(lang);

    const switchEl = document.getElementById("lang-switch");
    const btn = document.getElementById("lang-btn");
    const menu = document.getElementById("lang-menu");

    if (!switchEl || !btn || !menu) return;

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = switchEl.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

menu.querySelectorAll("li").forEach(function (li) {
      li.addEventListener("click", function () {
        const newLang = li.getAttribute("data-lang");
        applyLang(newLang);
        setupChinaNotice(newLang);
        switchEl.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!switchEl.contains(e.target)) {
        switchEl.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
