
//Define Typescript types for action payload
export interface SetMenuAction{
    type: typeof SET_MENU;
    opened:boolean;
}

export interface MenuOpenAction{
    type: typeof MENU_OPEN;
    id:string;
}

export interface SetFontFamilyAction{
    type: typeof SET_FONT_FAMILY;
    fontFamily:string;
}
export interface SetBorderRadiusAction{
    type: typeof SET_BORDER_RADIUS;
    borderRadius:number;
}

//Export these action types for use in the reducer
export type CustomizationActionTypes= | SetMenuAction | MenuOpenAction | SetFontFamilyAction | SetBorderRadiusAction;


// action - customization reducer
export const SET_MENU = '@customization/SET_MENU';
export const MENU_TOGGLE = '@customization/MENU_TOGGLE';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';


//Define action creators

export const setMenu = (opened:boolean):SetMenuAction=>({
    type:SET_MENU,
    opened
})
export const menuOpen = (id:string):MenuOpenAction=>({
    type:MENU_OPEN,
    id
})
export const SetFontFamily = (fontFamily:string):SetFontFamilyAction=>({
    type:SET_FONT_FAMILY,
    fontFamily
})
export const SetBorderRadius = (borderRadius:number):SetBorderRadiusAction=>({
    type:SET_BORDER_RADIUS,
    borderRadius
})
