/**
 * A Model of class that allows us to mantain the type structure of our object
 * There are two types of models in typescript: Classes and Interface, both define the structure of the model but Classes allow methods.
 * We are using Typescript, if we create Classes it will generate a JS with classes, if we use Interfaces it wont, the app wil weight less.
 */

export default interface Client {
    id: string;
    firstname: string;
    lastname: string;
    phone: string;
    address: string;
}