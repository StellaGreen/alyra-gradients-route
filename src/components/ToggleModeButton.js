
const ToggleModeButton = (props) => {
    const { darkMode, setDarkMode } = props;
  
    const handleButtonClick = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <>
        {!darkMode ? (
          <button
            onClick={handleButtonClick}
            aria-label="Clickez pour afficher le mode sombre"
            className="btn btn-dark position-absolute m-5"
          >
            🌒
          </button>
        ) : (
          <button
            onClick={handleButtonClick}
            aria-label="Clickez pour afficher le mode clair"
            className="btn btn-light position-absolute m-5"
          >
            🌔
          </button>
        )}
      </>
    );
  };
  export default ToggleModeButton;