import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto py-2">
        <div className="text-center">
          <a href="/" className="btn btn-ghost text-white normal-case text-xl">
            Boolean To Do
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
