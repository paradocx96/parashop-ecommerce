import React from 'react';

function CarouselItem({imageItem}) {
    return (
        <div className="carousel-item">
            <img src={imageItem.imagePath} alt={imageItem.alt}/>
        </div>
    );
}

export default CarouselItem;
