import React, {Component} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

class APReact extends Component{

    constructor() {
        super();
        this.state = {
            side1:0,
            side2:0,
            p:0,
            area:0,

        }
        this.operate = this.operate.bind(this)
    }
    async operate (o){
        o.preventDefault()
        const url = "https://calculations-back-mery.herokuapp.com/api/rectangulo"
        const config =  {
            method:'get',
            url: url,
            headers: {
                'side1rect':this.state.side1,
                'side2rect':this.state.side2,
                'p':this.state.p,
                'area':this.state.area
            }

        }
        const response = await Axios(config)
        const data = response.data
        this.setState({p:data.p, area:data.area})

    }


    render() {
        return (
            <div className="paginaAux">
                <h1>
                    Calcular Perimetro y Area Rectangulo
                </h1>
                <p>
                    En los siguientes recuadros ingresa los valores de los lados diferentes del rectangulo
                </p>
                <form onSubmit={this.operate}>
                    <input type="number" placeholder="Ingrese el primer lado" onChange={o => this.setState({side1:o.target.value})}/>
                    <input type="number" placeholder="Ingrese el segundo lado" onChange={o => this.setState({side2:o.target.value})}/>
                    <button type="submit">
                        Calcular
                    </button>
                </form>
                <div>
                    <h5>
                        Los resultados son: perimetro= {this.state.p}  y el area es {this.state.area}
                    </h5>

                </div>
                <Link to="/">
                    <button>
                        Volver a Home page
                    </button>
                </Link>
            </div>
        )
    }
}
export default APReact