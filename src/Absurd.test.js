import { render, screen } from '@testing-library/react';
import Absurd  from './Absurd';


test('renders link to buy', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/buyIcon/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to illustration', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/illustrationLink/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to exclusive illustrations', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/exclusiveLink/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to the tech team', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/techTeamLink/);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to the less tech team', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/lessTechTeamLink/);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to main photo of the page', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/mainPhoto/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to title', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/absurdTitle/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to text', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/absurdText/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to footer titlee', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/footerTitle/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders link to footer text', () => {
    render(<Absurd />);
    const Element = screen.getByTitle(/footTitleText/i);
    expect(Element).toBeInTheDocument();
  });