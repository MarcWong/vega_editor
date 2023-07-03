// This is a file to map the actual value changes and file name
const json1261 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "vconcat.0.height",
    "width": "vconcat.0.width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "vconcat.0.layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
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
    "x": "vconcat.0.encoding.x",
    "y": "vconcat.0.encoding.y",
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
    "sort": ["vconcat.0.encoding"],
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
  "ColorArray": {
    "types": [
      "Not important at all",
      "Not too important",
      "Somewhat important",
      "Very important",
    ],
    "colors": [
      "#d73027",
      "#fc8d59",
      "#fee090",
      "#91bfdb",
    ],
    "path": "vconcat.0.layer.0.encoding.color.scale.range",
  },
};

const json4488 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "vconcat.0.height",
    "width": "vconcat.0.width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "vconcat.0.layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
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
    "x": "vconcat.0.encoding.x",
    "y": "vconcat.0.encoding.y",
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
        "conditionColor": "#949d48",
        "color": "#949d48",
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
    "sort": ["vconcat.0.encoding"],
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
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "ColorArray": {
    "types": [
      "Favorable",
      "Dont know",
      "Unfavorable",
    ],
    "colors": [
      "#ea9e2c",
      "#949d48",
      "#dcd8c7"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
      },
      "chooseSizeChange": {
        "conditionSize": 40,
        "size": 40,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Entity",
    "sort": ["encoding"],
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
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
      "chooseSizeChange": {
        "conditionSize": 40,
        "size": 40,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Country",
    "sort": ["encoding"],
  },
  "Default": {
    "width": 400,
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
  "ColorArray": {
    "types": [
      "Malawi",
      "Africa",
      "Western Sahara",
      "Netherlands",
    ],
    "colors": [
      "#27955c",
      "#637ca8",
      "#9a4f57",
      "#596a7d"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const json3972 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity"
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
      "chooseSizeChange": {
        "conditionSize": 40,
        "size": 40,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Region",
    "sort": ["encoding"],
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
  "ColorArray": {
    "types": [
      "Northern America",
      "Europe",
      "World",
      "South America",
      "Asia",
      "Caribbean",
      "Africa",
    ],
    "colors": [
      "#27955c",
      "#9a4f57",
      "#984ea3",
      "#d62f7d",
      "#269691",
      "#596a7d",
      "#bd532c"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const json5007 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
    "sort": ["encoding"],
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
  "ColorArray": {
    "types": [
      "15-49 years old",
      "Age-standardized",
      "All ages",
      "5-14 years old",
      "70+ years old",
      "50-69 years old",
    ],
    "colors": [
      "#9a4f57",
      "#d62f7d",
      "#835ba1",
      "#269691",
      "#000000",
      "#000000"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const json9613 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
    "sort": ["encoding"],
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
    "US Central Appalachian coal spot price index"
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
  "ColorArray": {
    "types": [
      "Japan coking coal import cif price",
      "Japan steam coal import cif price",
      "China Qinhuangdao spot price",
      "Japan steam spot cif price",
      "Asian marker price",
      "Northwest Europe marker price",
      "US Central Appalachian coal spot price index"
    ],
    "colors": [
      "#27955c",
      "#9a4f57",
      "#d62f7d",
      "#269691",
      "#835ba1",
      "#bd532c",
      "#596a7d"
    ],
    "path": "layer.0.encoding.color.scale.range",
  }
};

const json1002 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
    "sort": ["encoding"],
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
    "initial": 2,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
    initial: {
      "AxisTickCount": {
        y: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "y": {
          "minimal": 0,
          "maximal": 130,
          "min": 0,
          "max": 130,
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
    "sort": ["encoding"],
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
  "ColorArray": {
    "types": [
      "Greece",
      "Italy",
      "Austria",
    ],
    "colors": [
      "#1290da",
      "#9a3585",
      "#e52a2f"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const jsonRP = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
    initial: {
      "AxisTickCount": {
        y: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "y": {
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
      },
      "chooseSizeChange": {
        "conditionSize": 50,
        "size": 50,
        "maxSize": 100,
        "minSize": 0,
        "stepSize": 1,
      },
    },
  },
  "Order": {
    "field": "Country",
    "sort": ["encoding"],
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
  "ColorArray": {
    "types": [
      "Indonesia",
      "Lithuania",
      "Germany",
      "Denmark",
      "Finland",
    ],
    "colors": [
      "#9a3585",
      "#739f25",
      "#e0531f",
      "#1290da",
      "#e52a2f"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const jsonRAB = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
    initial: {
      "AxisTickCount": {
        y: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "y": {
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
    "sort": ["encoding"],
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
  "ColorArray": {
    "types": [
      "Zambia",
      "Singapore",
      "South Africa",
      "Bangladesh",
      "Turkey",
    ],
    "colors": [
      "#d73027",
      "#fc8d59",
      "#fee090",
      "#91bfdb",
      "#4575b4",
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const jsonShort = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": -8,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": -8,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
    initial: {
      "AxisTickCount": {
        y: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "y": {
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
    "sort": ["encoding"],
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
  "ColorArray": {
    "types": [
      "Belgium",
      "Ireland",
      "Czech Republic",
      "Korea",
    ],
    "colors": [
      "#9a3585",
      "#1290da",
      "#e0531f",
      "#e52a2f"
    ],
    "path": "layer.0.encoding.color.scale.range",
  },
};

const json4306 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": -8,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": -8,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
    initial: {
      "AxisTickCount": {
        y: {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "y": {
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
        "conditionColor": "#c0c0c0",
        "color": "#2876dd",
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
    "field": "Characteristic",
    "sort": ["encoding"],
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
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
        "conditionColor": "#2876dd",
        "color": "#2876dd",
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
    "sort": ["encoding"],
  },
  "Default": {
    "width": 400,
  },
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
};

const json1044 = {
  "typeName": "Entity",
  "aspectRatio": {
    "height": "height",
    "width": "width",
    "initial": 1,
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
    initial: {
      "AxisTickCount": {
        "y": {
          "init": 5,
          "min": 1,
          "max": 20,
          "step": 1,
        },
      },
      "AxisScaleDomain": {
        "y": {
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
        "conditionColor": "#2876dd",
        "color": "#2876dd",
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
    "min": 0.2,
    "max": 5,
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
    "textOpacity": "layer.1.mark.opacity",
    initial: {
      "textColor": "#000000",
      "textAngle": {
        "init": 0,
        "min": 0,
        "max": 180,
        "step": 5,
      },
      "textDx": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textDy": {
        "init": 0,
        "min": -50,
        "max": 50,
        "step": 1,
      },
      "textFontSize": {
        "init": 11,
        "min": 5,
        "max": 50,
        "step": 1,
      },
    }
  },
  "Axis": {
    "x": "encoding.x",
    "y": "encoding.y",
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
    "field": "Country",
    "sort": ["encoding"],
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
