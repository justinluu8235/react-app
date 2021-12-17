import { render, screen } from '@testing-library/react';
import GhostBlog from './GhostBlog';

test('make sure an important post is there', () =>{
    render(<GhostBlog/>);
    const postElement = screen.getByTitle(/test-important-post/i);
    expect(postElement).toBeInTheDocument();
})


test('make sure a this image is there', () =>{
    render(<GhostBlog/>);
    const imageElement = screen.getByTestId(/image/i);
    expect(imageElement).toBeInTheDocument();
})

test('renders a link for my recipes', () =>{
    render(<GhostBlog/>);
    const myRecipeElement = screen.getByTestId(/myRecipesLink/i);
    expect(myRecipeElement).toBeInTheDocument();
})

test('renders a Chicken Suya', () =>{
    render(<GhostBlog/>);
    const chickenElement = screen.findByText(/Chicken Suya/i);
    
    expect(chickenElement).toBeInTheDocument();
})

test('renders a Top Recipe text', () =>{
    render(<GhostBlog/>);
    const textElement = screen.getByText(/Top Recipe/i);
    expect(textElement).toBeInTheDocument();
})



