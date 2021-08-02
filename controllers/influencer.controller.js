const {
    instagramService,
    fileService,
    influencerService
} = require('../services');
const { FOLDER_NAME: { INFLUENCER } } = require('../constants/constants');
const { CREATED } = require('../constants/response.status.enum');

module.exports = {
    createInfluencer: async (req, res, next) => {
        try {
            const {
                body, files: { avatar }
            } = req;

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, INFLUENCER);
                req.body = {
                    ...body,
                    avatar: cloudResponse.url
                };
            }

            // if (body.instagram) {
            //     const images = await instagramService.getImagesData(body.instagram);
            //     req.body = {
            //         ...body,
            //         instagramPhotos: images
            //     };
            //     // res.json(images);
            // }

            await influencerService.createInfluencer(req.body);

            res.status(CREATED).json(`Influencer ${body.firstName} ${body.lastName} was created`);
        } catch (error) {
            next(error);
        }
    }
};