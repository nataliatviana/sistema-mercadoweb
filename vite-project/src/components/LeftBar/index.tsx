import "./index.css";

export default function LeftBar() {
  return (
   <div className="bg-[#152259] w-60 min-h-screen flex flex-col py-8 gap-20 ">
  
        <div className="flex flex-col items-center gap-3 logo">
            <img width={65} height={65} src="../src/assets/logo.png" alt="Logo" />
            <h2 className="text-white text-lg font-semibold">Administrativo</h2>
        </div>

        <div className="flex flex-col gap-6 w-full">
            <p className="text-white size-14 font-semibold itensBar">Dashboard</p>
            <p className="text-white size-14 font-semibold itensBar">Produtos</p>
            <p className="text-white size-14 font-semibold itensBar">Usuários</p>
        </div>
    </div>
  );
}
