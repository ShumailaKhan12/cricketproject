"use client";

const Navbar = () => {
    return (
        <>
            <nav className="p-2 flex justify-between items-center bg-gray-200">
                <div className="flex items-center">
                    {/* <button className="ps-4 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            width="20"
            height="20"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </button> */}
                    <div
                        //   onClick={() => navigate("/home")}
                        className="ml-4 cursor-pointer flex items-center justify-center"
                    >
                        {/* <img className="w-1/5 mx-2" src={logo} alt="Loading" /> */}



                        <span className="food-fusion text-3xl text-[#cd3f14]">
                            FOOD-SKILL

                        </span>
                    </div>
                </div>
                <div className="flex items-center mx-4 space-x-4">
                    {/* <div className="text-center"> */}
                    <p className="font-semibold uppercase tracking-widest text-red-600">
                        Live Match
                    </p>
                    <p className="font-semibold uppercase tracking-widest text-red-600">
                        Schedule
                    </p>
                    <p className="font-semibold uppercase tracking-widest text-red-600">
                        About
                    </p>

                    {/* </div> */}
                </div>

            </nav>
        </>
    );
};
export default Navbar;