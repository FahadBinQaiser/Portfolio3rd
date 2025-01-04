import React from "react";

const Navbar = () => {
    return (
    <nav>
  <div className="flex justify-center w-full">
    <div className="text-center bg-white flex flex-row border-black border-2 m-4 p-4 w-5/12 rounded-lg">
    <h1 className="">Fahad</h1>
    <ul className=" flex flex-row justify-center space-x-6">
      <li><a href="/">Home</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/skills">skills</a></li>
      <li><a href="/work">work</a></li>
    </ul>
    </div>
  </div>
</nav>

    );
}
export default Navbar;