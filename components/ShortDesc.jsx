import Bintang from "./Bintang";

const ShortDesc = () => {
  return (
    <div className="short-desc-wrapper absolute z-10 bottom-36 ps-5">
      <div className="text-sm absolute bg-gray-50 text-gray-950 -top-6 left-0 ms-5 w-0 flex items-center overflow-hidden hello-wrapper">
        <span className="translate-y-full hello shrink-0 mx-2">Hello</span>
        <span className="bg-gray-950 h-[1px] inline-block shrink-0 line-hello w-0"></span>
      </div>
      <Bintang />
      <p className="leading-snug text-sm max-w-72 short-desc [font-kerning:none] opacity-0 overflow-y-hidden">
        Aftiyan here! a Web Developer who adores both technology and cuteness. My designs seamlessly blend innovation
        with charm, setting me apart in the dynamic field of web development.
      </p>
    </div>
  );
};

export default ShortDesc;