import { TransitionGroup, CSSTransition } from "react-transition-group";

const RollingWord = ({ selectedValue, color = "#000" }) => {
  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="ctr"
        timeout={{ enter: 100, exit: 100 }}
        unmountOnExit
      >
        <div className="rolling-word font-weight-bold" style={{ color: color }}>
          {selectedValue}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RollingWord;
