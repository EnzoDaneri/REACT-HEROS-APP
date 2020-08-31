import React from 'react';
import { AppRouter } from '../../../routers/AppRouter';
import { AuthContext } from '../../../auth/AuthContext';
const {  mount } = require("enzyme");


describe('Pruebas en <AppRouter/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    
   test('debe mostrar el login si no estoy autenticado', () => {

    const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
       <AppRouter/>
    </AuthContext.Provider>
    );     
    
    expect( wrapper ).toMatchSnapshot();

   });

   test('debe mostrar el componente de marvel si está autenticado ', () => {
      

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Juan'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
           <AppRouter/>
        </AuthContext.Provider>
        );     
        
        expect( wrapper.find('.navbar').exists() ).toBe(true);
    
       });
      
    
   });
   
   


