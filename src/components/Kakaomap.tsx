import React from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

interface KakaomapProps {
  latitude: number
  longitude: number
  setCustomValue?: (id:string, value:any) => void
  detailPage?: boolean
}

const Kakaomap = ({
  latitude,
  longitude,
  setCustomValue,
  detailPage = false
}:KakaomapProps) => {

  const handleClick = (mouse:kakao.maps.event.MouseEvent) => {
    if(detailPage) return
      setCustomValue!('latitude',mouse.latLng.getLat());
      setCustomValue!('longitude',mouse.latLng.getLng());
  }

  return (
    <Map
      center={{lat:latitude, lng:longitude}}
      style={{width: '100%', height: '360px'}}
      onClick={(_,mouse) => {handleClick(mouse)}}
      >
      <MapMarker
        position={{lat:latitude, lng:longitude}}
      >
      </MapMarker>
    </Map>
  )
}

export default Kakaomap