import { Header, View } from "../../components";
import { TextField, Button, Radio, RadioGroup, TextArea, Select } from 'opize-design-system'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Back } from "../../components/back";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`

export function Write(props) {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isDirty }, watch } = useForm();
    const submit = async (data) => {
        navigate('/post')
    }
    return (
        <View>
            <Header>
                <Back />
                글쓰기
            </Header>
            <StyledForm onSubmit={handleSubmit(submit)}>

                <TextField {...register('title', {
                            required: true
                    })} label='제목' error={errors.title?.type === 'required' && '제목'} />

                <TextArea {...register('content', {
                    required: true
                })}
                    label='내용'
                    error={errors.content?.type === 'required' && '내용을 작성해주세요.'}
                    placeholder='모집에 대한 내용을 작성해주세요. 부적절한 글은 삭제될 수 있어요.'
                    
                />
                
                <RadioGroup label='분류'>
                    <Radio {...register("radio")} label='모의면접' value='interview' />
                    <Radio {...register("radio")} label='모의 자소서 첨삭' value='correction' />
                    <Radio {...register("radio")} label='프로젝트' value='project' />
                </RadioGroup>
                
                <RadioGroup label='대상'>
                    <Radio {...register("radio")} label='1학년' value='grade 1' />
                    <Radio {...register("radio")} label='2학년' value='grade 2' />
                    <Radio {...register("radio")} label='3학년' value='grade 3' />
                </RadioGroup>
                
                <Select {...register('select')} label='장소'>
                    <Select.Option value='option1'>미정</Select.Option>
                    <Select.Option value='option2'>Option 2</Select.Option>
                    <Select.Option value='option3'>Option 3</Select.Option>
                </Select>

                <TextField {...register('date', {
                            required: true
                    })} label='날짜' error={errors.id?.type === 'required' && '날짜'} />
                
                <TextArea {...register('contact', {
                    required: true
                })}
                    label='연락방법'
                    error={errors.content?.type === 'required' && '연락방법을 작성해주세요'}
                    placeholder='어떻게 연락할건지 기입해주세요'
                    
                />
                
                <TextField {...register('quote', {
                            required: true
                    })} label='참여인원' error={errors.id?.type === 'required' && '참여인원'} type='number'  />

                <Button type='submit' label='등록하기' variant='contained' width='100%' />
            </StyledForm>
        </View>
    )
}