

import React from 'react';

const Menu = ({ video }) => {
  return (
    <div class="Card">
       <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${video.video.slice(17)}`}
        title="video"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div class="dentro"><h1>{video.titulo}</h1></div>
     
    </div>
  );
};

export default Menu;
