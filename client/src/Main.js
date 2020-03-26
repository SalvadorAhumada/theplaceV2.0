import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from './actions/bookActions';
import { PropTypes } from 'prop-types';

class Main extends Component {

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                <h2>Deploy test</h2>
                <p>Information from Database:</p>
            </div>
        );
    }
}

Main.propTypes = {
    getBooks: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
}

const MapStateToProps = state => ({
    books:state.books
});

export default connect(MapStateToProps, { getBooks })(Main);