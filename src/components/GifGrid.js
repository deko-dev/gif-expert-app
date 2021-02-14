import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
    const { data:images, loading } = useFetchGifs( category )

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Loading...</p> }
            <div className="cards-gifs">
                {
                    images.map( gif => (
                        <GifGridItem 
                            key={ gif.id }
                            { ...gif }
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
