import { render, screen } from '@testing-library/react';
import Async from "./Async";

describe('Async component', () => {
    test('renders posts', async () => {
        window.fetch = jest.fn();// create mock function
        window.fetch.mockResolvedValueOnce({
            json: async() => [{id: 'p1', title: 'first post'}]
        }); // creating a fetch simulating function to reduce network traffic caused by tests
        render(<Async/>);

       const listItemElements =  await screen.findAllByRole('listitem')//find will reevaluate component after 1s (default value)
        //or we can pass this time as third argument
        expect(listItemElements).not.toHaveLength(0);
    })
});