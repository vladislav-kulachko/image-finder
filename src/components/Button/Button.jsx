import React, {Component} from 'react';
import s from './Button.module.scss';
export default class Button extends Component {
  render() {
    const {status, handlerPageIncrement} = this.props;
    return (
      <>
        {status === 'resolved' && (
          <div className={s.container}>
            <button onClick={handlerPageIncrement} className={s.button}>
              Load more
            </button>
          </div>
        )}
      </>
    );
  }
}
