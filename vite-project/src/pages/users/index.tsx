// src/pages/users/index.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftBar from "../../components/LeftBar";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import Modal from "../../components/Modal";
import { getUsers, deleteUser } from "../../api/user.api";

export default function Usuarios() {
  const [users, setUsers] = useState<any[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<any>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers(token);
      setUsers(data);
    } catch (err: any) {
      alert("Erro ao buscar usuários: " + err.message);
    }
  };

  const openModal = (user: any) => {
    setUserToDelete(user);
    setIsOpenModal(true);
  };

  const confirmDelete = async () => {
    if (!userToDelete) return;
    try {
      await deleteUser(userToDelete._id, token);
      setUsers(users.filter(u => u._id !== userToDelete._id));
      setIsOpenModal(false);
      setUserToDelete(null);
    } catch (err: any) {
      alert("Erro ao deletar usuário: " + err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      <LeftBar />
      <main className="flex-1 p-8 flex flex-col gap-10">
        <div className="flex items-center justify-around header-title">
          <h1 className="text-center text-xl font-semibold title">Usuários</h1>
          <button onClick={() => navigate("/usuarios/novo")} className="btn btn-primary">
            Adicionar usuário
          </button>
        </div>

        {isOpenModal && (
          <Modal title="Deseja realmente excluir esse usuário?" onClose={() => setIsOpenModal(false)}>
            <div className="flex flex-col gap-5">
              <div>
                <p>Nome: {userToDelete?.name}</p>
                <p>Email: {userToDelete?.email}</p>
              </div>
              <div className="flex justify-around">
                <button className="btn btn-info" onClick={confirmDelete}>Sim</button>
                <button onClick={() => setIsOpenModal(false)} className="btn btn-error">Não</button>
              </div>
            </div>
          </Modal>
        )}

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 px-7 mt-20 user-div">
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
                <tr key={user._id}>
                  <td><img width={50} src={user.img || "https://img.daisyui.com/images/profile/demo/5@94.webp"} alt="" /></td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>
                    <input type="checkbox" className="toggle" checked={user.active} readOnly />
                  </td>
                  <td className="flex gap-5 justify-center">
                    <MdDelete onClick={() => openModal(user)} cursor="pointer" size={25} />
                    <MdModeEditOutline onClick={() => navigate(`/usuarios/edit/${user._id}`)} cursor="pointer" size={25} />
                    <GrFormView onClick={() => navigate(`/usuarios/view/${user._id}`)} cursor="pointer" size={25} />
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
