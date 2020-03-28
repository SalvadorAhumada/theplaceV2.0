import React, { Component } from "react";
import './library.css';
import reading from './img/reading.svg'
import { Animated } from "react-animated-css";
import Books from './books';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addBook } from './actions/bookActions';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class library extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:undefined,
      author:undefined,
      genre:undefined,
      year:undefined,
      show:false,
      showAlert:false,
      showSuccess:false,
      newBook:{},
      bookCount:0
    };
  }

  addTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  addAuthor = e => {
    this.setState({
      author: e.target.value
    });
  };

  addGenre = e => {
    this.setState({
      genre: e.target.value
    });
  };

  addYear = e => {
    this.setState({
      year: e.target.value
    });
  };

  saveBook = () => {

    const MySwal = withReactContent(Swal)

    if(!this.state.title){

      MySwal.fire({
        icon:'error',
        title: 'Hey!',
        text: 'I need at least the title.',
        showConfirmButton:true,
      })

    } else {

      MySwal.fire({
        icon:'question',
        title: 'Save this book?',
        html: `Add ${this.state.title} to your library?`,
        showConfirmButton:true,
        showCancelButton:true,
        cancelButtonText:'Nah!',
        confirmButtonText:'Yeah!',
        showLoaderOnConfirm:true,
        preConfirm: () => {

          let newBook = {
            title:this.state.title,
            author:this.state.author,
            genre:this.state.genre,
            year:this.state.year
          };

          this.props.addBook(newBook);
        }
      })
    }
  };

  resetForm = () => {

    this.setState(() => {
      return {
        title:undefined,
        author:undefined,
        genre:undefined,
        year:undefined,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
          <Animated animationin="fadeIn" isvisible="true">
            <div className="library">
                <img className="reading" src={reading} alt="reading"/>
                <div className="form-book" id="form-book">
                  <h2>ADD A BOOK</h2>
                  <p>
                    All information is optional. Except the title!
                  </p>
                  <form id="new-book">
                  <p>
                    <input maxLength="40" onChange={this.addTitle} id="title-book" type="text" defaultValue={this.state.title} placeholder="Title"/>
                  </p>
                  <p>
                    <input maxLength="20" onChange={this.addAuthor} id="author-book" type="text" defaultValue={this.state.author} placeholder="Author"/>
                  </p>
                  <p>
                    <input maxLength="20" onChange={this.addGenre} id="genre-book" type="text" defaultValue={this.state.genre} placeholder="Genre"/>
                  </p>
                  <p>
                    <input max="9999" min="1000" onChange={this.addYear} id="year-book" type="number" defaultValue={this.state.year} placeholder="Year"/>
                  </p>
                  <p>
                    <button type="button" onClick={this.saveBook}>SAVE IT!</button>
                  </p>
                  <p className="clean">
                    <button  onClick={this.resetForm} id="reset-form" type="reset" defaultValue="Reset">RESET</button>
                  </p>
                  </form>
                </div>
            </div>
            <Books bookCount={this.state.bookCount}/>
        </Animated>
      </React.Fragment>
    );
  }
}

library.propTypes = {
  addBook: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  book:state.books
});

export default connect(mapStateToProps, { addBook })(library);
