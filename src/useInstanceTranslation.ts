import {useTranslation as getTranslation, UseTranslationResponse} from "react-i18next";
import {Resource, i18n} from "i18next";

import i18nService from "./service";

export const useInstanceTranslation =
  (instanceName: string, resources: Resource) =>
    (filename: string): UseTranslationResponse<string, i18n> => {
      const i18nInstance = i18nService.getOrCreateI18nInstance(instanceName, {resources});
      return getTranslation(filename, {i18n: i18nInstance});
    }

export default useInstanceTranslation;
