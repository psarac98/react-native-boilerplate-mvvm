import {
  mapApiResponseToEventModel,
  mapApiResponseToEventModelArray,
} from '../../src/models/Event';

// Mock EventResponse data for testing
const mockApiResponse = {
  id: '1',
  title: 'Test Event',
  description: 'This is a test event',
  date: '2023-12-01',
};

const mockApiResponseArray = [mockApiResponse];

describe('Event Mapper Functions', () => {
  describe('mapApiResponseToEventModel', () => {
    it('should map a single EventResponse to an Event', () => {
      const result = mapApiResponseToEventModel(mockApiResponse);
      const expectedEvent = {
        id: '1',
        title: 'Test Event',
        description: 'This is a test event',
        date: '2023-12-01',
        country: 'Serbia', // Since the country is hard-coded in the mapper function
      };
      expect(result).toEqual(expectedEvent);
    });
  });

  describe('mapApiResponseToEventModelArray', () => {
    it('should map an array of EventResponse to an array of Event', () => {
      const result = mapApiResponseToEventModelArray(mockApiResponseArray);
      const expectedEventArray = [
        {
          id: '1',
          title: 'Test Event',
          description: 'This is a test event',
          date: '2023-12-01',
          country: 'Serbia', // Since the country is hard-coded in the mapper function
        },
      ];
      expect(result).toEqual(expectedEventArray);
    });
  });
});
