export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // ! Implement error handling logic here (e.g., logging, sending error response)

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
};
