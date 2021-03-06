const { IgApiClient } = require('instagram-private-api');

const { INSTAGRAM_LOGIN, INSTAGRAM_PASSWORD } = process.env;

module.exports = (function() {
    const apiClient = new IgApiClient();
    apiClient.state.generateDevice(INSTAGRAM_LOGIN);

    const login = async () => {
        await apiClient.simulate.preLoginFlow();
        await apiClient.account.login(INSTAGRAM_LOGIN, INSTAGRAM_PASSWORD);

        return apiClient;
    };
    return {
        getInstagramData: async () => {
            const data = await login();
            return data;
        }
    };
}());
