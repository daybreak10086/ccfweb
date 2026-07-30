const SITE_CONFIG = {
  qqGroupNumber: "",
  qqGroupUrl: "",
  githubUrl: "https://github.com/daybreak10086/ccfweb",
  registrationEndpoint: "",
};

const EN_TRANSLATIONS = {
  "brand.subtitle": "Sichuan University Student Chapter",
  "nav.about": "About",
  "nav.activities": "Activities",
  "nav.achievements": "Achievements",
  "nav.open": "Open Source",
  "nav.join": "Join us",
  "hero.title": "Let one curiosity<br />start a <em>resonance.</em>",
  "hero.lead":
    "SCU CCF connects questions, frontiers, practice, and peers. Move your pointer or finger and send a small disturbance across the entire surface of knowledge.",
  "hero.join": "Join the QQ group",
  "hero.explore": "Discover SCU CCF",
  "hero.note": "Open to every student curious about the world of computing",
  "hero.resonance.status": "Move to create resonance. No click required.",
  "hero.resonance.copy": "Your speed shapes the impulse; the wave keeps travelling on its own",
  "hero.foot": "Scroll to explore our academic community",
  "layer.direct": "Direct control",
  "layer.step1": "Questions",
  "layer.step2": "Research",
  "layer.step3": "Practice",
  "layer.step4": "Peers",
  "about.title": "A bridge from campus<br />to a wider world.",
  "about.intro":
    "The CCF Sichuan University Student Chapter connects young students with the wider computing community. We make quality conversations more natural, frontier knowledge more accessible, and meaningful peers easier to find.",
  "about.link": "See how we make it happen",
  "about.card1.title": "Bring the frontier closer",
  "about.card1.copy":
    "Through talks, paper discussions, and guest conversations, we bring meaningful research and real experience closer to students.",
  "about.card2.title": "Find remarkable peers",
  "about.card2.copy":
    "Connect across years and interests, building lasting relationships through shared curiosity.",
  "about.card3.title": "Turn curiosity into practice",
  "about.card3.copy":
    "Projects, workshops, and open collaboration help knowledge work on real problems.",
  "about.quote":
    "“We care not only about an event, but about how new possibilities continue to grow after a connection is made.”",
  "about.quote.meta": "Chapter principle",
  "activity.title": "Where knowledge happens,<br />and connections continue.",
  "activity.intro":
    "Four kinds of activity share one layered stage. Move horizontally to uncover each scene; real materials can later open every layer into a complete story.",
  "activity.stage": "SCU CCF activity scenes",
  "activity.type": "Category",
  "activity.layer.direct": "Move to choose",
  "activity.card1.title": "Academic talks",
  "activity.card1.copy":
    "Frontier lectures, paper discussions, research guides, and conversations with young scholars.",
  "activity.card2.title": "Technical workshops",
  "activity.card2.copy":
    "From tools to projects, turning abstract knowledge into things that run.",
  "activity.card3.title": "Industry dialogue",
  "activity.card3.copy":
    "Connecting companies, alumni, and professional communities to understand the world beyond technology.",
  "activity.card4.title": "Community events",
  "activity.card4.copy":
    "Member conversations, collaboration, and shared growth that turn meetings into lasting bonds.",
  "activity.details": "Content coming soon",
  "activity.note":
    "This is the current content framework. Activity names, dates, introductions, and photos will replace these placeholders.",
  "achievement.title": "Achievements are not the end.<br />They mark the next beginning.",
  "achievement.intro":
    "This section will document the chapter's real work in events, competitions, projects, academic exchange, and community building.",
  "achievement.archive.status": "ARCHIVE / IN PROGRESS",
  "achievement.archive.title": "Keep every earnest effort<br />inside time.",
  "achievement.archive.copy":
    "This evolving archive will eventually hold projects, events, honors, and the people who shaped the chapter.",
  "achievement.sheet.project": "PROJECT / Future work",
  "achievement.sheet.event": "EVENT / In the room",
  "achievement.sheet.honor": "HONOR / Outcomes",
  "achievement.sheet.community": "PEOPLE / Community",
  "achievement.sheet.pending": "Awaiting real materials",
  "achievement.metric1": "Featured projects",
  "achievement.metric2": "Events and talks",
  "achievement.metric3": "Honors and outcomes",
  "achievement.metric4": "Community partners",
  "achievement.current": "CURRENT CHAPTER",
  "achievement.archive": "CHAPTER ARCHIVE",
  "achievement.item1.title": "Annual highlights and milestones",
  "achievement.item1.copy":
    "Add this year's key activities, awards, collaborations, and chapter growth data here.",
  "achievement.item2.title": "Chapter history and past work",
  "achievement.item2.copy":
    "The chapter timeline can later be organized by year, with a dedicated archive for each achievement.",
  "open.title": "Share the code.<br />Share the thinking.",
  "open.copy":
    "GitHub will be the public home for chapter projects, activity materials, and technical practice. Featured repositories and updates will appear here once the organization URL is provided.",
  "open.repo": "Public projects and activity resources from CCF SCU",
  "join.title": "Bring your <span class=\"nowrap\">next curiosity</span> <br />with you.",
  "join.copy":
    "You do not need the answer yet. Bring a question, an interest, or simply the wish to meet thoughtful and interesting people — and come closer to SCU CCF.",
  "join.qq": "Join the QQ group",
  "join.register": "Register online",
  "join.step1.title": "Join the community",
  "join.step1.copy": "Follow activities and announcements through our QQ group.",
  "join.step2.title": "Register your interest",
  "join.step2.copy": "Tell us who you are and what you want to explore.",
  "join.step3.title": "Start participating",
  "join.step3.copy": "Begin with one event and meet your next collaborators.",
  "footer.tagline": "Connecting academic frontiers, technical practice, and young minds.",
  "footer.explore": "Explore",
  "footer.connect": "Connect",
  "footer.note": "Content and resources will continue to evolve",
  "dialog.join.title": "Join the SCU CCF QQ group",
  "dialog.join.copy": "The group number and QR code will appear here once provided.",
  "dialog.qr.pending": "QR code coming soon",
  "dialog.group.number": "QQ group number",
  "dialog.copy": "Copy number",
  "dialog.group.note":
    "Once a group number or invitation link is provided, every “Join QQ group” button will be connected automatically.",
  "dialog.form.title": "Registration of interest",
  "dialog.form.copy":
    "This is the form framework. No data backend is connected yet, so submissions will not be uploaded.",
  "form.name": "Name",
  "form.name.placeholder": "Enter your name",
  "form.major": "Major",
  "form.major.placeholder": "e.g. Computer Science",
  "form.grade": "Year",
  "form.grade.placeholder": "Select your year",
  "form.grade.1": "First year",
  "form.grade.2": "Second year",
  "form.grade.3": "Third year",
  "form.grade.4": "Fourth year or above",
  "form.grade.5": "Graduate student",
  "form.qq": "QQ",
  "form.qq.placeholder": "For follow-up contact",
  "form.interest": "Areas of interest",
  "form.interest.1": "Academic talks",
  "form.interest.2": "Technical practice",
  "form.interest.3": "Event planning",
  "form.interest.4": "Media and design",
  "form.message": "Anything you would like to tell us (optional)",
  "form.message.placeholder": "Your interests, experience, or what you hope to join",
  "form.consent": "I agree that this information may only be used for chapter registration and contact.",
  "form.submit": "Submit registration",
};

const UI_MESSAGES = {
  zh: {
    contentPending: "该模块正在等待真实内容，框架已经预留。",
    githubPending: "请提供社团 GitHub 仓库地址后接入。",
    formPending: "报名后台尚未连接，本次内容未上传。表单样式和字段已准备好。",
    formSending: "正在提交…",
    formSuccess: "报名信息已提交，我们会尽快联系你。",
    formError: "提交失败，请稍后重试或通过 QQ 群联系我们。",
    copied: "QQ群号已复制。",
    copyFailed: "复制失败，请手动复制群号。",
  },
  en: {
    contentPending: "This module is ready and waiting for real content.",
    githubPending: "Add the chapter GitHub repository URL to connect this section.",
    formPending: "No registration backend is connected. Nothing was uploaded, but the form is ready.",
    formSending: "Submitting…",
    formSuccess: "Registration submitted. We will get in touch soon.",
    formError: "Submission failed. Please try again or contact us through the QQ group.",
    copied: "QQ group number copied.",
    copyFailed: "Copy failed. Please copy the number manually.",
  },
};

const root = document.documentElement;
root.classList.add("js");

const textOriginals = new Map();
const htmlOriginals = new Map();
const placeholderOriginals = new Map();
let currentLanguage = "zh";
let toastTimer;
let activePrismPhase = 0;
let activeLayerIndex = 0;
let resonanceIsActive = false;

const PRISM_PHASES = [
  {
    key: "question",
    zh: {
      kicker: "QUESTION / 问题",
      input: "为什么？",
      output: "找到方向",
      copy: "在这里，好奇会被认真回应。",
      echo: "ASK",
    },
    en: {
      kicker: "QUESTION / INPUT",
      input: "WHY?",
      output: "Find direction",
      copy: "Here, curiosity receives a thoughtful answer.",
      echo: "ASK",
    },
  },
  {
    key: "research",
    zh: {
      kicker: "PAPER / 前沿",
      input: "还有什么？",
      output: "看见前沿",
      copy: "把值得关注的研究带到身边。",
      echo: "EXPLORE",
    },
    en: {
      kicker: "PAPER / FRONTIER",
      input: "WHAT'S NEXT?",
      output: "See the frontier",
      copy: "Bring meaningful research within reach.",
      echo: "EXPLORE",
    },
  },
  {
    key: "build",
    zh: {
      kicker: "CODE / 实践",
      input: "能否实现？",
      output: "做成作品",
      copy: "让知识在真实问题里运行起来。",
      echo: "BUILD",
    },
    en: {
      kicker: "CODE / PRACTICE",
      input: "CAN IT RUN?",
      output: "Make it real",
      copy: "Put knowledge to work on real problems.",
      echo: "BUILD",
    },
  },
  {
    key: "people",
    zh: {
      kicker: "PEOPLE / 同行",
      input: "和谁一起？",
      output: "走向更远",
      copy: "一群同行者，会放大彼此的可能。",
      echo: "TOGETHER",
    },
    en: {
      kicker: "PEOPLE / PEERS",
      input: "WITH WHOM?",
      output: "Go further",
      copy: "Remarkable peers amplify one another's possibilities.",
      echo: "TOGETHER",
    },
  },
];

const LAYER_STORIES = [
  {
    key: "academic",
    zh: {
      kicker: "FRONTIER / EXCHANGE",
      title: "让前沿在身边发生",
      copy: "前沿讲座、论文分享、研究方向导览与青年学者交流。",
      echo: "LISTEN",
      value: "第 1 层：学术分享",
    },
    en: {
      kicker: "FRONTIER / EXCHANGE",
      title: "Bring the frontier closer",
      copy: "Talks, paper discussions, research guides, and conversations with young scholars.",
      echo: "LISTEN",
      value: "Layer 1: Academic talks",
    },
  },
  {
    key: "workshop",
    zh: {
      kicker: "LEARN / BUILD / SHARE",
      title: "把知识变成作品",
      copy: "从工具入门到项目实践，让抽象知识真正运行起来。",
      echo: "BUILD",
      value: "第 2 层：技术工作坊",
    },
    en: {
      kicker: "LEARN / BUILD / SHARE",
      title: "Turn knowledge into work",
      copy: "From tools to projects, make abstract knowledge genuinely run.",
      echo: "BUILD",
      value: "Layer 2: Technical workshops",
    },
  },
  {
    key: "dialogue",
    zh: {
      kicker: "ASK / THINK / EXCHANGE",
      title: "与真实世界交换问题",
      copy: "连接企业、校友与专业社区，理解技术之外的真实世界。",
      echo: "TALK",
      value: "第 3 层：行业对话",
    },
    en: {
      kicker: "ASK / THINK / EXCHANGE",
      title: "Exchange questions with reality",
      copy: "Connect with companies, alumni, and professional communities beyond technology.",
      echo: "TALK",
      value: "Layer 3: Industry dialogue",
    },
  },
  {
    key: "community",
    zh: {
      kicker: "COMMUNITY / TOGETHER",
      title: "让一次相遇继续生长",
      copy: "面向会员的交流、协作与成长活动，让关系沉淀下来。",
      echo: "MEET",
      value: "第 4 层：社区活动",
    },
    en: {
      kicker: "COMMUNITY / TOGETHER",
      title: "Let one meeting keep growing",
      copy: "Conversation, collaboration, and shared growth turn meetings into lasting bonds.",
      echo: "MEET",
      value: "Layer 4: Community events",
    },
  },
];

document.querySelectorAll("[data-i18n]").forEach((element) => {
  textOriginals.set(element, element.textContent.trim());
});

document.querySelectorAll("[data-i18n-html]").forEach((element) => {
  htmlOriginals.set(element, element.innerHTML.trim());
});

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
  placeholderOriginals.set(element, element.getAttribute("placeholder") || "");
});

function syncPrismPhaseText() {
  const phase = PRISM_PHASES[activePrismPhase] || PRISM_PHASES[0];
  const copy = phase[currentLanguage];
  const prism = document.querySelector("[data-prism]");
  if (prism) prism.dataset.prismPhase = phase.key;
  const kicker = document.querySelector("[data-prism-kicker]");
  const input = document.querySelector("[data-prism-input]");
  const output = document.querySelector("[data-prism-output]");
  const description = document.querySelector("[data-prism-copy]");
  const echo = document.querySelector("[data-prism-echo]");
  const index = document.querySelector("[data-prism-index]");
  if (kicker) kicker.textContent = copy.kicker;
  if (input) input.textContent = copy.input;
  if (output) output.textContent = copy.output;
  if (description) description.textContent = copy.copy;
  if (echo) echo.textContent = copy.echo;
  if (index) index.textContent = String(activePrismPhase + 1).padStart(2, "0");
}

function syncLayerStoryText() {
  const story = LAYER_STORIES[activeLayerIndex] || LAYER_STORIES[0];
  const copy = story[currentLanguage];
  const lab = document.querySelector("[data-layer-lab]");
  const kicker = document.querySelector("[data-layer-kicker]");
  const title = document.querySelector("[data-layer-title]");
  const description = document.querySelector("[data-layer-copy]");
  const echo = document.querySelector("[data-layer-echo]");
  const index = document.querySelector("[data-layer-index]");
  const range = document.querySelector("[data-layer-range]");
  if (lab) lab.dataset.layerActive = story.key;
  if (kicker) kicker.textContent = copy.kicker;
  if (title) title.textContent = copy.title;
  if (description) description.textContent = copy.copy;
  if (echo) echo.textContent = copy.echo;
  if (index) index.textContent = String(activeLayerIndex + 1).padStart(2, "0");
  if (range) {
    range.setAttribute(
      "aria-label",
      currentLanguage === "en"
        ? "Drag horizontally to explore four activity layers"
        : "横向拖动探索四类活动",
    );
    range.setAttribute("aria-valuetext", copy.value);
  }
}

function syncResonanceLanguage() {
  const state = document.querySelector("[data-resonance-state]");
  if (!state) return;
  if (currentLanguage === "en") {
    state.textContent = resonanceIsActive ? "RESONANCE TRAVELLING" : "AWAITING MOTION";
  } else {
    state.textContent = resonanceIsActive ? "共振正在传播" : "等待一次移动";
  }
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "zh";
  root.dataset.lang = currentLanguage;
  root.lang = currentLanguage === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = EN_TRANSLATIONS[key];
    element.textContent =
      currentLanguage === "en" && translated ? translated : textOriginals.get(element);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    const translated = EN_TRANSLATIONS[key];
    element.innerHTML =
      currentLanguage === "en" && translated ? translated : htmlOriginals.get(element);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translated = EN_TRANSLATIONS[key];
    element.setAttribute(
      "placeholder",
      currentLanguage === "en" && translated ? translated : placeholderOriginals.get(element),
    );
  });

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.textContent = currentLanguage === "en" ? "中" : "EN";
    button.setAttribute(
      "aria-label",
      currentLanguage === "en" ? "切换至中文" : "Switch to English",
    );
  });

  syncPrismPhaseText();
  syncLayerStoryText();
  syncResonanceLanguage();

  try {
    localStorage.setItem("scuccf-language", currentLanguage);
  } catch {
    // Local storage is optional.
  }
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function closeMobileMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
}

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  document.body.classList.add("dialog-open");
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
  document.body.classList.remove("dialog-open");
}

function configureExternalLinks() {
  const githubLinks = document.querySelectorAll("[data-github-link]");
  githubLinks.forEach((link) => {
    if (SITE_CONFIG.githubUrl) {
      link.href = SITE_CONFIG.githubUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
    }
  });

  const number = SITE_CONFIG.qqGroupNumber.trim();
  const numberElements = document.querySelectorAll("[data-qq-number]");
  const copyButtons = document.querySelectorAll("[data-copy-qq]");
  numberElements.forEach((element) => {
    element.textContent = number || (currentLanguage === "en" ? "Coming soon" : "待补充");
  });
  copyButtons.forEach((button) => {
    button.disabled = !number;
  });
}

const languageToggle = document.querySelector("[data-language-toggle]");
languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
  configureExternalLinks();
});

try {
  const savedLanguage = localStorage.getItem("scuccf-language");
  if (savedLanguage === "en") applyLanguage("en");
} catch {
  // The page works without local storage.
}

const header = document.querySelector("[data-header]");
function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
menuToggle?.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  mobileMenu?.classList.toggle("is-open", willOpen);
});

mobileMenu?.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("click", closeMobileMenu);
});

document.addEventListener("click", (event) => {
  if (
    mobileMenu?.classList.contains("is-open") &&
    !mobileMenu.contains(event.target) &&
    !menuToggle?.contains(event.target)
  ) {
    closeMobileMenu();
  }
});

const joinDialog = document.querySelector("[data-join-dialog]");
const registrationDialog = document.querySelector("[data-registration-dialog]");

document.querySelectorAll("[data-open-join]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMobileMenu();
    if (SITE_CONFIG.qqGroupUrl) {
      window.open(SITE_CONFIG.qqGroupUrl, "_blank", "noopener,noreferrer");
      return;
    }
    openDialog(joinDialog);
  });
});

document.querySelectorAll("[data-open-registration]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMobileMenu();
    openDialog(registrationDialog);
  });
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => closeDialog(button.closest("dialog")));
});

document.querySelectorAll(".site-dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
});

document.querySelectorAll("[data-placeholder-action]").forEach((button) => {
  button.addEventListener("click", () => showToast(UI_MESSAGES[currentLanguage].contentPending));
});

document.querySelectorAll('[data-github-link][aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!SITE_CONFIG.githubUrl) {
      event.preventDefault();
      showToast(UI_MESSAGES[currentLanguage].githubPending);
    }
  });
});

document.querySelector("[data-copy-qq]")?.addEventListener("click", async () => {
  if (!SITE_CONFIG.qqGroupNumber) return;
  try {
    await navigator.clipboard.writeText(SITE_CONFIG.qqGroupNumber);
    showToast(UI_MESSAGES[currentLanguage].copied);
  } catch {
    showToast(UI_MESSAGES[currentLanguage].copyFailed);
  }
});

const registrationForm = document.querySelector("[data-registration-form]");
const formStatus = document.querySelector("[data-form-status]");

registrationForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!registrationForm.reportValidity()) return;

  if (!SITE_CONFIG.registrationEndpoint) {
    formStatus.textContent = UI_MESSAGES[currentLanguage].formPending;
    return;
  }

  const submitButton = registrationForm.querySelector('button[type="submit"]');
  const formData = new FormData(registrationForm);
  const payload = Object.fromEntries(formData.entries());
  payload.interest = formData.getAll("interest");
  payload.consent = formData.get("consent") === "on";
  payload.submittedAt = new Date().toISOString();

  submitButton.disabled = true;
  formStatus.textContent = UI_MESSAGES[currentLanguage].formSending;

  try {
    const response = await fetch(SITE_CONFIG.registrationEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    registrationForm.reset();
    formStatus.textContent = UI_MESSAGES[currentLanguage].formSuccess;
  } catch {
    formStatus.textContent = UI_MESSAGES[currentLanguage].formError;
  } finally {
    submitButton.disabled = false;
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupResonanceField() {
  const hero = document.querySelector("[data-resonance-hero]");
  const canvas = document.querySelector("[data-resonance-canvas]");
  if (!hero || !canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const energyLabel = hero.querySelector("[data-resonance-energy]");
  const energyMeter = hero.querySelector("[data-resonance-meter]");
  const maskCanvas = document.createElement("canvas");
  const maskContext = maskCanvas.getContext("2d", { willReadFrequently: true });
  if (!maskContext) return;

  let width = 0;
  let height = 0;
  let columns = 0;
  let rows = 0;
  let pointCount = 0;
  let heights = new Float32Array();
  let velocities = new Float32Array();
  let accelerations = new Float32Array();
  let positionsX = new Float32Array();
  let positionsY = new Float32Array();
  let letterMask = new Uint8Array();
  let frameId = 0;
  let isVisible = true;
  let lastFrameTime = performance.now();
  let lastUserInput = 0;
  let lastAmbientImpulse = 0;
  let lastScrollY = window.scrollY;
  let previousPointer = null;
  let inputEnergy = 8;
  let displayedEnergy = 8;
  let activeTimer;
  let resizeTimer;
  let scrollFrame = 0;
  const keyboardPoint = { x: 0.7, y: 0.44 };

  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, value));
  }

  function pointIndex(column, row) {
    return row * columns + column;
  }

  function basePoint(column, row) {
    const x = (column / Math.max(1, columns - 1)) * width;
    const y = (row / Math.max(1, rows - 1)) * height;
    const shear = (row / Math.max(1, rows - 1) - 0.5) * Math.min(54, width * 0.045);
    return { x: x + shear, y };
  }

  function setActiveState(active) {
    resonanceIsActive = active;
    hero.classList.toggle("is-resonating", active);
    syncResonanceLanguage();
  }

  function markUserInput() {
    lastUserInput = performance.now();
    setActiveState(true);
    window.clearTimeout(activeTimer);
    activeTimer = window.setTimeout(() => setActiveState(false), 1250);
  }

  function updateReadout() {
    displayedEnergy += (inputEnergy - displayedEnergy) * 0.11;
    const roundedEnergy = Math.round(clamp(displayedEnergy, 0, 99));
    if (energyLabel) energyLabel.textContent = `${String(roundedEnergy).padStart(3, "0")}%`;
    if (energyMeter) energyMeter.style.width = `${roundedEnergy}%`;
    hero.style.setProperty("--resonance-energy", roundedEnergy);
    inputEnergy += (8 - inputEnergy) * 0.018;
  }

  function buildLetterMask() {
    maskCanvas.width = Math.max(1, Math.ceil(width));
    maskCanvas.height = Math.max(1, Math.ceil(height));
    maskContext.clearRect(0, 0, width, height);
    maskContext.fillStyle = "#fff";
    maskContext.textAlign = "center";
    maskContext.textBaseline = "middle";

    const desktop = width >= 760;
    const typeSize = desktop
      ? Math.min(width * 0.35, height * 0.58)
      : Math.min(width * 0.66, height * 0.31);
    const typeX = desktop ? width * 0.72 : width * 0.5;
    const typeY = desktop ? height * 0.44 : height * 0.29;
    maskContext.font = `900 ${typeSize}px Arial Black, Arial, sans-serif`;
    maskContext.fillText("CCF", typeX, typeY);

    const captionSize = Math.max(11, Math.min(18, typeSize * 0.045));
    maskContext.font = `700 ${captionSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
    maskContext.letterSpacing = "0.16em";
    maskContext.fillText(
      "SCU / COMPUTER COMMUNITY",
      typeX,
      typeY + typeSize * 0.39,
    );

    const pixels = maskContext.getImageData(0, 0, maskCanvas.width, maskCanvas.height).data;
    letterMask = new Uint8Array(pointCount);
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = pointIndex(column, row);
        const point = basePoint(column, row);
        const sampleX = clamp(Math.round(point.x), 0, maskCanvas.width - 1);
        const sampleY = clamp(Math.round(point.y), 0, maskCanvas.height - 1);
        letterMask[index] = pixels[(sampleY * maskCanvas.width + sampleX) * 4 + 3] > 24 ? 1 : 0;
      }
    }
  }

  function resizeField() {
    const rectangle = hero.getBoundingClientRect();
    width = Math.max(1, rectangle.width);
    height = Math.max(1, rectangle.height);
    const pixelRatio = Math.min(1.75, window.devicePixelRatio || 1);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    columns = clamp(Math.round(width / 34), 24, 54);
    rows = clamp(Math.round(height / 36), 20, 34);
    pointCount = columns * rows;
    heights = new Float32Array(pointCount);
    velocities = new Float32Array(pointCount);
    accelerations = new Float32Array(pointCount);
    positionsX = new Float32Array(pointCount);
    positionsY = new Float32Array(pointCount);
    buildLetterMask();
    hero.dataset.resonanceReady = "true";
    renderField(performance.now());
  }

  function injectImpulse(x, y, power = 12, radius = Math.min(width, height) * 0.16) {
    const safeRadius = Math.max(48, radius);
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = pointIndex(column, row);
        const point = basePoint(column, row);
        const distance = Math.hypot(point.x - x, point.y - y);
        if (distance >= safeRadius) continue;
        const falloff = 1 - distance / safeRadius;
        velocities[index] += power * falloff * falloff;
      }
    }
  }

  function receiveInput(clientX, clientY, forceMultiplier = 1) {
    const rectangle = hero.getBoundingClientRect();
    const x = clamp(clientX - rectangle.left, 0, width);
    const y = clamp(clientY - rectangle.top, 0, height);
    const now = performance.now();
    const elapsed = Math.max(8, now - (previousPointer?.time || now - 16));
    const travel = previousPointer
      ? Math.hypot(x - previousPointer.x, y - previousPointer.y)
      : 18;
    const speed = travel / elapsed;
    const power = clamp((8 + speed * 24) * forceMultiplier, 7, 42);
    const radius = clamp(90 + speed * 48, 92, 190);

    injectImpulse(x, y, power, radius);
    previousPointer = { x, y, time: now };
    keyboardPoint.x = width ? x / width : 0.5;
    keyboardPoint.y = height ? y / height : 0.5;
    inputEnergy = Math.max(inputEnergy, clamp(18 + speed * 78, 18, 96));
    hero.style.setProperty("--resonance-x", `${(keyboardPoint.x * 100).toFixed(2)}%`);
    hero.style.setProperty("--resonance-y", `${(keyboardPoint.y * 100).toFixed(2)}%`);
    markUserInput();
  }

  function simulateField(frameScale) {
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = pointIndex(column, row);
        let neighborTotal = 0;
        let neighborCount = 0;
        if (column > 0) {
          neighborTotal += heights[index - 1];
          neighborCount += 1;
        }
        if (column < columns - 1) {
          neighborTotal += heights[index + 1];
          neighborCount += 1;
        }
        if (row > 0) {
          neighborTotal += heights[index - columns];
          neighborCount += 1;
        }
        if (row < rows - 1) {
          neighborTotal += heights[index + columns];
          neighborCount += 1;
        }
        const neighborAverage = neighborCount ? neighborTotal / neighborCount : 0;
        accelerations[index] = (neighborAverage - heights[index]) * 0.135;
      }
    }

    for (let index = 0; index < pointCount; index += 1) {
      velocities[index] = (velocities[index] + accelerations[index] * frameScale) * 0.957;
      heights[index] = (heights[index] + velocities[index] * frameScale) * 0.997;
      heights[index] = clamp(heights[index], -72, 72);
    }
  }

  function updatePositions(time) {
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = pointIndex(column, row);
        const point = basePoint(column, row);
        const ambient =
          Math.sin(time * 0.00042 + column * 0.31 + row * 0.12) * 1.45 +
          Math.cos(time * 0.00027 + row * 0.46) * 0.85;
        const displacement = heights[index] + (reducedMotion ? 0 : ambient);
        positionsX[index] = point.x + displacement * 0.16;
        positionsY[index] = point.y + displacement * 0.72;
      }
    }
  }

  function drawSegment(firstIndex, secondIndex, strokeStyle, lineWidth) {
    context.beginPath();
    context.moveTo(positionsX[firstIndex], positionsY[firstIndex]);
    context.lineTo(positionsX[secondIndex], positionsY[secondIndex]);
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.stroke();
  }

  function renderField(time) {
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    updatePositions(time);
    context.lineCap = "round";
    context.lineJoin = "round";

    for (let row = 0; row < rows; row += 1) {
      context.beginPath();
      for (let column = 0; column < columns; column += 1) {
        const index = pointIndex(column, row);
        if (column === 0) context.moveTo(positionsX[index], positionsY[index]);
        else context.lineTo(positionsX[index], positionsY[index]);
      }
      context.strokeStyle = row % 4 === 0 ? "rgba(111, 142, 222, 0.16)" : "rgba(111, 142, 222, 0.095)";
      context.lineWidth = row % 4 === 0 ? 0.8 : 0.55;
      context.stroke();
    }

    context.strokeStyle = "rgba(108, 137, 211, 0.052)";
    context.lineWidth = 0.5;
    for (let column = 0; column < columns; column += 1) {
      context.beginPath();
      for (let row = 0; row < rows; row += 1) {
        const index = pointIndex(column, row);
        if (row === 0) context.moveTo(positionsX[index], positionsY[index]);
        else context.lineTo(positionsX[index], positionsY[index]);
      }
      context.stroke();
    }

    context.globalCompositeOperation = "lighter";
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns - 1; column += 1) {
        const first = pointIndex(column, row);
        const second = first + 1;
        const inLetter = letterMask[first] || letterMask[second];
        const displacement = (heights[first] + heights[second]) * 0.5;
        const magnitude = Math.abs(displacement);

        if (inLetter) {
          const alpha = clamp(0.28 + magnitude / 105, 0.28, 0.78);
          drawSegment(first, second, `rgba(224, 236, 255, ${alpha})`, 1.18);
        }

        if (magnitude > 2.4) {
          const alpha = clamp(0.09 + magnitude / 64, 0.09, 0.72);
          const color =
            displacement >= 0
              ? `rgba(46, 117, 255, ${alpha})`
              : `rgba(242, 61, 94, ${alpha})`;
          drawSegment(first, second, color, clamp(0.75 + magnitude / 24, 0.75, 2.35));
        }
      }
    }

    for (let column = 0; column < columns; column += 1) {
      for (let row = 0; row < rows - 1; row += 1) {
        const first = pointIndex(column, row);
        const second = first + columns;
        if (!(letterMask[first] || letterMask[second])) continue;
        const magnitude = Math.abs((heights[first] + heights[second]) * 0.5);
        drawSegment(
          first,
          second,
          `rgba(190, 213, 255, ${clamp(0.08 + magnitude / 140, 0.08, 0.34)})`,
          0.72,
        );
      }
    }
    context.globalCompositeOperation = "source-over";
  }

  function animationFrame(time) {
    frameId = 0;
    if (!isVisible || document.hidden) return;
    const frameScale = clamp((time - lastFrameTime) / 16.667, 0.45, 1.8);
    lastFrameTime = time;

    if (!reducedMotion) {
      if (time - lastUserInput > 1500 && time - lastAmbientImpulse > 1850) {
        const x = width * (0.5 + Math.sin(time * 0.00031) * 0.3);
        const y = height * (0.43 + Math.cos(time * 0.00023) * 0.18);
        injectImpulse(x, y, 3.8, Math.min(width, height) * 0.15);
        lastAmbientImpulse = time;
      }
      simulateField(frameScale);
    }

    renderField(time);
    updateReadout();
    if (!reducedMotion) frameId = window.requestAnimationFrame(animationFrame);
  }

  function startAnimation() {
    if (frameId || reducedMotion || !isVisible || document.hidden) {
      if (reducedMotion) renderField(performance.now());
      return;
    }
    lastFrameTime = performance.now();
    frameId = window.requestAnimationFrame(animationFrame);
  }

  hero.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    previousPointer = null;
    receiveInput(event.clientX, event.clientY, 0.58);
  });

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" && event.pressure <= 0) return;
    receiveInput(event.clientX, event.clientY);
  });

  hero.addEventListener("pointerdown", (event) => {
    previousPointer = null;
    receiveInput(event.clientX, event.clientY, event.pointerType === "touch" ? 1.25 : 0.85);
  });

  hero.addEventListener("pointerleave", () => {
    previousPointer = null;
  });

  hero.addEventListener("keydown", (event) => {
    if (event.target.closest("button, a, input, select, textarea")) return;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter", " "].includes(event.key)) {
      return;
    }
    event.preventDefault();
    if (event.key === "ArrowLeft") keyboardPoint.x = clamp(keyboardPoint.x - 0.08, 0.08, 0.92);
    if (event.key === "ArrowRight") keyboardPoint.x = clamp(keyboardPoint.x + 0.08, 0.08, 0.92);
    if (event.key === "ArrowUp") keyboardPoint.y = clamp(keyboardPoint.y - 0.08, 0.12, 0.88);
    if (event.key === "ArrowDown") keyboardPoint.y = clamp(keyboardPoint.y + 0.08, 0.12, 0.88);
    previousPointer = null;
    const rectangle = hero.getBoundingClientRect();
    receiveInput(
      rectangle.left + keyboardPoint.x * width,
      rectangle.top + keyboardPoint.y * height,
      1.35,
    );
  });

  window.addEventListener(
    "scroll",
    () => {
      if (!isVisible || scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        const scrollDelta = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
        if (Math.abs(scrollDelta) < 2) return;
        const rectangle = hero.getBoundingClientRect();
        if (rectangle.bottom <= 0 || rectangle.top >= window.innerHeight) return;
        const progress = clamp(-rectangle.top / Math.max(1, rectangle.height), 0, 1);
        const x = width * (0.18 + progress * 0.64);
        const y = height * 0.72;
        injectImpulse(x, y, clamp(Math.abs(scrollDelta) * 0.12, 2, 8), 104);
      });
    },
    { passive: true },
  );

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(([entry]) => {
      const rectangle = entry?.contentRect;
      if (
        rectangle &&
        width &&
        Math.abs(rectangle.width - width) < 0.5 &&
        Math.abs(rectangle.height - height) < 0.5
      ) {
        return;
      }
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resizeField, 80);
    });
    resizeObserver.observe(hero);
  } else {
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resizeField, 80);
    });
  }

  if ("IntersectionObserver" in window) {
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) startAnimation();
        else if (frameId) {
          window.cancelAnimationFrame(frameId);
          frameId = 0;
        }
      },
      { rootMargin: "120px 0px" },
    );
    visibilityObserver.observe(hero);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    } else {
      startAnimation();
    }
  });

  resizeField();
  updateReadout();
  syncResonanceLanguage();
  startAnimation();
}

setupResonanceField();

const layerLab = document.querySelector("[data-layer-lab]");
const layerSurface = document.querySelector("[data-layer-surface]");
const layerCards = Array.from(document.querySelectorAll("[data-layer-card]"));
const layerTabs = Array.from(document.querySelectorAll("[data-layer-step]"));
const layerRange = document.querySelector("[data-layer-range]");
let layerCurrentPosition = 0;
let layerTargetPosition = 0;
let layerAnimationFrame = 0;
let layerChangeTimer;
let layerPointerId = null;

function clampLayerPosition(value) {
  return Math.max(0, Math.min(LAYER_STORIES.length - 1, Number(value) || 0));
}

function syncLayerSelection(nextIndex) {
  const normalizedIndex = Math.max(
    0,
    Math.min(LAYER_STORIES.length - 1, Math.round(nextIndex)),
  );
  if (activeLayerIndex === normalizedIndex && layerLab?.dataset.layerReady === "true") {
    return;
  }

  activeLayerIndex = normalizedIndex;
  if (layerLab) layerLab.dataset.layerReady = "true";
  syncLayerStoryText();

  layerTabs.forEach((tab, index) => {
    const isActive = index === activeLayerIndex;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  layerCards.forEach((card, index) => {
    card.classList.toggle("is-active", index === activeLayerIndex);
  });

  const storyPanel = document.querySelector("#activity-layer-story");
  const activeTab = layerTabs[activeLayerIndex];
  if (storyPanel && activeTab?.id) storyPanel.setAttribute("aria-labelledby", activeTab.id);

  if (layerLab && !reducedMotion) {
    window.clearTimeout(layerChangeTimer);
    layerLab.classList.remove("is-changing");
    void layerLab.offsetWidth;
    layerLab.classList.add("is-changing");
    layerChangeTimer = window.setTimeout(
      () => layerLab.classList.remove("is-changing"),
      520,
    );
  }
}

function renderLayerPosition(position) {
  if (!layerLab) return;
  const boundedPosition = clampLayerPosition(position);
  const percentage = (boundedPosition / (LAYER_STORIES.length - 1)) * 100;
  layerLab.style.setProperty("--layer-percent", `${percentage.toFixed(3)}%`);
  layerLab.style.setProperty(
    "--layer-echo-shift",
    `${((boundedPosition - 1.5) * -16).toFixed(2)}px`,
  );

  layerCards.forEach((card, index) => {
    const distance = index - boundedPosition;
    const absoluteDistance = Math.abs(distance);
    const x = distance * 62;
    const y = absoluteDistance * 17;
    const z = -absoluteDistance * 74;
    const rotation = distance * 7.5;
    const scale = Math.max(0.78, 1 - absoluteDistance * 0.06);
    const opacity = Math.max(0.34, 1 - absoluteDistance * 0.16);
    const blur = Math.max(0, absoluteDistance - 0.7) * 0.55;
    card.style.setProperty("--sheet-x", `${x.toFixed(2)}px`);
    card.style.setProperty("--sheet-y", `${y.toFixed(2)}px`);
    card.style.setProperty("--sheet-z", `${z.toFixed(2)}px`);
    card.style.setProperty("--sheet-rotate", `${rotation.toFixed(2)}deg`);
    card.style.setProperty("--sheet-scale", scale.toFixed(4));
    card.style.opacity = opacity.toFixed(3);
    card.style.filter = `blur(${blur.toFixed(2)}px)`;
    card.style.zIndex = String(100 - Math.round(absoluteDistance * 10));
  });

  if (layerRange && document.activeElement !== layerRange) {
    layerRange.value = boundedPosition.toFixed(2);
  }
  syncLayerSelection(Math.round(boundedPosition));
}

function animateLayerPosition() {
  const difference = layerTargetPosition - layerCurrentPosition;
  if (Math.abs(difference) < 0.001) {
    layerCurrentPosition = layerTargetPosition;
    renderLayerPosition(layerCurrentPosition);
    layerAnimationFrame = 0;
    return;
  }

  layerCurrentPosition += difference * 0.16;
  renderLayerPosition(layerCurrentPosition);
  layerAnimationFrame = window.requestAnimationFrame(animateLayerPosition);
}

function setLayerPosition(value, options = {}) {
  layerTargetPosition = clampLayerPosition(value);
  if (reducedMotion || options.immediate) {
    window.cancelAnimationFrame(layerAnimationFrame);
    layerAnimationFrame = 0;
    layerCurrentPosition = layerTargetPosition;
    renderLayerPosition(layerCurrentPosition);
  } else if (!layerAnimationFrame) {
    layerAnimationFrame = window.requestAnimationFrame(animateLayerPosition);
  }

  if (options.focus) layerTabs[Math.round(layerTargetPosition)]?.focus();
}

function setLayerFromPointer(event) {
  if (!layerSurface) return;
  const rect = layerSurface.getBoundingClientRect();
  const normalizedX = (event.clientX - rect.left) / rect.width;
  setLayerPosition(normalizedX * (LAYER_STORIES.length - 1));
}

layerSurface?.addEventListener("pointerenter", (event) => {
  if (event.pointerType !== "touch") {
    layerLab?.classList.add("is-engaged");
    setLayerFromPointer(event);
  }
});

layerSurface?.addEventListener("pointermove", (event) => {
  if (event.pointerType === "mouse" || event.pointerType === "pen" || layerPointerId === event.pointerId) {
    setLayerFromPointer(event);
  }
});

layerSurface?.addEventListener("pointerleave", (event) => {
  if (layerPointerId !== event.pointerId) layerLab?.classList.remove("is-engaged");
});

layerSurface?.addEventListener("pointerdown", (event) => {
  layerPointerId = event.pointerId;
  layerLab?.classList.add("is-engaged");
  layerSurface.setPointerCapture?.(event.pointerId);
  setLayerFromPointer(event);
});

function releaseLayerPointer(event) {
  if (layerPointerId !== event.pointerId) return;
  layerPointerId = null;
  layerSurface?.releasePointerCapture?.(event.pointerId);
}

layerSurface?.addEventListener("pointerup", releaseLayerPointer);
layerSurface?.addEventListener("pointercancel", releaseLayerPointer);

layerTabs.forEach((tab, tabIndex) => {
  tab.addEventListener("click", () => setLayerPosition(tabIndex));
  tab.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") setLayerPosition(tabIndex);
  });
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = tabIndex;
    if (event.key === "ArrowLeft") {
      nextIndex = (tabIndex - 1 + layerTabs.length) % layerTabs.length;
    }
    if (event.key === "ArrowRight") nextIndex = (tabIndex + 1) % layerTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = layerTabs.length - 1;
    setLayerPosition(nextIndex, { focus: true });
  });
});

layerRange?.addEventListener("input", () => {
  setLayerPosition(layerRange.value, { immediate: reducedMotion });
});

layerRange?.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  let nextIndex = Math.round(layerTargetPosition);
  if (event.key === "ArrowLeft") nextIndex = Math.max(0, nextIndex - 1);
  if (event.key === "ArrowRight") {
    nextIndex = Math.min(LAYER_STORIES.length - 1, nextIndex + 1);
  }
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = LAYER_STORIES.length - 1;
  setLayerPosition(nextIndex);
});

renderLayerPosition(0);

const prismHero = document.querySelector("[data-prism-hero]");
const prismChamber = document.querySelector("[data-prism]");
const prismSteps = Array.from(document.querySelectorAll("[data-prism-step]"));
let prismVisible = true;
let prismChangeTimer;
let prismAutoTimer;
let prismScrollFrame = 0;
let lastPrismScrollAt = 0;
let lastPrismChoiceAt = 0;

function setPrismPhase(phaseIndex, options = {}) {
  if (!prismChamber || !PRISM_PHASES.length) return;
  const normalizedIndex = (phaseIndex + PRISM_PHASES.length) % PRISM_PHASES.length;
  const changed = activePrismPhase !== normalizedIndex;
  activePrismPhase = normalizedIndex;
  syncPrismPhaseText();

  prismSteps.forEach((step, index) => {
    const isActive = index === activePrismPhase;
    step.classList.toggle("is-active", isActive);
    step.setAttribute("aria-selected", String(isActive));
    step.tabIndex = isActive ? 0 : -1;
    if (isActive && options.focus) step.focus();
  });

  const activeStep = prismSteps[activePrismPhase];
  const sequence = activeStep?.parentElement;
  if (sequence && sequence.scrollWidth > sequence.clientWidth) {
    window.requestAnimationFrame(() => {
      const targetLeft =
        activeStep.offsetLeft - (sequence.clientWidth - activeStep.offsetWidth) / 2;
      sequence.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: reducedMotion ? "auto" : "smooth",
      });
    });
  }

  if (changed && !reducedMotion) {
    window.clearTimeout(prismChangeTimer);
    prismChamber.classList.remove("is-changing");
    void prismChamber.offsetWidth;
    prismChamber.classList.add("is-changing");
    prismChangeTimer = window.setTimeout(
      () => prismChamber.classList.remove("is-changing"),
      760,
    );
  }
}

prismSteps.forEach((step, stepIndex) => {
  step.addEventListener("click", () => {
    lastPrismChoiceAt = Date.now();
    setPrismPhase(stepIndex);
  });

  step.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = stepIndex;
    if (event.key === "ArrowLeft") {
      nextIndex = (stepIndex - 1 + prismSteps.length) % prismSteps.length;
    }
    if (event.key === "ArrowRight") nextIndex = (stepIndex + 1) % prismSteps.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = prismSteps.length - 1;
    lastPrismChoiceAt = Date.now();
    setPrismPhase(nextIndex, { focus: true });
  });
});

function updatePrismFromScroll() {
  prismScrollFrame = 0;
  if (!prismHero || !prismChamber) return;
  const heroRect = prismHero.getBoundingClientRect();
  const scrollDistance = Math.max(1, Math.min(prismHero.offsetHeight * 0.72, innerHeight * 0.92));
  const progress = Math.max(0, Math.min(1, -heroRect.top / scrollDistance));

  prismChamber.style.setProperty("--prism-scroll", progress.toFixed(3));
  prismChamber.style.setProperty("--prism-tilt", `${(-4 + progress * 9).toFixed(2)}deg`);
  prismChamber.style.setProperty("--prism-lift", `${(-progress * 20).toFixed(2)}px`);
  prismChamber.style.setProperty("--prism-y", `${(progress * 8).toFixed(2)}deg`);
  prismChamber.style.setProperty("--ray-stretch", (1 + progress * 0.22).toFixed(3));

  if (
    progress > 0.035 &&
    progress < 0.99 &&
    heroRect.bottom > 0 &&
    Date.now() - lastPrismChoiceAt > 4200
  ) {
    lastPrismScrollAt = Date.now();
    setPrismPhase(Math.min(PRISM_PHASES.length - 1, Math.floor(progress * PRISM_PHASES.length)));
  }
}

function requestPrismScrollUpdate() {
  if (prismScrollFrame) return;
  prismScrollFrame = window.requestAnimationFrame(updatePrismFromScroll);
}

if (prismHero && prismChamber) {
  window.addEventListener("scroll", requestPrismScrollUpdate, { passive: true });
  window.addEventListener("resize", requestPrismScrollUpdate, { passive: true });
  updatePrismFromScroll();

  if ("IntersectionObserver" in window) {
    const prismObserver = new IntersectionObserver(
      ([entry]) => {
        prismVisible = entry.isIntersecting;
      },
      { rootMargin: "140px 0px" },
    );
    prismObserver.observe(prismHero);
  }

  if (!reducedMotion) {
    prismAutoTimer = window.setInterval(() => {
      if (
        !prismVisible ||
        document.hidden ||
        Date.now() - lastPrismScrollAt < 1500 ||
        Date.now() - lastPrismChoiceAt < 7200
      ) {
        return;
      }
      setPrismPhase(activePrismPhase + 1);
    }, 3100);
  }
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) requestPrismScrollUpdate();
});

setPrismPhase(activePrismPhase);

const programExplorer = document.querySelector("[data-program-explorer]");
const programTabs = Array.from(document.querySelectorAll("[data-program-tab]"));
const programPanels = Array.from(document.querySelectorAll("[data-program-panel]"));
const programIndex = document.querySelector("[data-program-index]");
const programProgress = document.querySelector("[data-program-progress]");
const programOrder = programTabs.map((tab) => tab.dataset.programTab);

function setProgram(program, shouldFocus = false) {
  const nextIndex = programOrder.indexOf(program);
  if (!programExplorer || nextIndex < 0) return;
  programExplorer.dataset.program = program;

  programTabs.forEach((tab) => {
    const isActive = tab.dataset.programTab === program;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    if (isActive && shouldFocus) tab.focus();
  });

  programPanels.forEach((panel) => {
    const isActive = panel.dataset.programPanel === program;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (programIndex) programIndex.textContent = String(nextIndex + 1).padStart(2, "0");
  if (programProgress) {
    programProgress.style.setProperty("--program-progress", `${nextIndex * 100}%`);
  }
}

programTabs.forEach((tab, tabIndex) => {
  tab.addEventListener("click", () => setProgram(tab.dataset.programTab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    let nextIndex = tabIndex;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      nextIndex = (tabIndex - 1 + programOrder.length) % programOrder.length;
    }
    if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      nextIndex = (tabIndex + 1) % programOrder.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = programOrder.length - 1;
    setProgram(programOrder[nextIndex], true);
  });
});

const archiveComposer = document.querySelector("[data-archive-composer]");
const archiveTabs = Array.from(document.querySelectorAll("[data-archive-tab]"));
const archiveSheets = Array.from(document.querySelectorAll("[data-archive-sheet]"));
const archiveOrder = archiveTabs.map((tab) => tab.dataset.archiveTab);

function setArchiveSheet(archive, shouldFocus = false) {
  const nextIndex = archiveOrder.indexOf(archive);
  if (!archiveComposer || nextIndex < 0) return;
  archiveComposer.dataset.archiveActive = archive;

  archiveTabs.forEach((tab) => {
    const isActive = tab.dataset.archiveTab === archive;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    if (isActive && shouldFocus) tab.focus();
  });

  archiveSheets.forEach((sheet) => {
    const isActive = sheet.dataset.archiveSheet === archive;
    sheet.classList.toggle("is-front", isActive);
    sheet.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

archiveTabs.forEach((tab, tabIndex) => {
  tab.addEventListener("click", () => setArchiveSheet(tab.dataset.archiveTab));
  tab.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") setArchiveSheet(tab.dataset.archiveTab);
  });
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = tabIndex;
    if (event.key === "ArrowUp") nextIndex = (tabIndex - 1 + archiveOrder.length) % archiveOrder.length;
    if (event.key === "ArrowDown") nextIndex = (tabIndex + 1) % archiveOrder.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = archiveOrder.length - 1;
    setArchiveSheet(archiveOrder[nextIndex], true);
  });
});

archiveSheets.forEach((sheet) => {
  sheet.tabIndex = 0;
  sheet.setAttribute("role", "button");
  sheet.addEventListener("click", () => setArchiveSheet(sheet.dataset.archiveSheet));
  sheet.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    setArchiveSheet(sheet.dataset.archiveSheet);
  });
});

setProgram(programExplorer?.dataset.program || programOrder[0]);
setArchiveSheet(archiveComposer?.dataset.archiveActive || archiveOrder[0]);

function setupIdeaField() {
  const hero = document.querySelector(".hero");
  const canvas = document.querySelector("[data-idea-field]");
  const wordLayer = document.querySelector("[data-idea-word-layer]");
  const ideaCount = document.querySelector("[data-idea-count]");
  const context = canvas?.getContext("2d");
  if (!hero || !canvas || !wordLayer || !context) return;

  const ideaWords = {
    zh: ["问题", "灵感", "方法", "同行", "实践", "发现"],
    en: ["QUESTION", "IDEA", "METHOD", "PEERS", "BUILD", "DISCOVER"],
  };

  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let columns = 0;
  let rows = 0;
  let points = [];
  let pulses = [];
  let ideaTotal = 0;
  let wordIndex = 0;
  let animationFrame = 0;
  let isVisible = true;
  let lastPointer = null;
  let lastInteractionAt = 0;

  const pointer = {
    x: -1000,
    y: -1000,
    dx: 0,
    dy: 0,
    active: false,
  };

  function pointAt(column, row) {
    return points[row * columns + column];
  }

  function buildField() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.round(rect.width));
    height = Math.max(1, Math.round(hero.offsetHeight));
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const spacing = width < 700 ? 62 : 76;
    columns = Math.ceil(width / spacing) + 2;
    rows = Math.ceil(height / spacing) + 2;
    points = [];

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const baseX = (column - 1) * spacing + (row % 2 ? spacing * 0.24 : 0);
        const baseY = (row - 1) * spacing;
        points.push({
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          vx: 0,
          vy: 0,
          phase: (column * 0.61 + row * 0.87) % (Math.PI * 2),
        });
      }
    }

    drawField(0, false);
  }

  function drawConnection(first, second, timestamp, isDynamic) {
    if (!first || !second) return;
    const firstWave = isDynamic ? Math.sin(timestamp * 0.00042 + first.phase) * 0.7 : 0;
    const secondWave = isDynamic ? Math.sin(timestamp * 0.00042 + second.phase) * 0.7 : 0;
    const firstX = first.x + firstWave;
    const firstY = first.y + firstWave * 0.45;
    const secondX = second.x + secondWave;
    const secondY = second.y + secondWave * 0.45;
    const energy =
      Math.min(1, (Math.hypot(first.vx, first.vy) + Math.hypot(second.vx, second.vy)) / 12);

    context.beginPath();
    context.moveTo(firstX, firstY);
    context.lineTo(secondX, secondY);
    context.strokeStyle = `rgba(23, 107, 255, ${0.055 + energy * 0.12})`;
    context.lineWidth = 0.7 + energy * 0.45;
    context.stroke();
  }

  function drawField(timestamp, isDynamic = true) {
    context.clearRect(0, 0, width, height);

    points.forEach((point) => {
      if (isDynamic) {
        point.vx += (point.baseX - point.x) * 0.028;
        point.vy += (point.baseY - point.y) * 0.028;
        point.vx *= 0.91;
        point.vy *= 0.91;
        point.x += point.vx;
        point.y += point.vy;
      }
    });

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const point = pointAt(column, row);
        drawConnection(point, pointAt(column + 1, row), timestamp, isDynamic);
        drawConnection(point, pointAt(column, row + 1), timestamp, isDynamic);
        if ((row + column) % 3 === 0) {
          drawConnection(point, pointAt(column + (row % 2 ? 0 : 1), row + 1), timestamp, isDynamic);
        }
      }
    }

    points.forEach((point) => {
      const energy = Math.min(1, Math.hypot(point.vx, point.vy) / 7);
      context.beginPath();
      context.arc(point.x, point.y, 0.8 + energy * 1.25, 0, Math.PI * 2);
      context.fillStyle = `rgba(23, 107, 255, ${0.14 + energy * 0.38})`;
      context.fill();
    });

    pulses = pulses.filter((pulse) => timestamp - pulse.startedAt < 2300);
    pulses.forEach((pulse) => {
      const age = Math.max(0, timestamp - pulse.startedAt);
      const progress = Math.min(1, age / 2300);
      const radius = 18 + progress * 150;
      context.beginPath();
      context.arc(pulse.x, pulse.y, radius, 0, Math.PI * 2);
      context.strokeStyle = `rgba(208, 43, 70, ${0.24 * (1 - progress)})`;
      context.lineWidth = 1.2;
      context.stroke();
      context.beginPath();
      context.arc(pulse.x, pulse.y, radius * 0.64, 0, Math.PI * 2);
      context.strokeStyle = `rgba(23, 107, 255, ${0.2 * (1 - progress)})`;
      context.stroke();
    });
  }

  function animate(timestamp) {
    drawField(timestamp, true);
    const fieldHasEnergy = points.some(
      (point) => Math.abs(point.vx) + Math.abs(point.vy) > 0.025,
    );
    const interactionIsFresh = timestamp - lastInteractionAt < 720;
    if (isVisible && (fieldHasEnergy || pulses.length || interactionIsFresh)) {
      animationFrame = window.requestAnimationFrame(animate);
    } else {
      animationFrame = 0;
    }
  }

  function ensureAnimation() {
    if (!reducedMotion && isVisible && !animationFrame) {
      animationFrame = window.requestAnimationFrame(animate);
    }
  }

  function applyDirectionalForce(event) {
    if (reducedMotion || event.pointerType === "touch") return;
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (lastPointer) {
      const movementX = Math.max(-28, Math.min(28, event.clientX - lastPointer.x));
      const movementY = Math.max(-28, Math.min(28, event.clientY - lastPointer.y));
      pointer.dx = movementX;
      pointer.dy = movementY;

      points.forEach((point) => {
        const distance = Math.hypot(point.x - x, point.y - y);
        if (distance > 230) return;
        const influence = Math.pow(1 - distance / 230, 2) * 0.58;
        point.vx += movementX * influence - movementY * influence * 0.11;
        point.vy += movementY * influence + movementX * influence * 0.11;
      });
    }

    pointer.x = x;
    pointer.y = y;
    pointer.active = true;
    lastInteractionAt = performance.now();
    lastPointer = { x: event.clientX, y: event.clientY };
    ensureAnimation();
  }

  function leaveIdea(event) {
    if (event.target.closest("a, button, input, textarea, select, dialog")) return;
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const now = performance.now();
    lastInteractionAt = now;

    if (!reducedMotion) {
      points.forEach((point) => {
        const deltaX = point.x - x;
        const deltaY = point.y - y;
        const distance = Math.max(18, Math.hypot(deltaX, deltaY));
        if (distance > 260) return;
        const influence = Math.pow(1 - distance / 260, 2) * 6.2;
        point.vx += (deltaX / distance) * influence;
        point.vy += (deltaY / distance) * influence;
      });
      pulses.push({ x, y, startedAt: now });
      ensureAnimation();
    }

    const word = document.createElement("span");
    const words = ideaWords[currentLanguage];
    word.className = "idea-word";
    word.textContent = words[wordIndex % words.length];
    word.style.left = `${x}px`;
    word.style.top = `${y}px`;
    wordLayer.appendChild(word);
    window.setTimeout(() => word.remove(), 3500);

    wordIndex += 1;
    ideaTotal = (ideaTotal + 1) % 100;
    if (ideaCount) ideaCount.textContent = String(ideaTotal).padStart(2, "0");
  }

  hero.addEventListener("pointermove", applyDirectionalForce, { passive: true });
  hero.addEventListener("pointerleave", () => {
    pointer.active = false;
    lastPointer = null;
  });
  hero.addEventListener("click", leaveIdea);

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(() => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      buildField();
      ensureAnimation();
    });
    resizeObserver.observe(hero);
  } else {
    window.addEventListener("resize", buildField, { passive: true });
  }

  if ("IntersectionObserver" in window && !reducedMotion) {
    const fieldObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) ensureAnimation();
      },
      { rootMargin: "180px 0px" },
    );
    fieldObserver.observe(hero);
  }

  buildField();
  ensureAnimation();
}

setupIdeaField();

const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

configureExternalLinks();
