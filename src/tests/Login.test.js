import React from 'react';
import { screen } from '@testing-library/react';
import {renderWithRouterAndRedux} from './helpers/renderWithRouterAndRedux';
import App from '../App.js'
import userEvent from '@testing-library/user-event';

describe('Testa tela de Login', () => {
    beforeEach(() => {
        renderWithRouterAndRedux(<App />);
    });

    it('Verifica se a imagem e o texto Sua vez são exibidos na tela principal', () => {
        expect(screen.getByRole('img')).toHaveAttribute('src', "trivia.png");
        expect(screen.getByText('SUA VEZ')).toBeInTheDocument();
    });

    it('Verifica a existência dos campos de Login', () => {
        expect(screen.getByTestId('input-player-name')).toBeInTheDocument();
        expect(screen.getByTestId('input-gravatar-email')).toBeInTheDocument();
    });
    
    it('Verifica a existência do botão Play', () => {
        expect(screen.getByTestId('btn-play')).toBeInTheDocument();
        expect(screen.getByTestId('btn-play')).toBeDisabled();
    });
    
    it('Verifica se ao preencher os campos o botão é habilitado', () => {
        userEvent.type(screen.getByTestId('input-player-name'), 'Jogador Teste');
        userEvent.type(screen.getByTestId('input-gravatar-email'), 'email@test.com');
        
        expect(screen.getByTestId('btn-play')).toBeEnabled(); 
    });

    // it('Verifica se ao clicar no botão play...', () => {
    //     testa handleSubmit()
    // });
    
    // it('Verifica a existência do botão Settings', () => {
    //     expect(screen.getByTestId('btn-settings')).toBeInTheDocument();
    // });
    
    // it('Verifica se, ao clicar no botão Settings, uma tela de configurações é exibida', () => {
    //     userEvent.click(screen.getByTestId('btn-settings'));
    //     expect(screen.getByTestId('settings-title')).toBeInTheDocument();
    // });

    
})
