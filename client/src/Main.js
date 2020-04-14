import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLinks } from './actions/linkActions';
import { PropTypes } from 'prop-types';
import './index.css';

class Main extends Component {

    componentDidMount() {
        this.props.getLinks()
    }

    render() {
        const { links } = this.props.links
        return (
            <div>
                <h2>Deploy test</h2>
                <p>Information from Database:</p>
                <div className="wrapper-books">{links.map((book) => (
                <div key={book._id}>
                    <h3>{ book.name }</h3>
                    <p>{ book.url }</p>
                    <p>{ book.description }</p>
                </div>
        ))}</div>
        </div>
        );
    }
}

Main.propTypes = {
    getLinks: PropTypes.func.isRequired,
    links: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    links:state.links
});

export default connect(mapStateToProps, { getLinks })(Main);