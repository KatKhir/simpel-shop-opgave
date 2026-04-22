import Link from "next/link";
const Header = () => {
  return (
    <nav className="border border-black rounded-xl mx-10 my-8 py-5 px-10">
      <ul className="flex gap-20 font-bold text-xl">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/productListPage">PRODUCTS</Link>
        </li>
        <li>
          <Link href="/Betaling">BASKET</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
