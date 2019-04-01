import {createSpecBuilderClass} from './base';

import {CommentBuilder, ReviewBuilder, ReviewThreadBuilder} from './pr';
import {ReactableBuilder} from './reactable';

const ReviewEdgeBuilder = createSpecBuilderClass('PullRequestReviewEdge', {
  node: {linked: ReviewBuilder},
});

const CommentEdgeBuilder = createSpecBuilderClass('PullRequestReviewCommentEdge', {
  node: {linked: CommentBuilder},
});

export const AddPullRequestReviewPayloadBuilder = createSpecBuilderClass('AddPullRequestReviewPayload', {
  reviewEdge: {linked: ReviewEdgeBuilder},
});

export const AddPullRequestReviewCommentPayloadBuilder = createSpecBuilderClass('AddPullRequestReviewCommentPayload', {
  commentEdge: {linked: CommentEdgeBuilder},
});

export const SubmitPullRequestReviewPayload = createSpecBuilderClass('SubmitPullRequestReviewPayload', {
  pullRequestReview: {linked: ReviewBuilder},
});

export const ResolveReviewThreadPayload = createSpecBuilderClass('ResolveReviewThreadPayload', {
  thread: {linked: ReviewThreadBuilder},
});

export const UnresolveReviewThreadPayload = createSpecBuilderClass('UnresolveReviewThreadPayload', {
  thread: {linked: ReviewThreadBuilder},
});

export const AddReactionPayloadBuilder = createSpecBuilderClass('AddReactionPayload', {
  subject: {linked: ReactableBuilder},
});

export const RemoveReactionPayloadBuilder = createSpecBuilderClass('RemoveReactionPayload', {
  subject: {linked: ReactableBuilder},
});