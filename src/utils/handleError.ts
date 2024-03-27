const handleError = (error: unknown): string => {
  let message = 'Unkown error';

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  }

  return message;
};

export default handleError;
