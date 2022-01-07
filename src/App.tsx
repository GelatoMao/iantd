import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
          className="custom"
        >
          Hello
        </Button>
        <Button disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary Button
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small Danger Button
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">
          Baidu
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="https://www.google.com"
          disabled
        >
          Disabled google
        </Button>
      </header>
    </div>
  );
}

export default App;
