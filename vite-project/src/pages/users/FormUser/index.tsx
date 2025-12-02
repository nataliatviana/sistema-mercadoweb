import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface UserFormProps {
    title: string;
    user?: any;
    onSubmit?: (data: any) => void;
    }

    export default function UserForm({ title, user, onSubmit }: UserFormProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const isView = location.pathname.toLowerCase().includes("view");

    const [formData, setFormData] = useState({
        name: user?.name ?? "",
        email: user?.email ?? "",
        telefone: user?.telefone ?? "",
        role: user?.role ?? "",
        isActive: user?.isActive ?? true,
        img: user?.img ?? "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return (
        <div className="flex min-h-screen">
        <main className="flex-1 p-10 flex flex-col items-center">
            <h1 className="text-2xl font-semibold">{title}</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8 flex flex-col gap-5">

            <div className="flex flex-col">
                <label>Nome</label>
                <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isView}
                className="input input-bordered"
                required
                />
            </div>

            <div className="flex flex-col">
                <label>E-mail</label>
                <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isView}
                type="email"
                className="input input-bordered"
                required
                />
            </div>

            <div className="flex flex-col">
                <label>Telefone</label>
                <input
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                disabled={isView}
                className="input input-bordered"
                />
            </div>

            <div className="flex flex-col">
                <label>Cargo</label>
                <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled={isView}
                className="input input-bordered"
                />
            </div>

            <div className="flex items-center gap-4">
                <label>Ativo</label>
                <input
                name="isActive"
                type="checkbox"
                checked={formData.isActive}
                disabled={isView}
                onChange={handleChange}
                className="toggle"
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
