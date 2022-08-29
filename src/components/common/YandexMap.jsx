import React from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'

export const EXAMPLE = [
        {
            id: 1,
            defaultGeometry: [55.75, 37.57],
            balloonContentBody: '<a href = "/users">здесь можно указать ссылку</a>'
        }
]

const YandexMap = ({placemarksArray}) => {
    return (
        <YMaps>
            <Map
                modules={['control.ZoomControl', 'control.FullscreenControl']}
                defaultState={{
                    center: [55.75, 37.57], //координаты
                    zoom: 12,
                    controls: ['zoomControl', 'fullscreenControl'],
                }}
                width='50%'
                height='100vh'
            >
                {placemarksArray
                    && placemarksArray.map((balloon) =>
                        (<Placemark
                            key={balloon.id}
                            modules={['geoObject.addon.balloon']}
                            defaultGeometry={balloon.defaultGeometry}
                            properties={{
                                balloonContentBody: balloon.balloonContentBody
                            }}
                        />))}
            </Map>
        </YMaps>
    )
}

export default YandexMap