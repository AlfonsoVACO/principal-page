$(function () {
    "use strict";
    new Chartist.Line('.total-revenue4', {
        labels: ['0', '4', '8', '12', '16', '20', '24', '30']
        , series: [
        [0, 2, 3.5, 0, 13, 1, 4, 1]
        , [0, 4, 0, 4, 0, 4, 0, 4]
      ]

    },

      {
        high: 15
        , low: 0
        , showArea: true
        , fullWidth: true
        , plugins: [
        Chartist.plugins.tooltip()
      ],
        axisY: {
            onlyInteger: true
            , offset: 20
            , labelInterpolationFnc: function (value) {
                return (value / 1) + 'k';
            }
        }

    });

    new Chartist.Pie('.ct-chart', {
        series: [35, 15, 10]
    }, {
        donut: true
        , donutWidth: 20
        , startAngle: 0
        , showLabel: false
    });
});
