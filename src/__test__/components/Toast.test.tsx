import { describe, expect, it, vitest } from 'vitest'
import { render, screen } from '@testing-library/react';
import { EToastType, Toast }  from "../../modules/content-exploration/components/Toast/Toast";
import userEvent from '@testing-library/user-event';

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('ToastComponent', () => {
  it('should render with message', () => {
    const message = 'Toast component is rendered Successfully';
    setup(<Toast open={true} type={EToastType.SUCCESS} message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  })

  it('class name validation', async () => {
    const message = 'Toast component is rendered Successfully';
    setup(<Toast open={true} type={EToastType.SUCCESS} message={message} />);

    const content = screen.getByTestId('type-content');
    expect(content).toHaveClass('toast-success--content');
  })

  it('should submit action event', async () => {
    const submit = vitest.fn();
    const message = 'Toast component is rendered Successfully';
    const { user } = setup(<Toast open={true} type={EToastType.SUCCESS_WITH_ACTION} message={message} onAction={submit} />);
    const button = screen.getByTestId('button');
    await user.click(button);
    expect(submit).toHaveBeenCalledTimes(1)
  })

  it('should submit close event', async () => {
    const submit = vitest.fn();
    const message = 'Toast component is rendered Successfully';
    const { user } = setup(<Toast open={true} type={EToastType.SUCCESS_WITH_ACTION} message={message} onClose={submit} />);
    const button = screen.getByTestId('close-button');
    await user.click(button);
    expect(submit).toHaveBeenCalledTimes(1)
  })
});
