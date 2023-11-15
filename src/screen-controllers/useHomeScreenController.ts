import { useGetAllEventsQuery } from '../api/events';
import { Event } from '../models/Event';

type HomeScreenControllerData = {
  allEvents: Event[];
};

type HomeScreenController = {
  data: HomeScreenControllerData;
  shouldRenderLoadingIndicator: boolean;
  shouldRenderScreenError: unknown;
};

const useHomeScreenController = (): HomeScreenController => {
  const {
    data: allEvents,
    isSuccess: allEventsFetchedSuccessfully,
    error: allEventsFetchingError,
  } = useGetAllEventsQuery();

  const shouldRenderLoadingIndicator = !allEventsFetchedSuccessfully;

  const shouldRenderScreenError = allEventsFetchingError;

  return {
    data: {
      allEvents,
    },
    shouldRenderLoadingIndicator,
    shouldRenderScreenError,
  };
};

export default useHomeScreenController;
