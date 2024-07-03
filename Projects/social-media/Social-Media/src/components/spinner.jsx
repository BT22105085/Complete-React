const Spinner = () => {
  return (
    <div className="d-flex justify-content-center pk-spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "5rem", width: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;
