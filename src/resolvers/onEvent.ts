import {
  Context,
  NONERequest,
  AppSyncIdentityCognito,
  util,
  extensions,
} from '@aws-appsync/utils';
import { Event } from '../types/graphql-schema';

export function request(ctx: Context<any>): NONERequest {
  return { payload: null };
}

export function response(ctx: Context<any, object, object, object, Event>) {
  const identity = ctx.identity as AppSyncIdentityCognito;
  const filter = { userId: { eq: identity.sub } };

  extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter));

  // Important: return null in the response.
  return null;
}
