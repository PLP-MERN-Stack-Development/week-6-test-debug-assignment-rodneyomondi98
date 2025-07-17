function validateBug(data) {
  const errors = {};
  if (!data.title || data.title.trim() === "") {
    errors.title = "Title is required";
  }
  return { isValid: Object.keys(errors).length === 0, errors };
}

module.exports = validateBug;
