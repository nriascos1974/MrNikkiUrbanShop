import style from '../styles/Slider.module.css';
import { Button, Carousel } from 'react-bootstrap';


export default function Slider(){

    return (
        <div className={style.container}>  
            <Carousel className={style.slider}>
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/BusoPerchado.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>BUSO PERCHADO</h3>
                    <p>Variedad de Colores, Algodon Perchado!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/Camibusos.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>CAMIBUSO</h3>
                    <p>Variedad de Colores, Algodon Licrado!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/ChompaHombre.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>CHOMPA HOMBRE</h3>
                    <p>Variedad de Colores, Algodon Perchado!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/Camisetas.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>CAMISETAS</h3>
                    <p>Variedad de Colores, Licralgodon Suavizado!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/Oversize.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>OVERSIZED</h3>
                    <p>Variedad de Colores, Tela Fría!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/TipoPolos.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>TIPO POLO</h3>
                    <p>Variedad de Colores, Algodon Lacoste!</p>
                    </Carousel.Caption>
                </Carousel.Item>
              
                <Carousel.Item className={style.sliderItem}>
                    <img
                    className='d-block w-100'
                    src="/image/products/Gorras.png"
                    alt=""
                    />
                    <Carousel.Caption className={style.sliderTitle}>
                    <h3>GORRAS</h3>
                    <p>Variedad de Colores!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>  
    )
};