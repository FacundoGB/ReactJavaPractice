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
import { removeClients, saveClients, searchClients} from './ClientApi';


const ClientEdit: React.FC = () => {

    const {name, id} = useParams < {
        name: string;
        id: string;
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
  
  const remove = (id: string) => {
    removeClients(id);
    //we remove the client by id but no new renderization of data
    search();
    //refreshed data
}
const testLocalStorage = () => {
    const test = {
        id: '1',
        firstname: 'Facundo',
        surname: 'Bardi',
        email: 'mail1@mail1.com',
        phone: '123123123',
        address: 'av testing 123'
    }
    saveClients(test);
}

    const search = () => {
      //let result = searchClients();
      //setClients(result);
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
                    <IonTitle>Client Management {id}</IonTitle>
                    <IonItem>
                        <IonButton color="primary" fill='solid' slot='end' size='default'>
                            <IonIcon icon={add}/>
                            Save Changes
                        </IonButton>
                    </IonItem>
                </IonCard>                
            </IonContent>
        </IonPage>
    );
};

export default ClientEdit;
