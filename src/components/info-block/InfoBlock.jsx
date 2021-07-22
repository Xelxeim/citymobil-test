import './InfoBlock.scss';

const InfoBlock = ({ currentCar, tariffs }) => {
  
  const childsArray = Array.from(currentCar.children)
  const collectText = () => {
    let text = `Выбран автомобиль ${childsArray[0].innerHTML}. `;
    childsArray.forEach((item, index) => {
      if (index === 0) return null;
      if (item.innerHTML === "—") return null;
      text = text + `Год выпуска "${tariffs[index - 1]}" — ${item.innerHTML}. `;
    })
    return text;
  }
  return (
    <div className="info-block">
      {collectText()}
    </div>
  );
}

export default InfoBlock;
