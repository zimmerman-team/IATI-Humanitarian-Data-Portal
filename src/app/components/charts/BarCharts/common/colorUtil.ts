import Colours from 'app/theme/color';

export type ColorSchemeType = 'single' | 'multi';

export const colorScheme = colors => {
  if (colors === 'multi') {
    return [
      Colours.purplebase,
      Colours.primaryBase,
      Colours.yellowbase,
      Colours.redbase,
      Colours.bluebase,
    ];
  }
  return Colours.primaryBase;
};
