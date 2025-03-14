import Link from "next/link";
import Search from "@/components/search.jsx";

const Nav = () => {
  return (
    <div className=" h-20 flex justify-between items-center ">
      <div>
        <h1>logo</h1>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
};

export default Nav;
