import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../../types/types';
import '@testing-library/jest-dom';
const { mount } = require("enzyme");
const { Navbar } = require("../../../../components/ui/Navbar");
const { AuthContext } = require("../../../../auth/AuthContext");

describe('Pruebas en <Navbar/>', () => {
 
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }


    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }


 const wrapper = mount(

    <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
            <Router history={ historyMock } >
               <Navbar/>
            </Router>
        </MemoryRouter>
   </AuthContext.Provider>
 );     

  afterEach( () => {
      jest.clearAllMocks();
  })
 


    test('debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro')
        
    });


    test('debe llamar logout y usar history', () => {
       
         wrapper.find('button').prop('onClick')();

         expect( contextValue.dispatch ).toHaveBeenCalledWith({type: types.logout});

         expect( historyMock.replace ).toHaveBeenCalledWith('/login');


    });

    
    
    
});
