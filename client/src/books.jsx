import React, { Component } from "react";
import './books.css';
import { Animated } from "react-animated-css";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { connect } from 'react-redux';
import { getBooks } from './actions/bookActions';
import { PropTypes } from 'prop-types';

class library extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false,
      books:[]
    };
  }
  
    componentDidMount(){
      this.props.getBooks()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.bookCount !== this.props.bookCount){
      // axios.get('http://localhost:5000/books/')
      // .then( res => {
        
      //   if(res){
  
      //     this.setState({
      //       books:res.data
      //     });
  
      //   }
  
      // }).catch( err => {
      //   console.log(err);
      // })
    }
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

        // axios.delete('http://localhost:5000/books/'+ book._id)
        // .then( res => {
          
        //   if(res){
    
        //     axios.get('http://localhost:5000/books/')
        //     .then( res => {
              
        //       if(res){
        
        //         this.setState({
        //           books:res.data
        //         });
        
        //       }
        
        //     }).catch( err => {
        //       console.log(err);
        //     })
        //   }
    
        // }).catch( err => {
        //   console.log(err);
        // })

      }
    })
  };

  render() {
        return (
            <React.Fragment>
                <Animated animationin="fadeIn" isvisible="true">
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
      
      library.propTypes = {
        getBooks: PropTypes.func.isRequired,
        books: PropTypes.object.isRequired
      }
    
    const mapStateToProps = state => ({
        books:state.books
    });

export default connect(mapStateToProps, { getBooks })(library);
