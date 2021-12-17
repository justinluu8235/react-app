import {render, screen} from '@testing-library/react';
import Band from './Band';

test('renders link to the band', () => {
    render(<Band />);
    const Element = screen.getByTitle(/bandLink/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders front cover photo', () => {
    render(<Band />);
    const Element = screen.getByTitle(/frontCover/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders a name input for contact', () => {
    render(<Band />);
    const Element = screen.getByTitle(/contactNameInput/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders a email input for contact', () => {
    render(<Band />);
    const Element = screen.getByTitle(/contactEmailInput/i);
    expect(Element).toBeInTheDocument();
  });

  test('renders a message input for contact', () => {
    render(<Band />);
    const Element = screen.getByTitle(/contactMsgInput/i);
    expect(Element).toBeInTheDocument();
  });



