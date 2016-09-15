declare module 'react-native-material-design' {
	import * as React from 'react';

	interface AvatarProps {
		image?: any;
		type?: any;
		icon?: string;
		size?: number;
		color?: string;
		backgroundColor?: string;
		text?: string;
		borderRadius?: number;
		borderColor?: string;
		borderWidth?: number;
	}

	export class Avatar extends React.Component<AvatarProps, any> {
	}
	
	interface ButtonProps {
		text: string;
		theme?: any;
		primary?: any;
		overrides?: any;
		textColor?: string;
		backgroundColor?: string;
		rippleColor?: string;
		disabled?: boolean;
		raised?: boolean;
		onPress?: (...args: any[]) => any;
		onLongPress?: (...args: any[]) => any;
	}

	export class Button extends React.Component<ButtonProps, any> {
	}
	
	interface CardProps {
		theme?: string;
		overrides?: any;
		backgroundColor?: string;
		rippleColor?: string;
		elevation?: number;
		disabled?: boolean;
		onPress?: (...args: any[]) => any;
		children?: React.ReactNode;
		style?: any;
	}

	export class Card extends React.Component<CardProps, any> {
		static Media: Media;
    static Body: Body;
    static Actions: Actions;
	}
	
	interface MediaProps {
		image: any;
		type?: any;
		height?: number;
		overlay?: boolean;
		children?: React.ReactNode;
	}

	export class Media extends React.Component<MediaProps, any> {
	}

	interface BodyProps {
		children: React.ReactNode;
	}

	export class Body extends React.Component<BodyProps, any> {
	}
	
	interface ActionsProps {
		position?: any;
		children: React.ReactNode;
	}

	export class Actions extends React.Component<ActionsProps, any> {
	}
	
	interface CheckboxProps {
		label?: string;
		theme?: any;
		primary?: any;
		value: string|number;
		checked?: boolean;
		disabled?: boolean;
		onCheck?: (...args: any[]) => any;
	}

	export class Checkbox extends React.Component<CheckboxProps, any> {
	}
	
	interface CheckboxGroupProps {
		theme?: any;
		primary?: any;
		onSelect?: (...args: any[]) => any;
		checked?: any[];
		items?: any[];
		value: string|number;
		label?: string;
		disabled?: boolean;
	}

	export class CheckboxGroup extends React.Component<CheckboxGroupProps, any> {
	}
	
	interface HeaderProps extends React.Props<Header> {
		image?: any;
		type?: any;
		backgroundColor?: string;
		height?: number;
		children?: React.ReactNode;
	}

	export class Header extends React.Component<HeaderProps, any> {
	}
	
	interface SectionProps extends React.Props<Section>  {
		title?: string;
		items?: any[];
		icon?: string;
		value: string;
		label?: string;
		onPress?: (...args: any[]) => any;
		onLongPress?: (...args: any[]) => any;
		active?: boolean;
		disabled?: boolean;
	}

	export class Section extends React.Component<SectionProps, any> {
	}

	interface DrawerProps extends React.Props<Drawer> {
		theme?: any;
		primary?: any;
		overrides?: any;
		backgroundColor?: string;
		children?: React.ReactNode;
	}

	export class Drawer extends React.Component<DrawerProps, any> {
		static Header: Header;
		static Section: Section;
	}
	
	interface DividerProps {
		inset?: boolean;
		theme?: any;
		style?: any;
	}

	export class Divider extends React.Component<DividerProps, any> {
	}
	
	interface IconProps {
		name: string;
		style?: any;
		size?: number;
		color?: string;
		allowFontScaling?: boolean;
	}

	export class Icon extends React.Component<IconProps, any> {
	}

	interface IconToggleProps {
		color: string;
		opacity?: number;
		disabled?: boolean;
		onPress?: (...args: any[]) => any;
		percent?: number;
		children?: React.ReactElement<any>;
		badge?: any;
		value?: number;
		animate?: boolean;
		backgroundColor?: string;
		textColor?: string;
	}

	export class IconToggle extends React.Component<IconToggleProps, any> {
	}
	
	interface ListProps {
		primaryText: string;
		secondaryText?: string;
		captionText?: string;
		secondaryTextMoreLine?: any[];
		text: string;
		style?: Object;
		leftIcon?: React.ReactElement<any>;
		rightIcon?: React.ReactElement<any>;
		leftAvatar?: React.ReactElement<any>;
		rightAvatar?: React.ReactElement<any>;
		lines?: number;
		primaryColor?: string;
		onPress?: (...args: any[]) => any;
		onLeftIconClick?: (...args: any[]) => any;
		onRightIconClick?: (...args: any[]) => any;
	}

	export class List extends React.Component<ListProps, any> {
	}
	
	interface RadioButtonProps {
		label?: string;
		theme?: any;
		primary?: any;
		value: string|number;
		checked?: boolean;
		disabled?: boolean;
		onSelect?: (...args: any[]) => any;
	}

	export class RadioButton extends React.Component<RadioButtonProps, any> {
	}
	
	interface RippleProps {
		color?: string;
		onPress?: (...args: any[]) => any;
		onLongPress?: (...args: any[]) => any;
		children: React.ReactNode;
	}

	export class Ripple extends React.Component<RippleProps, any> {
	}
	
	interface RadioButtonGroupProps {
		theme?: any;
		primary?: any;
		onSelect?: (...args: any[]) => any;
		selected?: string|number;
		items?: any[];
		value: string|number;
		label?: string;
		disabled?: boolean;
	}

	export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, any> {
	}
	
	interface SubheaderProps {
		text: string;
		color?: string;
		inset?: boolean;
		theme?: any;
		lines?: number;
	}

	export class Subheader extends React.Component<SubheaderProps, any> {
	}
	
	interface ToolbarProps {
		title?: string;
		theme?: any;
		primary?: any;
		style?: any;
		leftIconStyle?: Object;
		rightIconStyle?: Object;
		elevation?: number;
		overrides?: any;
		backgroundColor?: string;
		titleColor?: string;
		leftIconColor?: string;
		rightIconColor?: string;
		icon: string;
		onIconPress?: (...args: any[]) => any;
		actions?: any[];
		onPress?: (...args: any[]) => any;
		counter?: any;
	}

	export class Toolbar extends React.Component<ToolbarProps, any> {
	}

	export const COLOR: any;
	export const TYPO: any;
	export const PRIMARY: string;
	export const PRIMARY_COLORS: string[];
	export const THEME_NAME: string[];

}
