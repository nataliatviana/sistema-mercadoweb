import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import UserForm from "../FormUser";
import { getUserById } from "../../../api/user.api";

export default function ViewUser() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (id) {
        const token = localStorage.getItem("token") || "";
        getUserById(id, token)
            .then(setUser)
            .catch(err => alert("Erro ao buscar usuário: " + err.message));
        }
    }, [id]);

    return user ? (
        <UserForm
        title="Visualizar Usuário"
        user={user}
        onSubmit={undefined}
        />
    ) : (
        <p>Carregando usuário...</p>
    );
}
