import React from 'react'
import ImageGallery from 'react-image-gallery';
import './ZimerImges.css'

function ZimerImges(props) {
    const imagesArr = [
        {
            original: props.images[0],
            thumbnail: props.images[0],
        },
        {
            original: props.images[1],
            thumbnail: props.images[1],
        },
        {
            original: props.images[2],
            thumbnail: props.images[2],
        },
        {
            original: props.images[3],
            thumbnail: props.images[3],
        },
        {
            original: props.images[4],
            thumbnail: props.images[4],
        }
    ];

    return (

        <div className="imgestyle"><ImageGallery items={imagesArr} /></div> 
    )
}

export default ZimerImges
