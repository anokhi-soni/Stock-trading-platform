import "./Loading.css";

const Loading = ({text}) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{text}...</p>
    </div>
  );
};

export default Loading;