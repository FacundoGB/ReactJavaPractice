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
import { removeEmployee, saveEmployee, searchEmployee} from './EmployeeApi';
import Employee from './Employee';

const EmployeeList: React.FC = () => {

    const {name} = useParams < {
        name: string;
    } > ();

    
   const [employees, setEmployees] = useState<Employee[]>([]); 
   const history = useHistory();

  useEffect(() => {
    /**With search() it will call the api and fill with data the grid */
    search();
  }, [history.location.pathname]); 

    const search = () => {
      let result = searchEmployee();
      setEmployees(result);
    }

    const remove = (id: string) => {
         removeEmployee(id);
        search();
    }

    const editEmployee = (id:string) => {
        // this adds rout and changes page 
        history.push('/page/employee/' + id);
    }
    
    const addEmployee = () => {
        // this adds rout and changes page 
        history.push('/page/employee/new');

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
                    <IonTitle>Employee Management</IonTitle>
                    <IonItem>
                        <IonButton onClick={addEmployee} color="primary" fill='solid' slot='end' size='default'>
                            <IonIcon icon={add}/>
                            Add Employee
                        </IonButton>

                    </IonItem>
                    <IonGrid className='table'>
                        <IonRow> {/* in style={} we can add an object that represents a css code */}
                            <IonCol>Name</IonCol>
                            <IonCol>Email</IonCol>
                            <IonCol>Phone</IonCol>
                            <IonCol>Adress</IonCol>
                            <IonCol>Salary</IonCol>
                            <IonCol>Actions</IonCol>
                        </IonRow>

                        {employees.map((employee:any)=>
                        /*for each client it will return a row */
                        <IonRow>
                            <IonCol>{employee.firstname} {employee.surname}</IonCol>
                            <IonCol>{employee.email}</IonCol>
                            <IonCol>{employee.phone}</IonCol>
                            <IonCol>{employee.address}</IonCol>
                            <IonCol>{employee.salary}</IonCol>
                            <IonCol>
                              <IonButton onClick={() => editEmployee(String(employee.id))} color='primary' fill='clear' >
                                <IonIcon icon={pencil}/>
                                
                              </IonButton>
                              <IonButton onClick={() => remove(String(employee.id))} color='danger' fill='clear' >
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

export default EmployeeList;
