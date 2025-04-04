const encrypt = require('./script');

const payload = { userId: 101, name: 'Deepakshi' };
const secret = 'yourSecretKey';

const token = encrypt(payload, secret);

console.log('🔐 JWT with Expiry:', token);
