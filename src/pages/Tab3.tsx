import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='Principal'>
          <div className='Auto'>
            <IonCard className='carta'>
                <img className='Iauto' alt="Silhouette of mountains" src="https://www.elespectador.com/resizer/v2/HWQPARPNJVBS3BGJCZND7E4KNU.jpg?auth=7978b06a09e07c52d4af782e7e98fd8f0628f42a162643118f310c3222aa6ccc&width=920&height=613&smart=true&quality=60" />
                <IonCardHeader>
                  <IonCardTitle>BYD</IonCardTitle>
                  <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>
                <div className='cartaD'>
                <IonCardContent>Metodos de pago:</IonCardContent>
                <div className='imanegenesTarjetas'>
                  <img className="pagos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" alt="" />
                  <img className="pagos" src="https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png" alt="" />
                  <img className="pagos" src="https://seeklogo.com/images/N/nequi-logo-58FBE82BA6-seeklogo.com.png" alt="" />
                </div>
                <IonButton id="present-alert">Reservar</IonButton>
                  <IonAlert
                    trigger="present-alert"
                    header="Please enter your info"
                    buttons={['OK']}
                    inputs={[
                      {
                        placeholder: 'Name',
                      },
                      {
                        placeholder: 'Nickname (max 8 characters)',
                        attributes: {
                          maxlength: 8,
                        },
                      },
                      {
                        type: 'number',
                        placeholder: 'Age',
                        min: 1,
                        max: 100,
                      },
                      {
                        type: 'textarea',
                        placeholder: 'A little about yourself',
                      },
                      {
                        type: "date"
                      }
                    ]}
                  ></IonAlert>
                </div>
              </IonCard>
          </div>
          <div className='Mapa'>
            <img src="https://www.google.com/maps/vt/data=H516e8KjfLhhn-WkkYjdIBxynx4ba5pjgGXS2YjrYjH4TE8MsRy6KlyD2kaVOBWsom1u_JGmBq3zpgL_Geg8wN6395S_KXm1usAF42zpVWB7NhH4q-rYsWSWqFQmWx_AMErGAX4c1DGnjm2z3G96jjOjmaBSR0SnAJFyaiSfOhg6w_BZQ6FtmkyojK1Y9etTsQOKwLs6GE2E0z9QbQk2upxCq5t0WOjdoyXy-fkuT4l0AatJ3cEF7P-JY1NiBESLehbzSjKWRn3JOaElVgklZyCGtChuy_y70jqt5g" alt="" />
          </div>
        </div>

        <div className="cabeza">
          <div className='confimacion'>
            <div className="check-icon">✔️</div>
            <h1>Reserva confirmada</h1>
            <p className="codigoReserva">Código: <strong>AWDW7DWR89</strong></p>
            <p>¡Gracias por tu reserva!</p>
            <p>Recibirás todos los detalles en tu correo, si no lo encuentras, revisa SPAM o correo no deseado</p>
          </div>
        </div>

        <div className="ayuda">
          <h2>¿Necesitas ayuda?</h2>
          <p><strong>Modificar:</strong> Haz una nueva reserva y la anterior se cancelará automáticamente.</p>
          <p><strong>Cancelar:</strong> Responde al correo que te enviamos solicitando la cancelación de reserva.</p>
        </div>

        <div className="contacto">
          <h2>Contáctanos</h2>
          <p>Si necesitas asistencia adicional, estamos aquí para ayudarte.</p>
          <p>¡Buen viaje y disfruta de la aventura!</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
