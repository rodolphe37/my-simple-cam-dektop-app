import Webcam from "react-webcam";
import styles from "./Header.module.css";
import { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import Draggable from "react-draggable";

function Header() {
  const [talkingHead, setTalkingHead] = useState(false);

  return (
    <>
      <header
        className={styles.header}
        style={!talkingHead ? { background: "#9b0bf4fa" } : null}
      >
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => setTalkingHead(!talkingHead)}
            className={styles.button}
            style={talkingHead ? { filter: "opacity(0.4)" } : null}
          >
            {(talkingHead && (
              <BsFillCameraVideoFill fill="#fff" size={23} opacity={0.4} />
            )) || <BsFillCameraVideoOffFill fill="#fff" size={23} />}
          </button>
        </div>
      </header>
      {talkingHead && (
        <Draggable>
          <Webcam
            className={styles.camera}
            audio={false}
            width={200}
            height={200}
            videoConstraints={{
              width: 200,
              height: 200,
              facingMode: "user",
            }}
          />
        </Draggable>
      )}
    </>
  );
}

export default Header;
