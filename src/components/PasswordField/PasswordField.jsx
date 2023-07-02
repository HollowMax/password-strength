import { useState } from 'react';

export default function PasswordField({ setValidation }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const onTextInput = el => {
    const {
      target: { value: data },
    } = el;

    if (data.length === 0) {
      setValidation('noText');
    } else if (data.length < 8) {
      setValidation('short');
    } else if (
      /[a-zA-Z]/.test(data) &&
      /\d/.test(data) &&
      /[!@#$%^&*()]/.test(data)
    ) {
      setValidation('strong');
    } else if (
      (/[a-zA-Z]/.test(data) && /[!@#$%^&*()]/.test(data)) ||
      (/\d/.test(data) && /[a-zA-Z]/.test(data)) ||
      (/[!@#$%^&*()]/.test(data) && /\d/.test(data))
    ) {
      setValidation('medium');
    } else if (
      /^[a-zA-Z]+$/.test(data) ||
      /^\d+$/.test(data) ||
      /^[!@#$%^&*()]+$/.test(data)
    ) {
      setValidation('easy');
    }
  };

  const onCheck = el => setPasswordShown(el.target.checked);

  return (
    <form className="main-form">
      <input
        className="main-form__input"
        type={passwordShown ? 'text' : 'password'}
        onChange={onTextInput}
      />
      <label className="main-form__label">
        <input className="main-form__checkbox" type="checkbox" onClick={onCheck} />
        Show password
      </label>
    </form>
  );
}
