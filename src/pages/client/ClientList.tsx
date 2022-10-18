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
import {Redirect, useParams} from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';


const ClientList: React.FC = () => {

    const {name} = useParams < {
        name: string;
    } > ();

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

                        <IonRow>
                            <IonCol>Facundo Bardi</IonCol>
                            <IonCol>mail@mail.com</IonCol>
                            <IonCol>111222111</IonCol>
                            <IonCol>direccion 232</IonCol>
                            <IonCol>
                              <IonButton color='primary' fill='clear' >
                                <IonIcon icon={pencil}/>
                                
                              </IonButton>
                              <IonButton color='danger' fill='clear' >
                                <IonIcon icon={close}/>
                                
                              </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ClientList;
