import { loadModules } from "esri-loader";

export function loadMap(element, mapOptions) {
  return loadModules(["esri/Map", "esri/views/MapView", "esri/views/SceneView", "esri/layers/Layer", "esri/WebScene"], {
    css: true
  }).then(([Map, MapView, SceneView, Layer, WebScene]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    // create the Map
    // const map = new Map(mapOptions);
    // const map = new Map({
    //   basemap: "dark-gray"
    // });

    const map = new WebScene({
      portalItem: {
        id: "988123d8dfc2440aad0d52437a630512"
      }
    });

    // show the map at the element
    let view = new SceneView({
      map: map,
      container: element,
      scale: 123456789,
      zoom: 7,
      center: [-87, 34]
    });

    // wait for the view to load TODO: may not need this?
    return view.when(() => {
      // return a reference to the view
      return view;
    });
  });
}