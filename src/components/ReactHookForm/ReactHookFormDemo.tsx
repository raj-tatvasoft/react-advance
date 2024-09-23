import React from "react";
import { useForm, RegisterOptions, UseFormRegister } from "react-hook-form";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  validation?: RegisterOptions;
  register: UseFormRegister<any>;
  errors: { [key: string]: any };
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  validation,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name, validation)} />
      {errors[name] && <p>{errors[name]?.message?.toString()}</p>}
    </div>
  );
};

type FormData = {
  name: string;
};
const ReactHookFormDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Name"
        name="name"
        register={register}
        validation={{
          required: "This field is required",
          maxLength: { value: 2, message: "Len must be 2" },
        }}
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactHookFormDemo;
