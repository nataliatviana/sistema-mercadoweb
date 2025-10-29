import LeftBar from "../../components/LeftBar";
import { users } from "../../types/user.type";
import "./index.css";

export default function Usuarios() {
  return (
    <div className="flex min-h-screen">
      <LeftBar>

      </LeftBar>
      <main className="flex-1 p-8 flex flex-col gap-10">
        <h1 className="text-center text-xl font-semibold title">Usuários</h1>

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 px-7 mt-20 user-div ">
          <table className="table w-full table-css">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Role</th>
                <th>Email</th>
                <th>Ativo</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td><input type="checkbox" checked={user.isActive} className="toggle" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}