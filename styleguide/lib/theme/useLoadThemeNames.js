import * as React from 'react';
import { useFetch } from '../../utils/useFetch';
import {
  DEFAULT_THEME_FOR_PLATFORM,
  DEFAULT_THEME_NAMES,
  IGNORE_TOKENS_WITH_PREFIX,
  INVERTED_THEME_NAME,
  VKUI_TOKENS_THEMES_META_URL,
} from './constants';
import { onlyVariablesLocalImportRule, onlyVariablesLocalURL } from './functions';

export const useLoadThemeNames = () => {
  const { data, error } = useFetch(VKUI_TOKENS_THEMES_META_URL);

  return React.useMemo(() => {
    if (!data) {
      return { isLoading: true, themeNames: [], error };
    }

    const filteredData = data.files
      .map(({ path }) => path.replace('/themes/', ''))
      .filter(
        (themeNameRaw) =>
          !IGNORE_TOKENS_WITH_PREFIX.some((i) => themeNameRaw.startsWith(i)) ||
          !DEFAULT_THEME_NAMES.includes(themeNameRaw),
      );

    filteredData.unshift(...DEFAULT_THEME_NAMES);

    const parsedData = filteredData.reduce((data, themeNameRaw) => {
      const invertedThemeName = INVERTED_THEME_NAME.get(themeNameRaw);
      const themeName = invertedThemeName ? invertedThemeName : themeNameRaw;
      const currentAppearance = themeName.endsWith('Dark') ? 'dark' : 'light';

      const key = themeName.replace('Dark', '');
      const values = data.get(key) || {
        appearanceOptions: [
          { value: 'light', title: 'light', url: '', importRule: '', disabled: true },
          { value: 'dark', title: 'dark', url: '', importRule: '', disabled: true },
        ],
        baseForPlatform: null,
      };

      values.appearanceOptions = values.appearanceOptions.map((appearanceData) => {
        if (appearanceData.value === currentAppearance && appearanceData.disabled) {
          return {
            ...appearanceData,
            url: onlyVariablesLocalURL(themeNameRaw),
            importRule: onlyVariablesLocalImportRule(themeNameRaw),
            disabled: false,
          };
        }
        return appearanceData;
      });

      for (const [platform, defaultThemeName] of DEFAULT_THEME_FOR_PLATFORM.entries()) {
        if (defaultThemeName === themeNameRaw) {
          values.baseForPlatform = platform;
        }
      }

      data.set(key, values);

      return data;
    }, new Map());
    return { isLoading: false, themeNames: Array.from(parsedData), error };
  }, [data]);
};
