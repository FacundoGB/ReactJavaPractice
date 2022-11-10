/**
 * As test we will not call the API. 
 * We will store in browser cache.
 */


export function searchClients() { 
    /**
 * This function calls the API and returns the data list
 * LocalStorage only allows to save string not arrays,
 * when we save then we must transform it itno string and when we retrive
 * we transform it back to array
 */
if(!localStorage['clients']) {
    localStorage['clients'] = '[]';
}
    let clients = localStorage['clients'];
    clients = JSON.parse(clients);  
    return clients;
}
export function removeClients(id: string) {
    //functionality with cached data, similar to save
    let clients = searchClients();
    /**
     * to delete we use .splice
     * to search index we use findIndex that arrays have
     * it compares the id of each client with the one recieved, returns if same
     * we store result in variable. We use any until we fix it
    */
    let index = clients.findIndex((clients:any) => clients.id == id);
    clients.splice(index, 1);
    //we then refresh the localstorage with all elements except deleted
    localStorage['clients'] = JSON.stringify(clients);
    
}

export function saveClients(client:any) { 
    /**
     * This function saves new clients and edits
        We bring the data. If they dont exist we make them   
     */
    let clients = searchClients(); //array with clients
    clients.push(client); //in that array we add the client we recive [].push(client)
    localStorage['clients'] = JSON.stringify(clients); //we transform it into a string
}
