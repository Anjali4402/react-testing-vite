
type propsState = {
    userName ?: string;
    testFunction ?: () => void;
}

const PropsTest = (props:propsState) => {
  return (
    <div>
        <h1>Props Test</h1>
        <p>User name is : {props.userName}</p>
        <button
        onClick={props.testFunction}
        >Click</button>
    </div>
  )
}

export default PropsTest