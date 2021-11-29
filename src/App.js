import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="log-box">
          <img
            className="logo"
            alt="logo"
            src="./assets/509-5099434_todo-app-logo-transparent-hd-png-download"
          ></img>
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
              The most effective way to do it{" "}
            </span>
            <span className="heading-primary-sub">Is to do it</span>
          </h1>

          <a
            href="https://www.google.com/"
            className="btn btn-white btn-animated"
          >
            login
          </a>
          <a
            href="https://www.google.com/"
            className="btn btn-white btn-animated"
          >
            signup
          </a>
        </div>
      </div>
      <div className="section-about">
        <div className="u-center-text u-margin-bottom-8">
          <h2 className="heading-secondary">This is the main Section</h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-10">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              I am learining sass with react. as sass is so powerful i have to
              master it to create beautiful websites
            </p>
            <h3 className="heading-tertiary u-margin-bottom-10">
              You are not going to fall in love with nature
            </h3>
            <p className="paragraph">
              My goal is to master the web development and i have the time of
              year to do it
            </p>
          </div>
          <div className="col-2-of-2">Images Area </div>
        </div>
      </div>
    </div>
  );
}

export default App;
