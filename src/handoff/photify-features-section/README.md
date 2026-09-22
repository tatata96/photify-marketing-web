# Photify Features Section Handoff

This folder contains the Photify case study feature screen section as a portable package.

## Contents

- `PhotifyFeaturesSection.tsx`: isolated React component
- `photify-features-section.css`: gallery styles copied from the current case study and scoped to the handoff component
- `images/`: five Photify mobile screenshots

## Original Source

The current project renders these images from:

- `src/data/projects.ts`
- `src/components/detail/Detail.tsx`
- `src/components/detail/detail.css`

The relevant existing behavior is:

- render the Photify image array as a gallery
- use a two-column grid on desktop
- collapse to one column below `900px`
- crop screenshots with `object-fit: cover`
- keep each image between `260px` and `520px` tall

## Integration Notes

Copy this folder into the target project, then adjust the image `src` paths in `PhotifyFeaturesSection.tsx` to match the target project's asset handling.

If the target project uses Vite or another bundler that requires imported assets, replace the string paths with imports:

```tsx
import phot1 from './images/phot1.jpeg';
```

Then use `src: phot1` in the `photifyFeatureImages` array.
