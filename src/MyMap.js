import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

function MyMap (props) {
  return(
          <Map center={props.position} zoom={props.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={props.position}>
              <Popup>{props.popup}</Popup>
            </Marker>
          </Map>
        )
  }



// class MyMap extends React.Component {
//   constructor(props) {
//     super(props);
//     // = {lng: "", lat: ""}
//   }
 
//   render () {const position = this.state
//     return(
//       <Map center={position} zoom={13}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         />
//         <Marker position={position}>
//           <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }

export default MyMap
