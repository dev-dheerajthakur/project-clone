import React from 'react'
import style from './styles/profile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import NavigateBack from '@/hooks/Navigate.back'

const Profile = async () => {
  let user = {
    name: "dheeraj",
    userName: "dheeraj.2024",
    pic: "/icons/user.png",
    balance: 29790,
    bio: "battle in $tyle",
    ffuid: 22061298,
    youtube: "nai hai bhai"
  };
  let { name, userName, pic, balance, bio, youtube, ffuid } = user;
  name = name.toUpperCase();
  youtube=youtube.split('www.')[1];
  
  const balanceLength = balance.toString().length;
  let balanceStr = balance.toString();
  //10000 100000 10000000
  if (balanceLength===5) {
    balanceStr = `${balance/1000} k`
  }
  if (balanceLength===6 || balanceLength===7) {
    balanceStr = `${balance/100000} L`
  }
  if (balanceLength===8 || balanceLength===9) {
    balanceStr = `${balance/10000000} cr`
  };

  return (
      <div className={style['profile']}>
        <div className={style['section-1']}>
          <div className={style['section-1-child-1']}><div>
            <div className={style['section-1-child-1-header']}>
              <NavigateBack>
                <Image className={style['history-back']} width={15} height={15} src="/icons/arrowLeftWhite.png" alt="back" />
              </NavigateBack>
              <span className={style['profile-name']}>{name}</span>
            </div>

            <div className={style['section-1-child-1-item-1']}>
              <div className={style['profile-pic-container']}>
                <img className={style['profile-pic']} src={"/banner/banner_2.png"} alt="profile" />
                <div className={style['profile-ffuid']}>{ffuid}</div>
              </div>
              
              <div className={style['profile-info']}>
                <div className={style['profile-username']}>@{userName} <img className={style['copy-username-img']} src="/icons/copy.png" alt="copy" /></div>
                <div className={style['profile-bio']}>
                  <div className={style['profile-bio-about']}><Image width={10} height={10} src="/icons/info.png" alt="info" />{bio}</div>
                  <Link target='_black' href={`https://${youtube}`} className={style['profile-bio-youtube']}><Image width={10} height={10} src="/icons/youtube.png" alt="youtube" /> &nbsp;{youtube}</Link>
                </div>
                <div className={style['profile-btn']}>
                  <button>+ add</button>
                  <button>message</button>
                </div>
              </div>
            </div>

            <div className={style['section-1-child-1-item-2']}>
              <div className={style['ratio-container']}><div className={style['circular-ratio']}></div>W/L</div>
              <div className={style['ratio-container']}><div className={style['circular-ratio']}></div>W/L</div>
              <div className={style['ratio-container']}><div className={style['circular-ratio']}></div>W/L</div>
            </div>
          </div></div>

          <div className={style['section-1-child-2']}>
            <div className={style['profile-balance']}>
              <Link className={style['profile-balance-money']} href="#">₹ {balanceStr}</Link>
              <Link className={style['profile-balance-add-btn']} href="$$"><button>+ Add Money</button></Link>
            </div>
          </div>

        </div>

        <div className={style['section-2']}>
          <div className={style['section-2-child-1']}></div>
          <div className={style['section-2-child-2']}></div>
        </div>
      </div>
  )
}

export default Profile
