import React from 'react'
import './profilecard.scss'
import victor from '../../assets/images/image-victor.jpg'

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="container">
                <div className="header">
                    <img src={victor} alt="profile" />
                </div>

                <div className="content">
                    <div className="name">
                        <p>Victor Crest</p>
                        <span className="age"> 26</span>
                    </div>
                    <div className="city">London</div>

                </div>
                <div className="card-foot">
                    <div className="detail">
                        <div className="value">80K</div>
                        <div className="title">Followers</div>
                    </div>
                    <div className="detail">
                        <div className="value">803K</div>
                        <div className="title">Likes</div>
                    </div>
                    <div className="detail">
                        <div className="value"><strong>1.4k</strong></div>
                        <div className="title">Photos</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
