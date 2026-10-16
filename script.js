/* Hitarth Vasa portfolio: Learning and Growing */

/* ------------------------------------------------------------
   1. EDIT THESE LINKS BEFORE YOU SUBMIT
   Only the ones you fill in will appear in the Contact section.
   Use an email or social links only (no phone number or address).
------------------------------------------------------------- */
const CONFIG = {
  email: "hitarthvasa03@gmail.com",
  linkedin: "https://www.linkedin.com/in/hitarth-vasa-1a5864271",
  github: "https://github.com/hitarthvasa",
  cv: "assets/Hitarth-Vasa-CV.pdf",   // put your CV PDF here; the button hides itself if the file is missing
  instagram: ""   // optional, e.g. "https://www.instagram.com/your-handle"
};

/* ------------------------------------------------------------
   GALLERY: your off-screen and off-duty photos.
   1. Save photos in assets/gallery/ (jpg or png).
   2. Add one line per photo below. tag is one of: wins, travel, dressedup, family.
   For a video add type: "video" and a poster image (a still frame shown before it plays).
   The Gallery tab only shows up when at least one photo loads.
------------------------------------------------------------- */
const GALLERY = [
  { src: "assets/gallery/arch-lake.jpg", caption: "Lake view through the arch", tag: "travel" },
  { src: "assets/gallery/trophy-yellow.jpg", caption: "Holding the trophy", tag: "wins" },
  { src: "assets/gallery/black-kurta.jpg", caption: "Lights, flowers and a black kurta", tag: "dressedup" },
  { src: "assets/gallery/lake-sunset.jpg", focus: "50% 55%", caption: "Sunset on the water", tag: "travel" },
  { src: "assets/gallery/trophy-turf.jpg", caption: "Trophy day on the turf", tag: "wins" },
  { src: "assets/gallery/hills-sunset.jpg", focus: "50% 78%", caption: "Hills at sunset", tag: "travel" },
  { src: "assets/gallery/trophy-night.jpg", focus: "50% 55%", caption: "Medal and a trophy after dark", tag: "wins" },
  { src: "assets/gallery/escalator.mp4", srcWebm: "assets/gallery/escalator.webm", poster: "assets/gallery/escalator-poster.jpg", type: "video", caption: "Escalator ride with my nephew", tag: "family" },
  { src: "assets/gallery/kurta-selfie.jpg", caption: "Light kurta selfie", tag: "dressedup" },
  { src: "assets/gallery/beach.jpg", focus: "50% 72%", caption: "Quiet beach day", tag: "travel" },
  { src: "assets/gallery/desert.jpg", focus: "50% 74%", caption: "Golden hour in the desert", tag: "travel" },
  { src: "assets/gallery/city-lights.jpg", focus: "50% 42%", caption: "City lights from the top", tag: "travel" },
  { src: "assets/gallery/suited-up.jpg", caption: "Suited up for the evening", tag: "dressedup" },
  { src: "assets/gallery/river-raft.jpg", focus: "50% 72%", caption: "River and a blue raft", tag: "travel" },
  { src: "assets/gallery/throwback.jpg", caption: "Throwback to little me", tag: "family" },
  { src: "assets/gallery/hand-in-hand.jpg", caption: "Walking with my nephew", tag: "family" }
];
const GALLERY_TABS = { wins: "Wins", travel: "Travel", dressedup: "Dressed up", family: "Family and fun" };

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

/* ---------- 2. Loader, then hero entrance ---------- */
function runLoader() {
  const loader = $("#loader");
  const root = document.documentElement;
  const finish = () => {
    loader.classList.add("is-done");
    root.classList.add("is-ready");
    setTimeout(() => { loader.style.display = "none"; }, 1000);
    setTimeout(() => root.classList.add("is-settled"), 2200);
  };
  if (reduceMotion) { finish(); return; }

  const fill = $("#loaderFill");
  const pct = $("#loaderPct");
  const map = $("#meltMap");
  const noise = $("#meltNoise");
  const duration = 2400;
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 2);
    fill.style.width = (eased * 100).toFixed(0) + "%";
    pct.textContent = (eased * 100).toFixed(0);
    // letters start melted and settle into shape as loading finishes
    map.setAttribute("scale", String(60 * (1 - eased) + 4 * Math.sin(now / 160) * (1 - eased)));
    noise.setAttribute("baseFrequency", (0.012 + 0.004 * Math.sin(now / 400)) + " 0.05");
    if (t < 1) requestAnimationFrame(tick);
    else setTimeout(finish, 250);
  }
  requestAnimationFrame(tick);
}

/* ---------- 3. Navigation ---------- */
function setupNav() {
  const toggle = $("#navToggle");
  const links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("a", links).forEach(a => a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

/* ---------- 4. Projects ---------- */
const PROJECTS = {
  solace: {
    shot: "assets/projects/solace.jpg",
    repo: "https://github.com/hitarthvasa/solace-",
    title: "Solace",
    cat: "AI \u00d7 Mental wellness (earlier called Echo)",
    idea: "Therapy can be expensive, but sometimes presence itself matters.",
    stack: ["Next.js", "Supabase", "App Router", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Lucide"],
    features: ["Authentication", "Dashboard and profile", "Find Someone", "Resources and insights", "Chat agent", "Self-practice"],
    extra: [
      ["Self-practice tools", "Meditation timer, breathing exercises, soothing sounds, journaling, Gita reading and random quotes."],
      ["Design approach", "Calm, realistic and human. It should not look like an AI product, and it avoids anything too pink, childish or full of emoji."],
      ["Next ideas", "Daily quote reminders, a focus mode, mood-based colour themes and an audio-call agent."]
    ]
  },
  bayora: {
    shot: "assets/projects/bayora.jpg",
    repo: "https://github.com/hitarthvasa/bayora",
    title: "Bayora",
    cat: "Adversarial AI safety infrastructure",
    idea: "AI systems need to hold up when someone is actively trying to break them.",
    stack: ["AI safety", "Security", "Infrastructure", "Adversarial AI", "Responsible AI"],
    features: [],
    extra: [
      ["What it is about", "Building the infrastructure side of AI safety: how AI systems behave under adversarial pressure, and how to make them more responsible and secure."],
      ["Why I care", "As more products rely on AI, safety has to be built in from the start, not added at the end."]
    ]
  },
  crisis: {
    shot: "assets/projects/crisis.jpg",
    repo: "https://github.com/hitarthvasa/crisisgrid",
    title: "Crisis Grid",
    cat: "Disaster response \u00b7 Multi-agent systems",
    idea: "When a disaster hits, decisions need data fast.",
    stack: ["Multi-agent systems", "Live weather data", "Historical disaster events", "Decision support"],
    features: [],
    extra: [
      ["What it does", "Brings together live weather information, past disaster events and disaster intelligence so a team of AI agents can support decisions."],
      ["Test case", "Floods in Assam, where timing and good information make a real difference."],
      ["Why it matters", "It combines data, AI and real-world problem solving in one project."]
    ]
  },
  skillsync: {
    shot: "assets/projects/skillsync.jpg",
    repo: "https://github.com/hitarthvasa/skillsync",
    title: "SkillSync Maharashtra",
    cat: "Data \u00d7 Employment",
    idea: "Where are the jobs, and where are the skills to fill them?",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "FastAPI", "PostgreSQL", "Docker"],
    features: [],
    heat: true,
    extra: [
      ["What it does", "A labour-market and curriculum-alignment prototype for institutes and employers. It measures the skill gap as demand minus supply, district by district."],
      ["Four dashboards", "Government, Institute, Employer and Skill Gap, with an interactive Maharashtra district heatmap."],
      ["How it reads", "Gaps are colour-coded from critical to low, so the biggest shortages stand out at a glance."],
      ["Real and modeled data", "Live records from India's data.gov.in portal sit next to a clearly labelled modeled baseline, so nothing is passed off as official statistics."]
    ]
  }
};

function renderProject(id) {
  const p = PROJECTS[id];
  const panel = $("#detail");
  const tags = p.stack.map(t => "<li>" + t + "</li>").join("");
  const feats = p.features.length
    ? "<div><dt>Features</dt><dd><ul class=\"tags\">" + p.features.map(t => "<li>" + t + "</li>").join("") + "</ul></dd></div>"
    : "";
  const extras = p.extra.map(([k, v]) => "<div><dt>" + k + "</dt><dd>" + v + "</dd></div>").join("");
  const heat = p.heat
    ? "<div class=\"heat\" aria-hidden=\"true\"><i style=\"background:#DE4B38\"></i><i style=\"background:#F08A24\"></i><i style=\"background:#F2C230\"></i><i style=\"background:#3FA45B\"></i></div>"
    : "";
  panel.style.animation = "none";
  void panel.offsetWidth;
  panel.style.animation = "";
  const link = p.repo
    ? "<a class=\"detail__link\" href=\"" + p.repo + "\" target=\"_blank\" rel=\"noopener noreferrer\">View code on GitHub <span aria-hidden=\"true\">&#8599;</span></a>"
    : "";
  const shot = p.shot
    ? "<figure class=\"detail__shot\"><img src=\"" + p.shot + "\" alt=\"Screenshot of " + p.title + "\" loading=\"lazy\" onerror=\"this.parentNode.remove()\"></figure>"
    : "";
  panel.innerHTML =
    "<div><p class=\"detail__cat\">" + p.cat + "</p><h3>" + p.title + "</h3><p class=\"detail__idea\">" + p.idea + "</p>" + link + heat + "</div>" +
    "<dl><div><dt>Focus and tools</dt><dd><ul class=\"tags\">" + tags + "</ul></dd></div>" + feats + extras + "</dl>" + shot;
}

function setupProjects() {
  const cards = $$(".card");
  const select = id => {
    cards.forEach(c => c.setAttribute("aria-expanded", String(c.dataset.id === id)));
    renderProject(id);
  };
  cards.forEach(c => c.addEventListener("click", () => select(c.dataset.id)));
  select("solace");
}

/* ---------- 6. Reveal on scroll (timelines, headlines, cards) ---------- */
function setupReveal() {
  // mark things that should animate in
  $$(".pcard, .skills__col, .research__grid > div, .who__steps").forEach((el, i) => {
    el.setAttribute("data-reveal", "");
    el.style.setProperty("--i", String(i % 3));
  });
  $$(".chips li").forEach((li, i) => li.style.setProperty("--i", String(i)));
  const targets = $$(".timeline, .big, [data-reveal], .fan, .chips, .steps");
  if (!("IntersectionObserver" in window) || reduceMotion) {
    targets.forEach(t => t.classList.add("is-in", "is-open", "is-settled"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      // once the cards have fanned open, switch to quick hover transitions
      if (e.target.classList.contains("fan")) setTimeout(() => e.target.classList.add("is-open"), 1600);
      // once the chips have popped in, hovering them should respond instantly
      if (e.target.classList.contains("chips")) setTimeout(() => e.target.classList.add("is-settled"), 1200);
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  targets.forEach(t => io.observe(t));
}

/* ---------- 6b. Scroll effects: progress bar, hero parallax, marquee speed ---------- */
function setupScrollFX() {
  const bar = $("#progress");
  const hero = $(".hero");
  const track = $(".marquee__track");
  const anim = track && track.getAnimations ? track.getAnimations()[0] : null;
  let lastY = window.scrollY, rate = 1, ticking = false;

  function frame() {
    ticking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    if (!reduceMotion) {
      hero.style.setProperty("--py", Math.min(y, 900) * 0.18 + "px");
      hero.style.setProperty("--spin", y * 0.25 + "deg");
      if (anim) {
        const v = Math.abs(y - lastY);
        rate = Math.min(1 + v / 6, 8);
        anim.playbackRate = rate;
      }
    }
    lastY = y;
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  frame();

  // marquee eases back to normal speed when scrolling stops
  if (anim && !reduceMotion) {
    setInterval(() => {
      if (anim.playbackRate > 1.05) anim.playbackRate = 1 + (anim.playbackRate - 1) * 0.8;
      else anim.playbackRate = 1;
    }, 60);
  }

  // hero follows the mouse a little
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    hero.addEventListener("pointermove", e => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 2 - 1).toFixed(3));
      hero.style.setProperty("--my", ((e.clientY - r.top) / r.height * 2 - 1).toFixed(3));
    });
  }
}

/* ---------- 6d. Story section: quote lights up, then three big words ---------- */
function setupStory() {
  const sec = $("#break");
  if (!sec || reduceMotion) return;          // reduced motion keeps the simple static layout
  sec.classList.add("is-scroll");
  const quote = $(".story__quote", sec);
  const parts = quote.textContent.trim().split(/\s+/);
  quote.innerHTML = parts.map(w => "<span class=\"w\">" + w + "</span>").join(" ");
  const ws = $$(".w", quote);
  const words = $(".story__words", sec);
  const items = $$(".story__item", sec);
  const navs = $$(".story__nav li", sec);
  const ring = $(".story__ring", sec);
  const stage = $(".story__stage", sec);
  const START = 0.26, SEG = (1 - START) / items.length;
  let ticking = false;

  function update() {
    ticking = false;
    const r = sec.getBoundingClientRect();
    const range = sec.offsetHeight - window.innerHeight;
    const p = Math.max(0, Math.min(1, -r.top / range));
    // 1) quote lights up word by word
    const lit = Math.min(ws.length, Math.floor((p / 0.2) * ws.length + 0.001));
    ws.forEach((w, i) => w.classList.toggle("on", i < lit));
    // 2) quote fades out, big words fade in
    quote.style.opacity = p < 0.2 ? 1 : Math.max(0, 1 - (p - 0.2) / 0.07);
    quote.style.visibility = quote.style.opacity === "0" ? "hidden" : "visible";
    words.style.opacity = p < 0.23 ? 0 : Math.min(1, (p - 0.23) / 0.06);
    // 3) active word
    const idx = p >= START ? Math.min(items.length - 1, Math.floor((p - START) / SEG)) : -1;
    items.forEach((el, i) => {
      el.classList.toggle("is-active", i === idx);
      el.classList.toggle("is-past", idx > -1 && i < idx);
    });
    navs.forEach((el, i) => el.classList.toggle("is-active", i === idx));
    // ring spins faster the more you scroll
    ring.style.transform = "rotate(" + (p * 900).toFixed(1) + "deg)";
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();

  // soft blue glow follows the mouse
  if (window.matchMedia("(hover: hover)").matches) {
    stage.addEventListener("pointermove", e => {
      const b = stage.getBoundingClientRect();
      stage.style.setProperty("--gx", (e.clientX - b.left) + "px");
      stage.style.setProperty("--gy", (e.clientY - b.top) + "px");
    });
  }
}

/* ---------- 6c. Tilt cards and magnetic links ---------- */
function setupHoverFX() {
  if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
  $$(".pcard, .detail").forEach(el => {
    el.setAttribute("data-tilt", "");
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
      el.style.setProperty("--rx", (-y * 7).toFixed(2) + "deg");
    });
    el.addEventListener("pointerleave", () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  });
  $$(".links a").forEach(a => {
    a.addEventListener("pointermove", e => {
      const r = a.getBoundingClientRect();
      a.style.setProperty("--tx", ((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1) + "px");
      a.style.setProperty("--ty", ((e.clientY - r.top - r.height / 2) * 0.25).toFixed(1) + "px");
    });
    a.addEventListener("pointerleave", () => { a.style.setProperty("--tx", "0px"); a.style.setProperty("--ty", "0px"); });
  });
}

/* ---------- 7. Drums (Web Audio, no files needed) ---------- */
let audio;
function getAudio() {
  if (!audio) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audio = new Ctx();
  }
  if (audio.state === "suspended") audio.resume();
  return audio;
}
function noiseBuffer(ctx) {
  const len = ctx.sampleRate * 0.4;
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}
function tone(ctx, type, f0, f1, dur, vol) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  const t = ctx.currentTime;
  o.type = type;
  o.frequency.setValueAtTime(f0, t);
  o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(ctx.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}
function noise(ctx, cutoff, dur, vol) {
  const s = ctx.createBufferSource();
  const f = ctx.createBiquadFilter();
  const g = ctx.createGain();
  const t = ctx.currentTime;
  s.buffer = noiseBuffer(ctx);
  f.type = "highpass";
  f.frequency.value = cutoff;
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.connect(f).connect(g).connect(ctx.destination);
  s.start(t);
  s.stop(t + dur + 0.02);
}
const SOUNDS = {
  kick: ctx => tone(ctx, "sine", 160, 40, 0.28, 1),
  snare: ctx => { noise(ctx, 1500, 0.2, 0.7); tone(ctx, "triangle", 220, 120, 0.12, 0.5); },
  hat: ctx => noise(ctx, 7000, 0.06, 0.45),
  tom: ctx => tone(ctx, "sine", 220, 90, 0.3, 0.9)
};
function hit(name) {
  const ctx = getAudio();
  if (ctx && SOUNDS[name]) SOUNDS[name](ctx);
  const pad = $("[data-sound=\"" + name + "\"]");
  if (pad) {
    pad.classList.add("is-hit");
    setTimeout(() => pad.classList.remove("is-hit"), 110);
  }
}
function setupDrums() {
  $$(".pad").forEach(p => {
    p.addEventListener("pointerdown", e => { e.preventDefault(); hit(p.dataset.sound); });
    p.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hit(p.dataset.sound); } });
  });
  const keys = {};
  $$(".pad").forEach(p => { keys[p.dataset.key] = p.dataset.sound; });
  document.addEventListener("keydown", e => {
    if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    const name = keys[e.key.toLowerCase()];
    if (name) hit(name);
  });
}

/* ---------- 8. Hand cricket (tap buttons, or show fingers to the camera) ---------- */

// Counts the numbers 1 to 6 from the 21 hand landmarks. Thumbs-up (only the thumb out) is 6, a fist is 0.
function countFingers(lm) {
  const d = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
  const wrist = lm[0];
  const palm = d(lm[0], lm[9]) || 1;
  let fingers = 0;
  [[8, 6], [12, 10], [16, 14], [20, 18]].forEach(([tip, pip]) => {
    if (d(lm[tip], wrist) > d(lm[pip], wrist) * 1.08) fingers += 1;
  });
  // thumb counts as "out" when it is far from the index knuckle, away from the pinky side, and fairly straight
  const v1 = { x: lm[3].x - lm[2].x, y: lm[3].y - lm[2].y };
  const v2 = { x: lm[4].x - lm[3].x, y: lm[4].y - lm[3].y };
  const straight = (v1.x * v2.x + v1.y * v2.y) / ((Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y)) || 1) > 0.6;
  const thumbOut = straight && d(lm[4], lm[5]) > 0.5 * palm && d(lm[4], lm[17]) > d(lm[3], lm[17]);
  if (thumbOut && fingers === 0) return 6;
  return fingers + (thumbOut ? 1 : 0);
}

function setupHandCricket() {
  const root = $("#hc");
  if (!root) return;
  const el = id => document.getElementById(id);
  const youScoreEl = el("hcYouScore"), cpuScoreEl = el("hcCpuScore");
  const targetBox = el("hcTargetBox"), targetEl = el("hcTarget");
  const youNumEl = el("hcYouNum"), cpuNumEl = el("hcCpuNum");
  const callout = el("hcCallout"), bestEl = el("hcBest");
  const padButtons = $$(".hc__btns button", root);
  const BEST_KEY = "hv-handcricket-best";

  let phase = "bat";            // "bat" (you bat), "bowl" (computer bats), "over"
  let youScore = 0, cpuScore = 0, target = 0;

  function readBest() { try { return Number(localStorage.getItem(BEST_KEY)) || 0; } catch (e) { return 0; } }
  function saveBest(v) { try { localStorage.setItem(BEST_KEY, String(v)); } catch (e) { /* storage not available */ } }
  function showBest() {
    const b = readBest();
    bestEl.hidden = !b;
    if (b) bestEl.textContent = "Your best innings: " + b;
  }
  function popNum(box) {
    box.parentElement.classList.remove("pop");
    void box.parentElement.offsetWidth;
    box.parentElement.classList.add("pop");
  }
  function render(msg) {
    youScoreEl.textContent = youScore;
    cpuScoreEl.textContent = cpuScore;
    targetBox.hidden = phase === "bat";
    targetEl.textContent = target;
    if (msg) callout.textContent = msg;
    padButtons.forEach(b => { b.disabled = phase === "over"; });
  }

  function play(n) {
    if (phase === "over") return false;
    const cpu = 1 + Math.floor(Math.random() * 6);
    youNumEl.textContent = n; cpuNumEl.textContent = cpu;
    popNum(youNumEl); popNum(cpuNumEl);

    if (phase === "bat") {
      if (n === cpu) {
        target = youScore + 1;
        phase = "bowl";
        if (youScore > readBest()) { saveBest(youScore); showBest(); }
        render("OUT! You both showed " + n + ". You scored " + youScore + ". Now the computer bats and needs " + target + ". Show a number to bowl.");
      } else {
        youScore += n;
        const extra = n === 6 ? " SIX!" : n === 4 ? " FOUR!" : "";
        render("You showed " + n + ", the computer showed " + cpu + ". +" + n + " runs." + extra);
      }
    } else {
      // computer is batting with `cpu`, you are bowling with `n`
      if (n === cpu) {
        phase = "over";
        render("OUT! You both showed " + n + ". The computer fell short on " + cpuScore + ". You win by " + (target - 1 - cpuScore) + " runs!");
      } else {
        cpuScore += cpu;
        if (cpuScore >= target) {
          phase = "over";
          render("The computer showed " + cpu + " and chased it down with " + cpuScore + ". Computer wins. Hit New game to try again.");
        } else {
          render("You bowled " + n + ", the computer hit " + cpu + ". It needs " + (target - cpuScore) + " more.");
        }
      }
    }
    return true;
  }

  function reset() {
    phase = "bat"; youScore = 0; cpuScore = 0; target = 0;
    youNumEl.textContent = "-"; cpuNumEl.textContent = "-";
    render("New game. Tap a number or show your hand to bat.");
  }

  padButtons.forEach(b => b.addEventListener("click", () => play(Number(b.dataset.n))));
  el("hcReset").addEventListener("click", reset);
  showBest();
  render();

  /* ----- camera: loaded only when the visitor presses Start camera ----- */
  const camBtn = el("hcCamBtn"), camBox = el("hcCam");
  const video = el("hcVideo"), canvas = el("hcCanvas");
  const readEl = el("hcRead"), holdEl = el("hcHold");
  const MP = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";
  const MODEL = "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task";
  const HOLD_MS = 900;
  let landmarker = null, stream = null, running = false, rafId = 0;
  let candidate = 0, candidateSince = 0, locked = false, noHandSince = 0, lastVideoTime = -1;

  async function loadLandmarker() {
    if (landmarker) return landmarker;
    const vision = await import(MP + "/vision_bundle.mjs");
    const files = await vision.FilesetResolver.forVisionTasks(MP + "/wasm");
    const make = delegate => vision.HandLandmarker.createFromOptions(files, {
      baseOptions: { modelAssetPath: MODEL, delegate },
      runningMode: "VIDEO", numHands: 1
    });
    try { landmarker = await make("GPU"); } catch (e) { landmarker = await make("CPU"); }
    return landmarker;
  }

  const LINES = [[0,1,2,3,4],[0,5,6,7,8],[0,9,10,11,12],[0,13,14,15,16],[0,17,18,19,20],[5,9,13,17]];
  function draw(lm) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!lm) return;
    const w = canvas.width, h = canvas.height;
    ctx.lineWidth = 3; ctx.strokeStyle = "rgba(157,184,214,0.95)"; ctx.fillStyle = "#fff";
    LINES.forEach(path => {
      ctx.beginPath();
      path.forEach((i, k) => { const x = lm[i].x * w, y = lm[i].y * h; if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y); });
      ctx.stroke();
    });
    lm.forEach(p => { ctx.beginPath(); ctx.arc(p.x * w, p.y * h, 4, 0, Math.PI * 2); ctx.fill(); });
  }

  function onReading(n, now) {
    readEl.textContent = n || "-";
    if (locked) {
      // after a ball, wait for the hand to come down (or a fist) before the next one
      if (!n) { if (!noHandSince) noHandSince = now; if (now - noHandSince > 450) { locked = false; candidate = 0; } }
      else noHandSince = 0;
      holdEl.style.width = "0%";
      return;
    }
    if (!n) { candidate = 0; holdEl.style.width = "0%"; return; }
    if (n !== candidate) { candidate = n; candidateSince = now; }
    const t = Math.min(1, (now - candidateSince) / HOLD_MS);
    holdEl.style.width = (t * 100) + "%";
    if (t >= 1) {
      if (phase !== "over") play(n);
      locked = true; noHandSince = 0; candidate = 0;
    }
  }

  function loop() {
    if (!running) return;
    rafId = requestAnimationFrame(loop);
    if (document.hidden || video.readyState < 2 || video.currentTime === lastVideoTime) return;
    lastVideoTime = video.currentTime;
    const now = performance.now();
    const res = landmarker.detectForVideo(video, now);
    const lm = res && res.landmarks && res.landmarks[0];
    if (canvas.width !== video.videoWidth) { canvas.width = video.videoWidth; canvas.height = video.videoHeight; }
    draw(lm);
    onReading(lm ? countFingers(lm) : 0, now);
  }

  function stopCamera() {
    running = false;
    cancelAnimationFrame(rafId);
    if (stream) stream.getTracks().forEach(t => t.stop());
    stream = null;
    video.srcObject = null;
    camBox.hidden = true;
    camBtn.textContent = "Start camera";
    camBtn.disabled = false;
  }

  async function startCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      callout.textContent = "This browser can't use the camera here. Tap the numbers instead.";
      return;
    }
    camBtn.disabled = true;
    camBtn.textContent = "Loading...";
    callout.textContent = "Loading hand tracking. Allow the camera if your browser asks.";
    try {
      await loadLandmarker();
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } }, audio: false });
      video.srcObject = stream;
      await video.play();
      camBox.hidden = false;
      running = true; locked = false; candidate = 0; lastVideoTime = -1;
      camBtn.disabled = false;
      camBtn.textContent = "Stop camera";
      callout.textContent = "Camera is on. Show 1 to 6 fingers and hold steady for a second.";
      loop();
    } catch (err) {
      stopCamera();
      const denied = err && (err.name === "NotAllowedError" || err.name === "SecurityError");
      callout.textContent = denied
        ? "The camera was blocked. You can still play by tapping the numbers."
        : "The camera could not start here. You can still play by tapping the numbers.";
    }
  }

  camBtn.addEventListener("click", () => { if (running) { stopCamera(); callout.textContent = "Camera off. Tap a number to keep playing."; } else startCamera(); });
  document.addEventListener("visibilitychange", () => { if (document.hidden && running) { lastVideoTime = -1; } });
  window.addEventListener("pagehide", stopCamera);
}

/* ---------- 9. Contact links ---------- */
function setupContact() {
  const list = $("#links");
  const items = [
    ["Email", CONFIG.email && "mailto:" + CONFIG.email],
    ["LinkedIn", CONFIG.linkedin],
    ["GitHub", CONFIG.github],
    ["Instagram", CONFIG.instagram]
  ];
  items.forEach(([label, href]) => {
    if (!href) return;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (href.indexOf("mailto:") !== 0) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    li.appendChild(a);
    list.appendChild(li);
  });
  if (CONFIG.cv && location.protocol.indexOf("http") === 0) {
    fetch(CONFIG.cv, { method: "HEAD" }).then(r => {
      if (!r.ok) return;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = CONFIG.cv; a.textContent = "Download CV"; a.className = "is-cv";
      a.setAttribute("download", "Hitarth-Vasa-CV.pdf");
      li.appendChild(a); list.appendChild(li);
    }).catch(() => {});
  }
  $("#year").textContent = new Date().getFullYear();
}

/* ---------- 10. Gallery and lightbox ---------- */
// picks a video file the browser can play (MP4 first, WebM as backup)
function pickVideo(g) {
  const v = document.createElement("video");
  const mp4 = v.canPlayType('video/mp4; codecs="avc1.42E01E"');
  return mp4 || !g.srcWebm ? g.src : g.srcWebm;
}

function setupGallery() {
  if (!GALLERY.length) return;
  const grid = $("#galleryGrid");
  let currentFilter = "all";
  let deckRender = () => {};
  const loaded = [];
  let pending = GALLERY.length;
  GALLERY.forEach((g, i) => {
    const im = new Image();
    im.onload = () => { g._ar = im.naturalWidth / im.naturalHeight; loaded[i] = g; done(); };
    im.onerror = () => done();      // skip missing files so there are never broken images
    im.src = g.type === "video" ? g.poster : g.src;
  });
  function done() { pending -= 1; if (pending === 0) build(loaded.filter(Boolean)); }

  function build(items) {
    if (!items.length) return;
    $("#gallery").hidden = false;
    $("#navGallery").hidden = false;
    items.forEach(g => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "shot";
      b.dataset.tag = g.tag || "travel";
      b.dataset.type = g.type || "image";
      b.dataset.src = g.type === "video" ? pickVideo(g) : g.src;
      b.dataset.ar = String(g._ar || 0.75);
      if (g.focus) b.style.setProperty("--fp", g.focus);
      b.setAttribute("aria-label", (g.type === "video" ? "Play video: " : "Open photo: ") + g.caption);
      let media;
      if (g.type === "video") {
        media = document.createElement("video");
        media.muted = true; media.loop = true; media.playsInline = true;
        media.setAttribute("muted", ""); media.setAttribute("playsinline", "");
        media.poster = g.poster; media.preload = "metadata"; media.src = pickVideo(g);
        media.setAttribute("aria-label", g.caption);
        if (!reduceMotion) media.autoplay = true;
        const badge = document.createElement("i");
        badge.className = "shot__badge"; badge.textContent = "VIDEO";
        b.appendChild(badge);
      } else {
        media = document.createElement("img");
        media.src = g.src; media.alt = g.caption; media.loading = "lazy";
      }
      b.append(media);
      b.addEventListener("click", () => openLightbox(b));
      grid.appendChild(b);
    });
    // looping video card plays only while it is on screen
    if ("IntersectionObserver" in window && !reduceMotion) {
      const vio = new IntersectionObserver(entries => {
        entries.forEach(e => {
          const v = e.target;
          if (e.isIntersecting) { const pr = v.play(); if (pr && pr.catch) pr.catch(() => {}); } else v.pause();
        });
      }, { threshold: 0.3 });
      $$(".shot video").forEach(v => vio.observe(v));
    }
    // pop-in when the gallery first scrolls into view
    if ("IntersectionObserver" in window && !reduceMotion) {
      const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          $$(".shot").forEach((el, i) => { el.style.setProperty("--i", String(i % 8)); el.classList.add("is-pop"); });
          io.disconnect();
        }
      }, { threshold: 0.05 });
      io.observe(grid);
    }
    // Deck / Grid switch
    const views = $$("#galleryViews button");
    views.forEach(v => v.addEventListener("click", () => {
      views.forEach(x => x.setAttribute("aria-pressed", String(x === v)));
      const sec = $("#gallery");
      ["deck", "grid", "mosaic"].forEach(name => sec.classList.toggle("view-" + name, v.dataset.view === name));
      layoutMosaic();
    }));
    window.addEventListener("resize", () => { clearTimeout(layoutMosaic.t); layoutMosaic.t = setTimeout(layoutMosaic, 150); });
    setupDeck();
  }


  /* ----- deck of cards: swipe, drag, arrows or keys flip the top card to the back ----- */
  function setupDeck() {
    const stage = $("#deckStage"), countEl = $("#deckCount");
    const POS = [{ x: 0, y: 0, r: 0, s: 1 }, { x: 14, y: -10, r: -4, s: 0.96 }, { x: -12, y: -18, r: 5, s: 0.92 }, { x: 10, y: -26, r: -7, s: 0.88 }];
    let list = [], cards = [], order = [], busy = false, drag = null;

    function place(card, depth, instant) {
      const p = POS[Math.min(depth, 3)];
      card.style.transition = instant ? "none" : "";
      card.style.transform = "translate(" + p.x + "px," + p.y + "px) rotate(" + p.r + "deg) scale(" + p.s + ")";
      card.style.zIndex = String(100 - depth);
      card.style.opacity = depth < 4 ? "1" : "0";
      card.classList.toggle("is-top", depth === 0);
      card.setAttribute("aria-hidden", depth === 0 ? "false" : "true");
    }
    function layout(instantIndex) {
      order.forEach((ci, depth) => place(cards[ci], depth, ci === instantIndex));
      countEl.textContent = cards.length ? (order[0] + 1) + " / " + cards.length : "0 / 0";
    }
    function render() {
      stage.innerHTML = "";
      list = $$(".shot").filter(el => currentFilter === "all" || el.dataset.tag === currentFilter);
      cards = list.map((shot, i) => {
        const c = document.createElement("div");
        c.className = "deck__card";
        c.dataset.i = String(i);
        const fp = shot.style.getPropertyValue("--fp");
        if (fp) c.style.setProperty("--fp", fp);
        let media;
        if (shot.dataset.type === "video") {
          const src = $("video", shot);
          media = document.createElement("video");
          media.muted = true; media.loop = true; media.playsInline = true;
          media.setAttribute("muted", ""); media.setAttribute("playsinline", "");
          media.poster = src.poster; media.src = shot.dataset.src; media.autoplay = !reduceMotion;
          const badge = document.createElement("i");
          badge.className = "shot__badge"; badge.textContent = "VIDEO";
          c.appendChild(badge);
        } else {
          const im = $("img", shot);
          media = document.createElement("img");
          media.src = im.src; media.alt = im.alt; media.draggable = false;
        }
        c.prepend(media);
        stage.appendChild(c);
        return c;
      });
      order = cards.map((_, i) => i);
      layout(-1);
    }
    deckRender = render;

    function flyOut(card, dir) {
      card.style.transition = "";
      card.style.transform = "translate(" + (dir * stage.clientWidth * 0.8) + "px,-30px) rotate(" + (dir * 22) + "deg)";
      card.style.opacity = "0";
    }
    function next(dir) {
      if (busy || cards.length < 2) return;
      busy = true;
      const ci = order[0];
      flyOut(cards[ci], dir || 1);
      setTimeout(() => {
        order.push(order.shift());
        layout(ci);              // the card that flew off jumps to the back, the rest slide up
        busy = false;
      }, 380);
    }
    function prev() {
      if (busy || cards.length < 2) return;
      busy = true;
      const ci = order[order.length - 1];
      const card = cards[ci];
      card.style.transition = "none";
      card.style.transform = "translate(" + (-stage.clientWidth * 0.8) + "px,-30px) rotate(-22deg)";
      card.style.opacity = "0";
      card.style.zIndex = "200";
      void card.offsetWidth;
      order.unshift(order.pop());
      layout(-1);                // it slides back in on top
      setTimeout(() => { busy = false; }, 380);
    }

    stage.addEventListener("pointerdown", e => {
      const card = e.target.closest(".deck__card");
      if (!card || !card.classList.contains("is-top") || busy) return;
      drag = { card, x: e.clientX, y: e.clientY, dx: 0, dy: 0, moved: false };
      card.setPointerCapture(e.pointerId);
      card.style.transition = "none";
    });
    stage.addEventListener("pointermove", e => {
      if (!drag) return;
      drag.dx = e.clientX - drag.x; drag.dy = e.clientY - drag.y;
      if (Math.abs(drag.dx) + Math.abs(drag.dy) > 8) drag.moved = true;
      drag.card.style.transform = "translate(" + drag.dx + "px," + (drag.dy * 0.4) + "px) rotate(" + (drag.dx * 0.05) + "deg)";
    });
    function endDrag() {
      if (!drag) return;
      const d = drag; drag = null;
      d.card.style.transition = "";
      if (Math.abs(d.dx) > 90) {
        // finish the throw in the direction it was dragged
        const ci = order[0];
        busy = true;
        flyOut(d.card, d.dx > 0 ? 1 : -1);
        setTimeout(() => { order.push(order.shift()); layout(ci); busy = false; }, 380);
      } else {
        place(d.card, 0, false);
        if (!d.moved) openLightbox(list[Number(d.card.dataset.i)]);
      }
    }
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);

    $("#deckNext").addEventListener("click", () => next(1));
    $("#deckPrev").addEventListener("click", prev);
    stage.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (cards.length) openLightbox(list[order[0]]); }
    });
    render();
  }

  // Mosaic: tries many tile arrangements (big, tall, wide, small) and keeps one with no empty cells
  function layoutMosaic() {
    const sec = $("#gallery");
    if (!sec || !sec.classList.contains("view-mosaic")) return;
    const cols = window.matchMedia("(max-width: 700px)").matches ? 2 : 4;
    const list = $$(".shot").filter(el => !el.hidden && !el.classList.contains("is-out"));
    if (!list.length) return;
    const landscape = el => Number(el.dataset.ar) > 1.1;
    const SPAN = { big: [2, 2], tall: [1, 2], wide: [2, 1], s: [1, 1] };

    // how many cells stay empty when tiles are placed first-fit (same rule as CSS "dense" flow)
    function holes(sizes) {
      const grid = [];
      let area = 0;
      const row = r => { while (grid.length <= r) grid.push(new Array(cols).fill(false)); return grid[r]; };
      sizes.forEach(k => {
        const [w, h] = SPAN[k];
        area += w * h;
        for (let r = 0, placed = false; !placed; r++) {
          for (let h2 = 0; h2 < h; h2++) row(r + h2);
          for (let c = 0; c + w <= cols && !placed; c++) {
            let free = true;
            for (let dr = 0; dr < h && free; dr++) for (let dc = 0; dc < w; dc++) if (grid[r + dr][c + dc]) { free = false; break; }
            if (free) {
              for (let dr = 0; dr < h; dr++) for (let dc = 0; dc < w; dc++) grid[r + dr][c + dc] = true;
              placed = true;
            }
          }
        }
      });
      return grid.length * cols - area;
    }

    // small seeded random generator, so the arrangement is the same every visit
    let seed = 11 + list.length * 7 + cols;
    const rnd = () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

    let best = null, bestHoles = Infinity;
    for (let n = 0; n < 2000 && bestHoles > 0; n++) {
      const sizes = list.map((el, i) => {
        if (i === 0) return "big";
        const r = rnd();
        if (landscape(el)) return r < 0.5 ? "wide" : r < 0.62 ? "big" : "s";
        return r < 0.26 ? "tall" : r < 0.34 ? "big" : "s";
      });
      const h = holes(sizes);
      if (h < bestHoles) { bestHoles = h; best = sizes; }
    }
    list.forEach((el, i) => {
      el.classList.remove("m-big", "m-tall", "m-wide");
      if (best[i] !== "s") el.classList.add("m-" + best[i]);
    });
  }

  const box = $("#lightbox"), imgEl = $("#lbImg"), vidEl = $("#lbVideo"), capEl = $("#lbCap");
  let current = null, opener = null;
  const visible = () => $$(".shot").filter(el => !el.hidden);
  function show(btn) {
    current = btn;
    const isVideo = btn.dataset.type === "video";
    const label = btn.getAttribute("aria-label").replace(/^(Open photo|Play video): /, "");
    capEl.textContent = label;
    if (isVideo) {
      imgEl.hidden = true; vidEl.hidden = false;
      vidEl.src = btn.dataset.src;
      vidEl.poster = $("video", btn).poster;
      vidEl.currentTime = 0;
      const pr = vidEl.play(); if (pr && pr.catch) pr.catch(() => {});
    } else {
      vidEl.pause(); vidEl.removeAttribute("src"); vidEl.load(); vidEl.hidden = true;
      imgEl.hidden = false;
      const im = $("img", btn);
      imgEl.src = im.src; imgEl.alt = im.alt;
    }
  }
  function openLightbox(btn) {
    opener = btn;
    show(btn);
    box.hidden = false;
    requestAnimationFrame(() => box.classList.add("is-open"));
    $("#lbClose").focus();
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    box.classList.remove("is-open");
    document.body.style.overflow = "";
    vidEl.pause();
    setTimeout(() => { box.hidden = true; }, 300);
    if (opener) opener.focus();
  }
  function step(d) {
    const list = visible();
    if (!list.length) return;
    const i = list.indexOf(current);
    show(list[(i + d + list.length) % list.length]);
  }
  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  box.addEventListener("click", e => { if (e.target === box) closeLightbox(); });
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "Tab") {
      const f = $$("button", box);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupProjects();
  setupReveal();
  setupScrollFX();
  setupStory();
  setupHoverFX();
  setupGallery();
  setupDrums();
  setupHandCricket();
  setupContact();
  runLoader();
});
