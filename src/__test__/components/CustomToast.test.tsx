import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react';
import { CustomToast }  from "../../stories/CustomToast";
import userEvent from '@testing-library/user-event';

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('CustomToastComponent', () => {
  it('should render with message', () => {
    const message = 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.';
    setup(<CustomToast open={true} title='Bonnie Green' message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render with correct classname', async () => {
    const message = 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.';
    setup(<CustomToast open={true} title='Bonnie Green' message={message} />);

    const content = screen.getByTestId('toast-container');
    expect(content).toHaveClass('custom-toast-container');
  });

  it('should render with action button', async () => {
    const message = 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.';
    setup(<CustomToast open={true} title='Bonnie Green' message={message} />);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('should submit action event', async () => {
    const submit = vitest.fn();
    const message = 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.';
    const { user } = setup(<CustomToast open={true} title='Bonnie Green' message={message} onAction={submit} />);
    const button = screen.getByTestId('button');
    await user.click(button);
    expect(submit).toHaveBeenCalledTimes(1);
  });

  it('should submit close event', async () => {
    const submit = vitest.fn();
    const message = 'Hi Neil, thanks for sharing your thoughts regardingFlowbite.';
    const { user } = setup(<CustomToast open={true} title='Bonnie Green' message={message} onClose={submit} />);
    const button = screen.getByTestId('close-button');
    await user.click(button);
    expect(submit).toHaveBeenCalledTimes(1);
  });
});
