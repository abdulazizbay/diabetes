import InputForm from '../components/Form';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const CalcScreen = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:px-8 sm:py-6">
      <div className="flex items-center py-3 px-5 w-full top-0 z-40 backdrop-blur bg-white/30 rounded-md border border-slate-900/10">
        <span className="mr-3">
          <AiOutlineExclamationCircle size={30} style={{ color: 'black' }} />
        </span>
        <p className="font-light text-xs sm:text-sm">
          While the app may provide some initial indications, it is not yet
          accurate enough to make a definitive diagnosis.
        </p>
      </div>
      <div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Risk Predictor
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          To find out your risk of developing diabetes within the next five
          years, complete the following short questions.
        </p>
        <div className="mt-10 justify-center gap-x-6">
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default CalcScreen;
