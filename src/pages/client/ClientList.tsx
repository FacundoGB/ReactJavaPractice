import {
    IonButton,
    IonButtons,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {add, pencil, close} from 'ionicons/icons';
import { useEffect, useState } from 'react';
import {Redirect, useParams} from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';


const ClientList: React.FC = () => {

    const {name} = useParams < {
        name: string;
    } > ();

    /*
      We'll mock using fake data.
      We create a function that will search clients. It will load a list of clients
      said list will be assigned to a variable
    */
    
   const [clients, setClients] = useState<any>([]);/* this array will be called when we do a search*/
  
   /** When we access the client page we need that frist there's a search against the API 
   * for that we use:
   */
  useEffect(() => {

    /**
     * This will be exectued automatically when it first load
     * in [] go the components that when they are modified are executed. If we put nothing it will execute only once
     */
    search();
    /**With search() it will call the api and fill with data the grid */
  }, []); 

    const search = () => {
      const exampleData = [
        //each {} is an object
        {
          id: '2',
          firstname: 'Jorge',
          surname: 'Freeman',
          email: 'mail1@mail1.com',
          phone: '1231231231',
          address: 'jeez av 123'
        },
        {
          id: '3',
          firstname: 'Maria',
          surname: 'Unfreeman',
          email: 'mail1@mail1.com',
          phone: '3453453453',
          address: 'nope blvd 555'
        }
      ];
      setClients(exampleData);

    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    <IonTitle>Client Management</IonTitle>
                    <IonItem>
                        <IonButton color="primary" fill='solid' slot='end' size='default'>
                            <IonIcon icon={add}/>
                            Add Client
                        </IonButton>

                    </IonItem>
                    <IonGrid className='table'>
                        <IonRow> {/* in style={} we can add an object that represents a css code */}
                            <IonCol>Name</IonCol>
                            <IonCol>Email</IonCol>
                            <IonCol>Phone</IonCol>
                            <IonCol>Adress</IonCol>
                            <IonCol>Actions</IonCol>
                        </IonRow>

                        {clients.map((clients:any)=>
                        /*for each client it will return a row */
                        <IonRow>
                            <IonCol>{clients.firstname} {clients.surname}</IonCol>
                            <IonCol>{clients.email}</IonCol>
                            <IonCol>{clients.phone}</IonCol>
                            <IonCol>{clients.address}</IonCol>
                            <IonCol>
                              <IonButton color='primary' fill='clear' >
                                <IonIcon icon={pencil}/>
                                
                              </IonButton>
                              <IonButton color='danger' fill='clear' >
                                <IonIcon icon={close}/>
                                
                              </IonButton>
                            </IonCol>
                        </IonRow>
                        )}
                    </IonGrid>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ClientList;
