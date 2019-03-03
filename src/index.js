import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";
import Tab from "./Tab";

function App() {
  return (
    <div className="App">
    <Tabs>
    <Tab title="Tab1">
    <b>Lorem</b> ipsum dolor sit amet, consectetur adipisicing elit. Alias
  earum eos fugit, molestias obcaecati provident vero voluptatum? Dicta,
    eos error eveniet hic, laboriosam minima nostrum, possimus provident
  repudiandae sed velit?
</Tab>
  <Tab title="Tab2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
  adipisci aperiam culpa doloremque eum expedita explicabo facere fugit
  harum laborum magni nam officia officiis omnis quaerat quam,
    reiciendis sapiente voluptas!
  </Tab>
  <Tab title="Tab3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
  deserunt dolores eos et eveniet excepturi harum iusto magni molestiae
  nesciunt nostrum nulla, numquam omnis quae quis rem, rerum tempora
  velit!
  </Tab>
  </Tabs>
  </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
