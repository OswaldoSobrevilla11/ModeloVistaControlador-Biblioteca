import FirebaseDAO from "../DAOs/FirebaseDAO.js";
import Usuario from "../models/Usuario.js";

export default class UsuarioController {
    static async agregarUsuario(usuario) {
        return await FirebaseDAO.agregarDocumento("usuarios", {
            nombre: usuario.nombre,
            email: usuario.email,
        });
    }

    static async listarUsuarios() {
        const usuariosData = await FirebaseDAO.obtenerDocumentos("usuarios");
        return usuariosData.map(data => new Usuario(data.id, data.nombre, data.email));
    }
}