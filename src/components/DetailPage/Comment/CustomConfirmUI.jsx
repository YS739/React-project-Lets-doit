import { deleteDoc, doc } from 'firebase/firestore';
import styled from 'styled-components';
import { db } from '../../../common/firebase';

export default function CustomConfirmUI(props) {
  return (
    <ConfirmBody>
      <ConfirmBox>
        <TitleBox>
          <ConfirmTitle>댓글 삭제</ConfirmTitle>
        </TitleBox>
        <TextBox>
          <ConfirmText>댓글을 완전히 삭제할까요?</ConfirmText>
        </TextBox>
        <BtnBox>
          <ConfirmCancelBtn onClick={props.onClose}>취소</ConfirmCancelBtn>
          <ConfirmDeleteBtn
            onClick={() => {
              const userDoc = doc(db, 'test', props.id);
              deleteDoc(userDoc);
              props.onClose();
            }}
          >
            삭제
          </ConfirmDeleteBtn>
        </BtnBox>
      </ConfirmBox>
    </ConfirmBody>
  );
}

const ConfirmBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 200vh;
`;

const ConfirmBox = styled.div`
  width: 350px;
  height: 200px;

  border-radius: 10px;

  position: relative;
  bottom: 80px;
  box-shadow: 2px 2px 15px 2px #205295;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ConfirmTitle = styled.h2``;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ConfirmText = styled.p``;

const BtnBox = styled.div`
  margin-top: 7%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const ConfirmCancelBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #205295;

  background: none;
  border: none;

  cursor: pointer;
`;

const ConfirmDeleteBtn = styled(ConfirmCancelBtn)``;
