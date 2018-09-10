//@flow
import * as React from "react";
import { Key } from "Components";
import "./Piano.css";

type Props = {
  getKey: string => {}
};

class Piano extends React.Component<Props> {
  render() {
    const { getKey } = this.props;

    return (
      <div className="piano">
        <div className="piano-container">
          <li>
            <Key color="white" note="C4" getKey={getKey} />
            <Key color="black" note="Db4" getKey={getKey} />
          </li>
          <li>
            <Key color="white" note="D4" getKey={getKey} />
            <Key color="black" note="Eb4" getKey={getKey} />
          </li>
          <li>
            <Key color="white" note="E4" getKey={getKey} />
          </li>
          <li>
            <Key color="white" note="F4" getKey={getKey} />
            <Key color="black" note="Gb4" getKey={getKey} />
          </li>
          <li>
            <Key color="white" note="G4" getKey={getKey} />
            <Key color="black" note="Ab4" getKey={getKey} />
          </li>
          <li>
            <Key color="white" note="A4" getKey={getKey} />
            <Key color="black" note="Bb4" getKey={getKey} />
          </li>
          <li>
            <Key color="white" note="B4" getKey={getKey} />
          </li>
        </div>
      </div>
    );
  }
}

export default Piano;
