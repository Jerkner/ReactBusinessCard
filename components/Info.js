import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/philip.jpg" />
            <h1>Philip Jerkner</h1>
            <h4>Frontend Developer</h4>
            <p>philip@jerkner.se</p>
            <div className="buttons">
                <div className="mail">
                    <img src="./images/mail.png" />
                    Email
                </div>
                <div className="linkedin">
                    <img src="./images/linkedin.png" />
                    LinkedIn
                </div>
            </div>
        </div>
    )
}