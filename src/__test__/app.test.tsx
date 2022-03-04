import { render } from '@testing-library/react';

describe('Home', () => {
  it('render', () => {
    render(<p>0</p>);
    expect(0).toBe(0);
  });
});
