import { useNavigate } from "react-router-dom";
import UserForm from "../FormUser";
import { createUser } from "../../../api/user.api";

export default function NewUser() {
    const navigate = useNavigate();

    const handleSubmit = async (data: any) => {
        try {
        await createUser(data);
        alert("Usuário criado com sucesso!");
        navigate("/usuarios");
        } catch (err: any) {
        alert("Erro ao criar usuário: " + err.message);
        }
    };

    return (
        <UserForm
        title="Novo Usuário"
        onSubmit={handleSubmit}
        />
    );
}
