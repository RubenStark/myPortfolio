import self from "../img/self.png";
import mock2 from "../img/ravenous.png";
import moviefy from "../img/moviefy.png";
import fb from "../img/fb-responsive.gif";
import oldMoney from "../img/old-money.png";
import punto from "../img/punto.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */
/*change the color to this linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%) */
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Ruben",
  lastName: "Lopez",
  initials: "rl", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fast learner",
    },
    {
      emoji: "🌎",
      text: "based in Mexico",
    },
    {
      emoji: "💼",
      text: "Systems Engineer at Google",
    },
    {
      emoji: "📧",
      text: "rubenlopeznavarrete@gmail.com",
    },
  ],
  socials: [
    // {
    //     link: "https://facebook.com",
    //     icon: 'fa fa-facebook',
    //     label: 'facebook'
    // },
    {
      link: "https://wa.me/5582636255",
      icon: "fa fa-whatsapp",
      label: "WhatsApp",
    },
    {
      link: "https://github.com/RubenStark",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/andriode-navarrete-037a5b211/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //     link: "https://twitter.com",
    //     icon: "fa fa-twitter",
    //     label: 'twitter'
    // }
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "music",
      emoji: "🎵",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Old Money Fasihon",
      live: "https://moviefy-production-9cfe.up.railway.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/RubenStark/OldMoney-Fashion", // this should be a link to the **repository** of the project, where the code is hosted.
      image: oldMoney,
      subtitle: "E-commerce + Dashboard + Stripe",
      description:
        "A Full Stack Ecommerce build with NextJS 13 using server actions, with a Admin Dashboard to manage all the products of the store, deployed using Vercel and Stripe for the payments.  (React, API,Vite, Redux,  TypeScript, Stripe, Cloudinary, AWS, Vercel, Tailwind, Prisma, MySQL, ShadcnUI).",
      emoji: "👗",
    },
    {
        title: "Sales Point",
        live: "https://moviefy-production-9cfe.up.railway.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        source: "https://github.com/RubenStark/sutvemex", // this should be a link to the **repository** of the project, where the code is hosted.
        image: punto,
        subtitle: "Dashboard to manage sales and inventory",
        description:
          "Similar to “Old Money Fasihon”, a full stack web app for managing products, quotes and payments. (React, API,Vite, Redux,  TypeScript, Stripe, Cloudinary, AWS, Vercel, Tailwind, Prisma, MySQL, ShadcnUI).",
        emoji: "📈",
      },
    {
      title: "Moviefy",
      live: "https://moviefy-production-9cfe.up.railway.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/RubenStark/Moviefy", // this should be a link to the **repository** of the project, where the code is hosted.
      image: moviefy,
      subtitle: "YouTube / Netflix clone",
      description:
        "I built a site with all the features that Netflix or YouTube provide, such as creating users, resetting passwords, sending emails, remembering the time watched of each video, recommendations based on the videos watched, users can like, comment and subscribe, decorators so only some kind of users can watch some kind of content and I uploaded it using AWS and Heroku.",
      emoji: "🎥",
    },
    {
      title: "Instagram Clone",
      live: "https://rubenstark.github.io/instagramFrontEndClone/",
      source: "https://github.com/RubenStark/instagramFrontEndClone",
      image:
        "https://lh4.googleusercontent.com/rMkQn3J7xPEsoyeD9wu16hNSOyGMQRrKDq7agaQGPdMucr6EX05p64h5WX13bRoO0RE=w2400",
      subtitle: "Instagram main features",
      description:
        "This is a fully functional Instagram clone. Where you can upload photos, follow friends, and watch stories",
    },
    {
      title: "Whats App Clone",
      source: "https://github.com/paytonjewell",
      image:
        "https://lh3.googleusercontent.com/6aHJEP3823bDur-SE7jusn55FunKPA-kML8N7IWEEUvTsy4bHRB54kKknk23upzeUgc=w2400",
      subtitle: "Real time chat",
      description:
        "This is a fully functional WhatsApp clone. Where you can send messages 1 to 1, Django, Django Channels, Web Sockets, React and Redux.",
    },
    {
      title: "Jamming",
      source: "https://github.com/RubenStark/Jamming-Codecademy",
      image:
        "https://lh3.googleusercontent.com/EnW1y6srMfrpHR0q6jAVBxlw-omkDnASkytzRFvB7yFXofK_Lw2patE29-_Oe6ciZeo=w2400",
      subtitle: "Spotify API playlist creation",
      description:
        "This is a web app that allows you to search for songs, artists, or albums and create a custom playlist. It uses the Spotify API to retrieve song information and allows you to save it to a new playlist in your Spotify account.",
    },
    {
      title: "Ravenous",
      image: mock2,
      subtitle: "Yelp API restaurant search",
      description:
        "This is a web app that allows you to search for restaurants. It uses the Yelp API to retrieve restaurant information. You can sort by best match, highest rated, or most reviewed. You can also filter by location, the highest rated, or most reviewed.",
    },
    {
      title: "Film Finder",
      live: "https://rubenstark.github.io/FilmFinder/",
      source: "https://github.com/RubenStark/FilmFinder",
      image:
        "https://lh5.googleusercontent.com/Mts400vu9GtKI_LVqZbHuNHyPLPRmjehG717k4fo8W3vEt933OmN7QsRNFBGNgEWgEA=w2400",
      subtitle: "Movie search",
      description:
        "This is a web app that allows you to search for movies. It uses the OMDB API to retrieve movie information. It was created using React.",
    },
    // {
    //     title: "This portolio template",
    //     live: "https://paytonpierce.dev",
    //     source: "https://github.com/paytonjewell",
    //     image: mock5,
    //     subtitle: "React portfolio template",
    //     description: "This is a mock project. It's a portfolio template that I made using React. It's open source, so feel free to use it for your own portfolio! You can find the source code on my github.",
    // },nnpm
    {
      title: "Devsearch",
      live: "https://mydevsearch2.herokuapp.com/",
      source: "https://github.com/RubenStark/mydevsearhc2",
      image:
        "https://lh5.googleusercontent.com/J5Gxecp-9l8ZiGkTwjA43SIbBh1m24K36QlAfZ8PuLZ4Jag6t28GRLB_qPGC4pFbmzk=w2400",
      subtitle: "React portfolio template",
      description:
        "A full social networ for developers, where you can create a profile, share posts, comment, like, follow other users, and more.",
    },
    {
      title: "Facebook Homepage Clone",
      live: "",
      source: "",
      image: fb,
      subtitle: "Responsive Facebook homepage clone",
      description:
        "A fully responsive Facebook homepage clone, using React, React Hooks, Vite, and TailwindCss.",
    },
  ],
};
