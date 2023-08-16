import "./App.css";
import heroImage from "./assets/hero.svg";
import appleLogo from "./assets/apple-icon.png";
import googleLogo from "./assets/google-logo.svg";
import googleStore from "./assets/google-play.svg";
import slideInfo from "./assets/slide-info.svg";

function App() {
  return (
    <>
      <section className="flex w-screen h-screen bg-white overflow-hidden">
        <div className="w-1/2 h-full bg-quaapay-indigo flex items-center justify-center flex-col">
          <img src={heroImage} alt="" className="scale-[.65]" />
          <div>
            <div className="text-left w-96 mx-0 my-auto text-white">
              <h1 className="font-medium text-xl mb-1.5 -mt-7">
                Introducing you to Quaapay Wallet
              </h1>
              <p className="font-normal text-xs">
                Downloading our mobile app, unlocks a world of possibilities for
                managing your finances, including seamless currency exchange,
                both locally and internationally.
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
        <div className="w-1/2 h-full flex justify-center flex-col">
          <div className="lg:w-80 lg:ml-12 md:w-72 md:h-auto md:ml-7">
            <div className="text-left">
              <h2 className="text-black font-bold leading-[40px] text-3xl">
                Welcome Back!
              </h2>
              <p className="text-sm">
                Input your details or use Quaapay wallet details to login to
                your account.
              </p>
            </div>
            <form className="flex flex-col items-start text-left mt-8 w-full">
              <label htmlFor="email" className="w-full mb-3">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                  placeholder="Enter your email address"
                />
              </label>
              <label htmlFor="password" className="w-full mb-5">
                Pasword
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                  placeholder="Enter Password"
                />
              </label>
              <div className="w-full flex justify-between">
                <label htmlFor="remember" className="text-sm">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="appearance-none border border-quaapay-indigo checked:bg-quaapay-indigo w-5 h-5 after:content-['✔'] after:text-white after:flex after:items-center after:justify-center"
                  />{" "}
                  Remember Me
                </label>

                <a href="#" className="text-quaapay-indigo text-sm">
                  Forgot your password?
                </a>
              </div>
            </form>
            <div>
              <button
                type="submit"
                className="w-full bg-quaapay-indigo rounded mt-8 mb-6 h-10 text-white"
              >
                Log In
              </button>
              <span>OR</span>
              <br />
              <button className="w-full border rounded mt-5 h-10 text-black flex items-center justify-center">
                <img
                  width="30"
                  height="30"
                  src={googleLogo}
                  alt="google-logo"
                  className="mr-2"
                />{" "}
                <a href="#">Login with Google</a>
              </button>
            </div>
            <p className="text-sm mt-5">
              Don't have an account?{" "}
              <a href="#" className="text-quaapay-indigo">
                Create Account
              </a>
            </p>
          </div>
        </div>

        {/* Create account */}
        <div className="w-1/2 h-full justify-center flex-col hidden ">
          <div className="lg:w-80 lg:ml-12 md:w-72 md:h-auto md:ml-7">
            <div className="text-left">
              <h2 className="text-black font-bold leading-[40px] text-3xl">
                Create Account
              </h2>
              <p className="text-sm">
                Welcome to our vibrant community where your journey to seamless information world begins.
              </p>
            </div>
            <form className="flex flex-col items-start text-left mt-8 w-full">
              <label htmlFor="email" className="w-full mb-3">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                  placeholder="Enter your email address"
                />
              </label>
              <label htmlFor="password" className="w-full mb-5">
                Password
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                  placeholder="Enter Password"
                />
              </label>
              <label htmlFor="confirmPassword" className="w-full mb-5">
                Re-Enter Password
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full bg-zinc-100 rounded mt-1 px-3 py-2"
                  placeholder="Enter Password Again"
                />
              </label>
            </form>
            <div>
              <button
                type="submit"
                className="w-full bg-quaapay-indigo rounded mt-8 mb-6 h-10 text-white"
              >
                Log In
              </button>
                <span>OR</span>
              <br />
              <button className="w-full border rounded mt-5 h-10 text-black flex items-center justify-center">
                <img
                  width="30"
                  height="30"
                  src={googleLogo}
                  alt="google-logo"
                  className="mr-2"
                />{" "}
                <a href="#">Sign up with Google</a>
              </button>
            </div>
            <p className="text-sm mt-5">
              Already have an account?{" "}
              <a href="#" className="text-quaapay-indigo">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
