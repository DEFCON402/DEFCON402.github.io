import Immutable from "immutable";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { HashRouter, Route } from "react-router-dom";

import ComponentLink from "./ComponentLink";
import styles from "./Application.css";
import NavLink from "./NavLink";
import RightSidebar from "./RightSidebar";
import { TYPES } from "./Icon";

import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";
import Calendar from "../Calendar/Calendar";
import Slides from "../Slides/Slides";
import AboutUs from "../AboutUs/AboutUs";
import Connect from "../Connect/Connect";

const COMPONENTS_MAP = {
  "/components/Home": Home,
  "/components/Schedule": Schedule,
  "/components/Calendar": Calendar,
  "/components/Slides": Slides,
  "/components/AboutUs": AboutUs,
  "/components/Connect": Connect
};

export default class Application extends PureComponent {
  static childContextTypes = {
    customElement: PropTypes.any,
    isScrollingCustomElement: PropTypes.bool.isRequired,
    setScrollingCustomElement: PropTypes.func
  };

  state = {
    isScrollingCustomElement: false
  };

  constructor(props) {
    super(props);
    this.setScrollingCustomElement = this.setScrollingCustomElement.bind(this);
  }

  setScrollingCustomElement(custom) {
    this.setState({ isScrollingCustomElement: custom });
  }

  getChildContext() {
    const { customElement, isScrollingCustomElement } = this.state;
    return {
      customElement,
      isScrollingCustomElement,
      setScrollingCustomElement: this.setScrollingCustomElement
    };
  }

  render() {
    const { isScrollingCustomElement } = this.state;
    const bodyStyle = isScrollingCustomElement
      ? styles.ScrollingBody
      : styles.Body;
    return (
      <HashRouter>
        <div className={styles.demo}>
          <div className={styles.headerRow}>
            <div className={styles.logoRow}>
              <div className={styles.ReactContainer}>
                <div className={styles.PrimaryLogoText}>defcon</div>
                <div className={styles.SecondaryLogoText}>402</div>
              </div>

              <ul className={styles.NavList}>
                <NavLink href='#'
                  iconType={TYPES.SPEAK}>
                  Speak
                </NavLink>
                <NavLink to="/components/Slides"
                  iconType={TYPES.SLIDES}>
                  Slides
                </NavLink>
                <NavLink to="/components/AboutUs" iconType={TYPES.ABOUTUS}>
                  About Us
                </NavLink>
                <NavLink href="https://github.com/DEFCON402/DEFCON402.github.io"
                  iconType={TYPES.SOURCE}>
                  Source
                </NavLink>
              </ul>
            </div>

            <div className={styles.HighOrderComponentList}>
              <ComponentLink to="/components/Home">
                Home
              </ComponentLink>
              <ComponentLink to="/components/Schedule">
                Upcoming Schedule
              </ComponentLink>
              <ComponentLink to="/components/Calendar">
                Calendar
              </ComponentLink>
              <ComponentLink to="/components/Connect">
                Connect
              </ComponentLink>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={bodyStyle}
              ref={e => this.setState({ customElement: e })}
            >
              <div className={styles.column}>
                {Object.keys(COMPONENTS_MAP).map(route =>
                  <Route
                    key={route}
                    path={route}
                    component={COMPONENTS_MAP[route]}
                  />
                )}
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/components/Home" />}
                />
              </div>
            </div>

            <div className={styles.slides}>
              Vertical Carousel of all the latest presentations.  (In progress...)


              // Example code for now, move to RightSidebar soon

              // Only show sidebar on pages != slides

              <div className={styles.slidePane}>
                <div className={styles.slidePreview}>
                </div>
                <div className={styles.slideTitle}>
                  The Internet of Tubes
                </div>
                <div className={styles.slideAuthor}>
                  Henry Karpf
                </div>
              </div>


              <div className={styles.slidePane}>
                <div className={styles.slidePreview}>
                </div>
                <div className={styles.slideTitle}>
                  Software Defined Perimeter
                </div>
                <div className={styles.slideAuthor}>
                  Brandon Scherer
                </div>
              </div>


              <div className={styles.slidePane}>
                <div className={styles.slidePreview}>
                </div>
                <div className={styles.slideTitle}>
                  Web Application Vulnerabilities
                </div>
                <div className={styles.slideAuthor}>
                  Adam Schaal
                </div>
              </div>


            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
