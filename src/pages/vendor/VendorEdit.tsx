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
import {saveVendor, searchVendorById } from './VendorApi';
import VendorInterface from './VendorInterface';



const VendorEdit: React.FC = () => {

    const { name, id } = useParams<{
        name: string;
        id: string;
    }>();

    const [vendor, setVendor] = useState<VendorInterface>({});

    useEffect(() => {
        search();
    }, []);
    const history = useHistory();

    const search = () => {
        if(id !== 'new') {
            let result = searchVendorById(id);
            setVendor(result);
        }
    }

    const save = () => {
        debugger;   
        saveVendor(vendor);
        history.push('/page/vendors')
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
                    <IonTitle>{id === 'new' ? 'Set New Vendor' : 'Edit Vendor'}</IonTitle>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Name</IonLabel>
                                <IonInput onIonChange={e => vendor.firstname = String(e.detail.value)} value={vendor.firstname}></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Surname</IonLabel>
                                <IonInput onIonChange={e => vendor.surname = String(e.detail.value)} value={vendor.surname}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Email</IonLabel>
                                <IonInput onIonChange={e => vendor.email = String(e.detail.value)} value={vendor.email}></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Adress</IonLabel>
                                <IonInput onIonChange={e => vendor.address = String(e.detail.value)} value={vendor.address}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Phone</IonLabel>
                                <IonInput onIonChange={e => vendor.phone = String(e.detail.value)} value={vendor.phone}></IonInput>
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

export default VendorEdit;
