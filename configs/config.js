module.exports = {
    PORT: process.env.PORT || 3000,
    SENTRY_DSN: process.env.SENTRY_DSN,
    URL_ATLAS: process.env.URL_ATLAS,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_SECRET_LIFETIME: process.env.JWT_SECRET_LIFETIME,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_SECRET_LIFETIME: process.env.JWT_REFRESH_SECRET_LIFETIME,

    INTERN_USER_ROLE: 'admin',
    INTERN_USER_FIRST_NAME: 'Admin',
    INTERN_USER_LAST_NAME: 'Rolique',
    INTERN_USER_EMAIL: process.env.INTERN_USER_EMAIL,
    INTERN_USER_PASSWORD: process.env.INTERN_USER_PASSWORD,

    ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
    ALLOWED_METHODS: 'GET;POST;PUT;DELETE',

    SERVER_RATE_LIMITS: {
        period: 15 * 60 * 1000, // 15 minutes
        maxRequests: 10000
    },

    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY_CLOUD: process.env.API_KEY_CLOUD,
    API_SECRET_CLOUD: process.env.API_SECRET_CLOUD,

    INSTAGRAM_LOGIN: process.env.INSTAGRAM_LOGIN,
    INSTAGRAM_PASSWORD: process.env.INSTAGRAM_PASSWORD,

    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    BASE_YOUTUBE_URL: process.env.BASE_YOUTUBE_URL,

    SESSION_LIST: process.env.SESSION_LIST,
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
    EMPTY_AVATAR_URL: process.env.EMPTY_AVATAR_URL
};
