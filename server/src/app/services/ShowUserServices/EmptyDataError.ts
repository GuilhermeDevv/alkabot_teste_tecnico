export class EmptyDataError extends Error {
  status = 400;
  message = 'empty data';
}
