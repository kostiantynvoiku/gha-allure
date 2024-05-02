import { mount } from 'cypress/react';
import MyComponent from '../../src/MyComponent.js';

describe('MyComponent', () => {
  beforeEach(() => {
    mount(<MyComponent />);
    cy.wait(2000);
  });
  it('should render "Hello, World!"', () => {
    cy.contains('Hello, World!');
  });

  it('should render "Hello, World!"', () => {
    cy.contains('Hello, World!');
  });

});