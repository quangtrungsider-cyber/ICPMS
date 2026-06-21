/**
 * @generated SignedSource<<fad95b0a56676dd99b79632bce79a697>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderInlineDataFragment } from 'relay-runtime';
export type TaskPriority = "HIGH" | "LOW" | "MEDIUM" | "URGENT";
export type TaskState = "DONE" | "IN_PROGRESS" | "TODO";
import { FragmentRefs } from "relay-runtime";
export type TasksCard_task$data = {
  readonly id: string;
  readonly priority: TaskPriority;
  readonly rank: number;
  readonly state: TaskState;
  readonly " $fragmentType": "TasksCard_task";
};
export type TasksCard_task$key = {
  readonly " $data"?: TasksCard_task$data;
  readonly " $fragmentSpreads": FragmentRefs<"TasksCard_task">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "TasksCard_task"
};

(node as any).hash = "1338dfeeab7145c7dfa0648717ad9cb1";

export default node;
