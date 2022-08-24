import { BootstrapSizes } from '../Types';
import { getBootstrapSizeInNumberic } from './Common';

describe('Common Utils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return number when value is number', () => {
    expect(getBootstrapSizeInNumberic(255)).toEqual(255);
  });

  it('Should return number when value is numeric string', () => {
    expect(getBootstrapSizeInNumberic('255')).toEqual(255);
  });

  it('Should return default size when value is non numeric string', () => {
    expect(getBootstrapSizeInNumberic('haha')).toEqual(BootstrapSizes.md);
  });
});
