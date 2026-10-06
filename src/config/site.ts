export const site = {
  name: "Ahmed Abdelmaguid",
  alternativeName: "Ahmed M Hamdi",
  shortName: "Ahmed",
  title: "PhD Student in Computer Science",
  university: "University of California, Riverside",
  location: "Riverside, California",
  url: "https://abdelmaguid.me",
  description: "Computer Science PhD student researching database systems, text-to-SQL, information retrieval, and large language models.",
  bio: "I am a Computer Science PhD student at the University of California, Riverside. My research interests include database systems, text-to-SQL, information retrieval, and large language models.",
  researchInterests: ["Text-to-SQL", "Database Systems", "Information Retrieval", "Large Language Models", "Retrieval-Augmented Systems"],
  now: ["Working on research in RAG systems across heterogeneous sources", "Collaborating with QCRI", "Trying to lose weight—one step at a time"],
  socials: { email: "aabde039@ucr.edu", github: "https://github.com/AhmedHamdi101", scholar: "https://scholar.google.com/citations?user=k28tatYAAAAJ&hl=en", linkedin: "https://www.linkedin.com/in/ahmed-moh-hamdi/?isSelfProfile=true" },
  cvPath: "/cv/Ahmed_Abdelmaguid_CV.pdf",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications" }, { label: "Experience", href: "/experience" }, { label: "Updates", href: "/updates" }, { label: "Certifications", href: "/certifications" },
  { label: "CV", href: "/cv" },
];
