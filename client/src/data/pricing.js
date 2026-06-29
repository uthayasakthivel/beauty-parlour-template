// ============================================================
//  PRICING DATA
//  Edit packages, prices and features here.
//  Set popular: true on the package you want highlighted.
// ============================================================

import { FaCheckCircle } from "react-icons/fa";

const pricing = [
  {
    id: 1,
    title: "Basic Package",             // ← Package name
    price: 999,                         // ← Price (number only, currency set in theme.js)
    popular: false,
    features: [
      "Feature One",                    // ← List what's included
      "Feature Two",
      "Feature Three",
      "Feature Four",
    ],
    icon: FaCheckCircle,
  },
  {
    id: 2,
    title: "Premium Package",
    price: 4999,
    popular: true,                      // ← Set true to show "MOST POPULAR" badge
    features: [
      "Feature One",
      "Feature Two",
      "Feature Three",
      "Feature Four",
      "Feature Five",
      "Feature Six",
    ],
    icon: FaCheckCircle,
  },
  {
    id: 3,
    title: "Luxury Package",
    price: 2499,
    popular: false,
    features: [
      "Feature One",
      "Feature Two",
      "Feature Three",
      "Feature Four",
    ],
    icon: FaCheckCircle,
  },
];

export default pricing;
