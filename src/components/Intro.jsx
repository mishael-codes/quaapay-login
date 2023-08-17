import heroImage from "../assets/hero.png";
import appleLogo from "../assets/apple-icon.png";
import googleStore from "../assets/google-play.png";
import slideInfo from "../assets/slide-info.png";

export default function Intro() {
  return (
    <>
      <div className="w-1/2 h-full bg-quaapay-indigo flex items-center justify-center flex-col">
        <img src={heroImage} alt="" className="scale-[.65]" />
        <div>
          <div className="text-left w-96 mx-0 my-auto text-white">
            <h1 className="font-medium text-xl mb-1.5 -mt-7">
              Introducing you to Quaapay Wallet
            </h1>
            <p className="font-normal text-xs">
              Downloading our mobile app, unlocks a world of possibilities for
              managing your finances, including seamless currency exchange, both
              locally and internationally.
            </p>
          </div>
          <div className="w-full flex items-center justify-between mt-6">
            <a
              href="#"
              className="w-5/12 bg-white flex items-center justify-center rounded-[10px]"
            >
              <img
                width="30px"
                height="30px"
                src={appleLogo}
                alt="apple-logo"
              />
              <button className="text-left ml-1.5 text-xs p-2">
                Download on <br />
                <span className="font-bold text-black">Apple Store</span>
              </button>
            </a>
            <a
              href="#"
              className="w-5/12 bg-white flex items-center justify-center rounded-[10px]"
            >
              <img
                width="30px"
                height="30px"
                src={googleStore}
                alt="play-store"
              />
              <button className="text-left ml-1.5 text-xs p-2">
                Get on <br />
                <span className="font-bold text-black">Google Play</span>
              </button>
            </a>
          </div>
          <div>
            <img src={slideInfo} alt="" className="mt-8 mb-4" />
          </div>
        </div>
      </div>
    </>
  );
}
