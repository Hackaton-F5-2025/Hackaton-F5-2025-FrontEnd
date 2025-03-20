import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carouselstyles.css';

import compra from '../Assets/compra.jpg';
import venta from '../Assets/venta.jpg';
import recicla from '../Assets/recicla.jpg';
import ecologia from '../Assets/ecologia.jpg';
import planeta from '../Assets/planeta.jpg';

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
                        <img 
                            src={compra} 
                            alt="Compra" 
                            style={{
                                width: "100%",       
                                height: "auto",      
                                objectFit: "cover",  
                            }}  
                        />
                        <p className="legend">Compra</p>
                    </div>
                    <div>
                        <img 
                            src={venta} 
                            alt="Venta" 
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}  
                        />
                        <p className="legend">Venta</p>
                    </div>
                    <div>
                        <img 
                            src={recicla} 
                            alt="Recicla" 
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }} 
                        />
                        <p className="legend">Recicla</p>
                    </div>
                    <div>
                        <img 
                            src={ecologia} 
                            alt="Ecología" 
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}  
                        />
                        <p className="legend">Reutiliza</p>
                    </div>
                    <div>
                        <img 
                             src={planeta} 
                            alt="Planeta" 
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}  
                        />
                        <p className="legend">Protege el planeta</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default MyCarousel;