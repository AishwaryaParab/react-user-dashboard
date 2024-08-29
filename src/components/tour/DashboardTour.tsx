import Joyride from 'react-joyride';
import { useTour } from '../../hooks/useTour';
import { tourSteps } from '../utils/tourSteps';
import useTheme from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import TourPrompt from './TourPrompt';

const DashboardTour: React.FC = () => {
  const { runTour, endTour, startTour } = useTour();
  const [showPrompt, setShowPrompt] = useState<boolean>(runTour);
  const [hasFinishedTour, setHasFinishedTour] = useState<boolean>();
  const { theme } = useTheme();

  useEffect(() => {
    setShowPrompt(runTour);
  }, [runTour]);

  const handleStartTour = () => {
    setShowPrompt(false);
  };

  const handleDeclineTour = () => {
    setShowPrompt(false);
    endTour();
  };

  const handleTourFinish = () => {
    endTour();
    setHasFinishedTour(true);
  }

  const handleRepeatTour = () => {
    startTour();
    setHasFinishedTour(false);
  }

  return (
    <>
      {showPrompt && (
        <TourPrompt
          onStart={handleStartTour}
          onDecline={handleDeclineTour}
          primaryText="Welcome to the Guided Tour!"
          secondaryText="This tour will guide you through the main features of the dashboard. Would you like to start the tour?"
          okText="Yes, Start"
          cancelText="No, thanks"
        />
      )}

      {!showPrompt && runTour && (
        <Joyride
          steps={tourSteps}
          run={runTour}
          continuous
          showSkipButton
          styles={{
            options: {
              arrowColor: theme === "light" ? '#2a3447' : '#fff',
              backgroundColor: theme === "light" ? '#2a3447' : '#fff',
              overlayColor: theme === "light" ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 50, 0.4)',
              primaryColor: '#f04',
              textColor: theme === "light" ? '#fff' : '#2a3447',
              width: 500,
              zIndex: 1000,
            },
          }}
          callback={(data) => {
            const { status } = data;
            if (status === 'finished' || status === 'skipped') {
              handleTourFinish();
            }
          }}
          locale={{
            last: 'Finish', // Changed 'Last' to 'Finish'
            next: 'Next',
            back: 'Back',
            skip: 'Skip',
            close: 'Close',
          }}
        />
      )}

      {hasFinishedTour && (
        <TourPrompt
          onStart={handleRepeatTour}
          onDecline={() => setHasFinishedTour(false)}
          primaryText="Congratulations! 🤩"
          secondaryText="You've completed the tour and now have a better understanding of the application. Great job!"
          okText="Repeat Tour"
          cancelText="I'm all set"
        />
      )}
    </>
  );
};

export default DashboardTour;
