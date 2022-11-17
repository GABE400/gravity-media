import React, { useState, useEffect } from 'react';
//import IMGG from '../../assets/Gallery';
import images from '../GalleryData';
import './ImageGallery.css';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lg-video.css';
import lgVideo from 'lightgallery/plugins/video';

const ImageGallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className='gallery-images' handleSetTag={setTag}>
      <div className='tags'>
        <TagButton
          name='all'
          tagActive={tag === 'all' ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name='videography'
          tagActive={tag === 'videography' ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name='photography'
          tagActive={tag === 'photography' ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <div>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgVideo]}
        >
          <div className='container'>
            {filteredImages.map((image) => (
              <div key={image.id} className='image-card'>
                <a href={`/Gallery/${image.imageName}`}>
                  <img
                    className='image'
                    src={`/Gallery/${image.imageName}`}
                    alt=''
                  />
                </a>
              </div>
            ))}
          </div>
        </LightGallery>
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default ImageGallery;
