import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {parsePhoneNumberFromString} from "libphonenumber-js";

import {createSchema} from "../../validators/user-schema";
import CreateHeader from "../Header/CreateHeader";
import {getUser} from "../../actions/user";

import infoIcon from "../../assets/info-icon.png";

import {UserContainer, UserFirstSection, UserSecondSection, UserSectionTitle, UserWrapper} from "./CreateUser.style";
import {FileLabel, HelperText, Input, Label, Select} from "../Inputs/CreateInputs.style";

const EditUser = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(({userReducer: {user}}) => user);

    console.log('U S E R', user)

    useEffect(() => {
        dispatch(getUser(id));
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(createSchema),
        defaultValues: user
    });

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if(!phoneNumber){
            return value
        }

        return (
            phoneNumber.formatInternational()
        );
    };

    const sendEditData = () => {

    }

    return (
        <UserWrapper>
            <CreateHeader title='Edit Internal User' buttonText='Save Changes' form='edit-form'/>

            <form id={'edit-form'} onSubmit={handleSubmit(sendEditData)} noValidate>
                <UserContainer>
                    <UserFirstSection>
                        <UserSectionTitle>General</UserSectionTitle>

                        <Label>Profile Picture</Label>
                        <Input
                            style={{display: 'none'}}
                            {...register('profilePicture', {required: true})}
                            id='profilePicture'
                            type='file'
                            accept='image/*'/>
                        <FileLabel for='profilePicture' />

                        <Label>First Name</Label>
                        {errors?.firstname?.message && <HelperText>{errors?.firstname?.message}</HelperText>}
                        <Input
                            {...register('firstname', {required: true})}
                            id='firstName'
                            type='text'/>

                        <Label>Last Name</Label>
                        {errors?.lastname?.message && <HelperText>{errors?.lastname?.message}</HelperText>}
                        <Input
                            {...register('lastname', {required: true})}
                            id='lastname'
                            type='text'/>

                        <Label>Email</Label>
                        {errors?.email?.message && <HelperText>{errors?.email?.message}</HelperText>}
                        <Input
                            {...register('email', {required: true})}
                            id='email'
                            type='email'/>

                        <Label>Phone</Label>
                        {errors?.phone?.message && <HelperText>{errors?.phone?.message}</HelperText>}
                        <Input
                            {...register('phone', {required: true})}
                            id='phone'
                            type='tel'
                            onChange={(event) => {
                                event.target.value = normalizePhoneNumber(event.target.value);
                            }}/>

                    </UserFirstSection>

                    <UserSecondSection>
                        <UserSectionTitle>
                            Role & Permissions
                            <img src={infoIcon} alt="infoIcon"/>
                        </UserSectionTitle>

                        <Label>Role</Label>
                        {errors?.role?.message && <HelperText>{errors?.role?.message}</HelperText>}
                        <Select
                            {...register('role', {required: true})}
                            id='role'
                            type='select'>
                            <option value='' disabled selected hidden>Select...</option>
                            <option value='admin'>Admin</option>
                            <option value='Manager'>Manager</option>
                            <option value='Employee'>Employee</option>
                        </Select>

                        <UserSectionTitle>Password</UserSectionTitle>

                        <Label>Set Password</Label>
                        {errors?.password?.message && <HelperText>{errors?.password?.message}</HelperText>}
                        <Input
                            {...register('password', {required: true})}
                            id='password'
                            type='password'/>

                    </UserSecondSection>
                </UserContainer>
            </form>
        </UserWrapper>
    );
};

export default EditUser;