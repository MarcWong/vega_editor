// This is a file to map the actual value changes and file name
const json1261 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "vconcat.0.height",
    "width": "vconcat.0.width",
    "initial": 1,
    "min": 0.5,
    "max": 2,
    "step": 0.1,
    "initialWidth": 400,
  },
  "Text": {
    "textColor": "vconcat.0.layer.1.encoding.color.value",
    "textAngle": "vconcat.0.layer.1.mark.angle",
    "textDx": "vconcat.0.layer.1.mark.dx",
    "textDy": "vconcat.0.layer.1.mark.dy",
    "textFontSize": "vconcat.0.layer.1.mark.fontSize",
    "textFontStyle": "vconcat.0.layer.1.mark.fontStyle",
    "textFontWeight": "vconcat.0.layer.1.mark.fontWeight",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 1,
      },
      "textDx": {
        "init": 0,
        "min": -10,
        "max": 10,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -10,
        "max": 10,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 1,
        "max": 20,
        "step": 1,
      },
      "textFontStyle": {
        "init": "normal",
        "options": ["normal", "italic", "oblique"],
      },
      "textFontWeight": {
        "init": "normal",
        "options": ["normal", "bold", "bolder", "lighter"],
      },
    },
  },
  "Axis": {
    "AxisColor": [
      "vconcat.0.encoding.x.axis.color.value",
      "vconcat.0.encoding.y.axis.color.value",
    ],
    "AxisTickCount": [
      "vconcat.0.encoding.x.axis.tickCount",
      "vconcat.0.encoding.y.axis.tickCount",
    ],
    "AxisScaleDomain": [
      "vconcat.0.encoding.x.scale.domain",
      "vconcat.0.encoding.y.scale.domain",
    ],
    "AxisGrid": [
      "vconcat.0.encoding.x.axis.grid",
      "vconcat.0.encoding.y.axis.grid",
    ],
    initial: {
      "AxisTickCount": {
        x: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "x": {
          "minimal": -100,
          "maximal": 100,
          "min": -100,
          "max": 100,
          "step": 1,
        },
      },
      "AxisGrid": {
        "x": false,
        "y": false,
      },
    },
  },
  "Condition": {
    "chooseColorChange": [
      "vconcat.0.layer.0.encoding.color.condition.value",
      "vconcat.0.layer.0.encoding.color.value",
    ],
    "chooseSizeChange": [
      "vconcat.0.layer.0.encoding.size.condition.value",
      "vconcat.0.layer.0.encoding.size.value",
    ],
    "chooseOpacityChange": [
      "vconcat.0.layer.0.encoding.opacity.condition.value",
      "vconcat.0.layer.0.encoding.opacity.value",
    ],
    "conditions": [
      "vconcat.0.layer.0.encoding.color.condition.test",
      "vconcat.0.layer.0.encoding.size.condition.test",
      "vconcat.0.layer.0.encoding.opacity.condition.test",
    ],
    "initial": {
      "chooseColorChange": {
        "conditionColor": "#000000",
        "color": "#000000",
      },
      "chooseSizeChange": {
        "conditionSize": 30,
        "size": 40,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Entity",
    "sort": "vconcat.0.encoding",
  },
  "Default": {
    "width": 400,
  },
  "orderTypes": ["Germany", "U.S."],
  "selectTypes": [{
    name: "Entity",
    value: ["Germany", "U.S."],
  }, {
    name: "category",
    value: [
      "Not important at all",
      "Not too important",
      "Somewhat important",
      "Very important",
    ],
  }],
};

const json4488 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "vconcat.0.height",
    "width": "vconcat.0.width",
    "initial": 1,
    "min": 0.5,
    "max": 2,
    "step": 0.1,
    "initialWidth": 400,
  },
  "Text": {
    "textColor": "vconcat.0.layer.1.encoding.color.value",
    "textAngle": "vconcat.0.layer.1.mark.angle",
    "textDx": "vconcat.0.layer.1.mark.dx",
    "textDy": "vconcat.0.layer.1.mark.dy",
    "textFontSize": "vconcat.0.layer.1.mark.fontSize",
    "textFontStyle": "vconcat.0.layer.1.mark.fontStyle",
    "textFontWeight": "vconcat.0.layer.1.mark.fontWeight",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 1,
      },
      "textDx": {
        "init": 0,
        "min": -10,
        "max": 10,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -10,
        "max": 10,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 1,
        "max": 20,
        "step": 1,
      },
      "textFontStyle": {
        "init": "normal",
        "options": ["normal", "italic", "oblique"],
      },
      "textFontWeight": {
        "init": "normal",
        "options": ["normal", "bold", "bolder", "lighter"],
      },
    },
  },
  "Axis": {
    "AxisTickCount": [
      "vconcat.0.encoding.x.axis.tickCount",
      "vconcat.0.encoding.y.axis.tickCount",
    ],
    "AxisScaleDomain": [
      "vconcat.0.encoding.x.scale.domain",
      "vconcat.0.encoding.y.scale.domain",
    ],
    "AxisGrid": [
      "vconcat.0.encoding.x.axis.grid",
      "vconcat.0.encoding.y.axis.grid",
    ],
    initial: {
      "AxisTickCount": {
        x: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "x": {
          "minimal": 0,
          "maximal": 200,
          "min": 0,
          "max": 100,
          "step": 1,
        },
      },
      "AxisGrid": {
        "x": false,
        "y": false,
      },
    },
  },
  "Condition": {
    "chooseColorChange": [
      "vconcat.0.layer.0.encoding.color.condition.value",
      "vconcat.0.layer.0.encoding.color.value",
    ],
    "chooseSizeChange": [
      "vconcat.0.layer.0.encoding.size.condition.value",
      "vconcat.0.layer.0.encoding.size.value",
    ],
    "chooseOpacityChange": [
      "vconcat.0.layer.0.encoding.opacity.condition.value",
      "vconcat.0.layer.0.encoding.opacity.value",
    ],
    "conditions": [
      "vconcat.0.layer.0.encoding.color.condition.test",
      "vconcat.0.layer.0.encoding.size.condition.test",
      "vconcat.0.layer.0.encoding.opacity.condition.test",
    ],
    "initial": {
      "chooseColorChange": {
        "conditionColor": "#000000",
        "color": "#000000",
      },
      "chooseSizeChange": {
        "conditionSize": 30,
        "size": 40,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Entity",
    "sort": "vconcat.0.encoding",
  },
  "Default": {
    "width": 400,
  },
  "orderTypes": ["UK", "France", "India", "U.S.", "Germany", "Russia", "China"],
  "selectTypes": [
    {
      "name": "Entity",
      "value": ["UK", "France", "India", "U.S.", "Germany", "Russia", "China"],
    },
  ],
};

const json9715 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.5,
    "max": 2,
    "step": 0.1,
    "initialWidth": 400,
  },
  "Text": {
    "textColor": "layer.1.encoding.color.value",
    "textAngle": "layer.1.mark.angle",
    "textDx": "layer.1.mark.dx",
    "textDy": "layer.1.mark.dy",
    "textFontSize": "layer.1.mark.fontSize",
    "textFontStyle": "layer.1.mark.fontStyle",
    "textFontWeight": "layer.1.mark.fontWeight",
  },
  "Axis": {
    "AxisColor": [
      "layer.0.encoding.x.axis.color",
      "layer.0.encoding.y.axis.color",
    ],
    "AxisTickCount": [
      "layer.0.encoding.x.axis.tickCount",
      "layer.0.encoding.y.axis.tickCount",
    ],
    "AxisScaleDomain": [
      "layer.0.encoding.x.scale.domain",
      "layer.0.encoding.y.scale.domain",
    ],
    "AxisGrid": [
      "layer.0.encoding.x.axis.grid",
      "layer.0.encoding.y.axis.grid",
    ],
    initial: {
      "AxisTickCount": {
        x: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "x": {
          "minimal": 0,
          "maximal": 2,
          "min": 0,
          "max": 1,
          "step": 0.1,
        },
      },
      "AxisGrid": {
        "x": false,
        "y": false,
      },
    },
  },
  "Condition": {
    "chooseColorChange": [
      "layer.0.encoding.color.condition.value",
      "layer.0.encoding.color.value",
    ],
    "chooseSizeChange": [
      "layer.0.encoding.size.condition.value",
      "layer.0.encoding.size.value",
    ],
    "chooseOpacityChange": [
      "layer.0.encoding.opacity.condition.value",
      "layer.0.encoding.opacity.value",
    ],
    "conditions": [
      "layer.0.encoding.color.condition.test",
      "layer.0.encoding.size.condition.test",
      "layer.0.encoding.opacity.condition.test",
    ],
    "initial": {
      "chooseColorChange": {
        "conditionColor": "#000000",
        "color": "#000000",
      },
      "chooseSizeChange": {
        "conditionSize": 30,
        "size": 40,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Entity",
    "sort": "layer.0.encoding",
  },
  "Default": {
    "width": 400,
  },
  "orderTypes": [
    "Pakistan",
    "Senegal",
    "Malaysia",
    "Burkina Faso",
    "Nigeria",
    "Turkey",
    "Indonesia",
    "Jordan",
    "Israel",
  ],
  "selectTypes": [
    {
      "name": "Entity",
      "value": [
        "Pakistan",
        "Senegal",
        "Malaysia",
        "Burkina Faso",
        "Nigeria",
        "Turkey",
        "Indonesia",
        "Jordan",
        "Israel",
      ],
    },
    {
      "name": "key",
      "value": [
        "Favorable",
        "Dont know",
        "Unfavorable",
      ],
    },
  ],
};

const json0882 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
  },
  "Text": {
    "textColor": "layer.1.encoding.color.value",
    "textAngle": "layer.1.mark.angle",
    "textDx": "layer.1.mark.dx",
    "textDy": "layer.1.mark.dy",
    "textFontSize": "layer.1.mark.fontSize",
    "textFontStyle": "layer.1.mark.fontStyle",
    "textFontWeight": "layer.1.mark.fontWeight",
  },
  "Axis": {
    "AxisColor": [
      "layer.0.encoding.x.axis.color",
      "layer.0.encoding.y.axis.color",
    ],
    "AxisTickCount": [
      "layer.0.encoding.x.axis.tickCount",
      "layer.0.encoding.y.axis.tickCount",
    ],
    "AxisScaleDomain": [
      "layer.0.encoding.x.scale.domain",
      "layer.0.encoding.y.scale.domain",
    ],
    "AxisGrid": [
      "layer.0.encoding.x.axis.grid",
      "layer.0.encoding.y.axis.grid",
    ],
  },
  "Condition": {
    "chooseColorChange": [
      "layer.0.encoding.color.condition.value",
      "layer.0.encoding.color.value",
    ],
    "chooseSizeChange": [
      "layer.0.encoding.size.condition.value",
      "layer.0.encoding.size.value",
    ],
    "chooseOpacityChange": [
      "layer.0.encoding.opacity.condition.value",
      "layer.0.encoding.opacity.value",
    ],
    "conditions": [
      "layer.0.encoding.color.condition.test",
      "layer.0.encoding.size.condition.test",
      "layer.0.encoding.opacity.condition.test",
    ],
  },
  "Order": {
    "field": "Country",
    "sort": "layer.0.encoding",
  },
  "Default": {
    "width": 200,
  },
  "orderTypes": [
    "Malawi",
    "Africa",
    "Western Sahara",
    "Netherlands",
  ],
  "selectTypes": [
    {
      "name": "Country",
      "value": [
        "Malawi",
        "Africa",
        "Western Sahara",
        "Netherlands",
      ],
    },
  ],
};

const json3972 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
  },
  "Text": {
    "textColor": "layer.1.encoding.color.value",
    "textAngle": "layer.1.mark.angle",
    "textDx": "layer.1.mark.dx",
    "textDy": "layer.1.mark.dy",
    "textFontSize": "layer.1.mark.fontSize",
    "textFontStyle": "layer.1.mark.fontStyle",
    "textFontWeight": "layer.1.mark.fontWeight",
  },
  "Axis": {
    "AxisColor": [
      "layer.0.encoding.x.axis.color",
      "layer.0.encoding.y.axis.color",
    ],
    "AxisTickCount": [
      "layer.0.encoding.x.axis.tickCount",
      "layer.0.encoding.y.axis.tickCount",
    ],
    "AxisScaleDomain": [
      "layer.0.encoding.x.scale.domain",
      "layer.0.encoding.y.scale.domain",
    ],
    "AxisGrid": [
      "layer.0.encoding.x.axis.grid",
      "layer.0.encoding.y.axis.grid",
    ],
  },
  "Condition": {
    "chooseColorChange": [
      "layer.0.encoding.color.condition.value",
      "layer.0.encoding.color.value",
    ],
    "chooseSizeChange": [
      "layer.0.encoding.size.condition.value",
      "layer.0.encoding.size.value",
    ],
    "chooseOpacityChange": [
      "layer.0.encoding.opacity.condition.value",
      "layer.0.encoding.opacity.value",
    ],
    "conditions": [
      "layer.0.encoding.color.condition.test",
      "layer.0.encoding.size.condition.test",
      "layer.0.encoding.opacity.condition.test",
    ],
  },
  "Order": {
    "field": "Country",
    "sort": "layer.0.encoding",
  },
  "Default": {
    "width": 200,
  },
  "orderTypes": [
    "Northern America",
    "Europe",
    "World",
    "South America",
    "Asia",
    "Caribbean",
    "Africa",
  ],
  "selectTypes": [
    {
      "name": "Region",
      "value": [
        "Northern America",
        "Europe",
        "World",
        "South America",
        "Asia",
        "Caribbean",
        "Africa",
      ],
    },
  ],
};

const json_values = {
  "json1261": json1261,
  "json4488": json4488,
  "json9715": json9715,
  "json0882": json0882,
  "json3972": json3972,
};

export const getAccordingValues = (value: string) => {
  // if value exist
  return json_values[value] || {};
};
