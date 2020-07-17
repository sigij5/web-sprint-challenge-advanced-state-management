import React from 'react'
import { SmurfsList } from '../components/SmurfsList'
import { render, screen, fireEvent } from '@testing-library/react'


test('ContactForm adds new contact to the list', () => {
    render(<SmurfsList />);

    const nameInput = screen.getByLabelText(/name/i);
    const heightInput = screen.getByLabelText(/height/i);
    const ageInput = screen.getByLabelText(/age/i);

    fireEvent.change(nameInput, { target: { value: 'test smurf'} })
    fireEvent.change(heightInput, { target: { value: '25cm'} })
    fireEvent.change(ageInput, { target: { value: 27} })

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    const newContact = screen.findByText(/test smurf/i);

    expect(newContact).toBeInTheDocument();

})