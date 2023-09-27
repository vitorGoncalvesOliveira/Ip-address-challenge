import { createContext } from 'react'

export const LocalContext = createContext<LocalTypeContext | null>(null);

export type LocalType = {
    ipAddress: string;
    location:string;
    timeZone:string;
    isp:string;
    lat:number;
    lng:number;
} | null;

export type LocalTypeContext = {
    local: LocalType;
    setLocal:(local:LocalType) => void;
}