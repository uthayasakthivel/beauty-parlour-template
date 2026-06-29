// ============================================================
//  STATISTICS / COUNTER DATA
//  Numbers that animate on scroll — shown in the gradient banner.
//  Icons: https://react-icons.github.io/react-icons/icons/fa/
// ============================================================

import { FaSmile, FaAward, FaUserFriends, FaSpa } from "react-icons/fa";

const statistics = [
  {
    id: 1,
    value: 1000,       // ← The number to count up to
    suffix: "+",       // ← Shown after the number: "+" | "%" | "★" | ""
    label: "Happy Clients",            // ← Label below number
    icon: FaSmile,                     // ← Icon above number
  },
  {
    id: 2,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    icon: FaAward,
  },
  {
    id: 3,
    value: 20,
    suffix: "+",
    label: "Services Offered",
    icon: FaSpa,
  },
  {
    id: 4,
    value: 10,
    suffix: "",
    label: "Expert Staff",
    icon: FaUserFriends,
  },
];

export default statistics;
