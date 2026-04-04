/** Files in `public/clinic images/` — served from site root in Vite */
export const clinicImageUrl = (filename: string) => encodeURI(`/clinic images/${filename}`);

/** Hero / About feature image */
export const CLINIC_HERO_IMAGE = clinicImageUrl('clinic 1.jpeg');

/** Gallery carousel — order matches filenames in the folder */
export const CLINIC_GALLERY = [
  { file: 'clinic 1.jpeg', title: 'Clinic', caption: 'Our practice' },
  { file: 'clinic 2.jpeg', title: 'Clinic', caption: 'Patient areas' },
  { file: 'clinic 3.jpeg', title: 'Clinic', caption: 'Treatment space' },
  { file: 'clinic 4.jpeg', title: 'Clinic', caption: 'Facilities' },
  { file: 'clinic 5.jpeg', title: 'Clinic', caption: 'Equipment' },
  { file: 'clinic 6.jpeg', title: 'Clinic', caption: 'Care environment' },
  { file: 'clinic 7.jpeg', title: 'Clinic', caption: 'Interior' },
] as const;
