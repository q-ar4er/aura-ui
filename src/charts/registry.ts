// NOTE: We import only the pieces we use to keep bundle size down.
// Consumers can still import other charts from ECharts if they need.
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart } from 'echarts/charts'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
])
