

const FooterComponent = () => {
    return(
        <div style={{background: "#0F0D23"}}>
            <footer class="py-3 mt-5 container">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3 text-light">
                    <li class="nav-item"><a href="#" className="nav-link px-2 text-light">Inicio</a></li>
                    <li class="nav-item"><a href="#modulos" className="nav-link px-2 text-light">Módulos</a></li>
                </ul>
                <p className="text-center text-light">© 2023 Grupo Syayec, SA de CV</p>
            </footer>    
        </div>
    )
}

export default FooterComponent;