const projectsData = [
  {
    number: 1,
    title: "Nation Wants To Guess",
    desc: "A Quiz Game - Inspired by the comedy quiz show 'Nation Wants To Guess' by comedian Gursimran Khamba, available on YouTube. All questions are based on the show.",
    tags: ["React", "Vite", "Tailwind CSS v4", "Framer Motion", "REST API"],
    githubURL: "https://github.com/sadiksaifi9958/nation-wants-to-guess",
    liveURL: "https://nwtg-quiz.vercel.app/",
    summary:
      "QuizHappens is a fully interactive, single-page quiz web application built with React, inspired by the comedy quiz show Nation Wants To Guess by Gursimran Khamba. The app fetches questions in real time from a live REST API (nwtg-api.onrender.com) that serves a curated bank of 107 questions extracted from the show's YouTube transcripts, making every game session feel fresh and dynamic.\n" +
      "The game features a 30-second countdown timer per question that creates genuine tension — one wrong answer ends the game immediately, mirroring the high-stakes format of the original show. Players can track their best performance through a persistent high score system powered by localStorage, encouraging replayability. The UI uses Framer Motion animations for smooth transitions between game states, and visual feedback through color-coded option badges makes right and wrong answers instantly clear.\n" +
      "On the technical side, the project demonstrates several key frontend skills: consuming a live REST API using fetch, managing multi-layered state across components with React hooks (useState, useEffect), implementing a countdown timer with setInterval, and handling error states gracefully with a retry option. The app is fully responsive across all screen sizes and was deployed to Vercel with a CI/CD pipeline configured via GitHub Actions, automating the build and deployment workflow on every push to main.",
  },
  {
    number: 2,
    title: "NovaTech",
    desc: "A multi-page agency website with scroll animations, modal contact form, dark/light mode toggle, and active nav highlighting.",
    tags: ["HTML5", "CSS3", "Vanilla", "JavaScript", "Font Awesome"],
    githubURL: "https://github.com/sadiksaifi9958/nova-tech",
    liveURL: "https://sadiksaifi9958.github.io/nova-tech/",
    summary:
      "NovaTech is a production-quality, multi-page business website for a fictional tech agency, built entirely from scratch using vanilla HTML, CSS, and JavaScript — no frameworks, no libraries beyond Font Awesome icons. The project was built to deeply understand how real websites work under the hood, before reaching for abstractions.\n" +
      "The site spans five pages — Home, About, Pricing, Contact, and three Policy sub-pages — all sharing a consistent design system built with CSS Custom Properties (variables) for unified theming. A dark/light mode toggle switches the entire site's theme and saves the user's preference to localStorage so it persists across sessions. Navigation includes active link highlighting that automatically reflects the current page, and a hamburger menu for mobile that opens and closes smoothly via DOM manipulation.\n" +
      "The contact section features a modal form dynamically injected into the DOM using insertAdjacentHTML, complete with JavaScript-based validation and error messaging. Scroll animations throughout the page are powered by the IntersectionObserver API, triggering entrance animations on elements as they enter the viewport — the same technique used by production websites to create polished, performant scroll experiences. The pricing page includes interactive card selection, and the entire site is fully responsive across mobile, tablet, and desktop using Flexbox, CSS Grid, and media queries.\n" +
      "With 248 commits in the repository, NovaTech reflects a real iterative development process — built and refined feature by feature over multiple sessions, not assembled all at once.",
  },
];

export default projectsData;
