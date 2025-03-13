import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ProveedorForm = ({ addProveedor, editProveedor, proveedorToEdit }) => {
    const [proveedor, setProveedor] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
        contacto: ''
    });

    useEffect(() => {
        if (proveedorToEdit) {
            setProveedor(proveedorToEdit);
        }
    }, [proveedorToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProveedor({ ...proveedor, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (proveedor.nombre && proveedor.direccion && proveedor.telefono && proveedor.email && proveedor.contacto) {
            if (proveedorToEdit) {
                editProveedor(proveedor);
            } else {
                addProveedor(proveedor);
            }
            setProveedor({ nombre: '', direccion: '', telefono: '', email: '', contacto: '' });
        } else {
            Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={proveedor.nombre} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Dirección</label>
                <input type="text" className="form-control" name="direccion" value={proveedor.direccion} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="text" className="form-control" name="telefono" value={proveedor.telefono} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={proveedor.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Contacto</label>
                <input type="text" className="form-control" name="contacto" value={proveedor.contacto} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
};

export default ProveedorForm;