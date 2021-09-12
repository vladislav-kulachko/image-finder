import React, {Component} from 'react';
import s from './ImageGalleryItem.module.scss';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
      }),
    ),
  };

  onOpenModal = e => {
    this.props.handlerToggleModal();
    this.props.handlerBigImageUrl(e);
  };
  render() {
    const {images} = this.props;
    return (
      <>
        {images.map(({id, webformatURL, largeImageURL, tags}, i) => (
          <li key={i} id={id} className={s.item} onClick={this.onOpenModal}>
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
