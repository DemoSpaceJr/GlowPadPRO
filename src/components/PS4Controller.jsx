export default function PS4Controller({ pad }) {
  if (!pad) return <div>No gamepad connected</div>;

  return (
    <div className="controller ds4">
      <div className="triggers">
        <div className={pad.buttons[6].pressed ? "pressed" : ""}></div>
        <div className={pad.buttons[7].pressed ? "pressed" : ""}></div>
      </div>
      <div className="bumpers">
        <div className={pad.buttons[4].pressed ? "pressed" : ""}></div>
        <div className={pad.buttons[5].pressed ? "pressed" : ""}></div>
      </div>
      <div className="arrows">
        <div className={pad.buttons[12].pressed ? "pressed" : ""}></div>
        <div className={pad.buttons[13].pressed ? "pressed" : ""}></div>
        <div className={pad.buttons[14].pressed ? "pressed" : ""}></div>
        <div className={pad.buttons[15].pressed ? "pressed" : ""}></div>
      </div>
    </div>
  );
}
