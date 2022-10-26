import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <LayoutCtn>{props.children}</LayoutCtn>;
};

const LayoutCtn = styled.div`
  max-width: 1200px;
  min-width: 100vw;
  width: 100%;
  height: 101%;
  margin: 0 auto;
  overflow: hidden;
`;

export default Layout;
