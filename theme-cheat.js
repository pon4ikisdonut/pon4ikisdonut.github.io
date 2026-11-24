/**
 * pon4ikisdonut.pp.ua - Theme Manager & GTA Cheatcode Engine
 * Supports: Flat Minimalist Dark (default) / Light themes & GTA Cheatcode ("frutigeraero")
 */
(function () {
  "use strict";

  const THEME_STORAGE_KEY = "site_theme";
  const AERO_STORAGE_KEY = "aero_theme";
  const CHEAT_CODE = "frutigeraero";

  // Web Audio Synthesizer for GTA Chimes
  function playSynthChord(isActivation) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // GTA / retro futuristic chime chords
      const freqs = isActivation
        ? [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6 (Bright uplifting chord)
        : [783.99, 659.25, 523.25, 392.0]; // G5, E5, C5, G4 (Descending deactivation)

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.05);

        gain.gain.setValueAtTime(0.001, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.05 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.5);
      });
    } catch (e) {
      // AudioContext unavailable or blocked by autoplay policy
    }
  }

  // GTA-style HUD notification
  function showGtaCheatNotification(title, subtitle) {
    // Remove existing banner if any
    const existing = document.getElementById("gta-cheat-banner");
    if (existing) existing.remove();

    const banner = document.createElement("div");
    banner.id = "gta-cheat-banner";
    banner.className = "gta-cheat-banner";
    banner.setAttribute("role", "status");
    banner.setAttribute("aria-live", "polite");

    banner.innerHTML = `
      <div class="gta-cheat-content">
        <span class="gta-cheat-star">★</span>
        <div class="gta-cheat-text">
          <div class="gta-cheat-title">${title}</div>
          ${subtitle ? `<div class="gta-cheat-sub">${subtitle}</div>` : ""}
        </div>
        <span class="gta-cheat-star">★</span>
      </div>
    `;

    document.body.appendChild(banner);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      banner.classList.add("is-visible");
    });

    // Auto dismiss after 3.6s
    setTimeout(() => {
      banner.classList.remove("is-visible");
      banner.classList.add("is-leaving");
      setTimeout(() => {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 500);
    }, 3600);
  }

  // Screen ripple / lens transition animation
  function triggerScreenTransition(onThemeChanged) {
    const overlay = document.createElement("div");
    overlay.className = "aero-fx-overlay";
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.classList.add("is-active");
    });

    // Halfway through ripple, switch theme
    setTimeout(() => {
      if (typeof onThemeChanged === "function") {
        onThemeChanged();
      }
    }, 180);

    setTimeout(() => {
      overlay.classList.add("is-fading");
      setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 400);
    }, 700);
  }

  // Set Theme
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      const meta = document.querySelector('meta[name="color-scheme"]');
      if (meta) {
        meta.content = document.body.classList.contains("aero-theme") ? "light" : theme;
      }
    } catch (e) {}

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.setAttribute("data-theme", theme);
      toggleBtn.setAttribute(
        "aria-label",
        theme === "dark" ? "Переключить на светлую тему" : "Переключить на тёмную тему"
      );
      toggleBtn.setAttribute(
        "title",
        theme === "dark" ? "Светлая тема" : "Тёмная тема"
      );
    }
  }

  // Set Frutiger Aero Mode
  function setAeroMode(enable, withEffects = false) {
    const isCurrentlyAero = document.body.classList.contains("aero-theme");
    if (isCurrentlyAero === enable && !withEffects) return;

    const doToggle = () => {
      document.body.classList.toggle("aero-theme", enable);
      document.documentElement.classList.toggle("aero-active", enable);

      try {
        localStorage.setItem(AERO_STORAGE_KEY, enable ? "1" : "0");
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) {
          const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
          meta.content = enable ? "light" : currentTheme;
        }
      } catch (e) {}

      // Update any footer easter egg button if present
      const aeroToggle = document.getElementById("aero-toggle");
      if (aeroToggle) {
        aeroToggle.setAttribute("aria-pressed", String(enable));
      }
    };

    if (withEffects) {
      triggerScreenTransition(doToggle);
      playSynthChord(enable);
      if (enable) {
        showGtaCheatNotification("CHEAT ACTIVATED", "FRUTIGER AERO");
      } else {
        showGtaCheatNotification("CHEAT DEACTIVATED", "FLAT MINIMALIST");
      }
    } else {
      doToggle();
    }
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Initial theme setup
    let savedTheme = "dark";
    try {
      savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "dark";
    } catch (e) {}
    applyTheme(savedTheme);

    // 2. Initial Aero state
    let isAero = false;
    try {
      isAero = localStorage.getItem(AERO_STORAGE_KEY) === "1";
    } catch (e) {}
    setAeroMode(isAero, false);

    // 3. Theme Toggle Button Click
    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
      });
    }

    // 4. Footer Easter egg toggle button (if clicked directly)
    const aeroToggle = document.getElementById("aero-toggle");
    if (aeroToggle) {
      aeroToggle.addEventListener("click", () => {
        const active = document.body.classList.contains("aero-theme");
        setAeroMode(!active, true);
      });
    }

    // 5. GTA Cheatcode listener ("frutigeraero")
    let keyBuffer = "";
    window.addEventListener(
      "keydown",
      (e) => {
        // Ignore typing inside form fields or contenteditable
        const target = e.target;
        if (
          target &&
          (target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.isContentEditable)
        ) {
          return;
        }

        // Only track printable characters / letters
        if (e.key && e.key.length === 1) {
          keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-CHEAT_CODE.length);
          if (keyBuffer === CHEAT_CODE) {
            const active = document.body.classList.contains("aero-theme");
            setAeroMode(!active, true);
            keyBuffer = "";
          }
        }
      },
      { passive: true }
    );
  });
})();
