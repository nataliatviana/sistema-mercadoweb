const BASE_URL = "http://localhost:3000/users";

// LISTAR TODOS USUÁRIOS
export async function getUsers(token: any) {
    const res = await fetch(BASE_URL, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
    }

    // BUSCAR USUÁRIO POR ID
    export async function getUserById(id: any, token: any) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
    }

    // CRIAR USUÁRIO
    export async function createUser(data: any) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
    }

    // ATUALIZAR USUÁRIO
    export async function updateUser(id: any, data: any, token: any) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    return res.json();
    }

    // DELETAR USUÁRIO
    export async function deleteUser(id: any, token: any) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    return res.json();
}
