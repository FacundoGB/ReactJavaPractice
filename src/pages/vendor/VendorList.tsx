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
import {Redirect, useHistory, useParams} from 'react-router';
import { removeVendor, saveVendor, searchVendor} from './VendorApi';
import VendorInterface from './VendorInterface';

const VendorList: React.FC = () => {

    const {name} = useParams < {
        name: string;
    } > ();

    
   const [vendors, setVendors] = useState<VendorInterface[]>([]); 
   const history = useHistory();

  useEffect(() => {
    /**With search() it will call the api and fill with data the grid */
    search();
  }, [history.location.pathname]); 

    const search = () => {
      let result = searchVendor();
      setVendors(result);
    }

    const remove = (id: string) => {
         removeVendor(id);
        search();
    }

    const editVendor = (id:string) => {
        // this adds rout and changes page 
        history.push('/page/vendor/' + id);
    }
    
    const addVendor = () => {
        // this adds rout and changes page 
        history.push('/page/vendor/new');

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
                    <IonTitle>Vendor Management</IonTitle>
                    <IonItem>
                        <IonButton onClick={addVendor} color="primary" fill='solid' slot='end' size='default'>
                            <IonIcon icon={add}/>
                            Add Vendor
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

                        {vendors.map((vendor:any)=>
                        /*for each client it will return a row */
                        <IonRow>
                            <IonCol>{vendor.firstname} {vendor.surname}</IonCol>
                            <IonCol>{vendor.email}</IonCol>
                            <IonCol>{vendor.phone}</IonCol>
                            <IonCol>{vendor.address}</IonCol>
                            <IonCol>
                              <IonButton onClick={() => editVendor(String(vendor.id))} color='primary' fill='clear' >
                                <IonIcon icon={pencil}/>
                                
                              </IonButton>
                              <IonButton onClick={() => remove(String(vendor.id))} color='danger' fill='clear' >
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

export default VendorList;
