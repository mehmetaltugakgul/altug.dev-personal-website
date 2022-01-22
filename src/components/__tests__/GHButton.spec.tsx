import React from 'react';
import { render } from '@testing-library/react';
import GHButton from '../GHButton';

describe('<GHButton />', () => {
  test('should render correctly', async () => {
    const { asFragment } = await render(
      <GHButton
        resource={{
          endpoint: 'https://api.github.com/users/mehmetaltugakgul',
          attr: 'followers',
        }}
        href="https://github.com/mehmetaltugakgul"
        title="Follow @mehmetaltugakgul on GitHub"
        text="Follow @mehmetaltugakgul on GitHub"
        icon={{
          prefix: 'fab',
          iconName: 'github',
        }}
        size="lg"
        showCount={true}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
