import { getUsuario } from "../controllers/user.controller";

export const isAdmin = async (id) => {
    const { usuario } = await getUsuario(id)

    return (usuario.role_name == 'admin');
};

export const isTecnino = async (id) => {
    const { usuario } = await getUsuario(id)

    return (usuario.role_name == 'tecnico');
}