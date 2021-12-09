import logo from "../images/star.png";

export default function SingleCard(props) {
  const { card, handleClick, flipped, disabled } = props;

  const clickHandler = (event) => {
    // console.log(card, flipped);
    if (!disabled) {
      handleClick(card);
    }
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" alt="front" src={card.src} />

        <img className="back" alt="card" src={logo} onClick={clickHandler} />
      </div>
    </div>
  );
}
