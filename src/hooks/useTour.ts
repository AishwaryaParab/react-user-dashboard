import { useState, useEffect } from 'react';

export const getTourStatus = (): boolean => {
  return JSON.parse(localStorage.getItem('hasSeenTour') || 'false');
};
  
export const setTourStatus = (status: boolean): void => {
  localStorage.setItem('hasSeenTour', JSON.stringify(status));
};

export const useTour = () => {
  const [runTour, setRunTour] = useState(false);

  useEffect(() => {
    const hasSeenTour = getTourStatus();
    if (!hasSeenTour) {
      setRunTour(true);
    }
  }, []);

  const startTour = () => {
    setRunTour(true);
    setTourStatus(false);
  }

  const endTour = () => {
    setRunTour(false);
    setTourStatus(true);
  };

  return { runTour, endTour, startTour };
};
