class Prestamo {
    constructor(idPrestamo, idLibro, idUsuario, fechaInicio, fechaVencimiento) {
        this.idPrestamo = idPrestamo;
        this.idLibro = idLibro;
        this.idUsuario = idUsuario;
        this.fechaInicio = fechaInicio;
        this.fechaVencimiento = fechaVencimiento;
    }
}

export default Prestamo;