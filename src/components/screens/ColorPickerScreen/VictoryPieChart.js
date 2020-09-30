import React from 'react';

import { View, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { VictoryPie } from 'victory-native';
import { COLOR_RED, COLOR_GREEN } from '../../constants';

const screenWidth = (Dimensions.get('window').width * 2) / 3;

export default function VictoryPieChart({ colors, detect, none }) {
  return (
    <View>
      <Svg width={screenWidth} height={screenWidth}>
        <Circle
          cx={screenWidth / 2}
          cy={screenWidth / 2}
          r={screenWidth / 2}
          fill={!none ? COLOR_RED : COLOR_GREEN}
        />
        <VictoryPie
          style={{
            labels: { display: 'none' },
          }}
          standalone={false}
          width={screenWidth}
          height={screenWidth}
          data={detect}
          radius={({ datum }) => datum.x * (screenWidth / 4.5)}
          labels={() => null}
          colorScale={colors}
        />
      </Svg>
    </View>
  );
}
