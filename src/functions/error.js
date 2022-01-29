export const ManageError = (error) => {
  switch (error) {
    case 1002:
      return "API key not provided.";
    case 1003:
      return "Parameter 'q' not provided.";
    case 1005:
      return "API request url is invalid";
    case 1006:
      return "No location found matching parameter 'q'";
    case 2006:
      return "API key provided is invalid";
    case 2007:
      return "API key has exceeded calls per month quota.";
    case 2008:
      return "API key has been disabled.";
    case 9999:
      return "Internal application error.";
    default:
      break;
  }
};
