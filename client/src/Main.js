import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './actions/bookActions';
import { PropTypes } from 'prop-types';

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
        <p> {books.map((book) => (
            <li key={book._id}>
                { book.title }
            </li>
        ))}</p>
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