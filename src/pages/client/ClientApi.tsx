import ClientInterface from "./Client";
import Client from "./Client";

export async function searchClient() { 
    /**
 * This function calls the API and returns the data list
 * LocalStorage only allows to save string not arrays,
 * when we save then we must transform it itno string and when we retrive
 * we transform it back to array
 */
    let response = await fetch('/api/clients', {
        "method": "GET",
        "headers": {
            "Content-Type": 'application/json' 
        }
    })
    return await response.json();
    
}
export async function removeClient(id: string) {
    //functionality with cached data, similar to save
    let clients = await searchClient();
    /**
     * to delete we use .splice
     * to search index we use findIndex that arrays have
     * it compares the id of each client with the one recieved, returns if same
     * we store result in variable. We use any until we fix it
    */
    let index = clients.findIndex((clients:ClientInterface) => clients.id == id);
    clients.splice(index, 1);
    //we then refresh the localstorage with all elements except deleted
    localStorage['clients'] = JSON.stringify(clients);
    
}


    /**
     * This function saves new clients and edits
        We bring the data. If they dont exist we make them   

     */
export async function saveClient(client:ClientInterface) { 
    let clients = await searchClient(); //array with clients
    if(client.id) {
        //edit - search by id & replace
        let index = clients.findIndex((c:ClientInterface) => c.id == client.id);
        
        if(index >=0) {
            clients[index] = client;
        }
    }else {
        //new - generates id & does a push to the array
        client.id = String(Math.round(Math.random()*10000));
        clients.push(client);
    }
    localStorage['clients'] = JSON.stringify(clients); //we transform it into a string
}

export async function searchClientById(id:string) {
    let clients = await searchClient();
    return clients.find((client: any) => client.id == id);
}
