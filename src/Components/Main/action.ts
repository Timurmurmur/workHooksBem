export const CLICK = "CLICK";
export type CLICK = typeof CLICK;

export interface ClickAction {
  type: CLICK;
  payload: string;
}

export const click = (): ClickAction => {
  return { type: CLICK, payload: "TIMUR" };
};

export type MainAction = ClickAction;
