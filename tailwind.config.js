/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ============================================
        // DESIGN SYSTEM COLOR PALETTE
        // ============================================

        // PRIMARY COLORS - Main brand colors
        "stone-brown": "#4E473F", // Primary text color - use for all body text and headings
        cream: "#FBF9F8", // Default page and section backgrounds
        peach: "#FFE0D3", // Subtle accents, borders, gradients
        gold: "#CFAF36", // Primary button background, accent color
        blue: "#7CAEF3", // Links and interactive elements
        pink: "#FDC1E1", // Accent color (use sparingly)
        "pink-dark": "#F06292", // Darker pink for WCAG AA contrast (4.5:1+ with white text)

        // COLOR USAGE PATTERNS:
        //
        // TEXT COLORS:
        // - text-stone-brown: Primary text color (default body text, headings)
        // - text-blue: Links and interactive elements
        // - text-peach, text-pink, text-gold: Accent text (use sparingly)
        //
        // BACKGROUND COLORS:
        // - bg-cream: Default page background and section backgrounds
        // - bg-peach/20: Subtle accents in gradients, borders (e.g., hero gradients)
        // - bg-gold: Primary button background
        // - bg-transparent: For buttons and overlays
        //
        // PATTERN RULES:
        // - Section backgrounds: Use bg-cream for standard sections
        // - Hero sections: Can use bg-gradient-to-b from-cream to-peach/20
        // - Text on backgrounds: Always ensure sufficient contrast (stone-brown on cream = ✓)

        // Legacy colors (keeping for backward compatibility)
        background: "#FBF9F8",
        text: "#4E473F",
        primary: "#FDC1E1", // Legacy - prefer using gold for primary buttons
        accent: "#7CAEF3",
        magenta: "#FDC1E1",
        gray: "#CAD3C8",
        white: "#FFFFFF",
        grayTransparent: "rgba(202, 211, 211, 0.7)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Lora", "serif"],
        header: ["DM Sans", "sans-serif"],
        body: ["Lora", "serif"],
      },
      fontSize: {
        base: "19px",
      },
      lineHeight: {
        base: "1.75",
      },
      screens: {
        small: "600px",
        medium: "900px",
      },

      // ============================================
      // DESIGN SYSTEM TYPOGRAPHY & SPACING
      // ============================================
      //
      // HEADING HIERARCHY (defined in global.css):
      // - h1: 34px (base) → 40px (small/600px+) → 48px (medium/900px+)
      // - h2: 30px (base) → 34px (small/600px+) → 40px (medium/900px+)
      // - h3: 24px (base) → 28px (small/600px+) → 32px (medium/900px+)
      //
      // BUTTON SPACING:
      // - Button groups: Use gap-4 (1rem/16px) on all screen sizes
      // - Pattern: flex flex-col small:flex-row gap-4
      //
      // BUTTON STYLING STANDARDS:
      // - Primary: bg-gold text-stone-brown hover:bg-gold/90 shadow-sm hover:shadow-md
      // - Secondary: border-2 border-gold text-stone-brown bg-transparent hover:bg-gold
      // - Padding: px-6 py-3 (base) or px-8 py-4 (larger)
      // - Border radius: rounded-lg
      //
      // LINK STYLING PATTERNS:
      // - Body/Inline links: text-blue with underline on hover (handled in global.css)
      // - Navigation links: text-stone-brown hover:text-blue (no underline)
      // - Standalone text links: text-stone-brown hover:text-blue underline decoration-2 underline-offset-4
    },
  },
  plugins: [],
}
