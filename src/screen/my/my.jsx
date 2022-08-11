import { TextField, Select, Button, Flex, StyledLink, cv } from "opize-design-system";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header, View } from "../../components";
import { BottomNav } from "../../components/bottomNav";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`

const UserInfo = styled.div`
    margin-bottom: 32px;
`

const H1 = styled.h1`
    font-size: 20px;
    font-weight: 600;
`

const P = styled.p`
    font-size: 12px;
    color: ${cv.text3};
`


export function My(){
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isDirty }, watch } = useForm();

    const submit = async (data) => {
        
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/sign-in')
    }

    return(
        <View>
            <Header></Header>
            <UserInfo>
                <H1>이름</H1>
                <P>학번</P>
            </UserInfo>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <TextField {...register('name', {
                            required: true
                        })} label='이름' error={errors.id?.type === 'required' && '이름'} />
                <TextField {...register('studentId', {
                            required: true
                        })} label='학번' error={errors.id?.type === 'required' && '학번'} />
                <Select {...register('select', {
                            required: true
                        })} name='구분' label='구분'>
                    <Select.Option value='option1'>학생</Select.Option>
                    <Select.Option value='option2'>선생님</Select.Option>
                    <Select.Option value='option3'>기타</Select.Option>
                </Select>
                <TextField {...register('phone', {
                            required: true
                        })} label='연락처' error={errors.id?.type === 'required' && '연락처'} />
                <Button type='submit' label='적용하기' variant='contained' width='100%' isDisabled = {!isDirty}/>
                <Button type='submit' label='로그아웃' variant='text' width='100%' onClick={() => logout()} />
            </StyledForm>

            <BottomNav />
        </View>
    )
}