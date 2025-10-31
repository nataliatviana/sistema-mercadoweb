import { useParams } from "react-router-dom";
import UserForm from "../FormUser";
import { users, type User } from "../../../types/user.type";

export default function EditUser(){

    const {id} = useParams();

    const user = users.find(u=> u.id.toString() === id);

    const onSubmit = (data:User)=>{
        console.log(data);
    }

    return (
        <UserForm title="Editar funcionário"  onSubmit={(data:User)=> onSubmit(data)} user={user}>
            
        </UserForm>
    )
}