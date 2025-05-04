  export type TanzpartnerRole = 'Leader' | 'Follower' | 'Beides';
  
  export type Tanzkurs =
    | 'A-Kurs Mainz'
    | 'L-Kurs Mainz'
    | 'F-Kurs Mainz'
    | 'Kurs Wiesbaden';

  export interface TanzpartnerRequest {
    id: string;
    name: string;
    role: TanzpartnerRole;
    searchingFor: TanzpartnerRole;
    kurs: Tanzkurs;
    description: string;
    date: Date;
  }