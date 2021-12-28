import react from "react";
import React, { useState} from "react";

export function ItemCount  () {

    const [contador, setContador] = useState(5);
    // <ItemCount stock="5" initial="1" />



    return(
        <div>
            <div className="card mt-2 mx-2">
                <div className="card-body">
                    <h2>pintura #1</h2>
                    <h3 className="card-title">
                        titulo
                    </h3>
                    <button className="btn btn-sm btn-danger">
                        contador: { contador}
                    </button>
                    <hr />
                    <button className="btn btn-sm btn-primary"
                        onClick={() => setContador(contador + 1)} > 
                        Agregar al carrito
                        
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ItemCount