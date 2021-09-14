import { DBConfig } from "ngx-indexed-db";

export const  dbConfig: DBConfig  = {
    name: 'found',
    version: 1,
    objectStoresMeta: [{
      store: 'items',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'comments', keypath: 'comments', options: { unique: false } },
        { name: 'publishedDate', keypath: 'publishedDate', options: { unique: false } }
      ]
    }]
  };