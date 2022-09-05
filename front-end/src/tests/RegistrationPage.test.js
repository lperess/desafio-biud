import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import userEvent from '@testing-library/user-event';
import Registration from '../pages/Registration';

describe('Teste do componente Registration', () => {
  jest.setTimeout(10000);

  it('Deve ter um paragraph', () => {
    renderWithRouter(<Registration />);

    const paragraph = screen.getByText('Como você quer ser chamado?');

    expect(paragraph).toBeInTheDocument();
  });

  it('Deve ter um input de texto para o nome', () => {
    renderWithRouter(<Registration />);

    const nameInput = screen.getByRole('textbox');

    expect(nameInput).toBeInTheDocument();
  });

  it('Deve ter um botão Avançar', () => {
    renderWithRouter(<Registration />);

    const startBtn = screen.getByRole('button');

    expect(startBtn).toBeInTheDocument();
  });

  it('Escrevendo o nome e clicando em Avançar deve renderizar o componente Step2', () => {
    renderWithRouter(<Registration />);

    const nameInput = screen.getByRole('textbox');
    userEvent.type(nameInput, 'Lucas');

    const nextBtn = screen.getByRole('button');
    userEvent.click(nextBtn);

    const greeting = screen.getByText('Prazer, Lucas!');

    expect(greeting).toBeInTheDocument();
  });

  it('Depois de 5s deve renderizar o Step3', async () => {
    renderWithRouter(<Registration />);

    const nameInput = screen.getByRole('textbox');
    userEvent.type(nameInput, 'Lucas');

    const nextBtn = screen.getByRole('button');
    userEvent.click(nextBtn);

    const askBusiness = await screen.findByText(
      /vamos supor/i,
      {},
      { timeout: 6000 }
    );

    const options = screen.getAllByRole('button');

    expect(askBusiness).toBeInTheDocument();
    expect(options.length).toBe(3);
  });
});
