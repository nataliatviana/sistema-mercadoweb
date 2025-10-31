import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const login = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'rodrigo@example.com' && senha === '123') {
      navigate('/usuarios');
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="welcome-title">Bem-vindo, faça login na sua conta</h1>
        <p className="welcome-subtitle">
          É um grande prazer tê-lo <br /> conosco!
        </p>

        <form onSubmit={login} className="login-form">
          <input
            type="email"
            placeholder="Digite seu email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="login-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}