export const CLICK = "CLICK";
export type CLICK = typeof CLICK;

export interface IClickAction {
  type: CLICK;
}

export const click = (): IClickAction => {
  return { type: CLICK };
};

export type MainAction = IClickAction;
