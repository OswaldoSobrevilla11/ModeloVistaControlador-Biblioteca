import FirebaseDAO from "../DAOs/FirebaseDAO.js";
import Libro from "../models/Libro.js";

export default class LibroController {
    static async agregarLibro(libro) {
        return await FirebaseDAO.agregarDocumento("libros", {
            titulo: libro.titulo,
            autor: libro.autor,
            genero: libro.genero,
            estado: "disponible", // Todos los libros se agregan como disponibles
        });
    }

    static async buscarLibros(campo, valor) {
        const librosData = await FirebaseDAO.buscarDocumento("libros", campo, valor);
        
        // Filtrar solo los libros disponibles
        return librosData.filter(libro => libro.estado === "disponible");
    }
}