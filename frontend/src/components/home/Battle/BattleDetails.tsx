import Image from 'next/image'
import React from 'react'
import style from './style/BattleDetails.module.css'
import Link from 'next/link';
import NavigateBack from '@/hooks/Navigate.back';
import BattlePlayerDetails from './BattlePlayerDetails';

const BattleDetails = ({
  battle,
}: {
  battle: {
    _id: string;
    battleId: number;
    settings: {
      ammo: string;
      map: string;
      gameMode: string;
      teamMode: string;
      slots: number;
      gunAttributes: string;
      chatacterSkill: string;
      loadout: string;
    };
    teams: Array<any>,
    expire: string;
    entry: number;
    winning: { _1: number; _2: number; _3: number };
    createdAt: { $date: string };
    players: any;
    __v: number;
  };
}) => {
  const { _id, settings: { map, slots }, winning: { _1, _2, _3 }, entry, teams } = battle;

  return (
    <div className={style['battle-details']}>
      <div className={style['section1']}>
        <NavigateBack>
          <Image className={style['arrow-back']} width={25} height={20} src='/icons/arrowLeft.png' alt='back' />
        </NavigateBack>
        <div className={style['img']}>
          <img src={`/maps/${map}.png`} alt='cover' />
        </div>
        <div className={style['winners']}>
          <div className={style['winner-section']}>
            <img className={style['winner-trophy-img']} src="/winner/trophy-silver.png" alt="winner"/>
            <div className={style['winning-prize']} style={{color: "#E5E5E5"}}>₹ {_2}/-</div>
          </div>
          <div className={`${style['winner-section']} ${style['winner-gold-section']}`}>
            <img className={style['winner-trophy-img']} src="/winner/trophy-gold.png" alt="winner"/>
            <div className={style['winning-prize']} style={{color: "gold"}}>₹ {_1}/-</div>
          </div>
          <div className={style['winner-section']}>
            <img className={style['winner-trophy-img']} src="/winner/trophy-bronze.png" alt="winner"/>
            <div className={style['winning-prize']} style={{color: "#FFB367"}}>₹ {_3}/-</div>
          </div>
        </div>
        <div className={style['register-btn-container']}>
          <div className={style['register-btn']}>
            <Link href={`/battle/checkout/${_id}`}><button>Join now - {entry}</button></Link>
          </div>
        </div>
      </div>

      <div className={style['section2']} id="battle-details-section-2-for-pc">
        {false&&<div className={style['room-auth']}>
          <div className={style['room-id']}>Room id: <span>239202943 <Image width={15} height={15} src="/icons/copy.png" alt="copy" /></span></div>
          <div className={style['room-pass']}> Room pass: <span>23423 <Image width={15} height={15} src="/icons/copy.png" alt="copy" /></span> </div>
        </div>}
        <BattlePlayerDetails teams={teams} slots={slots} />
        <div className={style['settings']}>
          <div className={style['setting']}> <span className={style['setting-span']}>Game mode</span>Battle Royal</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Team mode</span>2v2</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Ammo</span>Limited</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Map</span>Bermuda</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Time</span>5:00 PM</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Date</span>7 June, 2024</div>
          <div className={style['border']}></div>
          <div className={style['setting']}> <span className={style['setting-span']}>Gun attributes</span> No</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Character skill</span> No</div>
          <div className={style['border']}></div>
          <div className={style['setting']}> <span className={style['setting-span']}>Teams</span> 12</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Players</span> 48</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Minimum level</span> 55</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Preset Modes</span> Classic</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Preset Modes</span> Random Store</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Rounds</span> 7</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Default Coin</span> 500</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Ramdom buff</span> NO</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Cyber Airdrop</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Revival</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>HP</span> 200</div>
          <div className={style['setting']}> <span className={style['setting-span']}>EP</span> 0</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Movement speed</span> 100%</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Jump height</span> 100%</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Environment</span> Day</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Limited ammon</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Fall damage</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Auto revival</span> No</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Airdrop</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Zone shrink speed</span> Standard</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Vehicles</span>Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Out of zone damage</span> Standard</div>
          <div className={style['setting']}> <span className={style['setting-span']}>High tier loot zone</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>UAV</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Airstrike</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Airship</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Genric enemy outfit</span> no</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Hide teammate nickname</span> No</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Friendly fire</span> No</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Pricise Aim</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Character skill</span> No</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Loadout</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>Gun attributes</span> No</div>
          <div className={style['setting']}> <span className={style['setting-span']}>In game missions</span> Yes</div>
          <div className={style['setting']}> <span className={style['setting-span']}>In match quests</span> No</div>
        </div>
      </div>
    </div>
  )
}

export default BattleDetails
