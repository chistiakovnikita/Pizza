import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={270}
    height={460}
    viewBox="0 0 270 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="98" r="93" /> 
    <rect x="13" y="328" rx="15" ry="15" width="100" height="35" /> 
    <rect x="53" y="361" rx="0" ry="0" width="1" height="1" /> 
    <rect x="165" y="328" rx="15" ry="15" width="100" height="35" /> 
    <rect x="71" y="216" rx="15" ry="15" width="136" height="17" /> 
    <rect x="241" y="170" rx="0" ry="0" width="1" height="1" /> 
    <rect x="13" y="262" rx="15" ry="15" width="250" height="39" />
  </ContentLoader>
)

export default Skeleton