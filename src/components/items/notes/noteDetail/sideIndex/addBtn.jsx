import { useRecoilState, useSetRecoilState } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/addBtn.module.css';
import {
  addNewPage,
  okBtnActive,
  isOnEditPage,
  isModalActive,
  ModifyPageContent,
} from '../../../../../store/atom';
import useModal from '../../../../../utils/useModal';
import IssueCreateModal from '../../../modal/IssueCreateModal';

export default function AddBtn({ noteId }) {
  const setIsOnEditor = useSetRecoilState(isOnEditPage);
  const setAddNewContent = useSetRecoilState(addNewPage);
  const setIsUserSubmit = useSetRecoilState(okBtnActive);
  const setModifyPage = useSetRecoilState(ModifyPageContent);
  const [showHiddenModal, setShowHiddenModal] = useRecoilState(isModalActive);

  const modalObj = useModal('topic');

  const activeAddTopic = () => {
    setIsUserSubmit(false);
    setModifyPage(false);
    setShowHiddenModal(true);
  };

  const activeAddPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setIsOnEditor(true);
      setAddNewContent(true);
      setModifyPage(true);
    }, 800);
  };

  return (
    <>
      <div className={styles.addBtn}>
        <button onClick={activeAddTopic}>+ 토픽 추가</button>
        <button onClick={activeAddPage}>+ 페이지 추가</button>
      </div>
      {showHiddenModal && (
        <div className={styles.notes_modal}>
          <IssueCreateModal modalObj={modalObj} noteId={noteId} />
        </div>
      )}
    </>
  );
}
