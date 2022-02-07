// import data from "../../../Data/data";
import Card from "../../../Components/Card";
import CardsWrapper from "./CardsWrapper";

function Cards(data) {
  return (
    <CardsWrapper>
      <div className="row">
        {data.data.map((item, i) => (
          <Card item={item} key={item.title} data={data} id={i} />
        ))}
      </div>
    </CardsWrapper>
  );
}

export default Cards;
