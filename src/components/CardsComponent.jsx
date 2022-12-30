/* eslint-disable jsx-a11y/anchor-is-valid */
import { height, maxWidth } from "@mui/system";
import { Document, Page } from 'react-pdf';



const styles = {
    mainButton: {
        border: 'rounded',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#005895'
    },
    anchorStyles: 'py-3 col-md-5 col-lg-2 rounded mb-3 mb-lg-0 text-white text-decoration-none text-center border',

    secondaryButton: {
        border: 'rounded',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryAnchorStyles: 'py-3 col-md-5 col-lg-2 bgSelected rounded mb-3 mb-lg-0 text-white text-decoration-none text-center border',
}

const CardsComponent = () => {

    const showMyElements = (event) => {
        event.preventDefault();
        const $submenuElement = document.querySelector('#submenu')
        if($submenuElement.classList.contains('d-none')) {
            $submenuElement.classList.remove('d-none')
            $submenuElement.classList.add('animate__animated', 'animate__fadeInDown') 
            event.target.classList.add('bgSelected')
        } else {
            $submenuElement.classList.remove('animate__fadeInDown')
            $submenuElement.classList.add('d-none')
            event.target.classList.remove('bgSelected')
        }
    }

    return(
        <div className="py-5 mb-5 px-2" id="modulos">
            <h2 className="text-center py-4 text-white">Módulos</h2>
            <hr className="mb-5 bg-white"/>
            <div className="d-flex justify-content-between row">

                {/* <!-- Modal first submenu--> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reportes</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li className="mb-2"><a href="#" target="_blank">REVISIÓN MENSUAL BOTIQUIN + TRAUMA KIT AGOSTO 2022</a></li>
                                <li className="mb-2"><a href="#" target="_blank">FORMATO DE CAPACITACIÓN</a></li>
                                <li className="mb-2"><a href="#" target="_blank">FORMATO DE ACTIVIDADES SEMANALES</a></li>
                                <li className="mb-2"><a href="#" target="_blank">CÉDULA OBJETOS EXTRAVIADOS</a></li>
                                <li className="mb-2"><a href="#" target="_blank">LISTA DE ASISTENCIA</a></li>
                                <li className="mb-2"><a href="#" target="_blank">REGISTRO INGRESO PROVEEDORES SEMANAL</a></li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Modal first submenu--> */}
                <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel3">Manuales de procedimientos y protocolos de actuación</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li className="mb-2"><a href="https://auth.signalapp.net/auth/realms/Everbridge/protocol/openid-connect/auth?client_id=Signal&redirect_uri=https%3A%2F%2Feverbridge.signalapp.net%2Fdashboard&state=3bbb26bf-9bf2-4ca8-8eee-c9e22b13695b&response_mode=fragment&response_type=code&scope=openid&nonce=c7470756-93ee-4ee8-9cfe-50936a3b05bd" target="_blank">GRS - Gestor de redes sociales</a></li>
                                <li className="mb-2"><a href="#" target="_blank">GPTC - Gestor de protocolos tareas y contactos</a></li>
                                <li className="mb-2"><a href="#" target="_blank">GAD - Gestor de alertas en dispositivos</a></li>
                                <li className="mb-2"><a href="#" target="_blank">VEX - Visor de eventos externos</a></li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <!-- first submenu PDF 1--> */}
                <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel1">Documento Maestro</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <object data="./Manual_de_operaciones_C2SIC.pdf" type="application/pdf" width="770px" height="550px">
                                <embed src="./Manual_de_operaciones_C2SIC.pdf" type="application/pdf"/>       
                            </object>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- second submenu PDF 1--> */}
                <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel2">Documento Maestro</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <object data="./qrs-art-merged.pdf" type="application/pdf" width="770px" height="550px">
                                <embed src="./qrs-art-merged.pdf" type="application/pdf"/>       
                            </object>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <button class={styles.anchorStyles} style={styles.mainButton} data-toggle="modal" data-target="#exampleModal1">
                    Documento Maestro
                </button>

                <a href="#"  class={styles.anchorStyles} 
                            style={styles.mainButton}
                            onClick={showMyElements}>
                    SIBDU <br/> Sistema Integral y Base de Datos Unificada
                </a>

                <a href="#"  class={styles.anchorStyles} style={styles.mainButton}>
                    Cuadro de Mando Integral y Solución de Gestión Integral de Explotación de Información
                </a>
                <a href="#"  class={styles.anchorStyles} style={styles.mainButton} data-toggle="modal" data-target="#exampleModal2">
                    Protocolos de Actuación, Manual de Procesos y Procedimientos Técnicos y Operativos
                </a>
            </div>

            {/* SIBDU submenu section */}
            <div className="d-none" id="submenu">
                <hr className="my-5 bg-white"/>
                <div className="d-flex justify-content-between row ">

                    <a href="#" className={styles.secondaryAnchorStyles} style={styles.secondaryButton} data-toggle="modal" data-target="#exampleModal3">
                    Plataforma Tecnológica
                    </a>
                    
                    <a href="#"  className={styles.secondaryAnchorStyles} 
                                style={styles.secondaryButton}>
                        Base de Datos relacionadas con los dispositivos
                    </a>

                    <a href="#"  className={styles.secondaryAnchorStyles} style={styles.secondaryButton} data-toggle="modal" data-target="#exampleModal">
                        Automatización de reportes manuales
                    </a>
                    <a href="#"  className={styles.secondaryAnchorStyles} style={styles.secondaryButton}>
                        {/* Conexión a Bases de Datos complementarias necesarias para mejorar los procesos */}
                        Base de datos o tablas, empleados <br />
                        Vehículos
                    </a>
                </div>    
            </div>        
            
        </div>
        
    )
}

export default CardsComponent;