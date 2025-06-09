import React from "react";
import './Header.css';

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://www.newscaststudio.com/wp-content/uploads/2019/10/new-hbo-max-logo-design.jpg" alt="HBO"></img>
                </a>
            </div>

            <div className="header-user">
                <img src="https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_200x200.jpg" alt="user photo"></img>
            </div>
        </header>

    )
}