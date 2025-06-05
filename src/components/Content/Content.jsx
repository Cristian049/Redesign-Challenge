import BottomBar from "../BottomBar/BottomBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Content.css";
export default function Content({ children, selectedId, onSelectSkip }) {
  const isLoader = children?.type === Loader;
  const isError = children?.type === ErrorMessage;
  const isCentered = isLoader || isError;
  return (
    <div className="content">
      <h1 className="h1-select">Choose Your Skip Size</h1>
      <p className="p-select">
        Select the skip size that best suits your needs
      </p>
      <div className={isCentered ? "centered-full" : ""}>{children}</div>
      <div className={`bottom-container ${selectedId ? "show" : ""}`}>
        <BottomBar
          selectedId={selectedId}
          onSelectSkip={onSelectSkip}
        ></BottomBar>
      </div>
    </div>
  );
}
