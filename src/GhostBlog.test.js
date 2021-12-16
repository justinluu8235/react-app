import { render, screen } from '@testing-library/react';
import GhostBlog from './GhostBlog';

test('', () =>{
    render(<GhostBlog/>);
    const chickenList = screen.getAllByText(/chicken/i);
    expect(chickenList).toBeInTheDocument();
})