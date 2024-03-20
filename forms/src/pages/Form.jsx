import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function Form() {
  const schema = yup.object().shape({
    username: yup.string().required('Campo nescessário'),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(6).max(50).required(),
    confirmation: yup
      .string()
      .oneOf([yup.ref('password')], null)
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="username"
        placeholder="Username"
        {...register('username')}
      />

      <p>{errors.username?.message}</p>

      <input
        type="email"
        id="email"
        placeholder="Email"
        {...register('email')}
      />

      <p>{errors.email?.message}</p>

      <input type="number" id="age" placeholder="Age" {...register('age')} />

      <p>{errors.age?.message}</p>

      <input
        type="password"
        id="password"
        placeholder="Password"
        {...register('password')}
      />

      <p>{errors.password?.message}</p>

      <input
        type="password"
        id="confirmation"
        placeholder="Confirmation"
        {...register('confirmation')}
      />

      <p>{errors.confirmation?.message}</p>

      <button type="submit">Send</button>
    </StyledForm>
  );
}

export default Form;
