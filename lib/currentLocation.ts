import { createContext, useContext } from 'react';

declare type CurrentLocationContent = {
  currentLocation: string;
  setCurrentLocation: (s: string) => void;
}

export const CurrentLocationContext = createContext<CurrentLocationContent>({
  currentLocation: '',
  setCurrentLocation: () => {}
});

export const useCurrentLocationContext = () => useContext(CurrentLocationContext);