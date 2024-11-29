import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <div className="header">
          <IonToolbar>
            <IonTitle class="title">Electric Rent</IonTitle>
          </IonToolbar>
        </div>
      </IonHeader>
      <IonContent fullscreen> 
        <div className="center-container2">
          <div className="que-buscas">
            <IonTitle size="large">Disponible:</IonTitle>
          </div>
          <div className="imagenes">
{/*            <a href="/tab3"><img class="img" src="https://m.media-amazon.com/images/I/71OpkNIuT+L._AC_UF1000,1000_QL80_.jpg" alt="" /></a>*/}
            <a href="/tab3"><div className="text-overlay">¿Reservarlo?</div><img className="img" src="https://www.elespectador.com/resizer/v2/HWQPARPNJVBS3BGJCZND7E4KNU.jpg?auth=7978b06a09e07c52d4af782e7e98fd8f0628f42a162643118f310c3222aa6ccc&width=920&height=613&smart=true&quality=60" alt="" /></a>
          </div>
          <div className="que-buscas">
            <IonTitle size="large">Costo: 200.000$/semanal</IonTitle>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
