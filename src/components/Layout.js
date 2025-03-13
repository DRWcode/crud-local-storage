import React, { useState } from 'react';
import ProveedorForm from './ProveedorForm';
import ProveedorList from './ProveedorList';
import useLocalStorage from '../hooks/useLocalStorage';

const ProveedorContainer = () => {
    const [proveedores, setProveedores] = useLocalStorage('proveedores', []);
    const [proveedorToEdit, setProveedorToEdit] = useState(null);

    const addProveedor = (proveedor) => {
        proveedor.id = Date.now();
        setProveedores([...proveedores, proveedor]);
    };

    const editProveedor = (proveedor) => {
        const updatedProveedores = proveedores.map((p) => (p.id === proveedor.id ? proveedor : p));
        setProveedores(updatedProveedores);
        setProveedorToEdit(null);
    };

    const deleteProveedor = (id) => {
        const updatedProveedores = proveedores.filter((p) => p.id !== id);
        setProveedores(updatedProveedores);
    };

    return (
        <div>
            <ProveedorForm addProveedor={addProveedor} editProveedor={editProveedor} proveedorToEdit={proveedorToEdit} />
            <ProveedorList proveedores={proveedores} deleteProveedor={deleteProveedor} setProveedorToEdit={setProveedorToEdit} />
        </div>
    );
};

export default ProveedorContainer;