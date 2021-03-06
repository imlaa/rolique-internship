import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import {DatePickerComponent} from "@syncfusion/ej2-react-calendars";

import './Ifluencer.css';

import { createInfluencer } from '../../actions/influencer';

import ErrorMessage from '../Errors/ErrorMessage';
import CreateHeader from "../Header/CreateHeader";

import {
    InfluencerWrapper,
    InfluencerContainer,
    InfluencerSection,
    InfluencerSectionTitle,
    InfluencerSocial
} from "./CreateInfluencer.style";

import {FileLabel, HelperText, Input, Label, SocialInput} from "../Inputs/CreateInputs.style";
import {yupResolver} from "@hookform/resolvers/yup";
import {createSchema} from "../../validators/influencer-schema";

const minDate = new Date('1950-01-01');

const CreateInfluencer = () => {
    const history = useHistory();

    const [error, setError] = useState('');

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(createSchema),
    });

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [image]);

    const sendData = async (data) => {
        setError('');

        const formData = new FormData();

        for (let key in data) {
            if (key === 'avatar') {
                formData.append(key, data[key][0]);
            }
            if (data[key] !== '') {
                console.log(key, data[key])
                formData.append(key, data[key]);
            }
        }

        const resp = await createInfluencer(formData);

        if (resp) {
            setError(resp);
        } else {
            history.goBack();
            setPreview(null);

            reset();
        }
    };

    return (
        <InfluencerWrapper>
            <CreateHeader title='Create Influencer' form='create-influencer'/>
            <CSSTransition in={!!error} classNames={'alert'} timeout={300} unmountOnExit>
                <ErrorMessage error={error}/>
            </CSSTransition>

            <form id='create-influencer' onSubmit={handleSubmit(sendData)} noValidate>
                <InfluencerContainer>
                    <InfluencerSection>
                        <InfluencerSectionTitle>General</InfluencerSectionTitle>

                        <Label>First Name</Label>
                        {errors?.firstName?.message && <HelperText>{errors?.firstName?.message}</HelperText>}
                        <Input
                            {...register('firstName', {required: true})}
                            id='firstName'
                            type='text'
                            required={errors?.firstName}
                        />

                        <Label>Last Name</Label>
                        {errors?.lastName?.message && <HelperText>{errors?.lastName?.message}</HelperText>}
                        <Input
                            {...register('lastName', {required: true})}
                            id='lastName'
                            type='text'
                            required={errors?.lastName}
                        />

                        <Label>Birthdate</Label>
                        <DatePickerComponent
                            className={'date'}
                            placeholder={'dd/mm/yyyy'}
                            min={minDate}
                            max={new Date()}
                            format={'dd-MM-yyyy'}
                            {...register('birthdate')}
                        />

                        <Label>Profession</Label>
                        {errors?.profession?.message && <HelperText>{errors?.profession?.message}</HelperText>}
                        <Input
                            {...register('profession', {required: true})}
                            id='profession'
                            type='text'
                            required={errors.profession}
                        />

                        <Label>Profile Picture</Label>
                        <Input
                            style={{display: 'none'}}
                            {...register('avatar', {required: true})}
                            id='influencer-avater'
                            type='file'
                            onInput={(event) => {
                                const file = event.target.files[0];
                                if (file) {
                                    setImage(file);
                                } else {
                                    setImage(null);
                                }
                            }}
                        />
                        <FileLabel style={{backgroundImage: `url(${preview})`}} htmlFor={'influencer-avater'}/>
                    </InfluencerSection>

                    <InfluencerSection>
                        <InfluencerSectionTitle>Social Profiles</InfluencerSectionTitle>

                        <InfluencerSocial>
                            <div>
                                <Label>Instagram</Label>
                                <SocialInput
                                    {...register('instagram')}
                                    id='instagram'
                                    type='text'
                                    required={errors.instagram}
                                />
                            </div>
                            <div>
                                <Label>Instagram Followers</Label>
                                <SocialInput
                                    {...register('instagramFollowers')}
                                    id='instagramFollowers'
                                    type='string'
                                    required={errors.instagramFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>YouTube</Label>
                                <SocialInput
                                    {...register('youTube')}
                                    id='youTube'
                                    type='text'
                                    required={errors.youtube}
                                />
                            </div>
                            <div>
                                <Label>YouTube Followers</Label>
                                <SocialInput
                                    {...register('youTubeFollowers')}
                                    id='youTubeFollowers'
                                    type='number'
                                    required={errors.youtubeFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Facebook</Label>
                                <SocialInput
                                    {...register('facebook')}
                                    id='facebook'
                                    type='text'
                                    required={errors.facebook}
                                />
                            </div>
                            <div>
                                <Label>Facebook Followers</Label>
                                <SocialInput
                                    {...register('facebookFollowers')}
                                    id='facebookFollowers'
                                    type='number'
                                    required={errors.facebookFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Tiktok</Label>
                                <SocialInput
                                    {...register('tikTok')}
                                    id='tikTok'
                                    type='text'
                                    required={errors.tiktok}
                                />
                            </div>
                            <div>
                                <Label>Tiktok Followers</Label>
                                <SocialInput
                                    {...register('tikTokFollowers')}
                                    id='tikTokFollowers'
                                    type='number'
                                    required={errors.tiktokFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Twitter</Label>
                                <SocialInput
                                    {...register('twitter')}
                                    id='twitter'
                                    type='text'
                                    required={errors.twitter}
                                />
                            </div>
                            <div>
                                <Label>Twitter Followers</Label>
                                <SocialInput
                                    {...register('twitterFollowers')}
                                    id='twitterFollowers'
                                    type='number'
                                    required={errors.twitterFollowers}/>
                            </div>
                        </InfluencerSocial>

                        <InfluencerSocial>
                            <div>
                                <Label>Blog</Label>
                                <SocialInput
                                    {...register('blog')}
                                    id='blog'
                                    type='text'
                                    required={errors.blog}
                                />
                            </div>
                            <div>
                                <Label>Blog Followers</Label>
                                <SocialInput
                                    {...register('blogFollowers')}
                                    id='blogFollowers'
                                    type='number'
                                    required={errors.blogFollowers}/>
                            </div>
                        </InfluencerSocial>

                    </InfluencerSection>
                </InfluencerContainer>
            </form>
        </InfluencerWrapper>
    );
};

export default CreateInfluencer;
