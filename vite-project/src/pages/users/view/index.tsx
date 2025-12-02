import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserForm from "../FormUser";

export default function ViewUser() {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        })
        .catch(err => {
            console.error("Erro ao buscar usuário:", err);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (!user) return <div>Usuário não encontrado</div>;

    return <UserForm title="Visualizar usuário" user={user} />;
}
