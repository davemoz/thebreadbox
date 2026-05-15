import Link from "next/link";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/recipes">My Recipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
