import { MdDelete, MdModeEditOutline } from "react-icons/md";
import LeftBar from "../../components/LeftBar";
import { type User, users } from "../../types/user.type";
import "./index.css";
import { GrFormView } from "react-icons/gr";
import { useState } from "react";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";


export default function Usuarios() {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  const openModal = (user: User) => {
    setUser(user);
    setIsOpenModal(true);
  }


  return (
    <div className="flex min-h-screen">
      <LeftBar>

      </LeftBar>
      <main className="flex-1 p-8 flex flex-col gap-10">
        <div className="flex items-center justify-around header-title">
          <h1 className="text-center text-xl font-semibold title">Usuários</h1>
          <button onClick={()=> navigate("/usuarios/novo")} className="btn btn-primary button">Adicionar usuário</button>
        </div>

        {isOpenModal && (
          <Modal title="Deseja realmente excluir esse usuário?" onClose={() => setIsOpenModal(false)}>
            <div className="flex flex-col gap-5">
              <div>
                <p>Nome do usuário : {user?.name}</p>
                <p>Email: {user?.email}</p>
              </div>
              <div className="flex justify-around">
                <button className="btn btn-info">Sim</button>
                <button onClick={() => setIsOpenModal(false)} className="btn btn-error">Não</button>
              </div>
            </div>
          </Modal>
        )}

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 px-7 mt-20 user-div ">
          <table className="table w-full table-css">
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Role</th>
                <th>Email</th>
                <th>Ativo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td><img width={50} src={user.img} alt="" /></td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td><input size={25} type="checkbox" checked={user.isActive} className="toggle" /></td>
                  <td className="flex gap-5 justify-center">
                    <MdDelete onClick={() => openModal(user)} cursor={"pointer"} size={25} />
                    <MdModeEditOutline onClick={()=> navigate(`/usuarios/edit/${user.id}`)} cursor={"pointer"} size={25} />
                    <GrFormView onClick={() => navigate(`/usuarios/view/${user.id}`)} cursor={"pointer"} size={25} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}