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
    const submit = jest.fn();
    const message = 'Toast component is rendered Successfully';
    const { user } = setup(<Toast open={true} type={EToastType.SUCCESS_WITH_ACTION} message={message} onAction={submit} />);
    const button = screen.getByTestId('button');
    await user.click(button);
    expect(submit).toHaveBeenCalledTimes(1)
  })

  it('should submit close event', async () => {
    const submit = jest.fn();
    const message = 'Toast component is rendered Successfully';
    const { user } = setup(<Toast open={true} type={EToastType.SUCCESS_WITH_ACTION} message={message} onClose={submit} />);
    const button = screen.getByTestId('close-button');
    await user.click(button);
    expect(submit).toHaveBeenCalledTimes(1)
  })

  // it('shouldn submit with valid payload', async () => {
  //   const submit = jest.fn();
  //   const { user } = setup(<LoginForm submit={submit} />);
  //   const button = screen.getByTestId('button');
  //   const email = screen.getByTestId('email');
  //   const password = screen.getByTestId('password');

  //   await user.type(email, 'anson');
  //   // @ts-ignore
  //   expect(email.value).toBe('anson')

  //   await user.type(password, 'password');
  //   // @ts-ignore
  //   expect(password.value).toBe('password')

  //   // Form submition
  //   await user.click(button);
  //   expect(submit).toHaveBeenCalledTimes(1)
  //   expect(submit).toHaveBeenCalledWith({
  //     email: "anson",
  //     password: "password"
  //   });
  // })
});
