import React, { FC } from 'react';
import calculateWorldsnapshot from './calculate-world-snapshot';
import WorldSnapshotGrowthRate from './WorldSnapshotGrowthRate/WorldSnapshotGrowthRate';
import styles from './WorldSnapshot.css';
import girl from './assets/girl.png'

interface Props {
  cases: number[];
  deaths: number[];
}

const WorldSnapshot: FC<Props> = ({ cases, deaths }) => {
  const worldSnapshot = calculateWorldsnapshot(cases, deaths);

  return (
    <>
    <div className={styles.snap__container}>

      <div className={`${styles['snap__box1']} ${styles['box']} ${styles['cases']}`}>
      <div className={styles.title__cases}>
        Total Casos
      </div>
      <div className={styles.number__cases}>
        {worldSnapshot.totalCases.toLocaleString()}
      </div>
      <div className={styles.last__cases}>
        {worldSnapshot.newCases.toLocaleString()} Casos Ayer
      </div>
     <div className={styles.pill__growth}> 
      <WorldSnapshotGrowthRate
        growthRate={worldSnapshot.caseGrowthRate}
        />
     </div>

     
      </div>
      <div className={`${styles['snap__box2']} ${styles['box']} ${styles['death']}`}>
      <div className={styles.title__death}>
        Total Fallecidos
      </div> 
      <div className={styles.number__death}>
        {worldSnapshot.totalDeaths.toLocaleString()}
      </div>
      <div className={styles.last__death}>
      {worldSnapshot.newDeaths.toLocaleString()} Fallecidos Ayer
      </div>
      <div className={styles.pill__growth}>
        <WorldSnapshotGrowthRate
        growthRate={worldSnapshot.deathGrowthRate}
        />
      </div>

      </div>
      <div onClick={() => window.open("https://espanol.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html")}
      className={`${styles['snap__box3']} ${styles['box']} ${styles['symptoms']}`}>
        <div>
          <div className={styles.title__symptoms}>
            Síntomas
          </div>
          <div className={styles.subtitle__symptoms}>
            Conoce los sintomas del covid-19
          </div>
          <button className={styles.btn__symptons}>Informarme</button>
          <img className={styles.image__girl} src={girl}/>
        </div>
      </div>
    </div>
   
     

     

      {/* Average mortality
      {(worldSnapshot.mortality * 100).toFixed(2)}% */}
         
    </>
  );
};

export default WorldSnapshot;
