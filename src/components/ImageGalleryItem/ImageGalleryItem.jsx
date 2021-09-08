import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.scss';

export default class ImageGalleryItem extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };
  // state = {loadMsg: false};

  render() {
    const {images, onClick} = this.props;
    return (
      <>
        {images.map(({id, webformatURL, largeImageURL, tags}, i) => (
          <li key={i} id={id} className={s.item} onClick={onClick}>
            <img
              src={webformatURL}
              data-src={largeImageURL}
              alt={tags}
              className={s.image}
            />
          </li>
        ))}
      </>
    );
  }
}
