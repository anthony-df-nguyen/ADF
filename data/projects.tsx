export interface ProjectData {
  title: string;
  id: string;
  description: string;
  role: string;
  url: string;
  githubURL?: string;
  img: string;
  why: string;
  achievements?: any;
  sections: {
    title: string;
    content: any;
    collapse?: boolean;
  }[];
}

const occovid: ProjectData = {
  title: "OCCOVID",
  id: "occovid",
  role: "Creator | Developer",
  url: "https://occovid.vercel.app/",
  githubURL: "https://github.com/anthony-df-nguyen/occovid-next",
  img: "/images/occovid.png",
  description:
    "A free, mobile-first COVID-19 dashboard for Orange County, CA — built and maintained solo from April 2020 through the pandemic. Built with Next.js, React, Tailwind CSS",
  why: "At the beginning of the pandemic, Orange County did not provide a comprehensive or mobile-friendly dashboard. The county posted daily numbers but no aggregate view showing how the pandemic was evolving. I started manually tracking the numbers in a spreadsheet and publishing static dashboards in Google Slides, sharing them on Reddit and Twitter with local communities. Within a week, the dashboards were getting consistent daily traffic — including visits from county officials. It became clear that Google Slides wouldn't scale as the data grew, and the experience on mobile was poor. So I built a real site.",
  achievements: (
    <ul className="list-disc">
      <li>800,000+ total page views with ~50,000 returning users at peak</li>
      <li> Featured on local radio stations and school interviews</li>
      <li>
        {" "}
        Received multiple offers to place ads on the site, which I declined to
        keep it free for the community
      </li>
    </ul>
  ),
  sections: [
    {
      title: "How It Was Built",
      content:
        "I launched the first version within two weeks of starting the project, beginning with only HTML and CSS and picking up JavaScript along the way. As the site grew in complexity and user base, I rebuilt it from the ground up in React in under a week after self-teaching the framework. It was later refactored to Next.js and Tailwind CSS as I adopted those technologies. During the site's active lifecycle, I integrated a third-party API to pull live county data daily and built a pipeline to archive that data over time.",
      collapse: true,
    },
    {
      title: "Community Engagement",
      content:
        "Throughout the project I used Twitter and Reddit to keep local residents informed about new data and site features. That same community became an active feedback loop — filing bug reports, suggesting new data sources, and requesting specific visualizations. The push notification system came directly from user requests as the daily audience grew.",
      collapse: true,
    },
    {
      title: "Key Features",
      content: (
        <ul className="list-disc">
          <li>
            Time-based visualizations for each key COVID metric tracked by the
            county
          </li>
          <li>
            {" "}
            Map-based views displaying case rates, deaths, and vaccination data
            by city and zip code{" "}
          </li>
          <li>
            Push notification system allowing users to subscribe to alerts when
            new daily numbers were published
          </li>
          <li>Fully responsive, mobile-first design </li>
          <li>
            Archived data ensuring the dashboard remains accessible after live
            data sources went offline
          </li>
        </ul>
      ),
      collapse: true,
    },
  ],
};

const docs: ProjectData = {
  title: "Cogility Docs",
  id:"docs",
  description:
    "The official user-facing documentation platform for Cogynt.ai, featuring multi-versioned docs, release notes, and Algolia full-text search.",
  role: "Creator",
  url: "https://docs.cogility.com/",
  img: "/images/docs-cogynt.png",
  why: "Cogility needed a centralized place to host documentation that could scale with a quarterly release cycle across multiple product versions. The system also had to be low-maintenance enough for a non-technical documentation team to own end-to-end — publishing, deploying, and iterating without any engineering or DevOps involvement.",
  achievements: (
    <ul className="list-disc">
      <li>Launched and deployed the production site in under 1 week</li>
      <li>Averages 1,000+ monthly page views with Google Analytics fully integrated</li>
      <li>Algolia DocSearch configured and live without any engineering involvement</li>
      <li>Custom PDF export built to generate a complete downloadable user guide per version</li>
      <li>Documentation team fully onboarded and self-sufficient on day one</li>
    </ul>
  ),
  sections: [
    {
      title: "How It Was Built",
      content:
        "Built on Docusaurus with TypeScript and hosted on Vercel with automatic deployments on every push. I set up a preview branch environment with a custom login screen so that in-progress documentation could be shared internally for feedback without being publicly accessible. Algolia search is connected across all documentation versions so users can search the full content of any user guide regardless of which version they are on.",
    },
    {
      title: "Key Features",
      content: (
        <ul className="list-disc">
          <li>Multi-doc plugin system supporting versioned user guides alongside non-versioned content like blog posts and sample libraries</li>
          <li>Full-text search across all documentation versions powered by Algolia DocSearch</li>
          <li>Custom PDF export to download a complete user guide for any version</li>
          <li>Preview deployments with a custom login screen restricted to Cogility employees</li>
          <li>In-line comment system on preview deployments for documentation team feedback</li>
          <li>Custom image lightbox for full-screen screenshot viewing</li>
          <li>Send Feedback button to collect user responses directly from the docs</li>
        </ul>
      ),
    },
  ],
};


// Fun Stuff

const stratana: ProjectData = {
  title: "Stratana Website",
  id: "stratana",
  role: "Lead Web Developer",
  url: "https://www.stratana.com/",
  img: "/images/stratana.png",
  description:
    "While I was a Product Manager at Stratana, I took the initiative to apply my web development skills to completely redesign the company website in my personal time. This saved the company thousands of dollars and time in needing to hire an external agency or designer.",
  why: "The company needed to desperately rebrand their website but did not have budget to hire an agency. We explored Squarespace but the cost did not justify a simple static website and the site performance was poor. I took it upon myself to learn how to build and host websites so that we could iterate rapidly while eliminating Squarespace costs. Additionally, we focused on web performance to increase our SEO performance.",
  achievements: (
    <ul className="list-disc">
      <li>Completely eliminated hosting costs from Squarespace</li>
      <li>Reduced Bounce Rate by 40%</li>
      <li>Increased web traffic by 300%</li>
      <li>Achieved a NextJS Real Experience Score of 100%</li>
      <li>Largest Contentful Paint of 0.23 seconds</li>
    </ul>
  ),
  sections: [
    {
      title: "How It Was Built",
      content:
        "The website started off as a hand-coded site using only HTML and CSS. Eventually, as my skills progressed, the site was redesigned a 2nd time using NextJS. A year after the 2nd version, the site saw a 3rd redesign, this time utilizing Tailwind CSS and components. During this iteration, I managed a Jr. Web Developer throughout the process of planning, designing, implementing, and testing of the website. Together, we were able to complete the entire redesign in 3 weeks.",
      collapse: true,
    },
  ],
};

const nba: ProjectData = {
  title: "No-Spoiler NBA Schedule",
  id: "nba",
  role: "Creator | Developer",
  url: "https://nospoilnba.vercel.app/",
  githubURL: "https://github.com/anthony-df-nguyen/nospoilnba",
  img: "/images/nba.png",
  description:
    "A free, mobile-first COVID-19 dashboard for Orange County, CA — built and maintained solo from April 2020 through the pandemic. Built with Next.js, React, Tailwind CSS",
  why: "I used to watch NBA games a few hours or days after the game on NBA League Pass so that I could fast-forward passed the timeouts. The problem was I'd always spoil the results of the game when I would Google search game times and schedules. This app uses the NBA.com's JSON file to show games each day and defaults to hide scores.",
  sections: [
    {
      title: "Key Features",
      content: (
        <ul className="list-disc">
          <li>Defaults to hide scores</li>
          <li>Links to the NBA.com link to watch the game</li>
          <li>Date menu and controls to jump to specific days or months.</li>
          <li>
            {" "}
            Map-based views displaying case rates, deaths, and vaccination data
            by city and zip code{" "}
          </li>
        </ul>
      ),
    },
  ],
};

export { occovid, docs, stratana, nba };
