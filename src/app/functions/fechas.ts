export function restarFechas(_fecha: Date, _otraFecha: Date) {
    const fecha = new Date(_fecha)
    const otraFecha = new Date(_otraFecha)
    fecha.setHours(0, 0, 0);
    otraFecha.setHours(0, 0, 0);
    return Math.round((fecha.getTime() - otraFecha.getTime()) / (1000 * 60 * 60 * 24))
}