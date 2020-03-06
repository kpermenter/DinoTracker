import { loadModules } from "esri-loader";

export function loadMap(element, mapOptions) {
  return loadModules(["esri/views/SceneView", "esri/WebScene", "esri/widgets/Search", "esri/widgets/Legend", "esri/widgets/Expand"], {
    css: true
  }).then(([SceneView, WebScene, Search, Legend, Expand]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }

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

    const legend = new Expand({
      content: new Legend({
        view: view,
        style: "card" // other styles include 'classic'
      }),
      view: view,
      expanded: true
    });
    view.ui.add(legend, "bottom-left");
  
    var searchWidget = new Search({
      view: view,
    });

    view.ui.add(searchWidget, {
      position: "top-right",
    });


    // wait for the view to load TODO: may not need this?
    return view.when(() => {
      // return a reference to the view
      return view;
    });
  });
}