import React, { useEffect } from 'react';

import { View } from 'react-native';

import { VictoryPie } from 'victory';

import { useSelector, useDispatch } from 'react-redux';

import { setGraphSize } from '../../../slice';

import { get } from '../../../utils';

import { COLOR_RED, COLOR_GREEN } from '../../constants';

import { getInnerWidth } from '../../../services/getWindowSize';

export default function VictoryPieChartWeb({ colors, detect, none }) {
  const dispatch = useDispatch();
  const graphSize = useSelector(get('graphSize'));

  useEffect(() => {
    const screenWidth = (getInnerWidth() * 4) / 5;
    dispatch(setGraphSize({ graphSize: screenWidth }));
  }, []);

  return (
    <View
      testID="test-victory-pie-chart"
    >
      <svg width={graphSize} height={graphSize}>
        <circle
          cx={graphSize / 2}
          cy={graphSize / 2}
          r={graphSize / 2}
          fill={!none ? COLOR_RED : COLOR_GREEN}
        />
        <VictoryPie
          style={{
            labels: { display: 'none' },
          }}
          standalone={false}
          width={graphSize}
          height={graphSize}
          data={detect}
          radius={({ datum }) => datum.x * (graphSize / 4.5)}
          labels={() => null}
          colorScale={colors}
        />
      </svg>
    </View>
  );
}
