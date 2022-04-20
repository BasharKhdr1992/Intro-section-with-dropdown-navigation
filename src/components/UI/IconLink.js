import React from 'react';

const IconLink = ({ icon, alt, text, position, onClick }) => {
  const layout =
    position && position === 'img-text' ? (
      <div>
        {text}
        <img src={icon} className="link-icon" alt={alt} />
      </div>
    ) : (
      <div>
        <img src={icon} className="link-icon" alt={alt} />
        {text}
      </div>
    );

  return <button onClick={onClick}>{layout}</button>;
};

export default IconLink;
