import { connect } from "react-redux";

const Counter = (props) => {
  return (
    <>
      {props.count.count}
      <br />
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
