// // export function loadLegend(element, mapOptions) {
// //   return loadModules(["esri/widgets/Legend", "esri/views/MapView", "esri/WebMap"], {
// //     css: true
// //   }).then(([Legend, MapView, WebMap]) => {
// //     if (!element) {
// //       // component or app was likely destroyed
// //       return;
// //     }

// import React from "react";
// import { WebMap } from "../utils/map";
// import { MapView } from "esri-loader";
// import { Legend } from "esri-loader";

//     const LegendBar = props => {
//     var webmap = new WebMap({
//         portalItem: { // autocasts as new PortalItem()
//           id: "4abe6a830b8f466dacf8abfde567a781"
//         }
//       });

//       var view = new MapView({
//         container: "viewDiv",
//         map: webmap
//       });

//     view.when(function() {
//           // get the first layer in the collection of operational layers in the WebMap
//           // when the resources in the MapView have loaded.
//           var featureLayer = webmap.layers.getItemAt(0);

//           var legend = new Legend({
//             view: view,
//             layerInfos: [{
//               layer: featureLayer,
//               title: "NY Educational Attainment"
//             }]
//           }, "legendDiv");

//           // Add widget to the bottom right corner of the view
//           //view.ui.add(legend, "bottom-right");
//         });
//       return (
//           <div></div>

//       )
//     }
    
//     export default LegendBar;