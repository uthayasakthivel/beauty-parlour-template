// ============================================================
//  SERVICES DATA
//  Add, remove or edit services shown on Home & Services page.
//  Icons: https://react-icons.github.io/react-icons/icons/fa/
// ============================================================

import {
  FaCut,
  FaSpa,
  FaAirFreshener,
  FaMagic,
  FaPaintBrush,
  FaGem,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Service Title 1",              // ← Your service name
    description: "Short description of what this service offers.", // ← Your description
    icon: FaCut,                           // ← Pick an icon from react-icons/fa
  },
  {
    id: 2,
    title: "Service Title 2",
    description: "Short description of what this service offers.",
    icon: FaSpa,
  },
  {
    id: 3,
    title: "Service Title 3",
    description: "Short description of what this service offers.",
    icon: FaAirFreshener,
  },
  {
    id: 4,
    title: "Service Title 4",
    description: "Short description of what this service offers.",
    icon: FaMagic,
  },
  {
    id: 5,
    title: "Service Title 5",
    description: "Short description of what this service offers.",
    icon: FaPaintBrush,
  },
  {
    id: 6,
    title: "Service Title 6",
    description: "Short description of what this service offers.",
    icon: FaGem,
  },
];

export default services;
