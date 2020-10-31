import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import TodayBoxoffice from "../components/Boxoffices/TodayBoxoffice";
import TopRatedlist from "../components/Boxoffices/TopRatedlist";
import WeekendBoxoffice from "../components/Boxoffices/WeekendBoxoffice";
import Searchbar from "../components/Searchbar";
import { authService } from "../fBase";
import "./Home.css";

function Home({ userObj, history }) {
  const [first, setFirst] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onSearchSubmit = (text) => {
    history.push(`/search?text=${text}`);
  };

  return (
    <div className="home">
      <section id="header">
        <div className="container">
          <h1 id="logo">
            <a href="index.html">Movie App</a>
          </h1>

          <p>
            {userObj.displayName ? userObj.displayName + "님 " : null}영화
            정보와 영화관 상세 리뷰를 확인할 수 있습니다.
          </p>
        </div>
      </section>
      <body className="homepage is-preload">
        <div id="page-wrapper">
          <section id="features">
            <div className="container">
              <header>
                <h2>
                  <strong>박스 오피스</strong>를 확인하세요
                </h2>
              </header>
              <div className="row aln-center">
                <div className="col-4 col-6-medium col-12-small">
                  <section>
                    {/* <a href="#" className="image featured">
                      <img src="images/pic01.jpg" alt="" />
                    </a> */}
                    <header>
                      <h3>Today's Box Office</h3>
                    </header>
                    {first ? <TodayBoxoffice></TodayBoxoffice> : null}
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section>
                    {/* <a href="#" className="image featured">
                      <img src="images/pic02.jpg" alt="" />
                    </a> */}
                    <header>
                      <h3>Last Weekend's Box Office</h3>
                    </header>

                    {first ? <WeekendBoxoffice></WeekendBoxoffice> : null}
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section>
                    {/* <a href="#" className="image featured">
                      <img src="images/pic03.jpg" alt="" />
                    </a> */}
                    <header>
                      <h3>Top Rated Movies</h3>
                    </header>

                    {first ? <TopRatedlist></TopRatedlist> : null}
                    {/* <strong>Responsive Tools</strong> is a simple set of tools
                      for building responsive sites and apps. All of my
                      templates at <a href="http://html5up.net">HTML5 UP</a> are
                      built using these tools. */}
                  </section>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <a
                        href="#/nowplaying?page=1"
                        className="button icon solid fa-file"
                      >
                        Tell Me More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="banner">
            <div className="container">
              <h2>
                <strong>영화</strong>를 찾아보세요
              </h2>
              <Searchbar onSubmit={onSearchSubmit} />
            </div>
          </section>

          <section id="footer">
            <div id="copyright" className="container">
              <ul className="links">
                <li>&copy; mukjo96. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </section>

          {/* 

          <section id="main">
            <div className="container">
              <div className="row">
                <div className="col-8 col-12-medium">
                  <article className="box post">
                    <header>
                      <h2>
                        <a href="#">
                          I don’t want to say <strong>it’s the aliens</strong>{" "}
                          ...
                          <br />
                          but it’s the aliens.
                        </a>
                      </h2>
                    </header>
                    <a href="#" className="image featured">
                      <img src="images/pic04.jpg" alt="" />
                    </a>
                    <h3>I mean isn't it possible?</h3>
                    <p>
                      Phasellus laoreet massa id justo mattis pharetra. Fusce
                      suscipit ligula vel quam viverra sit amet mollis tortor
                      congue. Sed quis mauris sit amet magna accumsan tristique.
                      Curabitur leo nibh, rutrum eu malesuada in, tristique at
                      erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                      magna tempus veroeros lorem sed tempus aliquam lorem ipsum
                      veroeros consequat magna tempus lorem ipsum consequat
                      Phasellus laoreet massa id justo mattis pharetra. Fusce
                      suscipit ligula vel quam viverra sit amet mollis tortor
                      congue. Sed quis mauris sit amet magna accumsan tristique.
                      Curabitur leo nibh, rutrum eu malesuada in tristique.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button icon solid fa-file">
                          Continue Reading
                        </a>
                      </li>
                    </ul>
                  </article>

                  <article className="box post">
                    <header>
                      <h2>
                        <a href="#">
                          By the way, many thanks to{" "}
                          <strong>regularjane</strong>
                          for these awesome demo photos
                        </a>
                      </h2>
                    </header>
                    <a href="#" className="image featured">
                      <img src="images/pic05.jpg" alt="" />
                    </a>
                    <h3>You should probably check out her work</h3>
                    <p>
                      Phasellus laoreet massa id justo mattis pharetra. Fusce
                      suscipit ligula vel quam viverra sit amet mollis tortor
                      congue. Sed quis mauris sit amet magna accumsan tristique.
                      Curabitur leo nibh, rutrum eu malesuada in, tristique at
                      erat lorem ipsum dolor sit amet lorem ipsum sed consequat
                      consequat magna tempus lorem ipsum consequat Phasellus
                      laoreet massa id in, tristique at erat lorem ipsum dolor
                      sit amet lorem ipsum sed consequat magna tempus veroeros
                      lorem sed tempus aliquam lorem ipsum veroeros consequat
                      magna tempus lorem ipsum consequat Phasellus laoreet massa
                      id justo mattis pharetra. Fusce suscipit ligula vel quam
                      viverra sit amet mollis tortor congue. Sed quis mauris sit
                      amet magna accumsan tristique. Curabitur leo nibh, rutrum
                      malesuada.
                    </p>
                    <p>
                      Erat lorem ipsum veroeros consequat magna tempus lorem
                      ipsum consequat Phasellus laoreet massa id justo mattis
                      pharetra. Fusce suscipit ligula vel quam viverra sit amet
                      mollis tortor congue. Sed quis mauris sit amet magna
                      accumsan tristique. Curabitur leo nibh, rutrum eu
                      malesuada in, tristique at erat. Curabitur leo nibh,
                      rutrum eu malesuada in, tristique at erat lorem ipsum
                      dolor sit amet lorem ipsum sed consequat magna tempus
                      veroeros lorem sed tempus aliquam lorem ipsum veroeros
                      consequat magna tempus.
                    </p>
                    <ul className="actions">
                      <li>
                        <a href="#" className="button icon solid fa-file">
                          Continue Reading
                        </a>
                      </li>
                    </ul>
                  </article>
                </div>

                <div id="sidebar" className="col-4 col-12-medium">
                  <section>
                    <ul className="divided">
                      <li>
                        <article className="box excerpt">
                          <header>
                            <span className="date">July 30</span>
                            <h3>
                              <a href="#">Just another post</a>
                            </h3>
                          </header>
                          <p>
                            Lorem ipsum dolor odio facilisis convallis. Etiam
                            non nunc vel est suscipit convallis non id orci
                            lorem ipsum sed magna consequat feugiat lorem
                            dolore.
                          </p>
                        </article>
                      </li>
                      <li>
                        <article className="box excerpt">
                          <header>
                            <span className="date">July 28</span>
                            <h3>
                              <a href="#">And another post</a>
                            </h3>
                          </header>
                          <p>
                            Lorem ipsum dolor odio facilisis convallis. Etiam
                            non nunc vel est suscipit convallis non id orci
                            lorem ipsum sed magna consequat feugiat lorem
                            dolore.
                          </p>
                        </article>
                      </li>
                      <li>
                        <article className="box excerpt">
                          <header>
                            <span className="date">July 24</span>
                            <h3>
                              <a href="#">One more post</a>
                            </h3>
                          </header>
                          <p>
                            Lorem ipsum dolor odio facilisis convallis. Etiam
                            non nunc vel est suscipit convallis non id orci
                            lorem ipsum sed magna consequat feugiat lorem
                            dolore.
                          </p>
                        </article>
                      </li>
                    </ul>
                  </section>

                  <section>
                    <ul className="divided">
                      <li>
                        <article className="box highlight">
                          <header>
                            <h3>
                              <a href="#">Something of note</a>
                            </h3>
                          </header>
                          <a href="#" className="image left">
                            <img src="images/pic06.jpg" alt="" />
                          </a>
                          <p>
                            Phasellus sed laoreet massa id justo mattis
                            pharetra. Fusce suscipit ligula vel quam viverra sit
                            amet mollis tortor congue magna lorem ipsum dolor et
                            quisque ut odio facilisis convallis. Etiam non nunc
                            vel est suscipit convallis non id orci. Ut interdum
                            tempus facilisis convallis. Etiam non nunc vel est
                            suscipit convallis non id orci.
                          </p>
                          <ul className="actions">
                            <li>
                              <a href="#" className="button icon solid fa-file">
                                Learn More
                              </a>
                            </li>
                          </ul>
                        </article>
                      </li>
                      <li>
                        <article className="box highlight">
                          <header>
                            <h3>
                              <a href="#">Something of less note</a>
                            </h3>
                          </header>
                          <a href="#" className="image left">
                            <img src="images/pic07.jpg" alt="" />
                          </a>
                          <p>
                            Phasellus sed laoreet massa id justo mattis
                            pharetra. Fusce suscipit ligula vel quam viverra sit
                            amet mollis tortor congue magna lorem ipsum dolor et
                            quisque ut odio facilisis convallis. Etiam non nunc
                            vel est suscipit convallis non id orci. Ut interdum
                            tempus facilisis convallis. Etiam non nunc vel est
                            suscipit convallis non id orci.
                          </p>
                          <ul className="actions">
                            <li>
                              <a href="#" className="button icon solid fa-file">
                                Learn More
                              </a>
                            </li>
                          </ul>
                        </article>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </section>

          <section id="footer">
            <div className="container">
              <header>
                <h2>
                  Questions or comments? <strong>Get in touch:</strong>
                </h2>
              </header>
              <div className="row">
                <div className="col-6 col-12-medium">
                  <section>
                    <form method="post" action="#">
                      <div className="row gtr-50">
                        <div className="col-6 col-12-small">
                          <input name="name" placeholder="Name" type="text" />
                        </div>
                        <div className="col-6 col-12-small">
                          <input name="email" placeholder="Email" type="text" />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <a
                            href="#"
                            className="form-button-submit button icon solid fa-envelope"
                          >
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <p>
                      Erat lorem ipsum veroeros consequat magna tempus lorem
                      ipsum consequat Phaselamet mollis tortor congue. Sed quis
                      mauris sit amet magna accumsan tristique. Curabitur leo
                      nibh, rutrum eu malesuada.
                    </p>
                    <div className="row">
                      <div className="col-6 col-12-small">
                        <ul className="icons">
                          <li className="icon solid fa-home">
                            1234 Somewhere Road
                            <br />
                            Nashville, TN 00000
                            <br />
                            USA
                          </li>
                          <li className="icon solid fa-phone">
                            (000) 000-0000
                          </li>
                          <li className="icon solid fa-envelope">
                            <a href="#">info@untitled.tld</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-12-small">
                        <ul className="icons">
                          <li className="icon brands fa-twitter">
                            <a href="#">@untitled</a>
                          </li>
                          <li className="icon brands fa-instagram">
                            <a href="#">instagram.com/untitled</a>
                          </li>
                          <li className="icon brands fa-dribbble">
                            <a href="#">dribbble.com/untitled</a>
                          </li>
                          <li className="icon brands fa-facebook-f">
                            <a href="#">facebook.com/untitled</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div id="copyright" className="container">
              <ul className="links">
                <li>&copy; Untitled. All rights reserved.</li>
                <li>
                  Design: <a href="http://html5up.net">HTML5 UP</a>
                </li>
              </ul>
            </div>
          </section> */}
        </div>
      </body>
    </div>
  );
}

export default withRouter(Home);
