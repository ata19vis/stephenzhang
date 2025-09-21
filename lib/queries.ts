export const HOME_QUERY = `*[_type=="home"][0]{
  heroTitle,
  heroDescription,
  aboutIntro,
  navigatorText,
  teachingList
}`;

export const ABOUT_QUERY = `*[_type=="about"][0]{
  shortBio,
  "cvUrl": coalesce(cvUrl, "/cv.pdf"),
  headshot,
  researchAPA,
  teachingItems
}`;
