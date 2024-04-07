const Navbar = () => {
  return (
    <div className="flex justify-between items-center overflow-y-hidden navbar relative">
      <div className="absolute h-[1px] w-full scale-x-0 bottom-0 left-0 bg-gray-50/25 origin-left border-bottom-nav"></div>
      <div className="self-stretch flex items-center px-5 relative">
        <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-50/25 scale-y-0 origin-top nav-logo-border"></div>
        <div className="overflow-hidden">
          <span className="inline-block -skew-x-12 translate-y-full nav-logo">aveltyn</span>
        </div>
      </div>
      <div className="flex items-center gap-x-4 text-sm pe-5 py-4">
        <div className="overflow-y-hidden">
          <span className="inline-block translate-y-full nav-item">ME</span>
        </div>
        <div className="overflow-y-hidden">
          <span className="inline-block translate-y-full nav-item">PROJECTS</span>
        </div>
        <div className="overflow-y-hidden">
          <span className="inline-block translate-y-full nav-item">CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
