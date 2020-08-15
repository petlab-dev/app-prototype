import React from 'react';

import { View, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { VictoryPie } from 'victory-native';

const screenWidth = (Dimensions.get('window').width * 2) / 3;

export default function VictoryPieChart({ colors }) {
  return (
    <View>
      <Svg width={screenWidth} height={screenWidth}>
        <Circle
          cx={screenWidth / 2}
          cy={screenWidth / 2}
          r={screenWidth / 2}
          fill="#c43a31"
        />
        <VictoryPie
          style={{
            labels: { display: 'none' },
          }}
          standalone={false}
          width={screenWidth}
          height={screenWidth}
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
          radius={({ datum }) => datum.x * (screenWidth / 4.5)}
          labels={() => null}
          colorScale={colors}
        />
      </Svg>
    </View>
  );
}
