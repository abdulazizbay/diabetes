import { NavLink } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <div className="mt-40">
      <div className="relative isolate ">
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="/inprogress" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="px-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:p-0">
              Empowering You with the Knowledge to Manage Your Health
            </h1>
            <p className="mt-6 px-2 text-md leading-8 text-gray-600 sm:text-lg sm:px-0">
              Welcome to Diabetes Predictor, a powerful tool that helps you
              identify the risk of diabetes early on. Our app uses advanced
              algorithms and machine learning to analyze your health data and
              provide accurate predictions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/calculator"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </NavLink>
              <NavLink
                to="/inprogress"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
