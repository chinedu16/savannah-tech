import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`mt-1 text-gray-600 block w-full py-3 px-3 text-sm border ${
          errors[name] ? 'border-red-500' : 'border-gray-300'
        } rounded-lg shadow-sm focus:outline-none`}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
    </div>
  );
};

export default InputField;
