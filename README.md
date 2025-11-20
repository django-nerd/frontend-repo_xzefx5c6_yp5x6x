Vistaar Verse — Brand-tech marketing & creative studio

Overview
- Dark, high-contrast, tech-noir site with neon accents.
- Scroll-first narrative with GSAP + ScrollTrigger, Spline hero animation.
- Accessible, responsive, SEO-ready.

Run locally
- npm install
- npm run dev

Animation control knobs (CSS variables)
Add to :root in CSS for quick tuning:
--vv-ease-main: cubic-bezier(0.22, 1, 0.36, 1);
--vv-stagger-word: 0.06s;
--vv-stagger-char: 0.02s;
--vv-cta-bounce: 0.22s;

Assets
See public/assets/manifest.txt for required images and formats.

CMS model (headless)
Collections:
- Services {title, slug, short_description, long_description, hero_image, gallery[], category}
- CaseStudies {title, client, challenge, solution, results, hero_media, gallery[], testimonial[]}
- Blog {title, slug, excerpt, feature_image, content, tags[]}
- Testimonials {client_name, logo, quote, role}
- Team {name, role, bio, linkedin, headshot}

SEO
- Add per-page meta in index.html or via a router-based meta manager.
- Include JSON-LD Organization + LocalBusiness.

Accessibility
- Keyboard navigable menu, aria-labels, focus rings.
- Prefers-reduced-motion respected for key animations.
