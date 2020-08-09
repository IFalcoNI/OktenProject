import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <img id="logoImg" src="https://cdn.dribbble.com/users/234141/screenshots/3064376/falcon_logo1.jpg"
                     alt="logo"/>
                <div className="socialMedia">
                    <div id="Rights">
                        © 2020 FalcoN. All Rights Reserved.
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;