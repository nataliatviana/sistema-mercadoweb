import type { User } from "../../../types/user.type";
import UserForm from "../FormUser";


export default function NewUser() {

    const onSubmit = (data:User) =>{
        console.log(data);
    }

    return(
        <UserForm title="Novo funcionário" onSubmit={(data:User)=> onSubmit(data)}>

        </UserForm>
    )
}
