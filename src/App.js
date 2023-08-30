import "./styles.css";
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
export default function App() {
  return (
    <div>
      <Button onClick={() => alert("You clicked me!")} />
    </div>
  );
}
