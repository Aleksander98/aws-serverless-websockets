import {
  Context,
  DynamoDBDeleteItemRequest,
  AppSyncIdentityCognito,
  util,
} from '@aws-appsync/utils';
import { MutationDeleteEventArgs, Event } from '../types/graphql-schema';

export function request(
  ctx: Context<MutationDeleteEventArgs>,
): DynamoDBDeleteItemRequest {
  const identity = ctx.identity as AppSyncIdentityCognito;

  return {
    operation: 'DeleteItem',
    key: {
      id: util.dynamodb.toDynamoDB(ctx.args.id),
      userId: util.dynamodb.toDynamoDB(identity.sub),
    },
  };
}

export function response(
  ctx: Context<MutationDeleteEventArgs, object, object, object, Event>,
) {
  return ctx.result;
}
