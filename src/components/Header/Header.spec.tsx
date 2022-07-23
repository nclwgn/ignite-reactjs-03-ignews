import { render } from '@testing-library/react';
import { Header } from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/'
    }
  }
}));

jest.mock('next-auth/react', () => ({
  useSession() {
    return [null, false];
  }
}))

describe('Header component', () => {

  it('renders correctly', () => {
    const { getByText } = render(
      <Header />
    );
  
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Posts')).toBeInTheDocument();
  });

})

