import React from "react";

export default function Advertisement(props) {  
  
  const { content } = props;
  const { svg, title, text, src } = content;
        
  return (
    <div className="bannerAdvertisement">
      <img src={svg} alt=""/>
      <h4>{title}</h4>
      <div><a href={src}>{text}</a></div>
    </div>
  );
};


