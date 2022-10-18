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
import { add } from 'ionicons/icons';
import {useParams} from 'react-router';
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
                          <IonIcon icon={add} />
                          Add Client
                        </IonButton>

                    </IonItem>
                    <IonGrid className='table'>
                        <IonRow> {/* in style={} we can add an object that represents a css code */}
                            <IonCol>ion-col</IonCol>
                            <IonCol>ion-col</IonCol>
                            <IonCol>ion-col</IonCol>
                            <IonCol>ion-col</IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="6">ion-col size="6"</IonCol>
                            <IonCol>ion-col</IonCol>
                            <IonCol>ion-col</IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="3">ion-col size="3"</IonCol>
                            <IonCol>ion-col</IonCol>
                            <IonCol size="3">ion-col size="3"</IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="3">ion-col size="3"</IonCol>
                            <IonCol size="3" offset="3">
                                ion-col size="3" offset="3"
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>ion-col</IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                            </IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                                <br/>#
                            </IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                                <br/>#
                                <br/>#
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol className="ion-align-self-start">ion-col start</IonCol>
                            <IonCol className="ion-align-self-center">ion-col center</IonCol>
                            <IonCol className="ion-align-self-end">ion-col end</IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                                <br/>#
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-start">
                            <IonCol>start ion-col</IonCol>
                            <IonCol>start ion-col</IonCol>
                            <IonCol className="ion-align-self-end">start ion-col end</IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                                <br/>#
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-center">
                            <IonCol>center ion-col</IonCol>
                            <IonCol>center ion-col</IonCol>
                            <IonCol>center ion-col</IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                                <br/>#
                            </IonCol>
                        </IonRow>

                        <IonRow className="ion-align-items-end">
                            <IonCol>end ion-col</IonCol>
                            <IonCol className="ion-align-self-start">end ion-col start</IonCol>
                            <IonCol>end ion-col</IonCol>
                            <IonCol>
                                ion-col
                                <br/>#
                                <br/>#
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="12" size-sm>
                                ion-col size="12" size-sm
                            </IonCol>
                            <IonCol size="12" size-sm>
                                ion-col size="12" size-sm
                            </IonCol>
                            <IonCol size="12" size-sm>
                                ion-col size="12" size-sm
                            </IonCol>
                            <IonCol size="12" size-sm>
                                ion-col size="12" size-sm
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="12" size-md>
                                ion-col size="12" size-md
                            </IonCol>
                            <IonCol size="12" size-md>
                                ion-col size="12" size-md
                            </IonCol>
                            <IonCol size="12" size-md>
                                ion-col size="12" size-md
                            </IonCol>
                            <IonCol size="12" size-md>
                                ion-col size="12" size-md
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="6" size-lg offset="3">
                                ion-col size="6" size-lg offset="3"
                            </IonCol>
                            <IonCol size="3" size-lg>
                                ion-col size="3" size-lg
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ClientList;
