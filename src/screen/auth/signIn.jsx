import React from "react";

import { Button, TextField, cv } from "opize-design-system";
import { Flex, Logo, View } from "../../components";
import { LayoutBottom } from "../../components/layout/bottom";
import { useForm } from 'react-hook-form'
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`

const StyledLink = styled(Link)`
    color: ${cv.blue1};
    text-decoration: none;
    font-size: .875rem;

    &:hover {
        text-decoration: underline;
    }
`

export function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const login = async (data) => {
        console.log(data)
        try {
            const res = await axios.post("https://api.seal.com/sign-in", {
                id: data.id,
                password: data.password
            })
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <View>
            <Flex.Center><Logo width="200px" /></Flex.Center>
            
            <LayoutBottom>
                <StyledForm onSubmit={handleSubmit(login)}>
                    <TextField {...register('id', {
                        required: true
                    })} label='아이디' error={errors.id?.type === 'required' && '아이디를 입력해주세요'} />
                    
                    <TextField {...register('password', {
                        required: true
                    })} label='비밀번호'
                        type="password"
                        error={errors.password?.type === 'required' && '비밀번호를 입력해주세요'}  />
                        
                    <Button
                        label='로그인'
                        type='submit'
                        variant='contained'
                        width='100%'
                        size="large"
                    />
                    <Flex.Center>
                        <StyledLink to='/sign-up'>회원가입</StyledLink>
                    </Flex.Center>
                </StyledForm>
                
                
            </LayoutBottom>
        </View>
    )
}