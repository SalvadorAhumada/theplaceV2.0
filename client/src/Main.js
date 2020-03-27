import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './actions/bookActions';
import { PropTypes } from 'prop-types';
import './index.css';

class Main extends Component {

    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        const { books } = this.props.books
        return (
            <div>
                <h2>Deploy test</h2>
                <p>Information from Database:</p>
                <div className="wrapper-books">{books.map((book) => (
                <div key={book._id}>
                    <h3>{ book.title }</h3>
                    <p>{ book.author }</p>
                    <p>{ book.genre }</p>
                    <p>{ book.year }</p>
                </div>
        ))}</div>
        <p>Agregar libro:</p>
        <p><input type="text" placeholder="Titulo"/></p>
        <p><input type="text" placeholder="Autor"/></p>
        <p><input type="text" placeholder="Genero"/></p>
        <p><input type="number" placeholder="Año"/></p>
        <p><button>Enviar</button></p>
            </div>
        );
    }
}

Main.propTypes = {
    getBooks: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    books:state.books
});

export default connect(mapStateToProps, { getBooks })(Main);