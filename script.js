const SITE_CONFIG = {
  qqGroupNumber: "",
  qqGroupUrl: "",
  githubUrl: "",
  registrationEndpoint: "",
};

const EN_TRANSLATIONS = {
  "brand.subtitle": "Sichuan University Student Chapter",
  "nav.about": "About",
  "nav.activities": "Activities",
  "nav.achievements": "Achievements",
  "nav.open": "Open Source",
  "nav.join": "Join us",
  "hero.title": "Where every connection<br />opens a new <em>possibility.</em>",
  "hero.lead":
    "For computing students at Sichuan University, we connect academic frontiers, hands-on practice, and inspiring peers. We learn, build, and move toward a wider world together.",
  "hero.join": "Join the QQ group",
  "hero.explore": "Discover SCU CCF",
  "hero.note": "Open to every student curious about the world of computing",
  "hero.foot": "Scroll to explore our academic community",
  "visual.status": "Connecting",
  "visual.academic": "Research",
  "visual.practice": "Practice",
  "visual.community": "Community",
  "visual.caption": "Ideas become connections.",
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
    "The site is structured around four types of activities. Once real materials are available, each card can lead to a dedicated story page.",
  "activity.type": "Category",
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
  "join.title": "The next great connection<br />starts here.",
  "join.copy":
    "Whether you are looking for direction, peers, or meaningful practice, you are welcome to come closer to SCU CCF.",
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

document.querySelectorAll("[data-i18n]").forEach((element) => {
  textOriginals.set(element, element.textContent.trim());
});

document.querySelectorAll("[data-i18n-html]").forEach((element) => {
  htmlOriginals.set(element, element.innerHTML.trim());
});

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
  placeholderOriginals.set(element, element.getAttribute("placeholder") || "");
});

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
