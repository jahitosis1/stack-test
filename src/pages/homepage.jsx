import { Link } from "react-router-dom";
import gLogo from "/googleLogo.svg";
import rArrow from "/right_arrow.svg";

function HomePage(props) {
  return (
    <div className="bg-backgrouund-300 min-h-screen flex flex-col justify-center items-center">
      {/* Main Card */}
      <div className="flex flex-row outline-gray-300 outline outline-1 min-w-[55rem] min-h-[35rem] drop-shadow-xl rounded-lg overflow-hidden">
        {/* Left Part */}
        <div className="flex flex-col px-14 bg-gradient-to-tl from-secondary-600 to-primary-400 justify-center items-center">
          <div className="w-64 h-64">
            <img
              src="/login_vector.png"
              className="pb-4"
              alt="login illustration"
            />
            <div className="text-white text-xl text-center font-bold">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="text-center text-sm font-light text-white pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pharetra.
            </p>
          </div>
        </div>
        {/* Right Part */}
        <div className="flex grow flex-col px-14 py-12 bg-white justify-between">
          <div className="flex flex-row">
            <div className="w-6 h-6 rounded-full bg-primary-600"></div>
            <div className="font-bold text-primary-800 pl-4">
              ICS-RESERVEASE
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold ">Welcome!</div>
            <div className="text-sm text-gray-500 pt-3">
              Login using your UP Mail.
            </div>
          </div>

          <div>
            <button className="flex flex-row px-8 py-3 rounded-md outline outline-1 outline-primary-100 bg-gradient-to-r from-secondary-600 to-primary-400">
              <img className="pr-4" src={gLogo}></img>
              <div className="text-white font-bold ">
                Continue using UP Mail
              </div>
            </button>
          </div>

          <div className="flex flex-row flex-wrap justify-evenly text content-center items-center">
            <div className="text-sm text-gray-500">
              Don't have a UP Mail account?
            </div>
            <img className="pr-4 w-7 h-7" src={rArrow}></img>
            <div className="">
              <Link to="/view-room">
                <button className="px-4 py-2 outline outline-1 outline-primary-700 rounded-lg text-sm text-primary700">
                  Continue as Guest
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
