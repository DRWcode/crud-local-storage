import React from 'react';
import Swal from 'sweetalert2';

const ProveedorList = ({ proveedores, deleteProveedor, setProveedorToEdit }) => {
    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProveedor(id);
                Swal.fire('Eliminado', 'El proveedor ha sido eliminado.', 'success');
            }
        });
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Email</th>
                    <th>Contacto</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {proveedores.map((proveedor) => (
                    <tr key={proveedor.id}>
                        <td>{proveedor.nombre}</td>
                        <td>{proveedor.direccion}</td>
                        <td>{proveedor.telefono}</td>
                        <td>{proveedor.email}</td>
                        <td>{proveedor.contacto}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => setProveedorToEdit(proveedor)}>Editar</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(proveedor.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProveedorList;