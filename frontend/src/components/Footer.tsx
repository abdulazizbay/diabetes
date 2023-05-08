import Link from './Link';
import { GoMarkGithub } from 'react-icons/go';

export const currentDayName = () => {
  const date = new Date();
  return date.toLocaleString('default', { weekday: 'long' });
};

const Footer = () => {
  return (
    <footer>
      <div className="my-10 flex flex-col items-center ">
        <div className="hidden mb-2 text-sm text-gray-500 sm:flex sm:items-center">
          <div className="mx-1">
            <Link
              href="https://github.com/iamalaziz"
              className="link-underline"
            >
              Mashrabov Abdulaziz{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/" className="link-underline">
              Have a good {currentDayName()} !
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link
              href="https://github.com/iamalaziz"
              className="link-underline"
            >
              <i>
                <GoMarkGithub />
              </i>
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link
              href={'https://github.com/iamalaziz/diabetes-ml'}
              className="link-underline"
            >
              Abdulaziz Mashrabov{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
