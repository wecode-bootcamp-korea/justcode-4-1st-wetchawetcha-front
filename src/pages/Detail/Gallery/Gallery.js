import styles from './Gallery.module.scss';
import GalleryImages from './GalleryImages';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function Gallery() {
  const [images, setImages] = useState([]);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgUrls, setImgUrls] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [leftshow, setLeftShow] = useState(false);
  const [rightshow, setRightShow] = useState(false);
  const Section = useRef();

  const setCursor = event => {
    setScrollX(event.target.scrollLeft);
    setScrollEnd(event.target.scrollWidth - event.target.clientWidth);
  };

  const moveLeft = scrollOffset => {
    Section.current.scrollLeft += scrollOffset;
  };

  const modal = imgUrl => {
    if (imgUrl) {
      setImgUrls(imgUrl[0]);
      setIsModalOpen(true);
      setImgIndex(imgUrl[1]);
    }
  };
  let totalimageindex = imgIndex;
  const modalFalse = () => {
    setIsModalOpen(false);
  };
  const notClick = event => {
    event.stopPropagation();
  };
  const LeftPage = event => {
    event.stopPropagation();
    setImgIndex(imgIndex - 1);
    totalimageindex -= 1;
    setImgUrls(images[totalimageindex].poster_url);
  };
  const RightPage = event => {
    event.stopPropagation();
    setImgIndex(imgIndex + 1);
    totalimageindex = totalimageindex + 1;
    setImgUrls(images[totalimageindex].poster_url);
  };
  useEffect(() => {
    totalimageindex === 0 ? setLeftShow(true) : setLeftShow(false);
    totalimageindex === images.length - 1
      ? setRightShow(true)
      : setRightShow(false);
  }, [imgIndex]);
  useEffect(() => {
    fetch('/data/Images.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImages(data);
      });
  }, []);

  return (
    <div className={styles.GalleryTotal}>
      <div className={styles.Gallery}>
        <div className={styles.GalleryTitle}>갤러리</div>
        <div className={styles.ImageSection} onScroll={setCursor} ref={Section}>
          {images.map(comment => {
            return (
              <GalleryImages
                key={comment.id}
                index={comment.id}
                img={comment.poster_url}
                name={comment.name}
                modal={modal}
              />
            );
          })}
        </div>
        {scrollX === 0 ? null : (
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.ChevronLeft}
            onClick={() => moveLeft(-345)}
          />
        )}
        {scrollX >= scrollEnd ? null : (
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.ChevronRight}
            onClick={() => moveLeft(345)}
          />
        )}
      </div>
      {isModalOpen && (
        <div className={styles.modalSection} onClick={modalFalse}>
          <img
            src={imgUrls}
            alt="Gallery"
            className={styles.bigImage}
            onClick={notClick}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className={styles.modalChevronLeft}
            onClick={LeftPage}
            style={{ display: leftshow ? 'none' : 'block' }}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className={styles.modalChevronRight}
            onClick={RightPage}
            style={{ display: rightshow ? 'none' : 'block' }}
          />
        </div>
      )}
    </div>
  );
}
export default Gallery;