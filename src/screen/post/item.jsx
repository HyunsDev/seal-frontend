import { Header, View } from "../../components";
import { TextField, Button, Radio, RadioGroup, TextArea, Select, Flex, cv, useTopLoading, useModal, ActionMenu, useDialog } from 'opize-design-system'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import { Back } from "../../components/back";
import { DotsThreeVertical } from "phosphor-react";
import { LayoutBottom } from "../../components/layout/bottom";
dayjs.locale('ko')
dayjs.extend(relativeTime)


const Divider = styled.div`
    border-top: solid 1px ${cv.border3};
    margin-left: -20px;
    width: calc(100% + 40px);
`

const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cv.bg_page2};
    padding: 0px 12px;
    padding-top: 20px;
`

const PostCategory = styled.div`
    padding: 3px 8px;
    background-color: ${cv.bg_element5};
    border-radius: 999px;
    font-size: 10px;
    color: ${cv.text5};
    width: fit-content;
    margin-bottom: 12px;
`

const PostTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
`

const PostSubTitle = styled.div`
    font-size: 12px;
    color: ${cv.text3};
    margin-bottom: 32px;
`

const PostContent = styled.div`
    margin-bottom: 32px;
`

const PostAuthor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
`

const PostAuthorName = styled.div`
    font-size: 14px;
`

const PostAuthorInfo = styled.div`
    font-size: 12px;
    color: ${cv.text3};
`

const MiddleSpacer = styled.div`
    height: 16px;
    width: 100%;
    background-color: ${cv.bg_element2};
`

const Modal = styled.div`
    font-size: 14px;
`

function Post(props) {
    const modal = useModal()

    return (
        <StyledPost>
            <PostCategory>{props.data.category}</PostCategory>
            <PostTitle>{props.data.title}</PostTitle>
            <PostSubTitle>{props.data?.author?.grade}학년, {dayjs().to(dayjs(props.data.createdAt))}</PostSubTitle>
            <PostContent>{props.data.content}</PostContent>
            <Divider />
            <PostAuthor>
                <Flex style={{flexDirection: 'column'}}>
                    <PostAuthorName>{props.data?.author?.name}</PostAuthorName>
                    <PostAuthorInfo>{props.data?.author?.grade}학년 {props.data?.author?.class}반</PostAuthorInfo>
                </Flex>
                <Flex style={{alignItems: 'center'}}>
                    <Button label='연락하기' onClick={() => modal.open(<Modal>{props.data.contact}</Modal>, '연락하기')} variant='contained' />
                </Flex>
            </PostAuthor>
        </StyledPost>
    )
}

const StyledComment = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${cv.bg_page2};
    padding: 0px 12px;
`

const CommentTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 16px 0px;
`

const CommentItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px 0px;
`

const CommentItemAuthor = styled.div`
    font-size: 12px;
    color: ${cv.text3};
`

const CommentItemContent = styled.div`
    
`

function Comment(props) {
    return (
        <StyledComment>
            <CommentTitle>댓글</CommentTitle>
            <Divider />
            {
                props.comment?.map(e => (
                    <>
                        <CommentItem key={e.id}>
                            <CommentItemAuthor>{e?.author}</CommentItemAuthor>
                            <CommentItemContent>{e?.content}</CommentItemContent>
                        </CommentItem>
                        <Divider />
                    </>
                ))
            }
        </StyledComment>
    )
}

const WriteCommentOuter = styled.div`
    position: fixed;
    bottom: 12px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
`

const WriteCommentInter = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 0px 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export function WriteComment({children}) {
    return (
        <WriteCommentOuter>
            <WriteCommentInter>
                <Divider/>
                {children}
            </WriteCommentInter>
        </WriteCommentOuter>
    )
}

export function Item() {
    const dialog = useDialog()
    const { id } = useParams()
    const [ data, setData ] = useState({})
    const topLoading = useTopLoading()

    useEffect(() => {
        ;(async () => {
            try {
                throw Error()
                const res = await axios.get(`${process.env.REACT_APP_API_SERVER}/post/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setData(res.data)
            } catch (err) {
                setData(
                    {
                        id: 123,
                        title: '제목',
                        category: '모의 면접',
                        content: "글 내용",
                        contact: '전화번호: 010-1234-1234',
                        createdAt: new Date().toISOString(),
                        tag : ['태그1', '태그2'],
			            status: "상태(open, close, pause)",
			            condition: {
			            	grade: [1, 2],
			            	line: "자연",
                        },
                        author: {
                            id: "유저 아이디",
                            name: "유저 이름",
                            grade: 3,
                            class: 5,
                            number: 12,
                            phone: '010-1234-1234'
                        },
                        comment: [
                            {
                                id: 1,
                                author: '박현우',
                                content: '댓글'
                            },
                            {
                                id: 2,
                                author: '박현우',
                                content: '댓글2'
                            }
                        ]
                    }
                )
                
            }
        })()
    }, [id])

    return (
        <View noPadding>
            <Header>
                <Flex.Between style={{width: '100%'}}>
                    <Flex style={{alignItems: 'center'}}><Back />{data.title}</Flex>
                    <Flex style={{alignItems: 'center'}}>
                        <ActionMenu icon={<DotsThreeVertical weight="bold" size={20} />} actions={[
                            [
                                {
                                    label: '글 삭제',
                                    onClick: () => dialog('정말로 글을 삭제하시겠어요?', [
                                        {
                                            label: '취소',
                                            onClick: () => {},
                                            variant: 'text'
                                        },
                                        {
                                            label: '삭제',
                                            onClick: () => {},
                                            variant: 'contained',
                                            color: 'red'
                                        }
                                    ]),
                                    color: 'red'
                                }
                            ]
                        ]} />
                    </Flex>
                </Flex.Between>
            </Header>
            <Post data={data} />
            <MiddleSpacer />
            <Comment comment={data.comment} />
            <WriteComment>
                <TextField placeholder="댓글 남기기" />
            </WriteComment>
        </View>
    )
}