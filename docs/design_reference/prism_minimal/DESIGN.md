# Design System Strategy: The Clinical Atelier

## 1. Overview & Creative North Star
The design system is anchored by a Creative North Star we call **"The Clinical Atelier."** This concept merges the sterile, high-precision world of optometry with the bespoke, tactile luxury of a fashion house. 

To break the "standard e-commerce" mold, we move away from rigid, boxed-in grids. Instead, the layout utilizes **Intentional Asymmetry** and **Editorial Scaling**. By pairing the architectural weight of `manrope` with the functional clarity of `inter`, we create a "Digital Curator" experience—where the interface feels less like a database of glasses and more like a high-end gallery space. Expect large, airy margins, overlapping image treatments, and a depth model based on light and tone rather than lines and strokes.

---

## 2. Colors & Tonal Architecture
The palette is a sophisticated interplay between the deep authority of the night (`primary`) and the sterile purity of a medical lab (`surface`).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Boundaries must be established through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Tonal Transitions:** Using `surface-container-highest` for subtle differentiation in header or footer areas.
*   **Vertical Rhythm:** Utilizing whitespace as a structural element.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Material surface tiers to create "nested depth":
*   **Base Layer:** `surface` (#f7f9ff) for the main canvas.
*   **Section Layer:** `surface-container-low` (#f1f4fa) for large content blocks.
*   **Object Layer:** `surface-container-lowest` (#ffffff) for product cards or interactive modules to create a "pop" against the tinted background.

### The "Glass & Gradient" Rule
To inject visual "soul," use **Glassmorphism** for floating navigation and filter overlays. Apply a `backdrop-filter: blur(20px)` combined with a semi-transparent `surface_variant` (#dfe3e8 at 70% opacity). 
*   **Signature Textures:** For high-conversion CTAs or Hero backgrounds, use a subtle linear gradient: `primary` (#000f22) to `primary_container` (#0a2540). This prevents the deep blues from feeling "flat" and adds a premium, satin-like finish.

---

## 3. Typography: The Editorial Voice
Our typography balance (85% Sans-serif, 15% Monospace) ensures a blend of modern fashion and clinical data.

*   **Display & Headlines (`manrope`):** Used for brand storytelling and product categories. High-contrast sizing (e.g., `display-lg` vs `body-md`) creates a clear editorial hierarchy.
*   **Title & Body (`inter`):** Used for all functional data. The tight tracking and high x-height of Inter provide the "Apple-level" clinical precision required for lens specifications and medical information.
*   **Labels:** Use these for technical metadata (e.g., frame width, SKU). This is where the 15% Monospace influence can be subtly applied to denote "precision measurements."

---

## 4. Elevation & Depth
We reject traditional "drop shadows" in favor of **Tonal Layering**.

*   **The Layering Principle:** A `surface-container-lowest` card sitting on a `surface-container-low` background provides a soft, natural lift that mimics high-end stationery.
*   **Ambient Shadows:** For elevated elements like Modals or Floating Action Buttons, use extra-diffused shadows: `box-shadow: 0 20px 40px rgba(24, 28, 32, 0.06)`. The shadow must be tinted with the `on-surface` color to feel like natural ambient light.
*   **The "Ghost Border" Fallback:** If a container requires a boundary (e.g., in a high-density spec sheet), use a "Ghost Border": `outline-variant` (#c4c6ce) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on_primary` text. No border. Use `rounded-md` (0.375rem).
*   **Secondary (The Teal Accent):** `secondary` (#006a6a) background. Used specifically for "Add to Cart" or "Book Appointment" to draw the eye without breaking the professional aesthetic.
*   **Tertiary:** No background; `primary` text weight 600. Use for "View Details" or "Learn More."

### Input Fields
*   **Style:** Minimalist underline or soft-tinted box (`surface-container-high`). 
*   **States:** On focus, the background shifts to `surface-container-lowest` with a 2px `secondary` bottom-border. Labels should be `label-md` in `on_surface_variant`.

### Cards & Lists (Product Grid)
*   **The Directive:** Forbid all divider lines.
*   **Structure:** Products should sit on a `surface-container-lowest` tile with generous internal padding (min 24px). Separate product descriptions from pricing using vertical white space (12px) rather than a line.

### High-End Contextual Components
*   **The Virtual Try-On Interface:** Use a full-screen `surface-dim` overlay with `glassmorphism` controls to maintain the "high-tech clinic" feel.
*   **Lens Configurator:** A multi-step stepper using `secondary_container` (#79f6f5) for active states, signifying a "safe" and "clear" path through medical choices.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. For example, a hero image may bleed off the right edge of the screen while the text is strictly aligned to the left grid.
*   **Do** prioritize `surface` shifts over lines. If two sections feel too close, increase the vertical spacing instead of adding a divider.
*   **Do** use `secondary_fixed` (#79f6f5) for success states or lens clarity indicators; it feels medical yet modern.

### Don't:
*   **Don't** use pure black (#000000). Always use `primary` (#000f22) for deep tones to maintain the navy-professionalism.
*   **Don't** use standard "Material Design" shadows. They are too heavy for this aesthetic.
*   **Don't** crowd the interface. If a screen feels "busy," remove a background color or increase the padding scale.
*   **Don't** use 100% opacity for `outline`. It creates a "boxed" feel that contradicts the airy Atelier aesthetic.