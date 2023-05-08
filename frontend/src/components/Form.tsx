import { Formik, Field, Form } from 'formik';
import axios from 'axios';


export const FormItem = ({ question, keyword }: TFormItem) => {
  return (
    <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
      <label htmlFor={keyword}>{question}:</label>
      <Field
        type="number"
        name={keyword}
        required
        id={keyword}
        className="block w-[80px] rounded-md text-center border-0 p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 focus:outline-none sm:text-sm sm:leading-2"
      />
    </div>
  );
};

interface TFormItem {
  question: string;
  keyword: string;
}


const InputForm: React.FC = () => {
  const handleSubmit = (values:FormValues) => {
    values = {
      'glucose':values.glucose,
      'age': values.age,
      'bmi': values.bmi,
      'bloodPressure': values.bloodPressure, 
      'pregnancies': values.pregnancies, 
      'weight': values.weight, 
      'height': values.height, 
      'skinThickness': values.skinThickness,  
      'insulin': values.insulin, 
      'diabetesPedigreeFn': values.diabetesPedigreeFn,
    }
    console.log(values);
    axios.post('http://localhost:8000', values, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  };

  const calculateBMI = (values: FormValues) => {
    const weight = parseFloat(values.weight);
    const height = parseFloat(values.height);
    if (isNaN(weight) || isNaN(height) || height === 0) {
      return 0;
    }
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  };
  const questionsData = [
    { question: 'Pregnancies rate', keyword: 'pregnancies' },
    { question: 'Glucose', keyword: 'glucose' },
    { question: 'Blood Pressure', keyword: 'bloodPressure' },
    { question: 'Skin Thickness', keyword: 'skinThickness' },
    { question: 'Insulin', keyword: 'insulin' },
    { question: 'Diabets Pedigree Function', keyword: 'diabetesPedigreeFn' },
    { question: 'Your age', keyword: 'age' },
  ];
  
  return (
    <Formik
      initialValues={{
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        weight: '',
        height: '',
        diabetesPedigreeFn: '',
        age: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {questionsData.map(({ question, keyword }: TFormItem) => (
            <FormItem key={keyword} question={question} keyword={keyword} />
          ))}
          <div className="grid items-start grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="bmi">
              Enter your weight and height to calculate BMI (body fat):
            </label>
            <div className="flex">
              <input
                type="number"
                name="weight"
                id="weight"
                min="0"
                step="any"
                required
                onChange={(e) => {
                  setFieldValue('weight', e.target.value);
                  setFieldValue(
                    'bmi',
                    calculateBMI({
                      ...values,
                      weight: e.target.value,
                    })
                  );
                }}
                className="block w-[60px] rounded-md text-center border-0 p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 focus:outline-none sm:text-sm sm:leading-2"
              />
              <p className="px-2">/</p>
              <input
                type="number"
                name="height"
                required
                min="0"
                step="any"
                id="height"
                onChange={(e) => {
                  setFieldValue('height', e.target.value);
                  setFieldValue(
                    'bmi',
                    calculateBMI({
                      ...values,
                      height: e.target.value,
                    })
                  );
                }}
                className="block w-[60px] rounded-md text-center border-0 p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 focus:outline-none sm:text-sm sm:leading-2"
              />
              <p className="px-2">
                <sup>2 {'  '}</sup> =
              </p>
              <p className="px-2">{values.bmi}</p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 float-right rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold leading-5 text-white hover:bg-indigo-500"
          >
            Check <span aria-hidden="true">→</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

interface FormValues {
  pregnancies: string;
  glucose: string;
  bloodPressure: string;
  skinThickness: string;
  insulin: string;
  bmi: string;
  weight: string;
  height: string;
  diabetesPedigreeFn: string;
  age: string;
}

export default InputForm;
