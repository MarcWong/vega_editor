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
          "maximal": 20,
          "min": 0,
          "max": 10,
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
          "maximal": 150,
          "min": 0,
          "max": 100,
          "step": 5,
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

const json5007 = {
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
          "maximal": 70,
          "min": 0,
          "max": 70,
          "step": 5,
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
        "conditionColor": "#589898",
        "color": "#4682b4",
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
    "field": "Age",
    "sort": "layer.0.encoding.y.sort",
  },
  "Default": {
    "width": 200,
  },
  "orderTypes": [
    "15-49 years old",
    "Age-standardized",
    "All ages",
    "5-14 years old",
    "70+ years old",
    "50-69 years old",
  ],
  "selectTypes": [
    {
      "name": "Age",
      "value": [
        "15-49 years old",
        "Age-standardized",
        "All ages",
        "5-14 years old",
        "70+ years old",
        "50-69 years old",
      ],
    },
  ],
};

const json9613 = {
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
          "maximal": 300,
          "min": 0,
          "max": 200,
          "step": 5,
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
    "field": "Market",
    "sort": "layer.0.encoding.y.sort.field",
  },
  "Default": {
    "width": 400,
  },
  "orderTypes": [
    "Japan coking coal import cif price",
    "Japan steam coal import cif price",
    "China Qinhuangdao spot price",
    "Japan steam spot cif price",
    "Asian marker price",
    "Northwest Europe marker price",
    "US Central Appalachian coal spot price index",
  ],
  "selectTypes": [
    {
      "name": "Market",
      "value": [
        "Japan coking coal import cif price",
        "Japan steam coal import cif price",
        "China Qinhuangdao spot price",
        "Japan steam spot cif price",
        "Asian marker price",
        "Northwest Europe marker price",
        "US Central Appalachian coal spot price index",
      ],
    },
  ],
};

const json1002 = {
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
    "Business operations",
    "Shift or crew supervisor",
    "Bartender",
    "Waiter/waitress",
    "Chef or cook",
    "Restaurant manager",
    "Crew person (fast food)",
    "Host/hostess",
    "Dishwasher/bus person",
  ],
  "selectTypes": [
    {
      "name": "Characteristic",
      "value": [
        "Business operations",
        "Shift or crew supervisor",
        "Bartender",
        "Waiter/waitress",
        "Chef or cook",
        "Restaurant manager",
        "Crew person (fast food)",
        "Host/hostess",
        "Dishwasher/bus person",
      ],
    },
    {
      "name": "key",
      "value": [
        "Happy with current hours",
        "Would like more hours",
        "Would like fewer hours",
      ],
    },
  ],
};

const jsonMRI = {
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
          "maximal": 300,
          "min": 0,
          "max": 200,
          "step": 5,
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
    "Greece",
    "Italy",
    "Austria",
  ],
  "selectTypes": [
    {
      "name": "Country",
      "value": [
        "Greece",
        "Italy",
        "Austria",
      ],
    },
  ],
};

const jsonRP = {
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
          "maximal": 1000,
          "min": 0,
          "max": 600,
          "step": 5,
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
    "Indonesia",
    "Lithuania",
    "Germany",
    "Denmark",
    "Finland",
  ],
  "selectTypes": [
    {
      "name": "Country",
      "value": [
        "Indonesia",
        "Lithuania",
        "Germany",
        "Denmark",
        "Finland",
      ],
    },
  ],
};

const jsonRAB = {
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
    "Zambia",
    "Singapore",
    "South Africa",
    "Bangladesh",
    "Turkey",
  ],
  "selectTypes": [
    {
      "name": "Country",
      "value": [
        "Zambia",
        "Singapore",
        "South Africa",
        "Bangladesh",
        "Turkey",
      ],
    },
  ],
};

const jsonShort = {
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
          "maximal": 20,
          "min": 0,
          "max": 15,
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
    "Belgium",
    "Ireland",
    "Czech Republic",
    "Korea",
  ],
  "selectTypes": [
    {
      "name": "Country",
      "value": [
        "Belgium",
        "Ireland",
        "Czech Republic",
        "Korea",
      ],
    },
  ],
};

const json4306 = {
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
    "Google",
    "TOTAL Internet search engines and information",
    "Yahoo (Verizon Media)",
    "Ask.com",
    "MSN (Microsoft)",
    "AOL (Verizon Media)",
    "Bing (Microsoft)",
    "Answers.com",
  ],
  "selectTypes": [
    {
      "name": "Characteristic",
      "value": [
        "Google",
        "TOTAL Internet search engines and information",
        "Yahoo (Verizon Media)",
        "Ask.com",
        "MSN (Microsoft)",
        "AOL (Verizon Media)",
        "Bing (Microsoft)",
        "Answers.com",
      ],
    },
  ],
};

const json1014 = {
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
          "minimal": -100,
          "maximal": 100,
          "min": -10,
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
    "field": "Province",
    "sort": "layer.0.encoding",
  },
  "Default": {
    "width": 400,
  },
  "orderTypes": [
    "Territories",
    "British Columbia",
    "Ontario",
    "Alberta",
    "Prince Edward Island",
    "Quebec",
    "Manitoba",
    "Nova Scotia",
    "Saskatchewan",
    "New Brunswick",
    "Newfoundland and Labrador",
  ],
  "selectTypes": [
    {
      "name": "Province",
      "value": [
        "Territories",
        "British Columbia",
        "Ontario",
        "Alberta",
        "Prince Edward Island",
        "Quebec",
        "Manitoba",
        "Nova Scotia",
        "Saskatchewan",
        "New Brunswick",
        "Newfoundland and Labrador",
      ],
    },
  ],
};

const json1044 = {
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
        "x": {
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
    "field": "Province",
    "sort": "layer.0.encoding",
  },
  "Default": {
    "width": 400,
  },
  "selectTypes": [
    {
      "name": "Year",
      "value": [
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
    },
  ],
};

const json1045 = {
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
        "x": {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "x": {
          "minimal": 0,
          "maximal": 100,
          "min": 0,
          "max": 50,
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
    "field": "Province",
    "sort": "layer.0.encoding",
  },
  "Default": {
    "width": 400,
  },
  "orderTypes": [
    "United States",
    "China",
    "Germany",
    "Japan",
    "France",
    "Rest of the world",
  ],
  "selectTypes": [
    {
      "name": "Country",
      "value": [
        "United States",
        "China",
        "Germany",
        "Japan",
        "France",
        "Rest of the world",
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
  "json5007": json5007,
  "json9613": json9613,
  "json1002": json1002,
  "jsonMRI": jsonMRI,
  "jsonRP": jsonRP,
  "jsonRAB": jsonRAB,
  "jsonShort": jsonShort,
  "json4306": json4306,
  "json1014": json1014,
  "json1044": json1044,
  "json1045": json1045,
};

export const getAccordingValues = (value: string) => {
  // if value exist
  return json_values[value] || {};
};
