const index = require('./server/server');

const PORT = 5001;

index.listen(PORT, () => console.log(`Listening on port ${PORT}`));
