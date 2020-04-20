import React, { FC } from 'react';
import LineChart from '../charts/LineChart/LineChart';
import { Timeseries } from '../types/Timeseries';
import CountryColors from '../types/CountryColors';

interface Props {
  data: Timeseries;
  countryColors: CountryColors;
}

const DailyCases: FC<Props> = ({ data, countryColors }) => (
  <>
    <div>
      <div>Número de Casos</div>
      <LineChart data={data} countryColors={countryColors} />
    </div>
  </>
);

export default DailyCases;
