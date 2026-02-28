import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-transparent text-gray-900 dark:text-white transition-colors">
      <div className="flex justify-center items-center py-20 px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm dark:shadow-none transition-colors">
          <h2 className="text-2xl font-bold mb-2">Sign In</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
            Welcome back to SkillRoute
          </p>

          <form className="space-y-4">
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

            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center transition-colors">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
