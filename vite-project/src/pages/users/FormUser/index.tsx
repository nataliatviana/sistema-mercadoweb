import LeftBar from "../../../components/LeftBar";
import type { User } from "../../../types/user.type";
import "./index.css";
import { useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface userFormProps {
    user?: User
    onSubmit?: (data: User) => void;
    title: string;
}

export default function UserForm(props: userFormProps) {
    const navigate = useNavigate();

    const location = useLocation();

    const isView = location.pathname.toLowerCase().includes("view");

    const [formData, setFormData] = useState({
        name: props.user?.name ?? "",
        email: props.user?.email,
        phone: props.user?.telefone,
        role: props.user?.role,
        isActive: props.user?.isActive,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (props.onSubmit)
            props.onSubmit({
                name: formData.name,
                email: formData.email || "",
                id: 1,
                img: "",
                isActive: formData.isActive || true,
                role: "admin",
                telefone: formData.phone || ""
            });
    };

    return (
        <div className="flex min-h-screen">
            <LeftBar />
            <main className="flex-1 p-8 flex flex-col items-center">
                <h1 className="text-2xl font-semibold title">{props.title}</h1>

                <form onSubmit={(e) => handleSubmit(e)} className="form-funcionario rounded-2xl p-10 flex flex-col gap-6 w-full max-w-lg">
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Digite o nome completo"
                            className="input input-bordered"
                            required
                            disabled={isView}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange(e)}
                            type="email"
                            placeholder="Digite o e-mail"
                            className="input input-bordered"
                            required
                            disabled={isView}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="text"
                            placeholder="Digite o telefone"
                            className="input input-bordered"
                            disabled={isView}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="role">Cargo</label>
                        <input
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            type="text"
                            placeholder="Ex: Gerente, Analista..."
                            className="input input-bordered"
                            disabled={isView}
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="isActive">Ativo</label>
                        <input
                            id="isActive"
                            name="isActive"
                            type="checkbox"
                            checked={formData.isActive}
                            onChange={handleChange}
                            className="toggle"
                            disabled={isView}
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        {!isView && (
                            <button type="submit" className="btn btn-success">
                                Salvar
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => navigate("/usuarios")}
                            className="btn btn-error"
                        >
                            Voltar
                        </button>
                    </div>

                </form>
            </main>
        </div>
    );
}