import React from "react";
import styles from "../styles/Home.module.css";
import Card from "./Card";

export default function Projects() {
  const projectsInformation = [
    {
      title: "Exercise Journal",
      href: "https://www.pixelatedyear.com/",
      alt: "Exercise Journal App",
      image: "/pixelatedyear.png",
      description: [
        "Create an account to track your exercise throughout the year.",
        "Color coded by workout intensity, record the type of workout and notes throughout the day.",
        "Toggle between view types to get a glimpse of your workout year in color.",
        "Stars to motivate you to accomplish different amount of exercise per month.",
        "New feautures still in the making!",
      ],
      gitname: "Tepeup/Year-Tracker",
      gitlink: "https://github.com/Tepeup/Year-Tracker",
      website: "www.pixelatedyear.com",
    },
    {
      title: "Stock Portfolio Social Media",
      href: "http://www.portfoliorater.com/new",
      alt: "Portfolio Rater App",
      image: "/portfoliorater.png",
      description: [
        "Social media website to share your stock portfolios, real concurrent users",
        "Sign in to view a dashboard of your own and your favorited portfolios.",
        "Browse recent submission.",
        "Like and comment on other people's posts, and rate their portfolio!",
        "Uses Finnhub API information to break down your portofolio further by market cap and sector.",
      ],
      gitname: "Tepeup/stockportfolio",
      gitlink: "https://github.com/Tepeup/stockportfolio",
      website: "www.portfoliorater.com",
    },
    {
      title: "Shopify Applications",
      href: "https://tzpdevstore.myshopify.com/",
      alt: "Shopify Applications",
      image: "/simplifybanner.png",
      description: [
        "Real shopify applications used by merchants, private code",
        "App A: Voice command application using alanAI for page redirects, filtering search requests, sorting products by type, and clearing your cart",
        "App B: Customizable sales motivator banner dynamically updates messages based on shopping cart total. Merchants have full customization of the banner.",
        "Uses Shopify API, Shopify Liquid, and GraphQL",
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
        "Uses coingecko API and Borda Count method for vote tallying.",
        "Drag and drop to sort your rankings",
        "'Global Rankings' page also serves as links to coingecko for more coin specific information.",
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
