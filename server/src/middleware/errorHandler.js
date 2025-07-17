// server/src/middleware/errorHandler.js
function errorHandler(err, req, res, next) {
  console.error("Backend Error:", err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
}

module.exports = errorHandler;
