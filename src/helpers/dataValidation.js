import Swal from "sweetalert2"

export const dataValidation = (values) => {
    if (values.name.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido',
            text: 'Debe contener más de 3 letras'
        })
        return false
    }

    if (values.lastName.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Apellido inválido',
            text: 'Debe contener más de 4 letras'
        })
        return false
    }

    if (values.phone.length !== 10 || values.phone2.length !== 10) {
        Swal.fire({
            icon: 'error',
            title: 'Teléfono inválido',
            text: 'Debe tener 10 dígitos'
        })
        return false
    }

    if (values.phone !== values.phone2) {
        Swal.fire({
            icon: 'error',
            title: 'Teléfono inválido',
            text: 'Los teléfonos deben ser iguales'
        })
        return false
    }

    return true
}