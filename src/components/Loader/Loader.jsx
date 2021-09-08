import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.scss';
export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className={s.spinner}>
          <Loader
            type="Grid"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={1000}
          />
        </div>
      </>
    );
  }
}
