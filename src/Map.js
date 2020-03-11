// // export function loadMap(element, mapOptions) {
// //   return loadModules(["esri/views/SceneView", "esri/WebScene", "esri/widgets/Search", "esri/widgets/Legend", "esri/widgets/Expand"], {
// //     css: true
// //   }).then(([SceneView, WebScene, Search, Legend, Expand]) => {
// //     if (!element) {
// //       // component or app was likely destroyed
// //       return;
// //     }

// //     const map = new WebScene({
// //       portalItem: {
// //         id: "97864f02cd5f4f04b2293817aa5e8137"
// //       }
// //     });

// //     // show the map at the element
// //     let view = new SceneView({
// //       map: map,
// //       container: element,
// //       scale: 123456789,
// //       zoom: 7,
// //       center: [-87, 34]
// //     });

// //     const legend = new Expand({
// //       content: new Legend({
// //         view: view,
// //         style: "card" // other styles include 'classic'
// //       }),
// //       view: view,
// //       expanded: true
// //     });
// //     view.ui.add(legend, "bottom-left");
  
// //     var searchWidget = new Search({
// //       view: view,
// //     });

// //     view.ui.add(searchWidget, {
// //       position: "top-right",
// //     });


// //     // wait for the view to load TODO: may not need this?
// //     return view.when(() => {
// //       // return a reference to the view
// //       return view;
// //     });
// //   });
// // }

// // export default Map


import React from 'react';
import { loadModules } from 'esri-loader';

export class WebMapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // lazy load the required ArcGIS API for JavaScript modules and CSS
    loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'], { css: true })
    .then(([Map, MapView, FeatureLayer]) => {
      const map = new Map({
        basemap: 'dark-gray'
      })

      const layer = new FeatureLayer({
        url: 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/1'
      })
      map.add(layer);

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8
      });
    });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef} />
    );
  }
}

export default WebMapView


