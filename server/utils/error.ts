import { H3Event, sendError, createError } from 'h3';

export const throwBadRequest = (event: H3Event, message = 'Bad Request') => {
  return sendError(
    event,
    createError({
      statusCode: 400,
      statusMessage: message,
    }),
  );
};

export const throwUnauthorized = (event: H3Event, message = 'Unauthorized') => {
  return sendError(
    event,
    createError({
      statusCode: 401,
      statusMessage: message,
    }),
  );
};

export const throwInternalServerError = (event: H3Event, message = 'InternalServerError') => {
  return sendError(
    event,
    createError({
      statusCode: 500,
      statusMessage: message,
    }),
  );
};
