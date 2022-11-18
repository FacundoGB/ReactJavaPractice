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
import {saveEmployee, searchEmployeeById } from './EmployeeApi';
import Employee from './Employee';



const EmployeeEdit: React.FC = () => {

    const { name, id } = useParams<{
        name: string;
        id: string;
    }>();

    const [employee, setEmployee] = useState<Employee>({});

    useEffect(() => {
        search();
    }, []);
    const history = useHistory();

    const search = () => {
        if(id !== 'new') {
            let result = searchEmployeeById(id);
            setEmployee(result);
        }
    }

    const save = () => {
        debugger;   
        saveEmployee(employee);
        history.push('/page/employees')
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
                    <IonTitle>{id === 'new' ? 'Set New Employee' : 'Edit Employee'}</IonTitle>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Name</IonLabel>
                                <IonInput onIonChange={e => employee.firstname = String(e.detail.value)} value={employee.firstname}></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Surname</IonLabel>
                                <IonInput onIonChange={e => employee.surname = String(e.detail.value)} value={employee.surname}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Email</IonLabel>
                                <IonInput onIonChange={e => employee.email = String(e.detail.value)} value={employee.email}></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Adress</IonLabel>
                                <IonInput onIonChange={e => employee.address = String(e.detail.value)} value={employee.address}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Phone</IonLabel>
                                <IonInput onIonChange={e => employee.phone = String(e.detail.value)} value={employee.phone}></IonInput>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="stacked">Salary</IonLabel>
                                <IonInput onIonChange={e => employee.salary = Number(e.detail.value)} value={employee.salary}></IonInput>
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

export default EmployeeEdit;
