export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "manager";
  isActive: boolean;
  img:string;
}

export const users: User[] = [
  { id: 1, name: "Rodrigo Lucas", email: "rodrigo@example.com", role: "admin", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 2, name: "Ana Souza", email: "ana@example.com", role: "user", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 3, name: "Carlos Lima", email: "carlos@example.com", role: "manager", isActive: false,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 4, name: "Mariana Costa", email: "mariana@example.com", role: "user", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 5, name: "João Pedro", email: "joao@example.com", role: "user", isActive: false,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 6, name: "Fernanda Alves", email: "fernanda@example.com", role: "manager", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 7, name: "Lucas Martins", email: "lucas@example.com", role: "user", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 8, name: "Beatriz Nunes", email: "beatriz@example.com", role: "admin", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 9, name: "Rafael Santos", email: "rafael@example.com", role: "user", isActive: false,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
  { id: 10, name: "Patrícia Oliveira", email: "patricia@example.com", role: "manager", isActive: true,img:"https://img.daisyui.com/images/profile/demo/5@94.webp" },
];
