import "./DashboardTour.css";

type TourPromptProps = {
  onStart: () => void;
  onDecline: () => void;
  primaryText: string;
  secondaryText: string;
  okText: string;
  cancelText: string
};

const TourPrompt = ({ onStart, onDecline, primaryText, secondaryText, okText, cancelText }: TourPromptProps) => {
  return (
    <div className="tour-overlay">
      <div className="tour-prompt">
        <h2>{primaryText}</h2>
        <p>{secondaryText}</p>
        <div className="tour-btns">
            <button onClick={onStart} style={{ marginRight: '10px', backgroundColor: "#8884d8", color: "#fff" }}>{okText}</button>
            <button onClick={onDecline}>{cancelText}</button>
        </div>
      </div>
    </div>
  );
};

export default TourPrompt;