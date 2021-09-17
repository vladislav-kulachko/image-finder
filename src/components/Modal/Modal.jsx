import React, {Component} from 'react';
import s from './Modal.module.scss';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeyDownClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeyDownClose);
  }
  handlerKeyDownClose = e => {
    if (e.code === 'Escape') {
      this.props.onClickCloseModal();
    }
  };
  handlerClickBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClickCloseModal();
    }
  };
  render() {
    return (
      <>
        {this.props.modalState && (
          <div className={s.overlay} onClick={this.handlerClickBackdropClose}>
            <div className={s.modal}>
              <img src={this.props.hdImgUrl} alt="target big" />
            </div>
          </div>
        )}
      </>
    );
  }
}
