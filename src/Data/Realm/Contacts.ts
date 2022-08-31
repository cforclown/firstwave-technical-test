/* eslint-disable no-param-reassign */
import { BSON } from 'realm-web';

export interface IContact {
  _id: BSON.ObjectId;
  _partition?: string;
  name: string;
  age: number;
  mobile: string;
  group: string;
}

export const ContactsObject = {
  name: 'contacts',
  properties: {
    _id: 'objectId',
    name: 'string',
    age: 'int',
    mobile: 'string',
    group: 'string',
  },
};

export const CONTACTS_OBJECT = 'contacts';
