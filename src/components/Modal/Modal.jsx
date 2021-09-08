import React, {Component} from 'react';
import s from './Modal.module.scss';
export default class Modal extends Component {
  state = {modalState: false};

  render() {
    return (
      <>
        {this.props.modalState && (
          <div className={s.overlay}>
            <div className={s.modal}>
              <img src={this.props.hdImgUrl} alt="" />
            </div>
          </div>
        )}
      </>
    );
  }
}
