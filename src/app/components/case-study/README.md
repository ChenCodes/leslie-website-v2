# Case Study IA Rules

Default pattern for case study pages:

- Use a narrative main column plus TOC navigation.
- Keep major sections as `h2` headings with stable `id` values.
- Add `scroll-mt-28` on section headings so anchored links clear the fixed header.
- Export a per-page `CaseStudySection[]` array from each content file.
- Pass that section array through the route slug map into `CaseStudyLayout`.

When to use alternate layouts:

- Use split media/text blocks only when visuals are required to understand the section.
- Use timeline structure only if chronology is the primary story.
- Use accordions only for optional detail, never for key outcomes.
- Avoid tabs for sequential stories; reserve tabs for side-by-side comparisons.
