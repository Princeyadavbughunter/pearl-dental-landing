# Pearl Dental — image drop zone

Every photo on the page renders through `src/components/PhotoSlot.tsx`. A slot
with no `src` shows a labelled warm placeholder, so the layout is
finished and correct before the photography arrives.

To add a real photo: drop the file here and pass its path to the matching
`<PhotoSlot src="/images/your-file.jpg" ... />`. Nothing else changes.

Slots waiting on assets:

| Slot | Component | Status |
|---|---|---|
| Hero shot | `HeroSection.tsx` | using `/doc.webp` (wide crop) |
| Dr. S. Egammai portrait | `DoctorProfile.tsx` | using `/doc.webp` (4:5 crop) |
| Reception, operatory, OPG room, sterilisation | `ClinicPhotos.tsx` | **waiting** |

The previous occupant of this folder (Precigem Dental World's doctor, clinic and
patient photos) was removed — they are another clinic's assets. They remain in
this repo's git history if ever needed.
