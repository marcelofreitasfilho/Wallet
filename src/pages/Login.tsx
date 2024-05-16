import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserEmail } from '../redux/actions';

function Login() {
  const [userEmail, setEmail] = useState('');
  const [userSenha, setUserSenha] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const emailValidation = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    return isValid;
  };

  const newSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSenha(e.target.value);
  };

  const senhaValidation = (senha: string) => {
    if (senha.length >= 6) {
      return true;
    }
  };

  const habilitaBtn = emailValidation(userEmail) && senhaValidation(userSenha);

  const walletPage = () => {
    dispatch(setUserEmail(userEmail));
    navigate('/carteira');
  };

  return (
    <div>
      <label htmlFor="email">email:</label>
      <input
        type="email"
        name="email"
        id="email"
        data-testid="email-input"
        value={ userEmail }
        onChange={ newEmail }
      />
      <br />
      <label htmlFor="senha">senha:</label>
      <input
        type="password"
        name="senha"
        id="senha"
        data-testid="password-input"
        value={ userSenha }
        onChange={ newSenha }
      />
      <br />
      <button onClick={ walletPage } disabled={ !habilitaBtn }>
        Entrar
      </button>
    </div>
  );
}
export default Login;
