import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Event, mapApiResponseToEventModelArray } from '../../models/Event';

export type EventResponse = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export default (build: EndpointBuilder<BaseQueryFn, string, string>) =>
  build.query<Event[], void>({
    query: () => {
      return '/events';
    },
    transformResponse: (response: EventResponse[]) => mapApiResponseToEventModelArray(response),
  });
