const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validation(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    }
    next(error);
  };
};
module.exports = validation