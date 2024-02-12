import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('deve renderizar dois comentarios', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('text-comentario'), {
            target:  {
                value: 'Olá!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        fireEvent.change(screen.getByTestId('text-comentario'), {
            target:  {
                value: 'Deu certo!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        expect(screen.getByText('Olá!')).toBeInTheDocument()
        expect(screen.getByText('Deu certo!')).toBeInTheDocument()
    });
});