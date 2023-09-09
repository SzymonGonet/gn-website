import searchIcon from "../public/icons/search.png";
import realizationIcon from "../public/icons/realization.png";
import doneIcon from "../public/icons/done.png";
import { SiReact, SiNetlify } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import styles from "./styles.module.scss";

export const navItems = [
  {
    id: 1,
    name: "Strona główna",
    to: "home",
  },
  {
    id: 2,
    name: "O nas",
    to: "about",
  },
  {
    id: 3,
    name: "Technologie",
    to: "technologie",
  },
  {
    id: 4,
    name: "Produkty",
    to: "produkty",
  },
  {
    id: 5,
    name: "Kontakt",
    to: "contact",
  },
];

export const aboutIcons = [
  {
    id: 1,
    icon: searchIcon,
    name: "Pomysł",
    desc: "Powiedz nam czego potrzebujesz",
  },
  {
    id: 2,
    icon: realizationIcon,
    name: "Realizacja",
    desc: "Kompletna realizacja projektu",
  },
  {
    id: 3,
    icon: doneIcon,
    name: "Sukces",
    desc: "Zadowolenie klienta z produktu",
  },
];

export const techIcons = [
  {
    id: 1,
    icon: SiReact,
    name: "React",
    style: styles.react,
  },
  {
    id: 2,
    icon: FaSass,
    name: "Sass",
    style: styles.sass,
  },
  {
    id: 3,
    icon: SiNetlify,
    name: "Netlify",
    style: styles.netlify,
  },
];

export const products = [
  {
    id: 1,
    header: "Basic",
    item1: "Wizytówka firmy",
    item2: "Podstawowe ikony",
    item3: "Podstawowe multimedia",
    item4: "Prosty układ",
    item5: "SEO podstawowe",
    price: "3000",
  },
  {
    id: 2,
    header: "Standard",
    item1: "Do 3 stron",
    item2: "Dedykowane ikony",
    item3: "Dedykowane multimedia",
    item4: "Nowoczesny układ",
    item5: "SEO Podstawowe",
    price: "5000",
  },
  {
    id: 3,
    header: "Premium",
    item1: "Do 10 podstorn",
    item2: "Zaawansowane ikony",
    item3: "Motyw jasny oraz ciemny",
    item4: "Zaawansowany układ",
    item5: "SEO zaawansowane",
    price: "8000",
  },
];

export const colorIcons = [
  {
    id: 1,
    name: "#f1c53e",
    style: styles.i1,
  },
  {
    id: 2,
    name: "#8f4250",
    style: styles.i2,
  },
  {
    id: 3,
    name: "#2c2d32",
    style: styles.i3,
  },

  {
    id: 4,
    name: "#55565a",
    style: styles.i4,
  },
];

export const animations = {
  text: {
    hidden: {
      opacity: 0,
      x: -120,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  },

  item: {
    hidden: {
      opacity: 0,
      y: 120,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  },

  icons: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  },

  sentence: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 1, staggerChildren: 0.03 },
    },
  },

  letter: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
};
