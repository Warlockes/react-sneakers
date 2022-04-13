import React from "react";
import ContentLoader from "react-content-loader";

export const ItemLoader = () => (
  <ContentLoader
    speed={3}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="30" y="35" rx="11" ry="11" width="150" height="90" />
    <rect x="30" y="145" rx="3" ry="3" width="150" height="15" />
    <rect x="150" y="190" rx="8" ry="8" width="32" height="32" />
    <rect x="30" y="200" rx="3" ry="3" width="80" height="20" />
    <rect x="30" y="165" rx="3" ry="3" width="90" height="15" />
  </ContentLoader>
);
