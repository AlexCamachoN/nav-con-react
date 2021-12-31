import react from "react";

export function Corrusel(){
    return(
        <div>
            <div id="carouselExampleIndicators" ClassName="carousel slide" data-bs-ride="carousel">
                <div ClassName="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" ClassName="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div ClassName="carousel-inner">
                    <div ClassName="carousel-item active">
                    <img src="./imagenes/bodegoncarrosel.jpg" ClassName="d-block w-100" alt="..."/>
                    </div>
                    <div ClassName="carousel-item">
                    <img src="./imagenes/cautivocarrosel.jpg" ClassName="d-block w-100" alt="..."/>
                    </div>
                    <div ClassName="carousel-item">
                    <img src="./imagenes/retratocarrosel.png" ClassName="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button ClassName="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span ClassName="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span ClassName="visually-hidden">Previous</span>
                </button>
                <button ClassName="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span ClassName="carousel-control-next-icon" aria-hidden="true"></span>
                    <span ClassName="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Corrusel