
import './App.css';
import Tarif from './components/Tarif';
import cards from './components/cards.json';

export default function App (){
  return ( 
    <div className={`App`}>
      {
          cards.map((card) =>
            <Tarif key={card.id} price={card.price} onClick={card.isSelected}
            speed={card.speed}  
            theme={card.theme} isFiltr={card.isFiltr}></Tarif>
          )
        }
    </div>
  );
}
