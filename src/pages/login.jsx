import Intro from "../components/Intro";
import googleLogo from "../assets/google-logo.png";
// import Signup from "./signup";

export default function Login() {
  return (
    <>
      <section className="flex w-screen h-screen bg-white overflow-hidden">
        <Intro />
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
              <a href="./signup" className="text-quaapay-indigo">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
