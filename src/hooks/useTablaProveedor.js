import { useState } from "react";
import Swal from "sweetalert2";
import { alertaSuccess, alertaError, alertaWarning } from "../alertas";

const useTablaProveedor = () => {
    const [proveedores, setProveedores] = useState([]);
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [rtn, setRtn] = useState("");
    const [direccion, setDireccion] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tituloModal, setTituloModal] = useState("");
    const [operacion, setOperacion] = useState("");

    const getProveedor = () => {
        const localStorageProveedores = localStorage.getItem("PROVEEDORES");
        const parsedProveedores = localStorageProveedores ? JSON.parse(localStorageProveedores) : [];

        return Array.isArray(parsedProveedores) ? parsedProveedores : [];
    };

    const enviarSolicitud = (metodo, parametros = {}) => {
        const saveUpdateProveedor = [...proveedores];
        let mensaje = "";

        if (metodo === "POST") {
            saveUpdateProveedor.push({ ...parametros, id: Date.now() });
            mensaje = "Proveedor ingresado correctamente";
        } else if (metodo === "PUT") {
            const proveedorIndex = saveUpdateProveedor.findIndex(
                (proveedor) => proveedor.id === parametros.id
            );

            if (proveedorIndex !== -1) {
                saveUpdateProveedor[proveedorIndex] = { ...parametros };
                mensaje = "Proveedor actualizado correctamente";
            }
        } else if (metodo === "DELETE") {
            const proveedorArr = saveUpdateProveedor.filter(
                (proveedor) => proveedor.id !== parametros.id
            );
            localStorage.setItem("PROVEEDORES", JSON.stringify(proveedorArr));
            alertaSuccess("Proveedor eliminado correctamente");
        }

        localStorage.setItem("PROVEEDORES", JSON.stringify(saveUpdateProveedor));
        setProveedores(saveUpdateProveedor);
        alertaSuccess(mensaje);
        document.getElementById("btnCerrarModal").click();
    };

    const validar = () => {
        let metodo = "";

        if (nombre === "") {
            alertaWarning("Nombre del proveedor en blanco", "nombre");
        } else if (rtn === "") {
            alertaWarning("RTN del proveedor en blanco", "rtn");
        } else if (direccion === "") {
            alertaWarning("Dirección del proveedor en blanco", "direccion");
        } else if (correo === "") {
            alertaWarning("Correo del proveedor en blanco", "correo");
        } else if (telefono === "") {
            alertaWarning("Teléfono del proveedor en blanco", "telefono");
        } else {
            let payload = {
                id: id || Date.now(),
                nombre: nombre,
                rtn: rtn,
                direccion: direccion,
                correo: correo,
                telefono: telefono,
            };

            if (operacion === 1) {
                metodo = "POST";
            } else {
                metodo = "PUT";
            }

            enviarSolicitud(metodo, payload);
        }
    };

    const openModal = (valorOperacion, proveedor) => {
        if (valorOperacion === 1) {
            setTituloModal("Registrar Proveedor");
            setId("");
            setNombre("");
            setRtn("");
            setDireccion("");
            setCorreo("");
            setTelefono("");
            setOperacion(1);
        } else if (valorOperacion === 2) {
            setTituloModal("Editar Proveedor");
            setId(proveedor.id);
            setNombre(proveedor.nombre);
            setRtn(proveedor.rtn);
            setDireccion(proveedor.direccion);
            setCorreo(proveedor.correo);
            setTelefono(proveedor.telefono);
            setOperacion(2);
        }
    };

    const deleteProveedor = (id) => {
        Swal.fire({
            title: "¿Está seguro de eliminar el proveedor?",
            icon: "question",
            text: "No habrá marcha atrás",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                enviarSolicitud("DELETE", { id });
            }
        }).catch((error) => {
            alertaError(error);
        });
    };

    return {
        getProveedor,
        proveedores,
        setProveedores,
        nombre,
        setNombre,
        rtn,
        setRtn,
        direccion,
        setDireccion,
        correo,
        setCorreo,
        telefono,
        setTelefono,
        openModal,
        validar,
        tituloModal,
        deleteProveedor,
    };
};

export default useTablaProveedor;