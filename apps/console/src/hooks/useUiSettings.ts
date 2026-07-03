// Copyright (c) 2026 VATM ICPMS <sms@vatm.vn>.
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
// AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
// INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
// LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
// OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
// PERFORMANCE OF THIS SOFTWARE.

import { useEffect, useState } from "react";

export type UiTheme = "light" | "dark";
export type UiBgColor = "white" | "gray" | "blue" | "cream";
export type UiFontSize = "80" | "90" | "100" | "110" | "120";

export interface UiSettings {
  theme: UiTheme;
  bgColor: UiBgColor;
  fontSize: UiFontSize;
}

const BG_LIGHT: Record<UiBgColor, string> = {
  white: "#ffffff",
  gray:  "#f0f2f5",
  blue:  "#eff6ff",
  cream: "#fefce8",
};
const BG_DARK: Record<UiBgColor, string> = {
  white: "#1a1d19",
  gray:  "#151715",
  blue:  "#0f1720",
  cream: "#1a1a10",
};

const STORAGE_KEY = "icpms_ui_settings";

function load(): UiSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { theme: "light", bgColor: "gray", fontSize: "100", ...JSON.parse(raw) };
  } catch {}
  return { theme: "light", bgColor: "gray", fontSize: "100" };
}

function apply(s: UiSettings) {
  const html = document.documentElement;

  // Theme — add/remove .dark on <html>
  if (s.theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // Background — set CSS custom property so #main + body both pick it up
  const bg = s.theme === "dark" ? BG_DARK[s.bgColor] : BG_LIGHT[s.bgColor];
  html.style.setProperty("--icpms-bg", bg);

  // Font size
  html.style.fontSize = `${s.fontSize}%`;
}

// Apply saved settings immediately on module load (before React renders)
apply(load());

export function useUiSettings() {
  const [settings, setSettings] = useState<UiSettings>(load);

  useEffect(() => {
    apply(settings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const update = <K extends keyof UiSettings>(key: K, value: UiSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return { settings, update };
}
