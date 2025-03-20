import useTablaProveedor from "../hooks/useTablaProveedor";
import Campo from "./Campo";
import { useEffect } from "react";

const Proveedor = () => {
    const {
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
    } = useTablaProveedor();

    useEffect(() => {
        setProveedores(getProveedor());
    }, []);

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4">
                    <div className="d-grid mx-auto">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalProveedor" onClick={() => openModal(1)} ><i className="fa-solid fa-circle-plus" /> Añadir</button>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-lg-8 offset-lg-2">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>RTN</th>
                                    <th>Dirección</th>
                                    <th>Correo</th>
                                    <th>Teléfono</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proveedores.map((proveedor, i) => (
                                    <tr key={proveedor.id}>
                                        <td>{i + 1}</td>
                                        <td>{proveedor.nombre}</td>
                                        <td>{proveedor.rtn}</td>
                                        <td>{proveedor.direccion}</td>
                                        <td>{proveedor.correo}</td>
                                        <td>{proveedor.telefono}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalProveedor"
                                                onClick={() =>
                                                    openModal(2, proveedor)
                                                }
                                            >
                                                <i className="fa-solid fa-edit" />
                                            </button>
                                            <button className="btn btn-danger" onClick={() => deleteProveedor(proveedor.id)} >
                                                <i className="fa-solid fa-trash" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    id="modalProveedor"
                    className="modal fade"
                    aria-hidden="true"
                    tabIndex="-1"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <label className="h5">{tituloModal}</label>
                                <button
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="close"
                                />
                            </div>
                            <div className="modal-body">
                                <Campo
                                    id="nombre"
                                    iconName="fa-solid fa-user"
                                    inputType="text"
                                    placeHolder="Nombre"
                                    onChange={(e) => setNombre(e.target.value)}
                                    value={nombre}
                                />

                                <Campo
                                    id="rtn"
                                    iconName="fa-solid fa-id-card"
                                    inputType="text"
                                    placeHolder="RTN"
                                    onChange={(e) => setRtn(e.target.value)}
                                    value={rtn}
                                />

                                <Campo
                                    id="direccion"
                                    iconName="fa-solid fa-map-marker-alt"
                                    inputType="text"
                                    placeHolder="Dirección"
                                    onChange={(e) => setDireccion(e.target.value)}
                                    value={direccion}
                                />

                                <Campo
                                    id="correo"
                                    iconName="fa-solid fa-envelope"
                                    inputType="email"
                                    placeHolder="Correo"
                                    onChange={(e) => setCorreo(e.target.value)}
                                    value={correo}
                                />
                                <Campo
                                    id="telefono"
                                    iconName="fa-solid fa-phone"
                                    inputType="text"
                                    placeHolder="Teléfono"
                                    onChange={(e) => setTelefono(e.target.value)}
                                    value={telefono}
                                />

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success" onClick={() => validar()}>
                                    <i className="fa-solid fa-floppy-disk" /> Guardar
                                </button>

                                <button
                                    id="btnCerrarModal"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    <i className="fa-solid fa-circle-xmark" /> Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proveedor;