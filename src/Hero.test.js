import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('ensure home link is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/homeLink/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure example link is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/exampleLink/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure features link is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/featuresLink/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure team link is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/teamLink/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure top display is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/main-display/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure middle band is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/middleBand/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure first box is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/firstBox/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure middle box for ads is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/adBox/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure murphys law is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/murphyLaw/i);
    expect(linkElement).toBeInTheDocument();
})

test('ensure license is there', () =>{
    render(<Hero/>);
    const linkElement = screen.getByTitle(/mitLicense/i);
    expect(linkElement).toBeInTheDocument();
})