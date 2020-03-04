// React imports
import React from "react";

// Redux imports
import { useSelector } from "react-redux";
import { mapLoaded } from "../redux/reducers/map";

// Component imports
import Map from "./esri/map/Map";
import LoadScreen from "./LoadScreen";
import Nav from "./Nav";
import Legend from "./esri/map/Leg"

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

// const LegendWrapper = styled.div`
// display: flex;
// flex: 2;
// flex-direction: column;
// position: relative;
// overflow: hidden;
// `;

const LegendWrapper = styled.div`
  justify-content: center;
  & img {
    height: 55px;
  }
`;

// Component definition
const Main = props => {
  const config = useSelector(state => state.config);
  const isMapLoaded = useSelector(state => state.map.loaded);

  return (
    <Container>
      <LoadScreen isLoading={!isMapLoaded} />
      <Nav>
      </Nav>
  <LegendWrapper><Legend></Legend></LegendWrapper>
      <MapWrapper>
        <Map onMapLoaded={mapLoaded} mapConfig={config.mapConfig} />
      </MapWrapper>
    </Container>
  );
};

export default Main;



