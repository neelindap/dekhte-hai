import { TransitionGroup, CSSTransition } from "react-transition-group";

const RollingWord = ({ selectedValue }) => {
  return (
    <TransitionGroup component="span">
      <CSSTransition
        classNames="ctr"
        timeout={{ enter: 100, exit: 100 }}
        unmountOnExit
      >
        <div className="rolling-word">{selectedValue}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RollingWord;
