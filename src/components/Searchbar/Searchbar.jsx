import React, {Component} from 'react';
import s from './Searchbar.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import {toast, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {query: ''};
  submitHandler = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.info('Please enter at least a couple of letters:)', {
        theme: 'colored',
        position: 'bottom-center',
        autoClose: 5000,
        transition: Flip,
        toastId: 1,
      });
    } else {
      this.props.onQueryUpdate(this.state.query);
    }
    this.setState({query: ''});
  };
  inputHandler = e => {
    this.setState({query: e.target.value.toLowerCase()});
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={s.button}>
            <SearchIcon style={{fontSize: 36, color: '#3f51b5'}}></SearchIcon>
          </button>
          <input
            onChange={this.inputHandler}
            value={this.state.query}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
