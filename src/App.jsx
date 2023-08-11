import "./App.css";

function App() {
  return (
    <>
      <section className="flex w-full h-screen bg-white">
        <div className="w-1/2 h-full bg-quaapay-indigo"></div>
        <div className="w-1/2">
          <div className="w-80 h-[450px] ml-11 mt-24">
            <div className="text-left">
              <h1 className="text-black font-bold leading-[40px] text-3xl">
                Welcome Back!
              </h1>
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
                  <input type="checkbox" name="remember" id="remember" />{" "}
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
                  width="20"
                  height="20"
                  src="https://img.icons8.com/color/20/google-logo.png"
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
      </section>
    </>
  );
}

export default App;
