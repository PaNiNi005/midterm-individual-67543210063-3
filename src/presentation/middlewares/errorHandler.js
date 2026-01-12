function errorHandler(err, req, res, next) {
    console.error('Error:', err.message);
    let status = 500;

    if (err.message.includes('required') || err.message.includes('Invalid')) status = 400;
    if (err.message.includes('not found')) status = 404;
    if (err.message.includes('already borrowed') || err.message.includes('Cannot delete')) status = 409;

    res.status(status).json({ error: err.message });
}

module.exports = errorHandler;
