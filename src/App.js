import "./App.css";
import "./Style.css";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title-red">khouloud</h1>
        <br />
        <img src="/imageInSrc.png" alt="ddd" />
        <br />
        <img src="/imageInPublic.jpg" alt="dddkmm" />
      </div>
      <iframe
        width={420}
        height={345}
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
    </div>
  );
}

export default App;
