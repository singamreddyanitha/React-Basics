import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./index.css";

const overlayStyles = {
    backgroundColor: "#ffff",
}

const ReactPopup = () => (
  <div className="popup-container">
       {/* position prop example */}
    <div>
        position prop
      <Popup
        // modal  // modal prop
        trigger={
          <button className="trigger-button" type="button">
            Trigger
          </button>
        }
        position="bottom left"  // position Prop
      >
        <div>
          <p>React is a popular and widely used programming language</p>
        </div>
      </Popup>
    </div>

    {/* overlaystyle */}
    <div>
        overlayStyle
      <Popup
        modal  // modal prop
        trigger={
          <button className="trigger-button" type="button">
            Trigger
          </button>
        }
       overlayStyle = {overlayStyles}
      >
        <div>
          <p>React is a popular and widely used programming language</p>
        </div>
      </Popup>
    </div>


    modal prop with close button
    <Popup
      modal
      trigger={
        <button className="trigger-button" type="button">
          Trigger
        </button>
      }
    >
      {(close) => (   // modal Prop with close button
        <>
          <div>
            <h1>Aparna Ippiri</h1>
            <p>React is a popular and widely used programming language</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            close
          </button>
        </>
      )}
    </Popup>
  </div>
);

export default ReactPopup;
