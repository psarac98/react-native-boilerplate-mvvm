import { EventResponse } from '../api/events/getAll';

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  country: string;
};
// Data Mapper Function for a single object
export const mapApiResponseToEventModel = (apiResponse: EventResponse): Event => ({
  id: apiResponse.id,
  title: apiResponse.title,
  description: apiResponse.description,
  date: apiResponse.date,
  country: 'Serbia', // Set the country property as needed
});

// Data Mapper Function for an array of objects
export const mapApiResponseToEventModelArray = (apiResponses: EventResponse[]): Event[] =>
  apiResponses.map((responseItem) => mapApiResponseToEventModel(responseItem));
