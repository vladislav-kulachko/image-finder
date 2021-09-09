import React, {Component} from 'react';
import s from './ImageGallery.module.scss';
import {toast, Flip} from 'react-toastify';
import Spinner from '../Loader/Loader';

export default class ImageGallery extends Component {
  componentDidUpdate() {
    if (this.props.status === 'rejected') {
      toast.error(`No (more) image found for ${this.props.query}`, {
        theme: 'colored',
        position: 'bottom-center',
        autoClose: 5000,
        transition: Flip,
        toastId: 2,
      });
    }
  }
  render() {
    const {status, children} = this.props;
    return (
      <ul className={s.gallery}>
        {status === 'idle' && (
          <li className={s.message}>PLease, start image search! </li>
        )}
        {status === 'pending' && (
          <>
            <li className={s.message}>loading..., please wait</li> <Spinner />
          </>
        )}
        {}
        {status === 'rejected' && (
          <li className={s.message}>PLease, start image search! </li>
        )}
        {children}
      </ul>
    );
  }
}
