import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

// Images
import Banner1 from "../../assets/images/banner/Banner1.jpg";
import Banner2 from "../../assets/images/banner/Banner2.jpg";
import Banner3 from "../../assets/images/banner/Banner3.jpg";
import Banner4 from "../../assets/images/banner/Banner4.jpg";
import Banner5 from "../../assets/images/banner/Banner5.jpg";
import Banner6 from "../../assets/images/banner/Banner6.jpg";
import Banner7 from "../../assets/images/banner/Banner7.jpg";
import Banner8 from "../../assets/images/banner/Banner8.jpg";
import Banner9 from "../../assets/images/banner/Banner9.jpg";


function HomeCarousel() {
    const imageSet = [
        {
            imagePath: Banner1,
            alt: "Banner 1",
        },
        {
            imagePath: Banner2,
            alt: "Banner 2",
        },
        {
            imagePath: Banner3,
            alt: "Banner 3",
        },
        {
            imagePath: Banner4,
            alt: "Banner 4",
        },
        {
            imagePath: Banner5,
            alt: "Banner 5",
        },
        {
            imagePath: Banner6,
            alt: "Banner 6",
        },
        {
            imagePath: Banner7,
            alt: "Banner 7",
        },
        {
            imagePath: Banner8,
            alt: "Banner 8",
        },
        {
            imagePath: Banner9,
            alt: "Banner 9",
        }
    ]

    return (
        <div className="carousel-box">
            <Carousel>
                {imageSet && imageSet.map((image, index) => (
                    <CarouselItem key={index} imageItem={image}/>
                ))}
            </Carousel>
        </div>
    )
}

export default HomeCarousel;
