import Colours from 'app/theme/color';

export type ColorSchemeType = 'single' | 'multi';

export const colorScheme = (colors) => {
  if(colors === "single"){
    return Colours.primaryBase;
  }
  return [Colours.purplebase, Colours.primaryBase, Colours.yellowbase, Colours.redbase, Colours.bluebase ]
};
