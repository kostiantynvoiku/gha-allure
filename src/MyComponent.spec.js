import { mount } from 'cypress/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  beforeEach(() => {
    mount(<MyComponent />);
  });
  it('should render "Hello, World!"', () => {
    cy.contains('Hello, World!');
  });

  it('should render "Hello, World!"', () => {
    cy.contains('Hello, World!');
  });

});