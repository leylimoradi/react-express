
import React from 'react';
import { Fragment } from 'react';
import { Component } from 'react'


export default class Header extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);

    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            headerEl = document.getElementById("js-header");

        if (distanceY > shrinkOn) {
            headerEl.classList.add("shadow");

        } else {
            headerEl.classList.remove("shadow");

        }
    }
    render() {
        return (

            <Fragment>

                <header id="js-header">
               

                    <div className="container">
                    

                        <div className="logo">
                     
                        </div>


                        <input
                            className="searchField"
                            type="text"
                            placeholder="جستجو"
                            aria-label="جستجو" />
                        <div className="login">
                            <a href="/#">ورود</a>
                        </div>
                    </div>

                </header>

            </Fragment>
        )
    }
}