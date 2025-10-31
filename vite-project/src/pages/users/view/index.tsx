import { useParams } from "react-router-dom";
import { users } from "../../../types/user.type";
import UserForm from "../FormUser";

export default function ViewUser(){
    const {id} = useParams();

    const user = users.find(u=> u.id.toString() === id);

    return (
        <UserForm title="Visualizar usuário" user={user}></UserForm>
    )
}