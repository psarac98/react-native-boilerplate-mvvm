import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Event, mapApiResponseToEventModel } from '../../models/Event';

export type EventResponse = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export default (build: EndpointBuilder<BaseQueryFn, string, string>) =>
  build.query<EventResponse, number>({
    query: (uuid) => `/event/${uuid}`,
    transformResponse: (response: Event) => mapApiResponseToEventModel(response),
  });
