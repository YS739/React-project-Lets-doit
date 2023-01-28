import styled from 'styled-components';
import { colors } from '../../common/colors';

export const LoginContainer = styled.div`
  padding: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const Id = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 300px;
`;

export const Password = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  :focus-visible {
    outline: none;
  }
  padding-left: 10px;
`;

export const Error = styled.text`
  color: red;
  font-size: 12px;
  padding: 5px;
`;

export const ToSignUp = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const SignUp = styled.div`
  padding-left: 5px;
  font-weight: bold;
  cursor: pointer;
`;

export const BlueButton = styled.button`
  background-color: ${colors.GREY};
  border-radius: 5px;
  width: 250px;
  height: 40px;
  color: white;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: white;
  width: 250px;
  height: 40px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
