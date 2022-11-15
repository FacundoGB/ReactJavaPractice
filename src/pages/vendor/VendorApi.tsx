import VendorInterface from "./VendorInterface";

export function searchVendor() { 

if(!localStorage['vendorList']) {
    localStorage['vendorList'] = '[]';
}
    let vendorList = localStorage['vendorList'];
    vendorList = JSON.parse(vendorList);  
    return vendorList;
}
export function removeVendor(id: string) {
    let vendors = searchVendor();
    let index = vendors.findIndex((vendors:VendorInterface) => vendors.id == id);
    vendors.splice(index, 1);
    localStorage['vendorList'] = JSON.stringify(vendors);
    
}

export function saveVendor(vendor:VendorInterface) { 
    let vendorList = searchVendor(); //array with clients
    if(vendor.id) {
        //edit - search by id & replace
        let index = vendorList.findIndex((e:VendorInterface) => e.id == vendor.id);
        
        if(index >=0) {
            vendorList[index] = vendor;
        }
    }else {
        //new - generates id & does a push to the array
        vendor.id = String(Math.round(Math.random()*10000));
        vendorList.push(vendor);
    }
    localStorage['vendorList'] = JSON.stringify(vendorList); //we transform it into a string
}

export function searchVendorById(id:string) {
    let vendorList = searchVendor();
    return vendorList.find((vendor: any) => vendor.id == id);
}
