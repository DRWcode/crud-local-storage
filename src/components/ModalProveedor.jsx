import Campo from "./Campo";
import useTablaProveedor from "../hooks/useTablaProveedor";

const ModalProveedor = () => {
    const {
        validar,
        nombre,
        setNombre,
        rtn,
        setRtn,
        direccion,
        setDireccion,
        correo,
        setCorreo,
        telefono,
        setTelefono
    } = useTablaProveedor();
    return (
        <div
            id="modalProveedor"
            className="modal fade"
            aria-hidden="true"
            tabIndex="-1"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <label className="h5">Añadir Proveedor</label>
                        <button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="close"
                        />
                    </div>
                    <div className="modal-body">
                        <input type="hidden" id="id" />

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
                            value= {rtn}
                        />

                        <Campo
                            id="direccion"
                            iconName="fa-solid fa-map-marker-alt"
                            inputType="text"
                            placeHolder="Dirección"
                            onChange={(e) => setDireccion(e.target.value)}
                            value = {direccion}
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
        );
    };
    
    export default ModalProveedor;
    