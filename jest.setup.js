// jest.setup.js

// Example: Set up Enzyme for React testing (if using Enzyme)
import '@testing-library/jest-dom/extend-expect';

// Example: Mock Date to use in tests consistently
global.Date = jest.fn(() => new Date('2025-01-01T00:00:00Z'));

// Mocking other global objects or functionalities if necessary
// Example: Mock console.log
global.console = {
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

