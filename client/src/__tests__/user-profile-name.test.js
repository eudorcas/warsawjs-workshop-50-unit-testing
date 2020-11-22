import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileName from '../components/user-profile-name';

test('should render component', () => {
    const user = { isVip: true, name: 'John'};
    
    render(<UserProfileName user={user}></UserProfileName>);
    
    const nameEl = screen.getByText(user.name);
    const iconElement =  screen.getByTestId('profile-icon');
    expect(nameEl).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
});

test('should render new icon after click', () => {
    const user = { isVip: true, name: 'John'};
    
    render(<UserProfileName user={user}></UserProfileName>);
    
    const iconElement =  screen.getByTestId('profile-icon');
    expect(iconElement).toBeInTheDocument();

    expect(iconElement).toHaveTextContent('🚀');
    fireEvent.click(iconElement);
    expect(iconElement).toHaveTextContent('🛸');
});

