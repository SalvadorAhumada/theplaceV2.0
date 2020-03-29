import React, { Component } from "react";
import './books.css';
import { Animated } from "react-animated-css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { connect } from 'react-redux';
import {  getBooks, deleteBook } from './actions/bookActions';

class books extends Component {


  componentDidMount(){
    this.props.getBooks()
  }

  deleteBook = book =>{

    const MySwal = withReactContent(Swal)

    MySwal.fire({
      icon:'question',
      title: 'Delete this book?',
      html: `Delete ${book.title} from your library?`,
      showConfirmButton:true,
      showCancelButton:true,
      cancelButtonText:'Nah!',
      confirmButtonText:'Yeah!',
      showLoaderOnConfirm:true,
      preConfirm: () => {
        this.props.deleteBook(book._id);

      }
    })
  };

  render() {
        return (
            <React.Fragment>
                <Animated  animationin="fadeIn" isvisible="true">
                  <div className="books">
                      <h2>MY BOOKS</h2>
                      <div className="flex-container" animationin="fadeIn" isvisible="true">
                          { this.props.books.books.map(function(book, index){
                            return <div className="card" key={index} onClick={() => this.deleteBook(book)}>
                              <p>Title: {book.title}</p>
                              <p>Author: {book.author ? book.author : ' N/A'}</p>
                              <p>Genre: {book.genre ? book.genre : ' N/A'}</p>
                              <p>Year: {book.year ? book.year : ' N/A'}</p>
                              </div>;
                            }, this)}
                      </div>
                  </div>
              </Animated>
            </React.Fragment>
          );
        }
      }
      const mapStateToProps = state => ({
        books:state.books
      });
export default connect(mapStateToProps, { getBooks, deleteBook })(books);
