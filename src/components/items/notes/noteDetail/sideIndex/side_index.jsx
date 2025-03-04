import AddBtn from './addBtn';
import React, { useState } from 'react';
import RightClickSpan from './rightClick';
import ContentNavigator from './ContentNavigator';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import styles from '../../../../../styles/items/notes/noteDetail/sideIndex/side_index.module.css';
import {
  menuPageX,
  menuPageY,
  detailTitle,
  ModifyPageContent,
} from '../../../../../store/atom';

export default function SideIndex({ noteId }) {
  const [showMenu, setShowMenu] = useState(false);

  const noteTitle = useRecoilValue(detailTitle);
  const [xPos, setXPos] = useRecoilState(menuPageX);
  const [yPos, setYPos] = useRecoilState(menuPageY);
  const setModifyPage = useSetRecoilState(ModifyPageContent);

  const onRightClick = (e) => {
    e.preventDefault();
    showMenu ? setShowMenu(false) : setShowMenu(true);
    setXPos(`${e.pageX + 5}px`);
    setYPos(`${e.pageY - 115}px`);
  };

  const closeContextMenu = () => {
    if (showMenu) setShowMenu(false);
    setModifyPage(false);
  };

  return (
    <aside className={styles.index}>
      <article className={styles.index_wrap}>
        <section className={styles.index_title}>
          <span
            className={styles.index_title_span}
            onContextMenu={onRightClick}
            onClick={closeContextMenu}
          >
            {noteTitle ?? null}
          </span>
        </section>
        <section className={styles.index_list_wrap}>
          <ContentNavigator />
          <AddBtn noteId={noteId} />
        </section>
        {showMenu && (
          <RightClickSpan
            previosTitle={noteTitle}
            x={xPos}
            y={yPos}
            noteId={noteId}
            NOTE
          />
        )}
      </article>
    </aside>
  );
}
