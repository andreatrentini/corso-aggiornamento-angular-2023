import { IMessaggio } from "./messaggio.interface";

export class Messaggio implements IMessaggio {
    dataora!: Date;
    messaggio!: string;
}
