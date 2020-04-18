import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { getLinks } from './actions/linkActions';
import { PropTypes } from 'prop-types';
import './index.css';
import loading from "./img/loading.svg";
import Clear from "@material-ui/icons/Clear";
const Cardlink = React.lazy( ()=> import('./card-link'));

class Main extends Component {

    componentDidMount() {
        this.props.getLinks()
    }

    state = {
        show:false
    }

    handleVote = number => {
        if(!this.props.user.user) {
            this.setState({show: true})

            setTimeout(() => {
                this.setState({show: false})
            }, 2000);
        } else {
            console.log('you voted!')
        }
    }

    filterLinks = link => {
        if(this.props.filters[link.category] === true) {
            return <Suspense fallback={<div className="card-link-lazy"><img src={loading} alt="loading..."/></div>} key={link._id}>
                        <div className="animated bounceIn">
                            <Cardlink unit={link} user={this.props.user} onClick={this.handleVote}/>
                        </div>
                    </Suspense>
            } else {
            return null;
        }
    }

    render() {
        const { links } = this.props.links

        const showModal = this.state.show ? <div className="login-warning animated fadeIn faster">
            <div><Clear/>Please login to vote!</div>
            </div> : null

        return (
            <div>
                <div className="wrapper-books">{links.map((link) => (
                    this.filterLinks(link)))}
                </div>
                {showModal}
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