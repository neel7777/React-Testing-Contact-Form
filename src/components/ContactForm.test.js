import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
    render(<ContactForm />);
  });

  test("adds authentication info", () => {
    const { getByLabelText, findByTestId, getAllByText } = render(<ContactForm />);

    const fnInput = getByLabelText(/First Name*/i)
    const lnInput = getByLabelText(/Last Name*/i)
    const emailInput = getByLabelText(/Email*/i)
    const msgInput = getByLabelText(/Message/i)

    fireEvent.change(fnInput, { 
        target: { name: 'firstname', value: 'nee'}})

    fireEvent.change(lnInput, { 
        target: { name: 'lastname', value: 'mazumdar'}})

    fireEvent.change(emailInput, { 
        target: { name: 'email', value: 'ctneel2010@yahoo.com'}})

    fireEvent.change(msgInput, { 
        target: { name: 'message', value: 'stuff'}})

    findByTestId(/submit!/i).then((res) => {
        fireEvent.click(res);
    })   

    
    
    
})