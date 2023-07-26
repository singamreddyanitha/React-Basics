import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./index.css"

const ReactSlick = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToscroll: 1,
    }

    
    return(
        <div className="slider-container">
            <Slider {...settings}>
                <div><h3>Slider1</h3></div>
                <div><h3>Slider2</h3></div>
                <div><h3>Slider3</h3></div>
            </Slider>
        </div>
        

    )
}

export default ReactSlick