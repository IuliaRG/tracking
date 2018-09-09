import React from 'react';
import './TopBar.scss';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="top-bar-wrapper" >
                <div className="col-md-5 col-lg-4 topButtons">
                    <div className="languageDD"> 
                        <img src="../../../public/images/DDArrow.png"/>
                    </div>
                    <div className="loginBtn"> <a >Sign In</a> </div>
                </div>
                
            </div>
        );
    }
}

export default TopBar;