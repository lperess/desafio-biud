import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import userEvent from '@testing-library/user-event';
import Registration from '../pages/Registration';

describe('Teste do componente Registration', () => {
  jest.setTimeout(20000);

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

  it('Testando todo o fluxo de cadastro', async () => {
    const { history } = renderWithRouter(<Registration />);

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

    userEvent.click(options[2]);

    const niceText = screen.getByText('Legal, Lucas!');
    const paragraph = screen.getByText(
      /impactar nos resultados da sua loja de roupas./i
    );

    expect(niceText).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();

    const titleWppPage = await screen.findByText(
      /essa experiência acontece/i,
      {},
      { timeout: 7000 }
    );
    expect(titleWppPage).toBeInTheDocument();

    const wppInput = screen.getByRole('textbox');
    expect(wppInput).toBeInTheDocument();

    const nextBtn2 = screen.getByRole('button');
    expect(nextBtn2).toBeInTheDocument();

    userEvent.type(wppInput, '61999031412');
    userEvent.click(nextBtn2);

    const doneTitle = screen.getByText('Prontinho, Lucas!');
    expect(doneTitle).toBeInTheDocument();

    const doneText = screen.getByText(/vai fazer sua loja de roupas decolar/i);
    expect(doneText).toBeInTheDocument();

    const endBtn = screen.getByRole('button', { name: 'Finalizar' });
    expect(endBtn).toBeInTheDocument();

    userEvent.click(endBtn);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe('/');
  });
});
