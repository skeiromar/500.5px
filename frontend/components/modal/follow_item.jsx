import React, { Component } from 'react'

class FollowItem extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        const {follow} = this.props;

        return (
            <div>
                <li className="follow-li-modal">
                    <img 
                    className="pfp-styling"
                    src={`${follow.pfp}`} 

                    />
                    <div className="follow-detail-container">
                        <div className="follow-username">
                            {/* username */}
                            {follow.username}
                        </div>
                        <div className="follower-count">
                            {/* follower count */}
                            Followers {follow.followed_ids.length}
                        </div>
                    </div>
                    <div>
                        {/* follow user */}
                        <button className="follow-btn">
                            Follow
                        </button>
                    </div>
                </li>
            </div>
        )
    }
}

export default  FollowItem;