import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import userEvent from '@testing-library/user-event';
import Begin from '../pages/Begin';

describe('Teste do componente Begin', () => {
  it('Deve ter um heading', () => {
    renderWithRouter(<Begin />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it('Deve ter um botão Começar', () => {
    renderWithRouter(<Begin />);

    const startBtn = screen.getByRole('button');

    expect(startBtn).toBeInTheDocument();
  });

  it('Clicando em Começar deve ir pra /registration', () => {
    const { history } = renderWithRouter(<Begin />);

    const startBtn = screen.getByRole('button');
    userEvent.click(startBtn);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe('/registration');
  });
});
