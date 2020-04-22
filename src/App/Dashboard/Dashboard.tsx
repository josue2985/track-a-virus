import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import DailyCases from './DailyData/DailyData';
import styles from './Dashboard.css';
import DailyAbsoluteIncrease from './DailyAbsoluteIncrease/DailyAbsoluteIncrease';
import DailyPercentageIncrease from './DailyPercentageIncrease/DailyPercentageIncrease';
import DashboardStore from './stores/DashboardStore';
import { observer, inject } from 'mobx-react';
import Select from 'react-select';
import { AllStores } from '../../stores/RootStore';
import WorldSnapshot from './WorldSnapshot/WorldSnapshot';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';
import { Timeseries } from './types/Timeseries';
import CountryColors from './types/CountryColors';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  dashboardStore?: DashboardStore;
}

const getCountrySelectOptions = (countries: string[]) =>
  countries.map((c) => ({ value: c, label: c }));

interface SelectOption {
  value: string;
  label: string;
}

// select input
const renderCountrySelector = (
  allCountries: string[],
  countriesToCompare: SelectOption[],
  setCountriesToCompare: Dispatch<SetStateAction<SelectOption[]>>
) => (
  <>
    <div className={styles.input__container}>
      <div className={styles.section__label}>
        <label htmlFor='countrySelector'>
          Selecciona <strong>uno o varios</strong> países para visualizar y
          comparar.
        </label>
      </div>
      <div className={styles.section__input}>
        <Select
          inputId='countrySelector'
          options={getCountrySelectOptions(allCountries)}
          isMulti
          value={countriesToCompare}
          onChange={(selected) => {
            setCountriesToCompare(selected as SelectOption[]);
          }}
          placeholder='Selecciona los países que necesitas comparar. Escribe world para conocer el impacto global'
          className={styles.select}
          classNamePrefix='select'
        />
      </div>
    </div>
  </>
);
// stadistics graphs
const renderDataForSelectedCountries = (
  title: string,
  data: Timeseries,
  countryColors: CountryColors
) => (
  <>
    <div className={styles.graphs__wrapper}>
      <div className={styles.graphs__title}>
        <div className={styles.title__text}>{title}</div>
      </div>
      <div
        className={`${styles['graphs__dailycases']} ${styles['graphs__box']} ${styles['boxhover__dailycases']}`}
      >
        <DailyCases data={data} countryColors={countryColors} />
      </div>
      <div
        className={`${styles['graphs__dailyincrease']} ${styles['graphs__box']} ${styles['boxhover__dailyincrease']}`}
      >
        <DailyAbsoluteIncrease data={data} countryColors={countryColors} />
      </div>
      <div
        className={`${styles['graphs__percentageincrease']} ${styles['graphs__box']} ${styles['boxhover__percentageincrease']}`}
      >
        <DailyPercentageIncrease data={data} countryColors={countryColors} />
      </div>
    </div>
  </>
);

const renderDashboard = (
  dashboardStore: DashboardStore,
  countriesToCompare: SelectOption[],
  setCountriesToCompare: Dispatch<SetStateAction<SelectOption[]>>
) => (
  <>
    <div className={styles.dashboard__wrapper}>
      <div className={styles.snapshot__section}>
        <div className={styles.titles}>
          <h1>Impacto Global&nbsp;</h1>
          <span className={styles.notes__update}>
            (Última actualización: {dashboardStore.dateUpdated})
          </span>
        </div>
        <div>
          <WorldSnapshot
            cases={dashboardStore.allCases.countries[DashboardStore.WORLD_NAME]}
            deaths={
              dashboardStore.allDeaths.countries[DashboardStore.WORLD_NAME]
            }
          />
        </div>
        <div className={styles.titles}>
          <h1>Comparar información entre países&nbsp;</h1>
          {/* <span className={styles.notes__update}>
            (Última actualización:{' '}
            {dashboardStore.dateUpdated})
          </span> */}
        </div>
      </div>
      <div
        className={`${styles['input__section']} ${styles['input__sectionbox']}`}
      >
        {renderCountrySelector(
          dashboardStore.countries,
          countriesToCompare,
          setCountriesToCompare
        )}
      </div>
      <div
        className={`${styles['comparation__section']} ${styles['comparation__sectionbox']}`}
      >
        <div className={`${styles['graphs__scroll']} ${styles['hide-mobile']}`}>
          <Scrollbars autoHideTimeout={1000}>
            {dashboardStore.selectedCountriesCases &&
              renderDataForSelectedCountries(
                'Casos Confirmados',
                dashboardStore.selectedCountriesCases,
                dashboardStore.countryColors
              )}

            {dashboardStore.selectedCountriesDeaths &&
              renderDataForSelectedCountries(
                'Fallecidos Confirmados',
                dashboardStore.selectedCountriesDeaths,
                dashboardStore.countryColors
              )}
          </Scrollbars>
        </div>
        <div className={`${styles['graphs__scroll']} ${styles['show-mobile']}`}>
          {dashboardStore.selectedCountriesCases &&
            renderDataForSelectedCountries(
              'Casos Confirmados',
              dashboardStore.selectedCountriesCases,
              dashboardStore.countryColors
            )}

          {dashboardStore.selectedCountriesDeaths &&
            renderDataForSelectedCountries(
              'Fallecidos Confirmados',
              dashboardStore.selectedCountriesDeaths,
              dashboardStore.countryColors
            )}
        </div>
      </div>
    </div>
  </>
);

export const Dashboard: React.FC<Props> = ({ dashboardStore }) => {
  const [countriesToCompare, setCountriesToCompare] = useState<SelectOption[]>([
    {
      value: DashboardStore.WORLD_NAME,
      label: DashboardStore.WORLD_NAME,
    },
  ]);

  useEffect(() => {
    dashboardStore.init();
  }, []);

  useEffect(() => {
    dashboardStore.allCases &&
      dashboardStore.allDeaths &&
      dashboardStore.setCountriesToCompare(
        countriesToCompare?.map((c) => c.value)
      );
  }, [countriesToCompare, dashboardStore.allCases, dashboardStore.allDeaths]);

  return (
    <>
      <div>
        {dashboardStore.isLoaded &&
          renderDashboard(
            dashboardStore,
            countriesToCompare,
            setCountriesToCompare
          )}
        {!dashboardStore.isLoaded && <LoadingSpinner />}
      </div>
    </>
  );
};

export default inject(({ rootStore }: AllStores) => ({
  dashboardStore: rootStore.dashboardStore,
}))(observer(Dashboard));
