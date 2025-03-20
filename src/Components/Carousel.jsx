import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carouselstyles.css';

import compra from '../Assets/compra.jpeg';
import venta from '../Assets/venta.jpeg';
import recicla from '../Assets/recicla.jpeg';
import ecologia from '../Assets/ecologia.jpeg';
import planeta from '../Assets/planeta.jpeg';

class MyCarousel extends Component {
    render() {
        return (
            <div
                style={{
                    width: "100%",      
                    maxWidth: "none",        
                    margin: "0 auto"     
                }}
            >
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={500}
                    style={{
                        minHeight: "50vh",
                        maxHeight: "50vh",   
                    }}
                >
                    <div>
                        <img src={compra} alt="Compra" style={{
                                width: "100%",       
                                height: "auto",      
                                objectFit: "cover",  
                            }}  
                        />
                        <div className="carousel-text">Compra</div>
                    </div>
                    <div>
                        <img src={venta} alt="Venta" style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}  
                        />
                        <div className="carousel-text">Venta</div>
                    </div>
                    <div>
                        <img src={recicla} alt="Recicla" style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }} 
                        />
                        <div className="carousel-text">Recicla</div>
                    </div>
                    <div>
                        <img src={ecologia} alt="Ecología" style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}  
                        />
                        <div className="carousel-text">Reutiliza</div>
                    </div>
                    <div>
                        <img src={planeta} alt="Planeta" style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}  
                        />
                        <div className="carousel-text">Protege el planeta</div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default MyCarousel;