import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: senha
        })
      });

      if (!response.ok) {
        alert("Email ou senha incorretos");
        return;
      }

      const data = await response.json();

      localStorage.setItem("token", data.acessToken);

      navigate("/usuarios");

    } catch (error) {
      alert("Erro ao tentar fazer login");
      console.error(error);
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
