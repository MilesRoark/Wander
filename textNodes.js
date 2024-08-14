export const textNodes = [
  {
    id: 1,
    title: "Chapter 1: The Beginning",
    text: "You are the Wanderer, and find yourself overwhelmed by a stack of identical CV's. Just when you consider giving up, you feel a strange otherworldly energy. You feel its pull towards the wilderness.",
    img: "./assets/the-ordinary-world.jpg",
    options: [
      {
        text: "You're a Pro, wander confidently and explore",
        nextText: 2,
      },
      {
        text: "Ignore and continue with the traditional CVs.",
        nextText: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2: The Call to Adventure",
    text: "You've discovered a unique portfolio amidst the common CVs, a link that leads to a portal. It's intriguing and enthralling.",
    img: "./assets/the-portal.jpg",
    options: [
      {
        text: "Grab a brew, this should be interesting",
        nextText: 3,
      },
      {
        text: "Run away screaming",
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3: The Refusal of the Call",
    text: "As you hover over the 'start adventure' button, you remember that one time when...",
    img: "./assets/start-btn.jpg",
    options: [
      {
        text: "Lost in thought you get pulled in the void",
        nextText: 4,
      },
      {
        text: "Your legs begin to shake and you refuse the call",
        nextText: 1,
      },
    ],
  },
  // Existing node
  {
    id: 4,
    title: "Chapter 3: The Meeting with the Mentor",
    text: "You meet the guide, a sophisticated AI, that provides you an overview of the developer's skills and proficiency levels.",
    img: "./assets/AI.jpg",
    options: [
      {
        text: "You listen a feeling of familiarity creeping over you",
        nextText: 41, // New branch starts here
      },
      {
        text: "Polite nodding, but you are more excited about the journey.",
        nextText: 5,
      },
    ],
  },

  // New nodes
  {
    id: 41,
    title: "Chapter 3.1: Deep Dive into Skills",
    text: "The AI takes you on a journey through the developer's skill set. A beginner understanding of HTML and CSS and some passable Javascript.",
    img: "./assets/skills.jpg",
    options: [
      {
        text: "You remember this part",
        nextText: 42,
      },
      {
        text: "Fast foward ahead you're excited.",
        nextText: 5,
      },
    ],
  },
  {
    id: 42,
    title: "Chapter 3.2: Understanding the Basics",
    text: "The AI starts with the basics, highlighting the developer's understanding of HTML and CSS. You see artifacts of responsive design, flexbox layout, semantic HTML, and CSS Grid.",
    img: "./assets/html.jpg",
    options: [
      {
        text: "You've been waiting for this part from the start",
        nextText: 43,
      },
      {
        text: "Continue with the journey, you're a little hungry",
        nextText: 5,
      },
    ],
  },
  {
    id: 43,
    title: "Chapter 3.3: Delving into Javascript",
    text: "You notice the sparse use of JS, but something in the code conveys the developers joy of learning and experimentation and an eagerness to learn.",
    img: "./assets/js.jpg",
    options: [
      {
        text: "Make a note to ask about that",
        nextText: 44,
      },
      {
        text: "Move along with the journey, the room is starting to feel small",
        nextText: 5,
      },
    ],
  },
  {
    id: 44,
    title: "Chapter 3.4: Revealing React Prowess",
    text: "The AI showcases the developers readiness to learn and grow with you on this journey",
    img: "./assets/react.jpg",
    options: [
      {
        text: "Are you intrigued? Do you feel inspired.",
        nextText: 45,
      },
      {
        text: "Move forward with the journey, you really must meet this person.",
        nextText: 4,
      },
    ],
  },
  {
    id: 45,
    title: "Chapter 3.5: Unveiling Node.js",
    text: "Lastly, the AI begins to mummur but you cannot hear it's words",
    img: "./assets/node.jpg",
    options: [
      {
        text: "Look around nervoulsy and ask it to speak up",
        nextText: 5,
      },
    ],
  },

  {
    id: 5,
    title: "Chapter 5: Crossing the Threshold",
    text: "You delve deeper navigating through the developer's many projects. The challenges mirror the depth of the developer's skills.",
    img: "./assets/delve-deeper.jpg",
    options: [
      {
        text: "The feeling of familiarity grows, you've been here before.",
        nextText: 6,
      },
      {
        text: "Skim through the challenges, you already know this one.",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6: Tests, Allies, Enemies",
    text: "You face trials and tribulations, presented as intricate coding challenges. Each solution unravels a new facet of the developer's experience, portraying their journey through various projects and roles.",
    img: "./assets/allies.jpg",
    options: [
      {
        text: "Examine the solutions, gaining insight into the developer's problem-solving abilities.",
        nextText: 7,
      },
      {
        text: "Rush through the challenges, eager to reach the end of the adventure.",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7: Approach to The Inmost Cave",
    text: "You near the adventure's climax, a challenge that hints at the developer's future growth.",
    img: "./assets/cave.jpg",
    options: [
      {
        text: "Take time to listen and understand the developer",
        nextText: 8,
      },
      {
        text: "Proceed armed with nothing but guesses",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8: The Ordeal",
    text: "At the crux of the adventure, you see the great divide between you and the developer",
    img: "./assets/ordeal.jpg",
    options: [
      {
        text: "Bridge the gap, extend your hand",
        nextText: 9,
      },
      {
        text: "Fall into the deep beyond",
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    title: "Chapter 9: The Reward",
    text: "Upon solving the challenge. You're rewarded with a gift.",
    img: "./assets/reward.jpg",
    options: [
      {
        text: "Open the gift, you love surprises",
        nextText: 10,
      },
      {
        text: "Apprehension is too great, leave the gift behind",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    title: "Chapter 10: The Road Back",
    text: "As you near the end, you traverse back through the adventure, reminiscing about the challenges that showcase the developer's journey from a novice and you can see possibilities",
    img: "./assets/dream.jpg",
    options: [
      {
        text: "Revisit the challenges, and experience the feeling again",
        nextText: 11,
      },
      {
        text: "Ask the AI about the locals",
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    title: "Chapter 11: The Resurrection",
    text: "At the adventure's end, you face a final challenge that encapsulates all the developer's skills, signifying their readiness for any professional challenges that lie ahead.",
    img: "./assets/resurrection.jpg",
    options: [
      {
        text: "Reflect on the final challenge, recognizing the developer's readiness.",
        nextText: 12,
      },
      {
        text: "Proceed to the end, without contemplating the significance.",
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    title: "Chapter 12: Return with the Elixir",
    text: "As you exit the adventure, you carry with you a thorough understanding of the developer's skills, experiences, and their potential for growth. The conventional CV is but a pale comparison.",
    img: "./assets/elixir.jpg",
    options: [
      {
        text: "Acknowledge the value of this unique portfolio approach.",
        nextText: 13,
      },
      {
        text: "Close the adventure, not pondering on the gained insights.",
        nextText: 1,
      },
    ],
  },
  {
    id: 13,
    title: "Epilogue",
    text: "Your adventure concludes, leaving you with a deep understanding of the developer's skills. What will you do next?",
    img: "./assets/epilogue.jpg",
    options: [
      {
        text: "Reach out to the developer for a potential opportunity.",
        nextText: 14,
        action: "link", // This tells the button what type of action to perform
        linkUrl: "https://www.linkedin.com/in/babatunjiafolayan/", // replace with actual LinkedIn URL
      },
      {
        text: "Close the adventure, and continue your search.",
        nextText: 1,
      },
    ],
  },
  {
    id: 14,
    title: "The New Beginning",
    text: "You've decided to embark on a new journey with the developer. Congratulations! The end is a new beginning.",
    img: "./assets/The New Beginning.jpg",
    options: [
      {
        text: "Celebrate the successful recruitment process.",
        nextText: 1,
      },
    ],
  },
];
