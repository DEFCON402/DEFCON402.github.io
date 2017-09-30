import Immutable from "immutable";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { Redirect } from "react-router";
import { HashRouter, Route } from "react-router-dom";

import ComponentLink from "./ComponentLink";
import styles from "./Application.css";
import NavLink from "./NavLink";
import { TYPES } from "./Icon";

import Home from "../Home/Home";
import NextMeeting from "../NextMeeting/NextMeeting";
import Slides from "../Slides/Slides";
import AboutUs from "../AboutUs/AboutUs";

const COMPONENT_EXAMPLES_MAP = {
  "/components/Home": Home,
  "/components/NextMeeting": NextMeeting,
  "/components/Slides": Slides,
  "/components/AboutUs": AboutUs
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
                <NavLink to="/components/Slides" iconType={TYPES.DOCUMENTATION}>
                  Slides
                </NavLink>
                <NavLink to="/components/AboutUs" iconType={TYPES.WIZARD}>
                  About Us
                </NavLink>
                <NavLink
                  href="https://github.com/DEFCON402/DEFCON402.github.io"
                  iconType={TYPES.SOURCE}
                >
                  Source
                </NavLink>
              </ul>
            </div>

            <div className={styles.HighOrderComponentList}>
              <ComponentLink to="/components/Home">
                Home
              </ComponentLink>
              <ComponentLink to="/components/NextMeeting">
                Next Meeting
              </ComponentLink>
            </div>
          </div>

          <div
            className={bodyStyle}
            ref={e => this.setState({ customElement: e })}
          >
            <div className={styles.column}>
              {Object.keys(COMPONENT_EXAMPLES_MAP).map(route =>
                <Route
                  key={route}
                  path={route}
                  component={COMPONENT_EXAMPLES_MAP[route]}
                />
              )}
              <Route
                exact
                path="/"
                render={() => <Redirect to="/components/Home" />}
              />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
