# Image assets

The project screenshots were supplied by the user. Original PNGs are preserved in public/images; Next.js serves optimized versions. Browser chrome is concealed with CSS, not baked image edits.

The active portrait, public/images/eduardson-graduation-glasses.jpg, is the original graduation photograph supplied by the owner on October 19, 2026 (CORTEZ, Eduardson (2 of 5).jpg). It is copied without image edits; CSS frames the photo and Next.js serves optimized sizes. It replaces the earlier AI-extracted mockup portrait. The unused historical assets remain at public/images/eduardson-portrait.png and public/images/portrait-reference.png.

The computer workbench image is generated, generic illustrative imagery, labeled as illustrative in the page. It is not claimed as a photograph of the owner's work.

The historical cutout and the workshop illustration used the built-in ImageGen tool (no CLI/API fallback). The active graduation photograph is not generated.

## Portrait — public/images/eduardson-portrait.png

Use case: background-extraction. Input image 1 is the edit target: a full website design mockup. Extract ONLY the graduation portrait of the man in the TOP RIGHT HERO section, wearing a black graduation cap, black gown, white shirt, black tie, and gold stole. Return just that exact person's head and upper torso down to the original chest crop, on a genuinely transparent background. Preserve his facial identity, expression, hair, skin tone, cap, gown and stole as closely as possible. Do not beautify, redesign, change pose, or invent a different person. Remove ALL webpage UI, lettering, cards, background, borders, logos outside his clothing, and other surrounding content. Keep the complete cap and shoulders within frame. This is a cutout asset for a website hero, not a new portrait. No added text, no shadow outside subject.

## Workshop — public/images/computer-workshop.png

Use case: photorealistic-natural. Asset type: illustrative image for a personal portfolio's computer servicing section. A close editorial photograph of an unbranded desktop PC opened on a tidy dark workbench, visible motherboard and cooling fan, precision screwdriver and neatly arranged RAM sticks beside it. No person, no hands, no text, no logos. Practical workshop atmosphere, realistic electronics, soft warm amber side light against a deep navy background. Landscape composition, 3:2 aspect ratio. It must be a generic illustrative scene, not evidence of a specific person's completed work.

