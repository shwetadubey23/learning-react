import React from 'react'
import '../index.css'

export const Footer = () => {
    const upDateYear = new Date().getFullYear()
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <span> &copy; {upDateYear} Your Website. All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}
