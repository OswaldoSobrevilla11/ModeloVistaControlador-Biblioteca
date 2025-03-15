import FirebaseDAO from "../DAOs/FirebaseDAO.js";
import Prestamo from "../models/Prestamo.js";

export default class PrestamoController {
    static async registrarPrestamo(prestamo) { 
        // Registrar el préstamo en la base de datos
        await FirebaseDAO.agregarDocumento("prestamos", {
            idLibro: prestamo.idLibro,
            idUsuario: prestamo.idUsuario,
            fechaInicio: prestamo.fechaInicio,
            fechaVencimiento: prestamo.fechaVencimiento,
        });

        // Actualizar el estado del libro a "prestado"
        await FirebaseDAO.actualizarDocumento("libros", prestamo.idLibro, {
            estado: "prestado"
        });
    }

    static async listarPrestamos() {
        return await FirebaseDAO.obtenerDocumentos("prestamos");
    }
}