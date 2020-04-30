import React from "react"

import "./App.scss"

const App = () => (
  <body>
    <header className="header-container">
      <div className="header-container__brand">
        <h1 className="header-container__brand--title">NotiWeb</h1>
        <img className="header-container__brand--logo" src="logo" alt="logo" />
      </div>
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Noticias Principales
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Noticias en imagenes
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Deporte
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Espectaculos
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Politica
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Clima
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Dolar
            </a>
          </li>
          <li className="nav-bar__list--item">
            <a className="nav-bar__list--item--link" href="https://www.google.com.ar/">
              Opiniones
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <aside className="aside-container">
      <section className="aside-container__wheather">
        <h2 className="aside-container__wheather--title">Clima</h2>
        <img className="aside-container__wheather--img" src="imagen" alt="wheather"></img>
      </section>
      <section className="aside-container__dolar">
        <h2 className="aside-container__dolar--title">Dolar</h2>
        <img className="aside-container__dolar--img" src="imagen" alt="dolar"></img>
      </section>
      <section className="opinion-container">
        <article className="opinion-container__article">
          <img className="opinion-container__article--author" src="imagen" alt="author"></img>
          <p className="opinion-container__article--name"></p>
          <p className="opinion-container__article--content"></p>
        </article>
        <article className="opinion-container__article">
          <img className="opinion-container__article--author" src="imagen" alt="author"></img>
          <p className="opinion-container__article--name"></p>
          <p className="opinion-container__article--content"></p>
        </article>
        <article className="opinion-container__article">
          <img className="opinion-container__article--author" src="imagen" alt="author"></img>
          <p className="opinion-container__article--name"></p>
          <p className="opinion-container__article--content"></p>
        </article>
        <article className="opinion-container__article">
          <img className="opinion-container__article--author" src="imagen" alt="author"></img>
          <p className="opinion-container__article--name"></p>
          <p className="opinion-container__article--content"></p>
        </article>
      </section>
    </aside>
    <section className="main-section">
      <article className="main-section__main-article">
        <img className="main-section__main-article--img" src="mainimg" alt="description"></img>
        <p className="main-section__main-article--content">Contenido de la noticia</p>
      </article>
      <section className="articles-container">
        <article className="articles-container__article">
          <img className="articles-container__article--img" src="notice1img" alt="description"></img>
          <p className="articles-container__article--content">Contenido de la noticia</p>
        </article>
        <article className="articles-container__article">
          <img className="articles-container__article--img" src="notice1img" alt="description"></img>
          <p className="articles-container__article--content">Contenido de la noticia</p>
        </article>
        <article className="articles-container__article">
          <img className="articles-container__article--img" src="notice1img" alt="description"></img>
          <p className="articles-container__article--content">Contenido de la noticia</p>
        </article>
        <article className="articles-container__article">
          <img className="articles-container__article--img" src="notice1img" alt="description"></img>
          <p className="articles-container__article--content">Contenido de la noticia</p>
        </article>
      </section>
    </section>
    <section className="galery-container">
      <img className="galery-container" src="nimg" alt="gimg"></img>
      <img className="galery-container" src="nimg" alt="gimg"></img>
      <img className="galery-container" src="nimg" alt="gimg"></img>
      <img className="galery-container" src="nimg" alt="gimg"></img>
    </section>
    <section className="themes-container">
      <section className="themes-container__sports">
        <article className="themes-container__sport-article">
          <img className="themes-container__sport-article--img" src="sport" alt="sport"></img>
          <p className="themes-container__sport-article--content"></p>
        </article>
        <article className="themes-container__show-article">
          <img className="themes-container__show-article--img" src="show" alt="sport"></img>
          <p className="themes-container__show-article--content"></p>
        </article>
        <article className="themes-container__politic-article">
          <img className="themes-container__politic-article--img" src="politic" alt="sport"></img>
          <p className="themes-container__politic-article--content"></p>
        </article>
      </section>
    </section>
    <footer className="footer-container">
      <div className="footer-container__links">
        <a className="footer-container__links--twitter" href="#twitter"></a>
        <a className="footer-container__links--facebook" href="#facebook"></a>
        <a className="footer-container__links--instagram" href="#instagram"></a>
      </div>
      <p className="footer-container__copyright">copyright</p>
    </footer>
  </body>
)

export default App
