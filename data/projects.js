// Para ADICIONAR um projeto, copie um bloco abaixo e preencha.
// mock: 'cwb' | 'focora' | 'socialbit' (tela ao lado do texto). Deixe sem mock para um projeto só com texto.
// A ordem da lista é a ordem na página; o lado do texto alterna sozinho.
export const projects = [
  {
    id: "cwb",
    title: "CWB+",
    mock: "cwb",
    github: "https://github.com/Nicolas-Grzebieniak/CWBPlus",
    tags: ["JavaScript", "Leaflet.js", "HTML5", "CSS3"],
    description: [
      "A public safety app for Curitiba. People can view, report and track incidents such as robberies, thefts and traffic accidents.",
      "Geolocation highlights high-risk areas on an interactive map and alerts users to danger nearby. Reports can be anonymous and include photos, the community validates incidents, and each user keeps a history of what they submitted.",
      "It started from a simple need: make public safety information open, so people can decide better in parts of Curitiba they don't know.",
    ],
  },
  {
    id: "focora",
    title: "Focora",
    mock: "focora",
    github: "https://github.com/Nicolas-Grzebieniak/Focora",
    tags: ["Kotlin", "Jetpack Compose"],
    description: [
      "A gamified to-do list for neurodivergent users. Tasks become quests, progress is visible, and each small win counts.",
      "Built as a native Android app.",
    ],
  },
  {
    id: "socialbit",
    title: "SocialBit",
    mock: "socialbit",
    github: "https://github.com/larissaadames/SocialBit",
    tags: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    description: [
      'A full CRUD social network for developers. People sign up and log in, share posts with images in a feed that asks "What was today\'s bug?", vote, comment and save posts, search other users and manage their profile, including deleting their account.',
      "Built last semester with a FastAPI backend, a MySQL database modeled around users, posts, votes and saved posts, and a front end in plain HTML, CSS and JavaScript.",
    ],
  },
];
