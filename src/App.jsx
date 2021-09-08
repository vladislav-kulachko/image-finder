import {Component} from 'react';
import './App.scss';
import {ToastContainer} from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Fuse from './components/Fuse/Fuse';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    status: 'idle',
    modalState: false,
    hdImgUrl: '',
  };

  handlerQueryUpdate = query => {
    this.setState({query: query, page: 1, status: 'pending'});
  };
  handlerPageIncrement = () => {
    this.setState(prevState => ({page: prevState.page + 1, status: 'pending'}));
  };
  handlerToggleModal = () => {
    this.setState(prevState => ({
      modalState: !prevState.modalState,
    }));
  };
  handlerBigImageUrl = e => {
    this.setState({hdImgUrl: e.target.dataset.src});
  };
  async componentDidUpdate(prevProps, prevState) {
    const {query, page} = this.state;
    try {
      if (query !== prevState.query) {
        const res = await fetch(
          `https://pixabay.com/api/?q=${query}&page=${page}&key=22469434-62330606312f34e078b383df4&image_type=photo&orientation=horizontal&per_page=12`,
        );
        const {hits} = await res.json();
        this.setState({images: hits, status: 'resolved'});
        if (hits.length === 0) {
          this.setState({status: 'rejected'});
        }
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } catch {
      this.setState({status: 'rejected'});
    }
    try {
      if (page !== prevState.page) {
        if (page !== 1) {
          const res = await fetch(
            `https://pixabay.com/api/?q=${query}&page=${page}&key=22469434-62330606312f34e078b383df4&image_type=photo&orientation=horizontal&per_page=12`,
          );

          const {hits} = await res.json();
          this.setState({
            images: [...prevState.images, ...hits],
            status: 'resolved',
          });
          if (hits.length === 0) {
            this.setState({status: 'rejected'});
          }
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      }
    } catch {
      this.setState({status: 'rejected'});
    }
  }

  render() {
    const {status, query, images, hdImgUrl, modalState} = this.state;
    return (
      <>
        <Searchbar onQueryUpdate={this.handlerQueryUpdate} />
        <Fuse>
          <ImageGallery status={status} query={query} images={images}>
            <ImageGalleryItem
              images={images}
              handlerToggleModal={this.handlerToggleModal}
              handlerBigImageUrl={this.handlerBigImageUrl}
            ></ImageGalleryItem>
          </ImageGallery>
        </Fuse>
        <Button
          status={status}
          handlerPageIncrement={this.handlerPageIncrement}
        ></Button>
        <Modal
          onClickCloseModal={this.handlerToggleModal}
          modalState={modalState}
          hdImgUrl={hdImgUrl}
        />
        <ToastContainer style={{width: 'inherit'}} />
      </>
    );
  }
}
