const Navbar = () => {
  return (
    <nav className=" p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-blue-500 text-2xl font-bold">
          <a href="/">Linkify</a>
        </h2>
        <a className="text-blue-500" href="#">
          Source Code
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
