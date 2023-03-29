import styled from "styled-components";




function LoginForm({ handleSubmit }) {
  return (
    <Wrapper id="login-form" onSubmit={handleSubmit}>
      <Labels>
        Email:
        <Data type="email" placeholder="me@you.com" />
      </Labels>
      <Labels>
        Password:
        <Data type="password" />
      </Labels>
      <Button type="submit" >Log In</Button>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: max-content;
  margin: 16px auto;
  border: 1px dotted silver;
  padding: 26px 32px 32px;
  border-radius: 2px;
`;

const Labels = styled.label`
  display: block;
  margin-bottom: 24px;
`;

const Data = styled.input`
  display: block;
  width: 175px;
  border: 1px solid black;
  border-bottom-width: 0.5px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;

  &:focus {
    outline: 1px inset slateRed;
    outline-offset: 1px;
    border-color: transparent;
  }
`;

//Props Is the short form of Properties

const Button = styled.button.attrs((props) => ({ type: "submit" }))`
  /* your styles here */
  display: block;
  margin-top: 40px;
  width: 100%;
  background: black;
  color: white;
  padding: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover {
    outline: none;
    background: red;
  }

  &:focus {
    outline: 3px auto blue;
    background: blue;
    outline-offset: 2px;
  }
`;



export default LoginForm;
