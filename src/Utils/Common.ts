import Mustache from 'mustache';
import { BootstrapSizes } from '../Types';

export const isNumeric = (value: any): boolean => !isNaN(value);
export const getBootstrapSizeInNumberic = (size: string | number): number => {
  if (isNumeric(size)) {
    return Number.parseInt(size as string, 10);
  }

  return BootstrapSizes[size] ? BootstrapSizes[size] : BootstrapSizes.md;
};

export const generateRoutePath = (
  resourceId: string,
  page: string,
  view?: Record<string, any>,
  rootpath = '',
): string => `${rootpath}${resourceId}${view ? Mustache.render(page as string, view) : page}`;
