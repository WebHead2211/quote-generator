import quoteImg from "../images/quote.png";

export default function Card({ quote, color }) {
  const colors = ["#7C00FE", "#F9E400", "#FFAF00", "#F5004F"];

  let textColor = "white";

  let colorCode = color % 4;
  if (colorCode === 1 || colorCode === 2) {
    textColor = "black";
  }

  return (
    <div
      className="card"
      key={color}
      style={{
        backgroundColor: `${colors[color % 4]}`,
      }}
    >
      <div
        className="quote-symbol left"
        style={{ backgroundImage: `url(${quoteImg})` }}
      ></div>
      <div className="quote-content">
        <div className="quote">
          <p
            className="quote-text"
            style={{
              color: `${textColor}`,
            }}
          >
            {quote}
          </p>
          <p
            className="quote-author"
            style={{
              color: `${textColor}`,
            }}
          >
            Ron Swanson
          </p>
        </div>
      </div>
      <div
        className="quote-symbol right"
        style={{ backgroundImage: `url(${quoteImg})` }}
      >
      </div>
    </div>
  );
}
