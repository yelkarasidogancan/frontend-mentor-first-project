import Cabin from "./assets/portfolio/cabin.png";
import Cake from "./assets/portfolio/cake.png";
import Circus from "./assets/portfolio/circus.png";
import Game from "./assets/portfolio/game.png";
import Safe from "./assets/portfolio/safe.png";
import Submarine from "./assets/portfolio/submarine.png";

export const navigationData = [
  {
    name: "Portfolio",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];
export const hero = {
  title: "START BOOTSTRAP",
  subtitle: "Graphic Artists - Web Designer - Illustrator",
};
export const portfolio = {
  title: "PORTFOLIO",
  items: [
    {
      text: "Cabin",
      image: <Cabin />,
    },
    {
      text: "Cake",
      image: <Cake />,
    },
    {
      text: "Circus",
      image: <Circus />,
    },
    {
      text: "Game",
      image: <Game />,
    },
    {
      text: "Safe",
      image: <Safe />,
    },
    {
      text: "Submarine",
      image: <Submarine />,
    },
  ],
};
export const about = {
  title: "ABOUT",
  subtitle:
    "Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.",
  subtitleSecond:
    "You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!",
  buttonText: "Free Download!",
};

export const contactMe = {
  title: "CONTACT ME",
  formName: "Full name",
  formEmail: "Email address",
  formPhone: "Phone number",
  formMessage: "Message",
  buttonText: "Send",
};
export const footer = {
  titleFirst: "LOCATION",
  address: "2215 John Daniel Drive",
  addressSecond: "Clark, MO 65243",
  titleSecond: "AROUND THE WEB",
  titleThird: "ABOUT FREELANCER",
  licence: "Freelance is a free to use,MIT licensed Bootstrap theme created by",
  a: "Start Bootstrap",
};
