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
    IonToolbar,
    IonLabel,
    IonInput
} from '@ionic/react';
import { add, pencil, close, checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import { removeClient, saveClient, searchClient, searchClientById } from './ClientApi';
import ClientInterface from './Client';


const ClientEdit: React.FC = () => {

    const { name, id } = useParams<{
        name: string;
        id: string;
    }>();

    /*
      We'll mock using fake data.
      We create a function that will search clients. It will load a list of clients
      said list will be assigned to a variable
    */

    const [client, setClient] = useState<ClientInterface>({});

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
    const history = useHistory();

    const search = () => {
        if(id !== 'new') {
            let result = searchClientById(id);
            setClient(result);
        }
    }

    const save = () => {
        //this function calls the api saveClients

        /**
         * id client.id = Math.round(Math.random()*100000);
         * created random id
         * we use only saveClient(client) because when it saves the client
         * if the client is new its empty, else it brings it from the search
         * and gives us the id. In the api we give the if
         */
        debugger;   
        saveClient(client);
        history.push('/page/clients')
    }
    


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
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
                    <IonTitle>{id === 'new' ? 'Set New Client' : 'Edit Client'}</IonTitle>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Name</IonLabel>
                                <IonInput onIonChange={e => client.firstname = String(e.detail.value)} value={client.firstname}></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Surname</IonLabel>
                                <IonInput onIonChange={e => client.surname = String(e.detail.value)} value={client.surname}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Email</IonLabel>
                                <IonInput onIonChange={e => client.email = String(e.detail.value)} value={client.email}></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Adress</IonLabel>
                                <IonInput onIonChange={e => client.address = String(e.detail.value)} value={client.address}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Phone</IonLabel>
                                <IonInput onIonChange={e => client.phone = String(e.detail.value)} value={client.phone}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonItem>
                        <IonButton onClick={save} color="primary" fill='solid' slot='end' size='default'>
                            <IonIcon icon={checkmark} />
                            Save Changes
                        </IonButton>
                    </IonItem>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ClientEdit;
