
/**
* Theme: Minton Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors,pointSize) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true, //defaulted to true
          lineColors: lineColors,
          parseTime:false,
          pointSize: pointSize,

        });
    },
    //creates area chart
    MorrisCharts.prototype.createAreaChart = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 0,
            lineWidth: 0,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates area chart with dotted
    MorrisCharts.prototype.createAreaChartDotted = function(element, pointSize, lineWidth, data, xkey, ykeys, labels, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Area({
            element: element,
            pointSize: 3,
            lineWidth: 1,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            pointFillColors: Pfillcolor,
            pointStrokeColors: Pstockcolor,
            resize: true,
            gridLineColor: '#eef0f2',
            lineColors: lineColors
        });
    },
    //creates Bar chart
    MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
        });
    },
    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barColors: lineColors
            
        });
    },
    //creates Donut chart
    MorrisCharts.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },
    MorrisCharts.prototype.init = function() {

        
        var $phd  = [{ y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.5}, { y: '', a: 6.5},{ y: '', a: 6.6}, { y: '', a: 6.4}, { y: '', a: 6.5},
            { y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},
            { y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},
            { y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5}, 
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.6},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},
            { y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},
            { y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},
            { y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},
            { y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.6},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},
            { y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},
            { y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.5},
            { y: '', a: 6.5},{ y: '', a: 6.5},{ y: '', a: 6.6},{ y: '', a: 6.6},{ y: '', a: 6.5},{ y: '', a: 6.4},{ y: '', a: 6.5},{ y: '', a: 6.5}
          ];
        
        var $ecd  = [
            { y: '', a:1086.895},{ y: '', a:1086.499},{ y: '', a:1086.104},{ y: '', a:1085.709},{ y: '', a:1085.313},{ y: '', a:1084.918},{ y: '', a:1084.522},{ y: '', a:1084.127},{ y: '', a:1083.731},{ y: '', a:1083.336},{ y: '', a:1082.94},{ y: '', a:1082.545},{ y: '', a:1082.149},{ y: '', a:1081.754},{ y: '', a:1081.359},{ y: '', a:1080.963},{ y: '', a:1080.568},{ y: '', a:1080.172},{ y: '', a:1079.777},{ y: '', a:1079.381},{ y: '', a:1078.986},{ y: '', a:1078.59},{ y: '', a:1078.195},{ y: '', a:1077.404},{ y: '', a:1077.799},{ y: '', a:1076.613},{ y: '', a:1077.009},{ y: '', a:1076.218},{ y: '', a:1075.822},{ y: '', a:1075.427},{ y: '', a:1075.031},{ y: '', a:1074.636},{ y: '', a:1074.24},{ y: '', a:1073.845},{ y: '', a:1073.449},{ y: '', a:1073.054},{ y: '', a:1072.659},{ y: '', a:1072.263},{ y: '', a:1071.868},{ y: '', a:1071.472},{ y: '', a:1071.077},{ y: '', a:1070.681},{ y: '', a:1069.89},{ y: '', a:1070.286},{ y: '', a:1069.495},{ y: '', a:1069.099},{ y: '', a:1068.704},{ y: '', a:1068.309},{ y: '', a:1067.913},{ y: '', a:1067.518},{ y: '', a:1067.122},{ y: '', a:1066.727},{ y: '', a:1066.331},{ y: '', a:1065.936},{ y: '', a:1065.54},{ y: '', a:1065.145},{ y: '', a:1064.749},{ y: '', a:1064.354},{ y: '', a:1063.959},{ y: '', a:1063.563},{ y: '', a:1063.168},{ y: '', a:1062.772},{ y: '', a:1062.377},{ y: '', a:1061.981},{ y: '', a:1061.586},{ y: '', a:1061.19},{ y: '', a:1060.795},{ y: '', a:1060.399},{ y: '', a:1060.004},{ y: '', a:1059.609},{ y: '', a:1059.213},{ y: '', a:1058.818},{ y: '', a:1058.422},{ y: '', a:1058.027},{ y: '', a:1057.631},{ y: '', a:1057.236},{ y: '', a:1056.84},{ y: '', a:1056.445},{ y: '', a:1056.049},{ y: '', a:1055.654},{ y: '', a:1055.259},{ y: '', a:1054.863},{ y: '', a:1054.468},{ y: '', a:1054.072},{ y: '', a:1053.677},{ y: '', a:1053.281},{ y: '', a:1052.886},{ y: '', a:1052.49},{ y: '', a:1052.095},{ y: '', a:1051.699},{ y: '', a:1051.304},{ y: '', a:1050.909},{ y: '', a:1050.513},{ y: '', a:1050.118},{ y: '', a:1049.722},{ y: '', a:1049.327},{ y: '', a:1048.931},{ y: '', a:1048.536},{ y: '', a:1048.14},{ y: '', a:1047.745},{ y: '', a:1047.349},{ y: '', a:1046.954},{ y: '', a:1046.559},{ y: '', a:1046.163},{ y: '', a:1045.768},{ y: '', a:1045.372},{ y: '', a:1044.977},{ y: '', a:1044.581},{ y: '', a:1044.186},{ y: '', a:1043.79},{ y: '', a:1043.395},{ y: '', a:1042.999},{ y: '', a:1042.604},{ y: '', a:1042.209},{ y: '', a:1041.813},{ y: '', a:1041.418},{ y: '', a:1041.022},{ y: '', a:1040.627},{ y: '', a:1040.231},{ y: '', a:1039.836},{ y: '', a:1039.44},{ y: '', a:1039.045},{ y: '', a:1038.649},{ y: '', a:1038.254},{ y: '', a:1037.859},{ y: '', a:1037.463},{ y: '', a:1037.068},{ y: '', a:1036.672},{ y: '', a:1036.277},{ y: '', a:1035.881},{ y: '', a:1035.486},{ y: '', a:1035.09},{ y: '', a:1034.695},{ y: '', a:1034.3},{ y: '', a:1033.904},{ y: '', a:1033.113},{ y: '', a:1032.718},{ y: '', a:1032.322},{ y: '', a:1031.927},{ y: '', a:1031.531},{ y: '', a:1031.136},{ y: '', a:1030.74},{ y: '', a:1030.345},{ y: '', a:1029.95},{ y: '', a:1029.554},{ y: '', a:1029.159},{ y: '', a:1028.763},{ y: '', a:1028.368},{ y: '', a:1027.972},{ y: '', a:1027.577},{ y: '', a:1027.181},{ y: '', a:1026.39},{ y: '', a:1026.786},{ y: '', a:1025.995},{ y: '', a:1027},{ y: '', a:1025.7},{ y: '', a:1027},{ y: '', a:1014},{ y: '', a:1027},{ y: '', a:1025.7},{ y: '', a:1027},{ y: '', a:1014},{ y: '', a:1027},{ y: '', a:1025.7},{ y: '', a:1027},{ y: '', a:1014},{ y: '', a:1018.55},{ y: '', a:1014},{ y: '', a:1015.95},{ y: '', a:1017.25},{ y: '', a:1017.25},{ y: '', a:1020.5},{ y: '', a:1014},{ y: '', a:1014},{ y: '', a:1014},{ y: '', a:1007.5},{ y: '', a:1014},{ y: '', a:1014},{ y: '', a:1010.75},{ y: '', a:1007.5},{ y: '', a:1007.5},{ y: '', a:1010.75},{ y: '', a:1007.5},{ y: '', a:1007.5},{ y: '', a:997.75},{ y: '', a:997.75},{ y: '', a:988},{ y: '', a:988},{ y: '', a:994.5},{ y: '', a:1006.2},{ y: '', a:1000.35},{ y: '', a:1001}
          ];
        
         var $wtd  = [ 
             { y: '', a:69.2},{ y: '', a:69.2},{ y: '', a:69.17},{ y: '', a:69.12},{ y: '', a:69.105},{ y: '', a:69.078},{ y: '', a:69.051},{ y: '', a:69.024},{ y: '', a:68.997},{ y: '', a:68.97},{ y: '', a:68.943},{ y: '', a:68.916},{ y: '', a:68.889},{ y: '', a:68.862},{ y: '', a:68.835},{ y: '', a:68.808},{ y: '', a:68.781},{ y: '', a:68.754},{ y: '', a:68.727},{ y: '', a:68.7},{ y: '', a:68.673},{ y: '', a:68.646},{ y: '', a:68.619},{ y: '', a:68.565},{ y: '', a:68.592},{ y: '', a:68.511},{ y: '', a:68.538},{ y: '', a:68.484},{ y: '', a:68.457},{ y: '', a:68.43},{ y: '', a:68.403},{ y: '', a:68.376},{ y: '', a:68.349},{ y: '', a:68.322},{ y: '', a:68.295},{ y: '', a:68.268},{ y: '', a:68.241},{ y: '', a:68.214},{ y: '', a:68.187},{ y: '', a:68.16},{ y: '', a:68.133},{ y: '', a:68.106},{ y: '', a:68.052},{ y: '', a:68.079},{ y: '', a:68.025},{ y: '', a:67.998},{ y: '', a:67.971},{ y: '', a:67.944},{ y: '', a:67.917},{ y: '', a:67.89},{ y: '', a:67.863},{ y: '', a:67.89},{ y: '', a:67.917},{ y: '', a:67.944},{ y: '', a:67.971},{ y: '', a:67.998},{ y: '', a:68.025},{ y: '', a:68.052},{ y: '', a:68.079},{ y: '', a:68.106},{ y: '', a:68.133},{ y: '', a:68.16},{ y: '', a:68.187},{ y: '', a:68.214},{ y: '', a:68.241},{ y: '', a:68.268},{ y: '', a:68.295},{ y: '', a:68.322},{ y: '', a:68.349},{ y: '', a:68.376},{ y: '', a:68.403},{ y: '', a:68.43},{ y: '', a:68.457},{ y: '', a:68.484},{ y: '', a:68.511},{ y: '', a:68.538},{ y: '', a:68.565},{ y: '', a:68.592},{ y: '', a:68.619},{ y: '', a:68.646},{ y: '', a:68.673},{ y: '', a:68.7},{ y: '', a:68.727},{ y: '', a:68.754},{ y: '', a:68.781},{ y: '', a:68.808},{ y: '', a:68.835},{ y: '', a:68.862},{ y: '', a:68.889},{ y: '', a:68.916},{ y: '', a:68.943},{ y: '', a:68.97},{ y: '', a:68.997},{ y: '', a:69.024},{ y: '', a:69.051},{ y: '', a:69.078},{ y: '', a:69.105},{ y: '', a:69.08},{ y: '', a:69.055},{ y: '', a:69.03},{ y: '', a:69.005},{ y: '', a:68.98},{ y: '', a:68.955},{ y: '', a:68.93},{ y: '', a:68.905},{ y: '', a:68.88},{ y: '', a:68.854},{ y: '', a:68.829},{ y: '', a:68.804},{ y: '', a:68.779},{ y: '', a:68.754},{ y: '', a:68.729},{ y: '', a:68.704},{ y: '', a:68.679},{ y: '', a:68.654},{ y: '', a:68.629},{ y: '', a:68.604},{ y: '', a:68.579},{ y: '', a:68.554},{ y: '', a:68.529},{ y: '', a:68.504},{ y: '', a:68.479},{ y: '', a:68.454},{ y: '', a:68.429},{ y: '', a:68.404},{ y: '', a:68.379},{ y: '', a:68.354},{ y: '', a:68.329},{ y: '', a:68.304},{ y: '', a:68.279},{ y: '', a:68.254},{ y: '', a:68.229},{ y: '', a:68.204},{ y: '', a:68.179},{ y: '', a:68.154},{ y: '', a:68.104},{ y: '', a:68.079},{ y: '', a:68.054},{ y: '', a:68.029},{ y: '', a:68.004},{ y: '', a:67.979},{ y: '', a:67.954},{ y: '', a:67.929},{ y: '', a:67.904},{ y: '', a:67.93},{ y: '', a:67.955},{ y: '', a:67.98},{ y: '', a:68.005},{ y: '', a:68.03},{ y: '', a:68.055},{ y: '', a:68.08},{ y: '', a:68.13},{ y: '', a:68.105},{ y: '', a:68.155},{ y: '', a:68.18},{ y: '', a:68.205},{ y: '', a:68.23},{ y: '', a:68.255},{ y: '', a:68.28},{ y: '', a:68.305},{ y: '', a:68.33},{ y: '', a:68.355},{ y: '', a:68.38},{ y: '', a:68.405},{ y: '', a:68.43},{ y: '', a:68.455},{ y: '', a:68.48},{ y: '', a:68.53},{ y: '', a:68.505},{ y: '', a:68.555},{ y: '', a:68.58},{ y: '', a:68.605},{ y: '', a:68.63},{ y: '', a:68.655},{ y: '', a:68.68},{ y: '', a:68.705},{ y: '', a:68.73},{ y: '', a:68.755},{ y: '', a:68.78},{ y: '', a:68.805},{ y: '', a:68.83},{ y: '', a:68.855},{ y: '', a:68.88},{ y: '', a:68.905},{ y: '', a:68.93},{ y: '', a:68.955},{ y: '', a:68.98},{ y: '', a:69.03},{ y: '', a:69.005},{ y: '', a:69.055},{ y: '', a:69.08},{ y: '', a:69.105}];
        
  /*    var $wld  = [ 
            { y: '', a:10.2},{ y: '', a:10.2},{ y: '', a:10.1},{ y: '', a:10.2},{ y: '', a:10.2},{ y: '', a:10.2},{ y: '', a:10.193},{ y: '', a:10.196},{ y: '', a:10.199},{ y: '', a:10.201},{ y: '', a:10.204},{ y: '', a:10.207},{ y: '', a:10.21},{ y: '', a:10.213},{ y: '', a:10.216},{ y: '', a:10.219},{ y: '', a:10.221},{ y: '', a:10.224},{ y: '', a:10.227},{ y: '', a:10.23},{ y: '', a:10.233},{ y: '', a:10.236},{ y: '', a:10.239},{ y: '', a:10.244},{ y: '', a:10.241},{ y: '', a:10.25},{ y: '', a:10.247},{ y: '', a:10.253},{ y: '', a:10.256},{ y: '', a:10.259},{ y: '', a:10.261},{ y: '', a:10.264},{ y: '', a:10.267},{ y: '', a:10.27},{ y: '', a:10.273},{ y: '', a:10.276},{ y: '', a:10.279},{ y: '', a:10.281},{ y: '', a:10.284},{ y: '', a:10.287},{ y: '', a:10.29},{ y: '', a:10.293},{ y: '', a:10.299},{ y: '', a:10.296},{ y: '', a:10.301},{ y: '', a:10.304},{ y: '', a:10.307},{ y: '', a:10.31},{ y: '', a:10.313},{ y: '', a:10.316},{ y: '', a:10.319},{ y: '', a:10.321},{ y: '', a:10.324},{ y: '', a:10.327},{ y: '', a:10.33},{ y: '', a:10.333},{ y: '', a:10.336},{ y: '', a:10.339},{ y: '', a:10.341},{ y: '', a:10.344},{ y: '', a:10.347},{ y: '', a:10.35},{ y: '', a:10.353},{ y: '', a:10.356},{ y: '', a:10.359},{ y: '', a:10.361},{ y: '', a:10.364},{ y: '', a:10.367},{ y: '', a:10.37},{ y: '', a:10.373},{ y: '', a:10.376},{ y: '', a:10.379},{ y: '', a:10.381},{ y: '', a:10.384},{ y: '', a:10.387},{ y: '', a:10.39},{ y: '', a:10.393},{ y: '', a:10.396},{ y: '', a:10.399},{ y: '', a:10.401},{ y: '', a:10.404},{ y: '', a:10.407},{ y: '', a:10.41},{ y: '', a:10.413},{ y: '', a:10.416},{ y: '', a:10.419},{ y: '', a:10.421},{ y: '', a:10.424},{ y: '', a:10.427},{ y: '', a:10.43},{ y: '', a:10.433},{ y: '', a:10.436},{ y: '', a:10.439},{ y: '', a:10.441},{ y: '', a:10.444},{ y: '', a:10.447},{ y: '', a:10.45},{ y: '', a:10.453},{ y: '', a:10.456},{ y: '', a:10.459},{ y: '', a:10.461},{ y: '', a:10.464},{ y: '', a:10.467},{ y: '', a:10.47},{ y: '', a:10.473},{ y: '', a:10.476},{ y: '', a:10.479},{ y: '', a:10.481},{ y: '', a:10.484},{ y: '', a:10.487},{ y: '', a:10.49},{ y: '', a:10.493},{ y: '', a:10.496},{ y: '', a:10.499},{ y: '', a:10.501},{ y: '', a:10.504},{ y: '', a:10.507},{ y: '', a:10.51},{ y: '', a:10.513},{ y: '', a:10.516},{ y: '', a:10.519},{ y: '', a:10.521},{ y: '', a:10.524},{ y: '', a:10.527},{ y: '', a:10.53},{ y: '', a:10.533},{ y: '', a:10.536},{ y: '', a:10.539},{ y: '', a:10.541},{ y: '', a:10.544},{ y: '', a:10.547},{ y: '', a:10.55},{ y: '', a:10.553},{ y: '', a:10.556},{ y: '', a:10.559},{ y: '', a:10.564},{ y: '', a:10.567},{ y: '', a:10.57},{ y: '', a:10.573},{ y: '', a:10.576},{ y: '', a:10.579},{ y: '', a:10.581},{ y: '', a:10.584},{ y: '', a:10.587},{ y: '', a:10.59},{ y: '', a:10.593},{ y: '', a:10.596},{ y: '', a:10.599},{ y: '', a:10.601},{ y: '', a:10.604},{ y: '', a:10.607},{ y: '', a:10.613},{ y: '', a:10.61},{ y: '', a:10.616},{ y: '', a:10.619},{ y: '', a:10.621},{ y: '', a:10.624},{ y: '', a:10.627},{ y: '', a:10.63},{ y: '', a:10.633},{ y: '', a:10.636},{ y: '', a:10.639},{ y: '', a:10.641},{ y: '', a:10.644},{ y: '', a:10.647},{ y: '', a:10.65},{ y: '', a:10.653},{ y: '', a:10.659},{ y: '', a:10.656},{ y: '', a:10.661},{ y: '', a:10.664},{ y: '', a:10.667},{ y: '', a:10.67},{ y: '', a:10.673},{ y: '', a:10.676},{ y: '', a:10.679},{ y: '', a:10.681},{ y: '', a:10.684},{ y: '', a:10.687},{ y: '', a:10.69},{ y: '', a:10.693},{ y: '', a:10.696},{ y: '', a:10.699},{ y: '', a:10.701},{ y: '', a:10.704},{ y: '', a:10.707},{ y: '', a:10.71},{ y: '', a:10.716},{ y: '', a:10.713},{ y: '', a:10.719},{ y: '', a:10.721},{ y: '', a:10.724}];*/
        
        var $atd  = [ 
            { y: '', a:76.200},{ y: '', a:76.110},{ y: '', a:76.020},{ y: '', a:75.930},{ y: '', a:75.840},{ y: '', a:75.750},{ y: '', a:75.660},{ y: '', a:75.57},{ y: '', a:75.48},{ y: '', a:75.39},{ y: '', a:75.3},{ y: '', a:75.21},{ y: '', a:75.12},{ y: '', a:75.03},{ y: '', a:74.94},{ y: '', a:74.85},{ y: '', a:74.759},{ y: '', a:74.669},{ y: '', a:74.579},{ y: '', a:74.489},{ y: '', a:74.399},{ y: '', a:74.309},{ y: '', a:74.219},{ y: '', a:74.039},{ y: '', a:74.129},{ y: '', a:73.859},{ y: '', a:73.949},{ y: '', a:73.769},{ y: '', a:73.679},{ y: '', a:73.589},{ y: '', a:73.499},{ y: '', a:73.409},{ y: '', a:73.319},{ y: '', a:73.229},{ y: '', a:73.139},{ y: '', a:73.049},{ y: '', a:72.959},{ y: '', a:72.869},{ y: '', a:72.779},{ y: '', a:72.689},{ y: '', a:72.599},{ y: '', a:72.509},{ y: '', a:72.329},{ y: '', a:72.419},{ y: '', a:72.239},{ y: '', a:72.149},{ y: '', a:72.059},{ y: '', a:71.969},{ y: '', a:71.879},{ y: '', a:71.789},{ y: '', a:71.699},{ y: '', a:71.609},{ y: '', a:71.519},{ y: '', a:71.429},{ y: '', a:71.339},{ y: '', a:71.249},{ y: '', a:71.159},{ y: '', a:71.069},{ y: '', a:70.979},{ y: '', a:71.1},{ y: '', a:71.22},{ y: '', a:71.34},{ y: '', a:71.46},{ y: '', a:71.58},{ y: '', a:71.7},{ y: '', a:71.82},{ y: '', a:71.94},{ y: '', a:72.06},{ y: '', a:72.18},{ y: '', a:72.3},{ y: '', a:72.42},{ y: '', a:72.54},{ y: '', a:72.66},{ y: '', a:72.78},{ y: '', a:72.9},{ y: '', a:73.02},{ y: '', a:73.14},{ y: '', a:73.26},{ y: '', a:73.38},{ y: '', a:73.5},{ y: '', a:73.62},{ y: '', a:73.74},{ y: '', a:73.86},{ y: '', a:73.98},{ y: '', a:74.1},{ y: '', a:74.22},{ y: '', a:74.34},{ y: '', a:74.46},{ y: '', a:74.58},{ y: '', a:74.7},{ y: '', a:74.82},{ y: '', a:74.94},{ y: '', a:75.06},{ y: '', a:75.18},{ y: '', a:75.3},{ y: '', a:75.42},{ y: '', a:75.54},{ y: '', a:75.45},{ y: '', a:75.359},{ y: '', a:75.269},{ y: '', a:75.179},{ y: '', a:75.089},{ y: '', a:74.999},{ y: '', a:74.909},{ y: '', a:74.819},{ y: '', a:74.729},{ y: '', a:74.639},{ y: '', a:74.549},{ y: '', a:74.459},{ y: '', a:74.369},{ y: '', a:74.279},{ y: '', a:74.189},{ y: '', a:74.099},{ y: '', a:74.009},{ y: '', a:73.919},{ y: '', a:73.829},{ y: '', a:73.739},{ y: '', a:73.649},{ y: '', a:73.559},{ y: '', a:73.469},{ y: '', a:73.379},{ y: '', a:73.289},{ y: '', a:73.199},{ y: '', a:73.109},{ y: '', a:73.019},{ y: '', a:72.929},{ y: '', a:72.839},{ y: '', a:72.749},{ y: '', a:72.659},{ y: '', a:72.569},{ y: '', a:72.479},{ y: '', a:72.389},{ y: '', a:72.299},{ y: '', a:72.209},{ y: '', a:72.119},{ y: '', a:71.939},{ y: '', a:71.849},{ y: '', a:71.759},{ y: '', a:71.669},{ y: '', a:71.579},{ y: '', a:71.489},{ y: '', a:71.399},{ y: '', a:71.309},{ y: '', a:71.4},{ y: '', a:71.49},{ y: '', a:71.58},{ y: '', a:71.67},{ y: '', a:71.76},{ y: '', a:71.85},{ y: '', a:71.94},{ y: '', a:72.03},{ y: '', a:72.21},{ y: '', a:72.12},{ y: '', a:72.3},{ y: '', a:72.39},{ y: '', a:72.48},{ y: '', a:72.57},{ y: '', a:72.66},{ y: '', a:72.75},{ y: '', a:72.84},{ y: '', a:72.93},{ y: '', a:73.02},{ y: '', a:73.11},{ y: '', a:73.2},{ y: '', a:73.29},{ y: '', a:73.38},{ y: '', a:73.47},{ y: '', a:73.65},{ y: '', a:73.56},{ y: '', a:73.74},{ y: '', a:73.83},{ y: '', a:73.92},{ y: '', a:74.01},{ y: '', a:74.1},{ y: '', a:74.19},{ y: '', a:74.28},{ y: '', a:74.37},{ y: '', a:74.46},{ y: '', a:74.55},{ y: '', a:74.64},{ y: '', a:74.73},{ y: '', a:74.82},{ y: '', a:74.91},{ y: '', a:75},{ y: '', a:75.09},{ y: '', a:75.18},{ y: '', a:75.27},{ y: '', a:75.45},{ y: '', a:75.36},{ y: '', a:75.54},{ y: '', a:75.63},{ y: '', a:75.72}];
        
       var $rhd  = [
            { y: '', a:60.2},{ y: '', a:60.35},{ y: '', a:60.5},{ y: '', a:60.65},{ y: '', a:60.8},{ y: '', a:60.95},{ y: '', a:61.1},{ y: '', a:61.25},{ y: '', a:61.4},{ y: '', a:61.55},{ y: '', a:61.7},{ y: '', a:61.85},{ y: '', a:62},{ y: '', a:62.15},{ y: '', a:62.3},{ y: '', a:62.45},{ y: '', a:62.6},{ y: '', a:62.75},{ y: '', a:62.9},{ y: '', a:63.05},{ y: '', a:63.2},{ y: '', a:63.35},{ y: '', a:63.5},{ y: '', a:63.8},{ y: '', a:63.65},{ y: '', a:64.1},{ y: '', a:63.95},{ y: '', a:64.25},{ y: '', a:64.4},{ y: '', a:64.55},{ y: '', a:64.7},{ y: '', a:64.85},{ y: '', a:65},{ y: '', a:65.149},{ y: '', a:65.3},{ y: '', a:65.45},{ y: '', a:65.6},{ y: '', a:65.75},{ y: '', a:65.899},{ y: '', a:66.049},{ y: '', a:66.199},{ y: '', a:66.349},{ y: '', a:66.649},{ y: '', a:66.499},{ y: '', a:66.799},{ y: '', a:66.949},{ y: '', a:67.099},{ y: '', a:67.249},{ y: '', a:67.1},{ y: '', a:66.95},{ y: '', a:66.8},{ y: '', a:66.65},{ y: '', a:66.5},{ y: '', a:66.35},{ y: '', a:66.2},{ y: '', a:66.05},{ y: '', a:65.9},{ y: '', a:65.75},{ y: '', a:65.6},{ y: '', a:65.45},{ y: '', a:65.3},{ y: '', a:65.15},{ y: '', a:65},{ y: '', a:64.85},{ y: '', a:64.7},{ y: '', a:64.55},{ y: '', a:64.4},{ y: '', a:64.25},{ y: '', a:64.1},{ y: '', a:63.95},{ y: '', a:63.8},{ y: '', a:63.65},{ y: '', a:63.5},{ y: '', a:63.35},{ y: '', a:63.2},{ y: '', a:63.05},{ y: '', a:62.9},{ y: '', a:62.75},{ y: '', a:62.6},{ y: '', a:62.45},{ y: '', a:62.3},{ y: '', a:62.15},{ y: '', a:62},{ y: '', a:61.85},{ y: '', a:61.7},{ y: '', a:61.55},{ y: '', a:61.4},{ y: '', a:61.25},{ y: '', a:61.1},{ y: '', a:60.95},{ y: '', a:60.8},{ y: '', a:60.65},{ y: '', a:60.5},{ y: '', a:60.35},{ y: '', a:60.2},{ y: '', a:60.05},{ y: '', a:59.9},{ y: '', a:60.1},{ y: '', a:60.299},{ y: '', a:60.499},{ y: '', a:60.699},{ y: '', a:60.899},{ y: '', a:61.099},{ y: '', a:61.299},{ y: '', a:61.499},{ y: '', a:61.699},{ y: '', a:61.899},{ y: '', a:62.099},{ y: '', a:62.299},{ y: '', a:62.499},{ y: '', a:62.699},{ y: '', a:62.899},{ y: '', a:63.099},{ y: '', a:63.299},{ y: '', a:63.499},{ y: '', a:63.699},{ y: '', a:63.899},{ y: '', a:64.099},{ y: '', a:64.299},{ y: '', a:64.499},{ y: '', a:64.699},{ y: '', a:64.899},{ y: '', a:65.099},{ y: '', a:65.299},{ y: '', a:65.499},{ y: '', a:65.699},{ y: '', a:65.899},{ y: '', a:66.099},{ y: '', a:66.299},{ y: '', a:66.499},{ y: '', a:66.699},{ y: '', a:66.899},{ y: '', a:67.099},{ y: '', a:67.299},{ y: '', a:67.499},{ y: '', a:67.899},{ y: '', a:68.099},{ y: '', a:68.299},{ y: '', a:68.499},{ y: '', a:68.699},{ y: '', a:68.899},{ y: '', a:69.099},{ y: '', a:69.299},{ y: '', a:69.499},{ y: '', a:69.35},{ y: '', a:69.2},{ y: '', a:69.05},{ y: '', a:68.9},{ y: '', a:68.75},{ y: '', a:68.6},{ y: '', a:68.45},{ y: '', a:68.15},{ y: '', a:68.3},{ y: '', a:68},{ y: '', a:67.85},{ y: '', a:67.7},{ y: '', a:67.55},{ y: '', a:67.4},{ y: '', a:67.25},{ y: '', a:67.1},{ y: '', a:66.95},{ y: '', a:66.8},{ y: '', a:66.65},{ y: '', a:66.5},{ y: '', a:66.35},{ y: '', a:66.2},{ y: '', a:66.05},{ y: '', a:65.75},{ y: '', a:65.9},{ y: '', a:65.6},{ y: '', a:65.45},{ y: '', a:65.3},{ y: '', a:65.15},{ y: '', a:65},{ y: '', a:64.85},{ y: '', a:64.7},{ y: '', a:64.55},{ y: '', a:64.4},{ y: '', a:64.25},{ y: '', a:64.1},{ y: '', a:63.95},{ y: '', a:63.8},{ y: '', a:63.65},{ y: '', a:63.5},{ y: '', a:63.35},{ y: '', a:63.2},{ y: '', a:63.05},{ y: '', a:62.75},{ y: '', a:62.9},{ y: '', a:62.6},{ y: '', a:62.45},{ y: '', a:62.3}];
         
        var $luxd = [
            { y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:103.452},{ y: '', a:103.45},{ y: '', a:103.448},{ y: '', a:103.446},{ y: '', a:103.445},{ y: '', a:103.443},{ y: '', a:103.441},{ y: '', a:103.439},{ y: '', a:103.438},{ y: '', a:103.436},{ y: '', a:103.434},{ y: '', a:103.432},{ y: '', a:103.431},{ y: '', a:103.429},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:104},{ y: '', a:0},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:102.7},{ y: '', a:104},{ y: '', a:103.415},{ y: '', a:103.025},{ y: '', a:104},{ y: '', a:103.35},{ y: '', a:103.452},{ y: '', a:103.45},{ y: '', a:103.448},{ y: '', a:103.446},{ y: '', a:103.445},{ y: '', a:103.443},{ y: '', a:103.441},{ y: '', a:103.439},{ y: '', a:103.438},{ y: '', a:103.436},{ y: '', a:103.432},{ y: '', a:103.434},{ y: '', a:103.431},{ y: '', a:103.429},{ y: '', a:103.427}];
        
        var $PARd = [
            { y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:159},{ y: '', a:160},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:159.157},{ y: '', a:159.154},{ y: '', a:159.151},{ y: '', a:159.148},{ y: '', a:159.146},{ y: '', a:159.143},{ y: '', a:159.14},{ y: '', a:159.138},{ y: '', a:159.135},{ y: '', a:159.132},{ y: '', a:159.13},{ y: '', a:159.127},{ y: '', a:159.124},{ y: '', a:159.122},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:0},{ y: '', a:160},{ y: '', a:0},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:160},{ y: '', a:159},{ y: '', a:158},{ y: '', a:160},{ y: '', a:158},{ y: '', a:160},{ y: '', a:159.1},{ y: '', a:158.5},{ y: '', a:160},{ y: '', a:159},{ y: '', a:159.157},{ y: '', a:159.154},{ y: '', a:159.151},{ y: '', a:159.148},{ y: '', a:159.146},{ y: '', a:159.143},{ y: '', a:159.14},{ y: '', a:159.138},{ y: '', a:159.135},{ y: '', a:159.132},{ y: '', a:159.127},{ y: '', a:159.13},{ y: '', a:159.124},{ y: '', a:159.122},{ y: '', a:159.119}];
        

        //Detailed Charts 
        this.createLineChart('ph_d', $phd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        this.createLineChart('ec_d', $ecd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        this.createLineChart('wt_d', $wtd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        this.createLineChart('at_d', $atd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        //this.createLineChart('wl_d', $wld, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        this.createLineChart('par_d',$PARd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        this.createLineChart('rh_d', $rhd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        this.createLineChart('lux_d', $luxd, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[0]);
        
        
        
               
        //this.createLineChart('dashboard-DO', $DO, 'y', ['a'], ['Nutrient Reservoir'],['0.1'],['#ffffff'],['#999999'], ["#3bafda"],[3]);
        

     
        
        
        
        
        //creating area chart
        var $areaData = [
                { y: '2009', a: 10, b: 20, c:30 },
                { y: '2010', a: 75, b: 65, c:30 },
                { y: '2011', a: 50, b: 40, c:30 },
                { y: '2012', a: 75, b: 65, c:30 },
                { y: '2013', a: 50, b: 40, c:30 },
                { y: '2014', a: 75, b: 65, c:30 },
                { y: '2015', a: 90, b: 60, c:30 }
            ];
        this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b','c'], ['Series A', 'Series B','Series C'], ["#26c6da", "#80deea","#dcdcdc"]);

        //creating area chart with dotted
        var $areaDotData = [
                { y: '2009', a: 10, b: 20 },
                { y: '2010', a: 75,  b: 65 },
                { y: '2011', a: 50,  b: 40 },
                { y: '2012', a: 75,  b: 65 },
                { y: '2013', a: 50,  b: 40 },
                { y: '2014', a: 75,  b: 65 },
                { y: '2015', a: 90, b: 60 }
            ];
        this.createAreaChartDotted('morris-area-with-dotted', 0, 0, $areaDotData, 'y', ['a', 'b'], ['Series A', 'Series B'],['#ffffff'],['#999999'], ["#26c6da", "#80deea"]);

        //creating bar chart
        var $barData  = [
            { y: '2009', a: 100, b: 90 , c: 40 },
            { y: '2010', a: 75,  b: 65 , c: 20 },
            { y: '2011', a: 50,  b: 40 , c: 50 },
            { y: '2012', a: 75,  b: 65 , c: 95 },
            { y: '2013', a: 50,  b: 40 , c: 22 },
            { y: '2014', a: 75,  b: 65 , c: 56 },
            { y: '2015', a: 100, b: 90 , c: 60 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ["#3bafda", "#dcdcdc", "#80deea"]);

        //creating Stacked chart
        var $stckedData  = [
            { y: '2005', a: 45, b: 180 },
            { y: '2006', a: 75,  b: 65 },
            { y: '2007', a: 100, b: 90 },
            { y: '2008', a: 75,  b: 65 },
            { y: '2009', a: 100, b: 90 },
            { y: '2010', a: 75,  b: 65 },
            { y: '2011', a: 50,  b: 40 },
            { y: '2012', a: 75,  b: 65 },
            { y: '2013', a: 50,  b: 40 },
            { y: '2014', a: 75,  b: 65 },
            { y: '2015', a: 100, b: 90 }
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b'], ['Series A', 'Series B'], ["#3bafda", "#ededed"]);

        //creating donut chart
        var $donutData = [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ["#3bafda", "#ededed", "#80deea"]);
    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);