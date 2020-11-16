import React from 'react';
import { render } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';
import VictoryPieChart from './VictoryPieChart.web';

function renderVictoryPieChart(colors, detect, none = true) {
  return render(<VictoryPieChart clors={colors} detect={detect} none={none} />);
}

describe('VictoryPieChart', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation(() => ('graphSize'));
  });
  it('renders without exploding', () => {
    const { container } = renderVictoryPieChart();

    expect(container).toBeTruthy();
  });
  context('when pass props', () => {
    it('renders "none = false" properly', () => {
      const { getByTestId } = renderVictoryPieChart(undefined, undefined, false);

      expect(getByTestId('test-victory-pie-chart')).toBeTruthy();
      // expect(getByTestId('test-victory-pie-chart')).toHaveProperty();
    });

    it('renders colors by graph properly', () => {
      // TODO:
    });

    it('renders detect by graph properly', () => {
      // TODO:
    });
  });
});
