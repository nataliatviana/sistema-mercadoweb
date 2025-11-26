import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const [nome, setNome] = useState<string>(""); 
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [idade, setIdade] = useState<string>("");
    const [erro, setErro] = useState<string>("");
    const [sucesso, setSucesso] = useState<string>("");

const navigate = useNavigate();

const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");
    setSucesso("");

    try {
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: nome,
            email,
            password: senha,
            cpf,
            age: idade ? Number(idade) : undefined,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar usuário");
    }

    setSucesso("Usuário criado com sucesso!");

    setTimeout(() => {
        navigate("/login");
    }, 1500);
    } catch (error: any) {
        setErro(error.message);
    }
};

return (
    <div className="register-container">
        <div className="register-box">
            <h2 className="register-title">Cadastro de Usuário</h2>
            <p className="register-subtitle">Preencha os dados abaixo</p>

        {erro && <p className="error-message">{erro}</p>}
        {sucesso && <p className="success-message">{sucesso}</p>}

        <form onSubmit={handleRegister} className="register-form">
        <input
            type="text"
            placeholder="Digite seu nome"
            className="register-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
        />

        <input
            type="email"
            placeholder="Digite seu email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <input
            type="password"
            placeholder="Digite sua senha"
            className="register-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
        />

        <input
            type="text"
            placeholder="Digite seu CPF"
            className="register-input"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
        />

        <input
            type="number"
            placeholder="Digite sua idade"
            className="register-input"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
        />

            <button type="submit" className="register-button">
                Cadastrar
            </button>
        </form>

        <p className="login-link">
            Já tem uma conta? <span onClick={() => navigate("/login")}>Faça login</span>
        </p>
        </div>
    </div>
    );
}
