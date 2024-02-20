import { Context, DynamoDBPutItemRequest, util } from '@aws-appsync/utils';
import { MutationAddEventArgs, Event } from '../types/graphql-schema';

export function request(
  ctx: Context<MutationAddEventArgs>,
): DynamoDBPutItemRequest {
  const eventItem: Event = {
    ...ctx.args,
    id: util.autoId(),
    createdAt: util.time.nowISO8601(),
  };

  return {
    operation: 'PutItem',
    key: {
      id: util.dynamodb.toDynamoDB(eventItem.id),
      userId: util.dynamodb.toDynamoDB(eventItem.userId),
    },
    attributeValues: util.dynamodb.toMapValues(eventItem),
  };
}

export function response(
  ctx: Context<MutationAddEventArgs, object, object, object, Event>,
) {
  return ctx.result;
}
