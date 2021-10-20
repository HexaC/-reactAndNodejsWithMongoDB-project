import '../../css/HomeCards.css';
import card from "../../img/card.png";
import styled from "styled-components";
import Title from "react-vanilla-tilt";


    const Container = styled.div`
      display: flex;
      justify-content: center;
      margin: 50px;
      align-items: center;`;

    const CardBody = styled.div`
      transform: translateZ(55px);
      padding-right: 50px;
      border-radius: 25px;
      font-size: 20px;
      color: #000;`;

function  HomeCards () {

    const options = {
        max: 70,
        scale: 2.0,
        speed: 1000
    };

    return (
        <>

        <div className="App">
          <Container>
            <Title className="tilt" options={options}>
                <CardBody><img src={card}></img></CardBody>
            </Title>
          </Container>
        </div>

        </>
    )
}

export default HomeCards;