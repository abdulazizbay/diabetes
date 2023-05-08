import { Formik, Field, Form } from 'formik';
import ButtonGroup from './ButtonGroup';

const FormSimple: React.FC = () => {
  const genderOptions: Option[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  const ageOptions: Option[] = [
    { value: 'under 35', label: 'Under 35' },
    { value: '35-44', label: '35-44' },
    { value: '45-54', label: '45-54' },
    { value: '55-64', label: '55-64' },
    { value: '65 or over 65', label: '65 or over 65' },
  ];

  const handleSubmit = (values: FormValues) => {
    console.log(values);
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
  return (
    <Formik
      initialValues={{
        gender: '',
        age: '',
        bmi: 0,
        bloodPressure: '',
        pregnancies: 0,
        weight: '',
        height: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="gender">What is your gender?</label>
            <Field
              name="gender"
              component={() => (
                <ButtonGroup
                  options={genderOptions}
                  value={values.gender}
                  onChange={(value: string) => {
                    setFieldValue('gender', value);
                  }}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 items-start my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="age">What is your age group?</label>
            <Field
              name="age"
              component={() => (
                <ButtonGroup
                  options={ageOptions}
                  value={values.age}
                  onChange={(value: string) => {
                    setFieldValue('age', value);
                  }}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="pregnancies">
              Pregnancies rate: {values.pregnancies}
            </label>
            <Field name="pregnancies">
              {({ field }: { field: any }) => (
                <input
                  type="range"
                  min={0}
                  required
                  max={10}
                  step={1}
                  id="pregnancies"
                  {...field}
                />
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="bloodPressure">
              What is your blood pressure level?
            </label>
            <Field
              type="number"
              name="bloodPressure"
              id="bloodPressure"
              className="block w-[80px] rounded-md text-center border-0 p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 focus:outline-none sm:text-sm sm:leading-2"
            />
          </div>
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
                    calculateBMI({ ...values, weight: e.target.value })
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
                    calculateBMI({ ...values, height: e.target.value })
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

interface Option {
  value: string;
  label: string;
}

interface FormValues {
  age: string;
  gender: string;
  bmi: number;
  bloodPressure: string;
  pregnancies: number;
  weight: string;
  height: string;
}

export default FormSimple;
