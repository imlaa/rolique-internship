const { ErrorHandler, errorMassages: { RECORD_NOT_FOUND } } = require('../errors');
const { passwordHasher, tokenizer } = require('../helpers');
const { O_Auth, User } = require('../dataBase');
const { statusCode: { NOT_FOUND } } = require('../constants');

module.exports = {
    authUser: async (email, password) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new ErrorHandler(NOT_FOUND, RECORD_NOT_FOUND.message);
        }

        await passwordHasher.compare(password, user.password);

        const { access_token, refresh_token } = tokenizer();
        await O_Auth.create({
            access_token,
            refresh_token,
            user: user._id
        });

        return {
            access_token,
            refresh_token,
        };
    },
    refreshToken: async (user, _id) => {
        const { access_token, refresh_token } = tokenizer();
        await O_Auth.findByIdAndUpdate(_id, { access_token, refresh_token, user });

        return {
            access_token,
            refresh_token
        };
    },
    removeTokenByParams: (params) => O_Auth.findByIdAndDelete(params),
    removeTokens: (id) => O_Auth.findByIdAndDelete(id)
};
