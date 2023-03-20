import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import {renderWithRouterAndRedux} from './helpers/renderWithRouterAndRedux';
import App from '../App.js'
import userEvent from '@testing-library/user-event';

describe('Testa tela de Login', () => {    
    beforeEach(() => {
        renderWithRouterAndRedux(<App />);
      });
    
    it('Verifica se a imagem e o texto Sua vez são exibidos na tela principal', () => {
        expect(screen.getByRole('img')).toHaveAttribute('src', "trivia.png");
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
    it('Verifica se ao preencher os campos e clicar no botão Play, aparece uma mensagem', async () => {
        logar();

        await waitFor(() => expect(screen.getByText('Página Play')).toBeInTheDocument());
    });
    
})

describe('Testa as rotas dos botões', () => {
    it('Verifica se ao clicar no Play muda a rota para /play', async () => {
        const { history } = renderWithRouterAndRedux(<App />);
        userEvent.type(screen.getByTestId('input-gravatar-email'), 'email@test.com');
        userEvent.type(screen.getByTestId('input-player-name'), 'Jogador');
        userEvent.click(screen.getByTestId('btn-play'));
        
        await waitFor(() => expect(history.location.pathname).toBe('/play'))
    }); 

    it('Verifica se ao clicar no Settings muda a rota para /settings', () => {
        const { history } = renderWithRouterAndRedux(<App />);
        userEvent.click(screen.getByTestId('btn-settings'));

        expect(history.location.pathname).toBe('/settings');

    });

})