import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';


const Tab1: React.FC = () => {
  return (
    
    <IonPage>
      <IonHeader>
        <div class="header">
          <IonToolbar>
            <IonTitle class="title">Electric Rent</IonTitle>
          </IonToolbar>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div class="center-container">
          <div class="images">
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIBQkDN_SeWUVHe_IYHrmgjBnkm8dFJD9Cg&s" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCuG4uC2wXTp4jMcS4LYndjXYPrZXaJ7lHg&s" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFNPLbzYqMxwK5OQYDtlXVFhauGJIqVn1AQ&s" alt="" />
            <img class="car-image" src="https://m.media-amazon.com/images/I/71OpkNIuT+L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMHHwB-Uvkp9a-92NG9EtMvja3MaXSGnIwQ&s" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh-30QyPKC0uxHnASwDH5soh4RsqwCHMt1Q&s" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVunpgbRmXYKiyBakNGmSg0x1qR4rAlo0QsQ&s" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShltJLZMOmpbpW4ayeVMERf4hq5e8HHRqEzQ&s" alt="" />
            <img class="car-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7bo1hsFqJm3aw-EZZ_sioTgjRD6sakPMA&s" alt="" />
          </div>
          <div class="buttons">
            <div class="text-1">
              <IonTitle>Save your money</IonTitle>
              <IonTitle>Save the environment</IonTitle>
            </div>
            <IonButton class="rent-button" shape="round" href="/tab2">RENT NOW!</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
