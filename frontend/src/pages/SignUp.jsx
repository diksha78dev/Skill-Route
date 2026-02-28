import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-white transition-colors">
      <div className="flex justify-center items-center py-20 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
            Join SkillRoute and start learning
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center transition-colors">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
