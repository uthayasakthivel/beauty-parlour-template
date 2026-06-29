// ============================================================
//  CONTACT INFO CARDS
//  Shown in the Contact section.
//  These pull from site.js — update values there, not here.
// ============================================================

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import site from "../config/site";

const contactInfo = [
  {
    id: 1,
    title: "Call Us",
    value: site.phone,               // ← Pulled from site.js
    icon: FaPhoneAlt,
  },
  {
    id: 2,
    title: "Email",
    value: site.email,               // ← Pulled from site.js
    icon: FaEnvelope,
  },
  {
    id: 3,
    title: "Visit Us",
    value: site.address,             // ← Pulled from site.js
    icon: FaMapMarkerAlt,
  },
];

export default contactInfo;
