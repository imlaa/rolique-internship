import styled from 'styled-components';

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
    
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #E5E5E5;
`;

const LoginForm = styled.form`
  width: 408px;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  padding: 23px 32px 56px;

  background: rgba(255, 255, 255, 0.55);
  
  border: 1px solid rgba(191, 191, 191, 0.5);
  border-radius: 12px;
`;

const LoginTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  
  height: 22px;
  margin: 0 0 24px;

  color: #151515;

  opacity: 0.9;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 32px;
  
  padding: 0 0 0 12px;

  outline: none;
  
  border: 1px solid #BFBFBF;
  border-radius: 6px;
  
  &:focus {
    border: 1px solid rgba(255, 101, 14, 0.5);
    filter: drop-shadow(0 0 rgba(255, 101, 14, 0.25));
  }
`;

const LoginLabel = styled.div`
  width: 100%;
  height: 17px;
  
  margin: 0 0 8px 0;
  
  font-weight: normal;
  font-size: 14px;
  
  color: rgba(0, 0, 0, 0.6);
`;

const LoginButton = styled.button`
  width: 100%;
  height: 33px;
  
  margin: 24px 0 0 0;
  padding: 8px 150px;
  
  outline: none;
  border: none;
  border-radius: 8px;
  
  cursor: pointer;
  
  background: linear-gradient(to right, rgba(255, 101, 14, 1), rgba(255, 101, 14, 1));

  font-weight: normal;
  font-size: 14px;
  color: #FFFFFF;
`;

const LoginError = styled.div`
  width: 100%;
  height: 29px;
  
  margin: 0 0 24px 0;
  padding: 0 0 0 16px;
  
  align-items: center;

  background-color: #FEEFEF;
  
  border-radius: 8px;

  font-weight: normal;
  font-size: 14px;
  color: rgba(218, 20, 20, 1);
  
  & img {
    margin: 0 8px 0 0;
  }
`

export {
    LoginContainer,
    LoginForm,
    LoginTitle,
    LoginInput,
    LoginLabel,
    LoginButton,
    LoginError
};