export const CLICK = 'CLICK';
export type CLICK = typeof CLICK;

export interface ClickAction {
    type: CLICK;
}

export const click = (): ClickAction => {
    return { type: CLICK };
};

export type MainAction = ClickAction;
