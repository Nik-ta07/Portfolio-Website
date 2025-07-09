import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[var(--text)] sm:text-xl rounded md:p-0 hover:text-[var(--primary-dark)] dark:text-[#ADB7BE] dark:hover:text-white transition-colors"
    >
      {title}
    </Link>
  );
};

export default NavLink;