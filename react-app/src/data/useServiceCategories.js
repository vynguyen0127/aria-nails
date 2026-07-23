import { useEffect, useState } from "react";
import { serviceCategories as fallbackCategories } from "./services";

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const RANGE = "Sheet1";

// Keeps category ids stable so existing #anchor links (navbar, home page
// menu cards) keep working regardless of how the shop owner orders rows.
const KNOWN_CATEGORY_IDS = {
  Manicures: "manicures",
  Pedicures: "pedicures",
  "Kids 8 & Under": "kids",
  "Other Service": "other",
  Waxing: "waxing",
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseRows(rows) {
  const categories = [];
  const byName = new Map();

  for (const [category, service, price, description, note] of rows.slice(1)) {
    if (!category || !service || !price) continue;

    let entry = byName.get(category);
    if (!entry) {
      entry = { id: KNOWN_CATEGORY_IDS[category] || slugify(category), name: category, items: [] };
      byName.set(category, entry);
      categories.push(entry);
    }
    if (note && !entry.note) entry.note = note;

    entry.items.push({ name: service, price, ...(description ? { description } : {}) });
  }

  return categories;
}

export function useServiceCategories() {
  const [categories, setCategories] = useState(fallbackCategories);

  useEffect(() => {
    if (!SHEET_ID || !API_KEY) return;

    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Sheets API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const parsed = parseRows(data.values || []);
        if (parsed.length === 0) throw new Error("No service rows found in sheet");
        setCategories(parsed);
      })
      .catch((err) => {
        console.error("Could not load live services from Google Sheets, using fallback data:", err);
      });
  }, []);

  return categories;
}
