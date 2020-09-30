import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { VictoryPie } from 'victory';
import { COLOR_RED, COLOR_GREEN } from '../../constants';

const screenWidth = (window.innerWidth * 4) / 5;
const screenHeight = (window.innerHeight * 4) / 5 - 100;

export default function VictoryPieChartWeb({ colors, detect, none }) {
  const [size, setSize] = useState();

  useEffect(() => {
    if (screenWidth > screenHeight) {
      return setSize(screenHeight);
    }
    return setSize(screenWidth);
  }, []);

  return (
    <View>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2}
          fill={!none ? COLOR_RED : COLOR_GREEN}
        />
        <VictoryPie
          style={{
            labels: { display: 'none' },
          }}
          standalone={false}
          width={size}
          height={size}
          data={detect}
          radius={({ datum }) => datum.x * (size / 4.5)}
          labels={() => null}
          colorScale={colors}
        />
      </svg>
    </View>
  );
}
