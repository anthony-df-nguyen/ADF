export interface ProjectStat {
  label: string;
  value: string;
}

export interface ProjectEntry {
  title: string;
  img: string;
  role: string;
  url: string;
  urlLabel: string;
  description: string[];
  stats: ProjectStat[];
}

export const projects: ProjectEntry[] = [
  {
    title: "occovid.com",
    img: "/images/occovid.png",
    role: "Creator | Developer",
    url: "https://occovid.vercel.app/",
    urlLabel: "View occovid.com",
    description: [
      "OCCOVID.com is my passion project. I singlehandedly built this website to serve as a free community dashboard to present the latest COVID-19 stats and metrics for Orange County, California. I started this project in April of 2020 and continue to update the site as new data and metrics become available.",
      "At the beginning of the pandemic, Orange County did not provide a comprehensive, nor mobile-friendly dashboard. I saw an opportunity to create something of value for my local community and further expand my coding skillset. When I started, I only knew HTML and CSS. Within 2 weeks of learning some basic JavaScript, I was able to launch the first iteration of the site. Months passed and I continued to add new features and visualizations. Eventually, in April of 2021, I learned React and redesigned and relaunched the entire site from the ground up in less than 1 week.",
      "Throughout the entire process, I utilized Twitter and Reddit to provide local citizens with status updates of new data or site features. They provided feedback, bug reports, and tips on new available sources. This loop allowed me to provide all the visualizations and capabilities that the site has today.",
    ],
    stats: [
      { label: "Launched", value: "April 2020" },
      { label: "Users", value: "~60,000" },
      { label: "Avg Page Load Time", value: "0.83 sec" },
    ],
  },
  {
    title: "stratana.com",
    img: "/images/stratana.png",
    role: "Lead Web Designer",
    url: "https://stratana.com/",
    urlLabel: "View stratana.com",
    description: [
      "While I served as the VP of Product Development at Stratana, I took the initiative to apply my web design skills to completely redesign the company website in my personal time. This saved the company hundreds or thousands of dollars and time in needing to hire an external agency or designer.",
      "The website started off as a hand-coded site using only HTML and CSS. Eventually, as my skills progressed, the site was redesigned a 2nd time using NextJS. A year after the 2nd version, the site saw a 3rd redesign, this time utilizing Tailwind CSS and components. During this iteration, I managed a Jr. Web Developer throughout the process of planning, designing, implementing, and testing of the website. Together, we were able to complete the entire redesign in 3 weeks.",
    ],
    stats: [
      { label: "Reduced Bounce Rate by", value: "40%" },
      { label: "Increased Traffic by", value: "300%" },
      { label: "NextJS Real Experience Score", value: "100%" },
      { label: "Largest Contentful Paint", value: "0.23 sec" },
    ],
  },
  {
    title: "No-Spoiler NBA Schedule",
    img: "/images/nba.png",
    role: "Creator | Developer",
    url: "https://nospoilnba.vercel.app/",
    urlLabel: "View No-Spoiler NBA Schedule",
    description: [
      "I built this website purely to solve a problem that is very personal and possibly specific to only me. I often like to watch NBA basketball games on delay, and I got sick of Google, Twitter, or the NBA app spoiling the game score or results whenever I tried to find game times.",
      "This website is built using NextJS to fetch the schedule from the current season from NBA.com and display which games are on today, at what time, without showing the score. Users can also navigate to past or future days, or use the calendar to pick a specific day (within the current season). A 'Watch Game' button allows the user to be redirected to the game on NBA.com.",
    ],
    stats: [
      { label: "Games Spoiled", value: "0" },
      { label: "My Satisfaction", value: "100% :)" },
    ],
  },
];
