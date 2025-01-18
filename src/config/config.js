<<<<<<< HEAD
export const API_URL = 'https://backend-data-gqt2.onrender.com';
=======
export const API_URL = import.meta.env.VITE_API_URL || 'https://backend-data-gqt2.onrender.com';

// Add a console log to debug
console.log('Configured API_URL:', API_URL);
>>>>>>> 2355ab5d (Saving local changes before pull)
