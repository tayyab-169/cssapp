import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo-box">
          <img
            className="logo"
            src="./assets/422-4223456_to-do-list-vector-todo-list-logos.png"
            alt="logo"
          />
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">
              The most effective way to do it{" "}
            </span>
            <span className="heading-primary-sub">Is to do it</span>
          </h1>

          <a href="#" className="btn btn-white btn-animated">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
