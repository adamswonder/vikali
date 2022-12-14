import React from 'react'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  };
`

const Container = styled.div`
  background-image: linear-gradient(0deg, rgba(170, 255, 169, 1)11.2%, rgba(17, 255, 189, 1)91.1%);
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 25rem;
  margin: 0 auto;
`

const Title = styled.h1`
  color: #00805b;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.0625rem;
  margin-bottom: 0rem;
`

const Subtitle = styled.h3`
  color: #00805b;
  font-weight: 100;
  text-align: center;
  letter-spacing: 0.0625rem;
  padding: 0 3rem;
`

const Input = styled.input`
  color: #00805b;
  font-size: 1.125rem;
  background: none;
  border: none;
  border-bottom: 0.0625rem solid #00cc92;
  margin: 2.5rem 0;
  width: 90%;
  display: block;
  ::placeholder {
    color: #00cc92;
  };
  :focus {
    outline: none;
  };
`

const Validation = styled.p`
  color: #00805b;
  font-weight: 100;
  font-size: 0.75rem;
`

const Submit = styled.input`
  font-size: 1.3rem;
  background: none;
  color: #00805b;
  width: 75%;
  border-radius: 1.56rem;
  border: 0.0625rem solid #00cc92;
  margin: 2.5rem;
  padding: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: #00cc92;
  };
  :focus {
    outline: none;
    background-color: #00cc92;
  };
`

function Form() {

    const { register, handleSubmit, errors, reset } = useForm()

    const onSubmit = (data) => {
        reset()
        console.log(data)
    }

    return (
        <div>
            <GlobalStyle />
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
            </Helmet>
            <Container>
                <Title>Almost There!</Title>
                <Subtitle>Create your account to join the fun.</Subtitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input
                            type='text'
                            name='username'
                            placeholder='username'
                            ref={
                                register({
                                    required: 'username required',
                                    pattern: {
                                        value: /^[a-z][a-z0-9]{3,14}$/i,
                                        message: 'Username must be 5 - 15 characters long, must start with a letter, only alphanumeric characters allowed, only lowercase letters allowed'
                                    }
                                })
                            }
                        />
                        {errors.username && <Validation><em>{errors.username.message}</em></Validation>}
                    </div>
                    <div>
                        <Input
                            type='text'
                            name='email'
                            placeholder='email'
                            ref={register({ required: 'email required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, message: 'Please enter a valid email' } })}
                        />
                        {errors.email && <Validation><em>{errors.email.message}</em></Validation>}
                    </div>
                    <div>
                        <Input
                            type='password'
                            name='password'
                            placeholder='password'
                            ref={
                                register({
                                    required: 'password required',
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/i,
                                        message: 'Password must be 8 - 15 characters long, must contain one UPPERCASE letter, must contain one lowercase letter, must contain one number, must contain one special character: @$! % * ? &'
                                    }
                                })
                            }
                        />
                        {errors.password && <Validation><em>{errors.password.message}</em></Validation>}
                    </div>
                    <Submit type='submit' value='Create Account' />
                </form>
            </Container>
        </div>
    );
}

export default Form;