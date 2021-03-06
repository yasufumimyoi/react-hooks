import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { VideoContext } from '../contexts/video-context';

export const Privacy: React.FC = () => {
  const { currentUser } = useContext(VideoContext);
  const history = useHistory();
  const handleHome = () => {
    if (currentUser) {
      history.push('/courses');
    } else {
      history.push('/');
    }
  };
  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item sm={8} xs={10}>
        <h3>ご登録いただいた情報について</h3>
        <p>
          個人情報漏えい防止のため、当サイトの個人情報保護方針に従い適正に管理しております。
        </p>
        <h3>収集目的</h3>
        <p>
          当サイトでは、ユーザーが利用登録する際に、メールアドレス・SNSアカウントなどの個人情報をお尋ねする事があります。
          ご提供いただいた個人情報は、当サイト「個人情報保護方針」に定めた目的以外には利用いたしません。
        </p>
        <h3>第三者への提供</h3>
        <p>
          当サイトでは、お問い合わせ・お申込みいただいた方の同意なく、個人情報を第三者に提供することはございません。
          ただし、次の場合には、あらかじめご本人の同意を得ることなく、個人情報を第三者に提供することがありますので、あらかじめご了承ください。
        </p>
        <ul>
          <li>法令に基づく場合</li>
          <li>
            人の生命、身体又は財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合
          </li>
          <li>
            公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難である場合
          </li>
          <li>
            国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
          </li>
        </ul>
        <h3>個人情報に関するお問い合わせ</h3>
        <p>
          お問い合わせいただいた方の個人情報について、ご本人から開示・訂正・削除を求められたときは、ご本人確認の上、当サイトにて速やかに対応いたします。
        </p>
        <p onClick={handleHome} style={{ cursor: 'pointer', marginTop: 50 }}>
          ホーム画面へ戻る
        </p>
      </Grid>
    </Grid>
  );
};
