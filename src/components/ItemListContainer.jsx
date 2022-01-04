import React from "react"
import { Carousel } from "bootstrap"

import bodegoncarrosel from './../imagenes/img/bodegoncarrosel.jpg'

export  function ItemListContainer() {

    return (
            <>
                Carousel nuevo
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={bodegoncarrosel}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
              
               
            </>
    )
}

export default ItemListContainer