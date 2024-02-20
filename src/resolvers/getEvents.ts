import {
  Context,
  DynamoDBQueryRequest,
  AppSyncIdentityCognito,
  util,
} from '@aws-appsync/utils';
import { QueryGetEventsArgs, EventsResult } from '../types/graphql-schema';

export function request(
  ctx: Context<QueryGetEventsArgs>,
): DynamoDBQueryRequest {
  const identity = ctx.identity as AppSyncIdentityCognito;

  return {
    operation: 'Query',
    index: 'byCreatedAt',
    query: {
      expression: '#userId = :userId',
      expressionNames: {
        '#userId': 'userId',
      },
      expressionValues: {
        ':userId': util.dynamodb.toDynamoDB(identity.sub),
      },
    },
    scanIndexForward: false,
    limit: 3,
    nextToken: ctx.args.pageToken ?? undefined,
  };
}

export function response(
  ctx: Context<DynamoDBQueryRequest, object, object, object, EventsResult>,
) {
  return ctx.result;
}
