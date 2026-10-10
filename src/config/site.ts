export const site = {
  name: "Ahmed Abdelmaguid",
  alternativeName: "Ahmed M Hamdi",
  shortName: "Ahmed",
  title: "PhD Student in Computer Science",
  university: "University of California, Riverside",
  location: "Riverside, California",
  url: "https://abdelmaguid.me",
  description: "PhD student researching database systems, information retrieval, and data-grounded AI.",
  researchStatement: "Building efficient data and retrieval systems for reliable, data-grounded AI.",
  currentFocus: ["Text-to-SQL", "Heterogeneous retrieval", "Data-grounded AI"],
  bio: [
    "I'm a PhD student in Computer Science at the University of California, Riverside, working with Prof. Amr Magdy.",
    "My research lies at the intersection of database systems, information retrieval, and machine learning, with a particular interest in how language models can interact effectively with structured and heterogeneous data.",
    "Currently, I focus on retrieval for text-to-SQL, retrieval-augmented generation, and intelligent data access across different sources. My previous work spans spatial database systems, Arabic natural language processing, and computer vision.",
  ],
  researchAreas: [
    { title: "Database Systems & Spatial Data", description: "Designing scalable data-processing techniques, with interests in distributed spatial queries, learned optimization, and efficient data management." },
    { title: "Information Retrieval & Text-to-SQL", description: "Helping natural-language systems identify relevant databases, retrieve the right tables, and understand relationships within large collections of structured data." },
    { title: "Retrieval-Augmented Generation", description: "Exploring retrieval architectures that connect language models with relational databases, knowledge graphs, vector stores, and other data sources." },
    { title: "Machine Learning for Data Systems", description: "Investigating how learned representations and machine learning can improve data retrieval, query processing, and system efficiency." },
  ],
  currentResearch: [
    { title: "Retrieval for Large-Scale Text-to-SQL", description: "How can a natural-language question be matched to the correct database and all the tables needed to answer it, especially when many databases are available?" },
    { title: "Retrieval Across Heterogeneous Data Sources", description: "How can retrieval systems combine information from relational databases, knowledge graphs, vector stores, and APIs while accounting for their different capabilities and constraints?" },
    { title: "Reliable and Efficient Retrieval", description: "How can retrieval systems improve answer coverage and relevance while keeping computational overhead and latency low?" },
  ],
  beyondResearch: "I enjoy building software, experimenting with new technologies, and learning through hands-on projects. This website is also a place to share technical notes, small experiments, things I've learned, and occasional updates beyond academic research.",
  socials: { email: "aabde039@ucr.edu", github: "https://github.com/AhmedHamdi101", scholar: "https://scholar.google.com/citations?user=k28tatYAAAAJ&hl=en", linkedin: "https://www.linkedin.com/in/ahmed-moh-hamdi/?isSelfProfile=true" },
  cvPath: "/cv/Ahmed_Abdelmaguid_CV.pdf",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Publications", href: "/publications" }, { label: "Experience", href: "/experience" }, { label: "Teaching", href: "/teaching" }, { label: "Updates", href: "/updates" }, { label: "Technical", href: "/notes", secondary: true }, { label: "Certifications", href: "/certifications", secondary: true },
  { label: "CV", href: "/cv" },
];
