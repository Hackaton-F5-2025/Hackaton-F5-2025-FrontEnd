import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import compra from '../../assets/compra.jpg';
import recicla from '../../assets/recicla.jpg';
import venta from '../../assets/venta.jpg';
import ecologia from '../../assets/ecologia.jpg';
import planeta from '../../assets/planeta.jpg';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                style={{ minHeight: "300px" }} 
            >
                <div>
                    <img src={compra} alt="Compra" />
                    <p className="legend">Compra</p>
                </div>
                <div>
                    <img src={venta} alt="Venta" />
                    <p className="legend">Venta</p>
                </div>
                <div>
                    <img src={recicla} alt="Recicla" />
                    <p className="legend">Recicla</p>
                </div>
                <div>
                    <img src={ecologia} alt="Ecología" />
                    <p className="legend">Reutiliza</p>
                </div>
                <div>
                    <img src={planeta} alt="Planeta" />
                    <p className="legend">Protege el planeta</p>
                </div>
            </Carousel>
        );
    }
}

export default MyCarousel;