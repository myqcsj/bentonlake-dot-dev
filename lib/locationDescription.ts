import { createContext, useContext } from 'react';

declare type LocationDescriptionContent = {
  locationDescription: {prev: string; curr: string;};
  setLocationDescription: (s: { prev: string; curr: string; }) => void;
}

export const LocationDescriptionContext = createContext<LocationDescriptionContent>({
  locationDescription: { prev: '', curr: ''},
  setLocationDescription: () => {}
});

export const useLocationDescriptionContext = () => useContext(LocationDescriptionContext);