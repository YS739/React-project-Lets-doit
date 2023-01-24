import { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputGihub,
  AddInputContent,
  AddNickName,
  AddGitLink,
  AddCommentText,
  AddCommentBtn,
  AddIcornBtn,
  AddGitInputDiv,
  AddCommentPlusGit,
  AddGitText,
  AddCommentDiv,
  AddInputDiv,
  AddCommentBtnDiv,
} from './style';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import CommentList from '../CommentList/CommentList';
import { onAuthStateChanged } from 'firebase/auth';

const AddComment = () => {
  const [githubText, setGithubText] = useState('');
  const [commentText, setCommentText] = useState('');
  const [username, setUsername] = useState('');

  const AddGithubText = (e) => {
    setGithubText(e.target.value);
  };

  const AddCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        getInfoUsername(username);
        console.log('Add Commnet 로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
  }, []);

  // 기존 username 정보 가져오기
  const getInfoUsername = () => {
    const q = query(
      collection(db, 'testUser'),
      where('uid', '==', authService.currentUser.uid),
    );
    getDocs(q).then((querySnapshop) => {
      const userInfo = [];
      querySnapshop.forEach((doc) => {
        userInfo.push({
          username: doc.data().username,
        });
        setUsername(userInfo[0].username);
        console.log('유저인포', username);
      });
    });
  };

  // 데이터 올리기

  const AddCommentButton = async () => {
    await addDoc(collection(db, 'test'), {
      comment: commentText,
      gihub: githubText,
      username: username,
      videoId: '',
      uid: authService.currentUser?.uid,
      date: Date.now(),
    });
    setGithubText('');
    setCommentText('');
  };

  return (
    <>
      <AddCommentListAll>
        <AddCommentListWrap>
          <AddNickName>닉네임</AddNickName>
          <AddCommentListTwo>
            <AddCommentPlusGit>
              <AddGitLink>
                <AddGitText>Github Link </AddGitText>
                <AddGitInputDiv>
                  <AddInputGihub
                    placeholder="선택사항입니다."
                    onChange={AddGithubText}
                    value={githubText}
                  />
                </AddGitInputDiv>
              </AddGitLink>
              <AddCommentText>
                <AddCommentDiv>댓글 </AddCommentDiv>
                <AddInputDiv>
                  <AddInputContent
                    onChange={AddCommentTextChange}
                    value={commentText}
                  />
                </AddInputDiv>
              </AddCommentText>
            </AddCommentPlusGit>
            <AddCommentBtnDiv>
              <AddCommentBtn onClick={AddCommentButton}>댓글등록</AddCommentBtn>
            </AddCommentBtnDiv>
          </AddCommentListTwo>
        </AddCommentListWrap>
        <AddIcornBtn>
          <BsBookmark />
        </AddIcornBtn>
      </AddCommentListAll>

      <CommentList />
    </>
  );
};

export default AddComment;
