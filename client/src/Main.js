import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { getLinks } from './actions/linkActions';
import { addUser, saveToUser, getFavs } from './actions/userActions';
import { PropTypes } from 'prop-types';
import './index.css';
import loading from "./img/loading.svg";
const Cardlink = React.lazy( ()=> import('./card-link'));

class Main extends Component {

    componentDidMount() {
        this.props.getLinks()
    }

    componentDidUpdate(prevProps) {
        if (this.props.user.user !== prevProps.user.user) {
            let user ={
                googleId:this.props.user.user,
                favorites:[]
            }
            this.props.addUser(user)
        }

        if(this.props.user.user !== prevProps.user.user)  {
            let user ={
                googleId:this.props.user.user
            }

            this.props.getFavs(user)
        };
      }

    state = {
        show:false,
        save:null,
        actionType:null
    }

    handleVote = (name, actionType) => {

        if(!this.props.user.user) {
            this.setState({show: true})

            setTimeout(() => {
                this.setState({show: false})
            }, 2000);

        } else {
            let info = {
                googleId:this.props.user.user,
                site:name,
                actionType
            };
            this.props.saveToUser(info);

            this.setState({
                save:name,
                actionType
            });

            setTimeout(() => {
                this.setState({
                    save:null,
                    actionType:null
                });
            }, 1000);
            }
        }

    filterLinks = link => {
        if(this.props.filters[link.category] === true) {
            return <Suspense fallback={<div className="card-link-lazy"><img src={loading} alt="loading..."/></div>} key={link._id}>
                        <div className="animated bounceIn">
                            <Cardlink favs={this.props.favs} unit={link} user={this.props.user} onClick={this.handleVote}/>
                        </div>
                    </Suspense>
            } else {
            return null;
        }
    }

    render() {
        const { links } = this.props.links

        const showModal = this.state.show ? <div className="login-warning animated fadeIn faster">
            <div>Please login to save this site!</div>
            </div> : null

        const savedLink = this.state.save ?  <div className="save-warning animated fadeIn faster">
        <div>{this.state.save } {this.state.actionType}!</div>
        </div> : null

        return (
            <div>
                <div className="wrapper-books">{links.map((link) => (
                    this.filterLinks(link)))}
                </div>
                {showModal}
                {savedLink}
            </div>
        );
    }
}

Main.propTypes = {
    getLinks: PropTypes.func.isRequired,
    links: PropTypes.object.isRequired,
    addUser:PropTypes.func.isRequired,
    saveToUser:PropTypes.func.isRequired,
    getFavs:PropTypes.func,
    favs:PropTypes.array
}

const mapStateToProps = state => ({
    links:state.links,
    favs:state.users.favs
});

export default connect(mapStateToProps, { getLinks, addUser, saveToUser, getFavs })(Main);