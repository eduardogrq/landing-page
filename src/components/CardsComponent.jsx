import { height, maxWidth } from "@mui/system";

const styles = {
    mainButton: {
        backgroundColor: 'red',
        // maxWidth: '400px',
        height: '150px',
        border: 'rounded',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    anchorStyles: 'col-md-5 col-lg-2 bg-primary rounded mb-3 mb-lg-0 text-white text-decoration-none text-center border'
}

const CardsComponent = () => {
    return(
        <div class="py-5 mb-5 px-2">
            <h2 className="text-center py-4 text-white">Documentos</h2>
            <hr className="mb-5 bg-white"/>
            <div className="d-flex justify-content-between row">

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Documentos</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li className="mb-2"><a href="#" target="_blank">Plataforma Tecnológica</a></li>
                                <li className="mb-2"><a href="#" target="_blank">Base de Datos relacionadas con los dispositivos relacionados con Control de Acceso</a></li>
                                <li className="mb-2"><a href="#" target="_blank">Automatización de reportes manuales</a></li>
                                <li className="mb-2"><a href="#" target="_blank">Conexión a Bases de Datos complementarias necesarias para mejorar los procesos</a></li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                </div>

                <a href="#" class={styles.anchorStyles} style={styles.mainButton}>
                    Documento Maestro
                </a>
                
                <a href="#"  class={styles.anchorStyles} 
                            style={styles.mainButton} data-toggle="modal" data-target="#exampleModal">
                    Sistema Integral y Base de Datos Unificada SIBDU
                    
                </a>
                <a href="#"  class={styles.anchorStyles} style={styles.mainButton}>
                    Cuadro de Mando Integral y Solución de Gestión Integral de Explotación de Información
                    
                </a>
                <a href="#"  class={styles.anchorStyles} style={styles.mainButton}>
                    Sistema Integral y Base de Datos Unificada SIBDU
                </a>
            </div>
        </div>
        
    )
}

export default CardsComponent;