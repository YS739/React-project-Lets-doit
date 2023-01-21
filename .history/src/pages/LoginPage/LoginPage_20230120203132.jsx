import { LoginContainer, Form, SignUp, BlueButton, Button } from './style';

const LoginPage = () => {
  return (
    <LoginContainer>
      <Form>
        이메일
        <input placeholder={'clonecodingsharespace@gmail.com'} />
        비밀번호
        <input />
      </Form>
      <BlueButton>로그인</BlueButton>

      <SignUp>
        <div>아이디가 없으신가요?</div>
        <div> 회원가입</div>
      </SignUp>
      <Button>구글 로그인</Button>
      <Button>Git Hub 로그인</Button>
    </LoginContainer>
  );
};

export default LoginPage;
