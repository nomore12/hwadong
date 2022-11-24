// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "NOTICE": "NOTICE",
  "REPORT": "REPORT"
};

const { Post } = initSchema(schema);

export {
  Post,
  PostType
};