import React from "react";
import styles from "../styles/Home.module.css";
import Card from "./Card";

export default function Projects() {
  const projectsInformation = [
    {
      title: "Stock Portfolio Social Media",
      href: "http://www.portfoliorater.com",
      alt: "Portfolio Rater App",
      image: "/portfoliorater.png",
      description: [
        "Social media website to share your stock portfolios with real concurrent users.",
        "Browse, comment, like, and rate the latest portfolio submissions.",
        "Sign in to get access to your dashboard which shows yours and your favorited portfolios.",
        "Uses Finnhub's API to get market capitilization, industry sector, and stock price information.",
        "React, Node.js, MongoDb, Express, Firebase, Heroku, Sass",
      ],
      gitname: "Tepeup/stockportfolio",
      gitlink: "https://github.com/Tepeup/stockportfolio",
      website: "www.portfoliorater.com",
    },
    {
      title: "Exercise Journal",
      href: "https://www.pixelatedyear.com/",
      alt: "Exercise Journal App",
      image: "/pixelatedyear.png",
      description: [
        "Website used to track your exercises throughout the year and display them in a unique pixelated view.",
        "Create an account to record the exercise type, intenstiy, and relevant notes for each day on or before today.",
        "Toggle between view types to get a glimpse of your exercise journal in color.",
        "Star system used to motivate you to accomplish different goals per month.",
        "React, Node.js, Next.js, Firebase, Vercel",
      ],
      gitname: "Tepeup/Year-Tracker",
      gitlink: "https://github.com/Tepeup/Year-Tracker",
      website: "www.pixelatedyear.com",
    },
    {
      title: "Shopify Applications",
      href: "https://tzpdevstore.myshopify.com/",
      alt: "Shopify Applications",
      image: "/simplifybanner.png",
      description: [
        "Two Shopify applications which can be customized in the Shopify merchant admin, private code",
        "App A: Voice command application using alanAI in conjunction with the Shopify API for page redirects, search requests, sorting by type, and clearing your cart. ",
        "App B: Sales motivator banner dynamically updates messages based on shopping cart total, used to increase average order size. Merchants have full customization of the banner styles down to the padding.",
        "Shopify API, Shopify Liquid, GraphQL, Node.js, Koa, React, Vanilla Javascript, MongoDb, Firebase",
      ],
      gitname: "Private Applications",
      gitlink: "",
      website: "tzpdevstore.myshopify.com",
    },
    {
      title: "Cryptocurrency Rankings",
      href: "https://www.yourcryptorank.com/",
      alt: "Your Crypto Rank",
      image: "/yourcryptorank.png",
      description: [
        "Vote on your favorite cryptocurrencies to submit to Global Rankings.",
        "Uses coingecko API for coin information including icon, name, and symbol.",
        "Uses ReactSortable to implement a drag and drop feature for rank sorting.",
        "Global Rankings page also serves as redirects to coingecko for more coin specific information.",
        "React, Node.js, Next.js, Firebase, Vercel",
      ],
      gitname: "Tepeup/Crypto-Rank",
      gitlink: "https://github.com/Tepeup/Crypto-Rank",
      website: "www.yourcryptorank.com",
    },
    {
      title: "Best Picture Nominator",
      href: "https://the-shoppies-beryl.vercel.app/",
      alt: "Best Picture Nominator",
      image: "/theshoppies.png",
      description: [
        "Shopify developer challenge submission for the frontend of a movie award nomination website.",
        "Uses OMDb API for movie information.",
        "UI inspired by HBO Max.",
      ],
      gitname: "Tepeup/The-Shoppies",
      gitlink: "https://github.com/Tepeup/The-Shoppies",
      website: "the-shoppies-beryl.vercel.app",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {projectsInformation.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              href={project.href}
              alt={project.alt}
              image={project.image}
              description={project.description}
              gitname={project.gitname}
              gitlink={project.gitlink}
              website={project.website}
            />
          );
        })}
      </div>
    </main>
  );
}
