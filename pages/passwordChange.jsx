import { emailApi, authCodeApi } from '../src/utils/PasswordChange';
import InputForm from '../src/components/passwordChange/InputForm';
import styles from '../src/styles/PasswordChange.module.css';
import { useState } from 'react';
import { passwordReg } from '../src/utils/Reg';

export default function PasswordChnage() {
  const [isTimeStart, setIsTimeStart] = useState(false);
  const [form, setFrom] = useState({
    email: '',
    auth: '',
    pw1: '',
    pw2: '',
  });
  const test = () => {
    console.log('sss');
  };
  const moveToAuth = async () => {
    const emailAuth = await emailApi(form.email);
    if (emailAuth !== true) {
      return emailAuth;
    }
    document.getElementById('slide-auth').checked = true;
    setIsTimeStart(true);
    return '';
  };
  const moveToPw = async () => {
    const authCodeAuth = await authCodeApi(form.auth);
    if (authCodeAuth !== true) {
      return authCodeAuth;
    }
    document.getElementById('slide-pw1').checked = true;
    return '';
  };
  const moveToPwConfirm = () => {
    if (!passwordReg(form.pw1)) {
      return '비밀번호를 다시 입력해주세요';
    }
    document.getElementById('slide-pw2').checked = true;
    return '';
  };
  return (
    <div className="component">
      <div className={styles.section}>
        <input type="radio" name="slide" id="slide-email" defaultChecked />
        <input type="radio" name="slide" id="slide-auth" />
        <input type="radio" name="slide" id="slide-pw1" />
        <input type="radio" name="slide" id="slide-pw2" />
        <div className={styles.slidewrap}>
          <ul className={styles.slidelist}>
            <li>
              <a>
                <label className={styles.left} htmlFor=""></label>
                <InputForm
                  move={moveToAuth}
                  title={'email'}
                  type={'normal'}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
            <li>
              <a>
                <label className={styles.left} htmlFor="slide-email"></label>
                <InputForm
                  move={moveToPw}
                  title={'auth'}
                  type={'normal'}
                  timer={isTimeStart}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
            <li>
              <a>
                <label className={styles.left} htmlFor="slide-auth"></label>
                <InputForm
                  move={moveToPwConfirm}
                  title={'pw1'}
                  type={'secret'}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
            <li>
              <a>
                <label className={styles.left} htmlFor="slide-pw1"></label>
                <InputForm
                  move={test}
                  title={'pw2'}
                  type={'secret'}
                  inputMethod={setFrom}
                  data={form}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
