import { useState } from 'react';
import PasswordField from './PasswordField/PasswordField';
import Indicator from './Indicator/Indicator';

export default function App() {
  const [validate, setValidate] = useState('noText');
  console.log(validate);
  return (
    <div className="container">
      <PasswordField setValidation={setValidate} validate={validate} />
      <Indicator validate={validate} />
    </div>
  );
}
