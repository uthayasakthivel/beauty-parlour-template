import { NavLink } from "react-router-dom";
import site from "../../config/site";

export default function Logo() {
  return (
    <NavLink to="/" className="select-none">
      <h1 className="text-3xl font-bold tracking-wide">
        <span className="text-pink-600">{site.brand.first}</span>
        <span className="text-gray-900">{site.brand.second}</span>
      </h1>
    </NavLink>
  );
}
