/* eslint-disable camelcase */
import global_FontWeight_bold from '@patternfly/react-tokens/dist/esm/global_FontWeight_bold';
import chart_voronoi_labels_Fill from '@patternfly/react-tokens/dist/esm/chart_voronoi_labels_Fill';

/**
 * Box plot tooltip styles
 * @private
 */
export const BoxPlotTooltipStyles = {
  flyout: {
    padding: 40
  },
  label: {
    fill: chart_voronoi_labels_Fill.var,
    fontWeight: global_FontWeight_bold.value
  } as any
};
