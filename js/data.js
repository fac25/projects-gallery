console.log("data.js");

const data = {
  weeks: [
    {
      week: -2,
      theme: "Markup - first project of part time course",
      projects: [],
    },
    {
      week: -1,
      theme: "HTTP - second project of part time course",
      projects: [],
    },
    {
      week: 0,
      theme: "Testing - third project of part time course",
      projects: [],
    },
    {
      week: 1,
      theme: "Server",
      projects: [],
    },
    {
      week: 2,
      theme: "Database",
      projects: [],
    },
    {
      week: 3,
      theme: "Authentication",
      projects: [],
    },
    {
      week: 4,
      theme: "Server-Side App",
      projects: [
        {
          title: "Howdie",
          img: "src/imgs/howdie.png",
          team: ["Sumithra", "Suraj", "Manoela", "Karwan"],
          github:
            "https://github.com/fac25/week4-karwan-manoela-sumithra-suraj",
          description:
            "A website for users to share and view other users how to guide.",
        },
        {
          title: "Petsagram",
          img: "src/imgs/petsagram.png",
          team: ["Abdullah", "Joe", "Alex", "Lisa"],
          github: "https://github.com/fac25/week4-alex-abdullah-joe-lisa",
          description: "A place to post about your pet :)",
        },
        {
          title: "Check-in Questions app.",
          img: "src/imgs/check-in-question-pool.png",
          team: ["Abby", "Patrick", "PAz", "Yassien"],
          github:
            "https://github.com/fac25/week4-server-side-app-Abby-Patrick-Paz-Yassien",
          description:
            "Our objective was to create a service which would allow our users to log their check-in questions as well as see the ones posted by others. The main page would be a collection of all the check-in questions - from the logged-in user.",
        },
      ],
    },
    {
      week: 5,
      theme: "Client-Side App",
      projects: [
        {
          title: "Flip - Card Memory Game",
          img: "src/imgs/flip_abby_joe.png",
          team: ["Abby, Joe"],
          github: "https://github.com/fac25/week5-Abby-Joe",
          description:
            "The user flips two cards. If the two cards match, the user will get one point, and the cards will remain ‘flipped’.",
        },
        {
          title: "PKC",
          img: "src/imgs/piano_PKC.png",
          team: ["Abdullah", "Patrick", "Suraj"],
          github: "https://github.com/fac25/week-5-p-a-s",
          description:
            "It's a piano that counts the amount of keys you press. It has sound...",
        },
        {
          title: "Memory game",
          img: "src/imgs/memory_game_LMA.png",
          team: ["Lisa", "Manoela", "Yassien"],
          github: "https://github.com/fac25/fac25-week5-Lisa-Manoela",
          description:
            "This is a one-page app using React to create an interactive memory game",
        },
        {
          title: "Hangman",
          img: "src/imgs/hangman_paz_karwan.png",
          team: ["Paz", "Karwan"],
          github: "https://github.com/fac25/week5-paz-karwan",
          description:
            "Hangman is a quick and easy game for at least two people that requires nothing more than paper, a pencil, and the ability to spell.",
        },
        {
          title: "Tic Tac Toe",
          img: "src/imgs/tic_tac_toe.png",
          team: ["Alex", "Sumithra"],
          github: "https://github.com/fac25/week5-Alex-Sumithra-ClientReactApp",
          description: "A Tic Tac Toe game",
        },
      ],
    },
    {
      week: 6,
      theme: "Full-stack App",
      projects: [
        {
          title: "Miss Macs",
          img: "src/imgs/missmacs.png",
          team: ["Karwan", "Alex", "Sumithra", "Yassien"],
          github: "https://github.com/fac25/week6-missmacs",
          description: "A food delivery app",
        },
        {
          title: "JAMP on a Book",
          img: "", //need to ask for the img
          team: ["Manoela", "Abdullah", "Patrick", "Joe"],
          github: "https://github.com/fac25/week6-J-A-M-P",
          description:
            "It's a store that displays a list of books for purchase",
        },
        {
          title: "Planty",
          img: "src/imgs/planty.png",
          team: ["Abby ", "Lisa", "Paz", "Suraj"],
          github: "https://github.com/fac25/week-6_ASLP",
          description: "A plants shopping platform",
        },
      ],
    },
    {
      week: 7,
      theme: "In-House Final Projects (Weeks 7-9)",
      projects: [
        {
          title: "Away Days",
          img: "", //can't run the app
          team: ["Karwan", "Alex", "Patrick", "Suraj"],
          github: "https://github.com/fac25/week7-away-days",
          description:
            "It became apparent that there was a hole to be filled with platform to bring together sports fans. What if Couchsurfing met Meetup? This mashup is what we decided to build.",
        },
        {
          title: "Seasonal Calendar",
          img: "src/imgs/sesonal-calendar.png",
          team: ["Lisa", "Abby", "Paz", "Joe"],
          github: "https://github.com/fac25/week7-seasonal-calendar",
          description:
            "Seasonal produce generally requires fewer chemicals and the food miles are often significantly lower as product is grown more locally. This keeps the environmental impact, as well as the cost lower.",
        },
        {
          title: "Bookbrooch",
          img: "src/imgs/bookbrooch.png",
          team: ["Abdullah", "Manoela", "Yassien", "Sumithra"],
          github: "https://github.com/fac25/bookbrooch",
          description:
            "An app where users can save their favorite quotes, search for more quotes and play quote-related games.",
        },
      ],
    },
    {
      week: 10,
      theme: "Tech for Better Projects (Weeks 10-12)",
      projects: [
        {
          title: "AMAI-MTOTO",
          img: "src/imgs/amai-mtoto.png",
          team: ["Sumithra", "Alex", "Patrick", "Yassien"],
          github: "https://github.com/fac25/amai-mtoto",
          description:
            "An app for pregnant women from an African/Carribbean background to get advice and support for their mental and physical wellbeing to improve their health outcomes during and after pregnancy.",
        },
        {
          title: "Cocoon Kids",
          img: "src/imgs/cocoon_kids.png",
          team: ["Lisa", "Karwan", "Paz", "Abdullah"],
          github: "https://github.com/fac25/tfb-cocoon-kids-big-hug",
          description:
            "Cocoon Kids Big Hug is a therapeutic service for children and young adults and parents.",
        },
        {
          title: "Immersive Empathy Training-IET",
          img: "src/imgs/IET.png",
          team: ["Joe", "Manoela", "Abby", "Suraj"],
          github: "https://github.com/fac25/IET-Kebbah",
          description:
            "Our programme will guild the user through a course using a series of questions and videos to bring awareness to their potential unconscious bias.",
        },
      ],
    },
  ],
  people: [],
};
