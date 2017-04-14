#!/bin/bash
TARGET=public/vendor
DATA=public/data
SPEC=spec
SCHEMA=schema

# Copy dependencies by default. Link if a -l flag is specified.
CWD=$(pwd)
VEGA_OP="cp -R"
VEGA_DATASETS_OP="cp -R"
SCHEMA_OP="cp"
VEGA_EMBED_OP="cp -R"
VEGA_LITE_OP="cp -R"

while getopts :l: FLAG; do
  case $FLAG in
    l)
      echo "Linking '$OPTARG'."
      npm link $OPTARG
      OPTARG=$( echo ${OPTARG}_OP | tr '-' '_' | tr '[:lower:]' '[:upper:]' )
      eval $OPTARG="\"ln -sf\""
      echo
  esac
done

# delete old vendor, data, and spec directories to start with a clean slate.
# rm -rf $TARGET
# rm -rf $DATA
# rm -rf $SPEC

echo "Copying dependencies to '$TARGET'."

if [ ! -d "$TARGET" ]; then
  mkdir $TARGET
fi

cp lib/json3-compactstringify.js $TARGET

echo "Copying data to '$DATA'."

if [ ! -d "$DATA" ]; then
  mkdir $DATA
fi

eval $VEGA_DATASETS_OP "$CWD/node_modules/vega-datasets/data/*" $DATA
# eval $VEGA_DATASETS_OP "$CWD/node_modules/vega/test/data/*" $DATA
eval $VEGA_DATASETS_OP "$CWD/data/*" $DATA

echo "Copy examples to '$SPEC'."

if [ ! -d "$SPEC" ]; then
  mkdir $SPEC
fi

eval $SCHEMA_OP "$CWD/node_modules/vega/build/vega-schema.json" "$SCHEMA/vega.schema.json"
eval $SCHEMA_OP "$CWD/node_modules/vega-lite/build/vega-lite-schema.json" "$SCHEMA/vl.schema.json"

# eval $VEGA_OP "$CWD/node_modules/vega/test/specs-valid/spec" "$SPEC/vega"
eval $VEGA_LITE_OP "$CWD/node_modules/vega-lite/examples/specs" "$SPEC/vega-lite"
echo "var VL_SPECS = "`cat $CWD/node_modules/vega-lite/examples/vl-examples.json` > public/js/vl-specs.js
