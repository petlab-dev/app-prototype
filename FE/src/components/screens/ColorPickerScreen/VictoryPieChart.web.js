import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { VictoryPie } from 'victory';

const screenWidth = (window.innerWidth * 4) / 5;
const screenHeight = (window.innerHeight * 4) / 5 - 160;

export default function VictoryPieChartWeb({ colors }) {
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
          fill="#c43a31"
        />
        <VictoryPie
          style={{
            labels: { display: 'none' },
          }}
          standalone={false}
          width={size}
          height={size}
          data={[
            { x: 1, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 1, y: 1 },
          ]}
          radius={({ datum }) => datum.x * (size / 4.5)}
          labels={() => null}
          colorScale={colors}
        />
      </svg>
    </View>
  );
}
