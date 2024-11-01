import { Timeline, TimelineContentItem } from "../../components/Timeline"


export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold m-5">
        My journey so far
      </h1>
      <Timeline content={timelineContent} />
    </div>
  )
}

const timelineContent: TimelineContentItem[] = [
  {
    header: "Starting Out in Medicine",
    summary:
      "Driven by a love for science and helping others, I pursued medical school at the University of Southampton. It was a dream come true after years of hard work.",
    img: {
      src: "/assets/scrubs.jpg",
      alt: "Anisha wearing blue scrubs",
    },
  },
  {
    header: "Needing a change of direction",
    summary:
      "After two years in medical school, I felt that medicine wasn\u2019t the right fit, as I missed the creative aspects of my personality. During my third year, I decided to change course and explore new passions.",
    img: {
      src: "/assets/headAnatomy.jpg",
      alt: "Anatomy textbook page",
    },
  },
  {
    header: "Rediscovering Coding",
    summary:
      "Leaving medicine allowed me to rekindle my love for coding, something I had enjoyed in school. After a quick refresher in JavaScript, I knew software development was my next path.",
    img: {
      src: "/assets/JavaScript.png",
      alt: "Learning JavaScript",
    },
  },
  {
    header: "Choosing an Apprenticeship",
    summary:
      "Not wanting to return to university, I chose a software engineering apprenticeship. This hands-on experience felt right, and I dedicated extra time to personal projects, which confirmed I\u2019d made the right choice.",
    img: {
      src: "assets/apprenticeshipResult.png",
      alt: "Congratulations!",
    },
  },
  {
    header: "Finding a passion for Frontend Development",
    summary:
      "I naturally gravitated towards frontend development for its blend of design and problem-solving. Enhancing user experiences felt like a meaningful way to make a positive impact.",
    img: {
      src: "assets/bestTeamAward.jpg",
      alt: "Best Team Award",
    },
  },
  {
    header: "Working as an associate developer",
    summary:
      "Now, as an associate software engineer, I\u2019m focused on frontend development, collaborating with designers, and honing my skills in React and TypeScript.",
    img: {
      src: "assets/code.jpg",
      alt: "Blurred out code",
    },
  },
  {
    header: "What\u2019s next?",
    summary:
      "Looking ahead, I\u2019m excited to continue my journey, share my passion for frontend development, and advocate for apprenticeships and women in tech.",
    img: {
      src: "assets/WomenInTechLanyard.jpg",
      alt: "Women in Tech festival name badge",
    },
  },
]
