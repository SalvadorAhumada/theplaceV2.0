import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { getLinks } from './actions/linkActions';
import { PropTypes } from 'prop-types';
import './index.css';
import { Animated } from "react-animated-css";
import loading from "./img/loading.svg";
const Cardlink = React.lazy( ()=> import('./card-link'));

class Main extends Component {

    componentDidMount() {
        this.props.getLinks()
    }

    filterLinks = link => {
        if(this.props.filters[link.category] === true) {
            return <Suspense fallback={<div className="card-link-lazy"><img src={loading}/></div>} key={link._id}>
                        <Animated animationin="bounceIn" animationout="fadeOut" isvisible="true">
                            <Cardlink unit={link}/>
                        </Animated>
                    </Suspense>
            } else {
            return null;
        }
    }

    render() {
        const { links } = this.props.links

        return (
            <div>
                <div className="wrapper-books">{links.map((link) => (
                    this.filterLinks(link)))}
                </div>
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