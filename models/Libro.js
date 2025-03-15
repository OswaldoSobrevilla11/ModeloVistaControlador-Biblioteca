class Libro {
    constructor(idLibro, titulo, autor, genero, estado) {
        this.idLibro = idLibro;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.estado = estado; // Ejemplo: "disponible", "prestado"
    }
}
export default Libro;
