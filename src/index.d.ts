import React = require('react');
import hoistNonReactStatic = require('hoist-non-react-statics');

declare module '@types/react-gettext' {
	export type translationsType = {
		translations: Function | String[] | String;
	};

	export interface ContextType extends React.Context<Function> {
		gettext: Function;
		ngettext: Function;
		xgettext: Function;
		nxgettext: Function;
	}

	export function buildTextdomain(
		translations?: translationsType,
		plural?: String
	): ContextType;

	export class TextdomainContext extends React.Context<ContextType> {
		static Provider: React.Provider<ContextType>;
		static Consumer: React.Consumer<ContextType>;
	}

	export class Textdomain extends React.Component<ContextType> {
		translations: translationsType;
		plural: String;
	}

	export class WithGettext extends Textdomain {
		displayName: String;
	}

	export function withGettext(
		translations?: translationsType,
		plural?: String,
		options?: object
	): (
		WrappedComponent: React.ReactElement
	) => WithGettext &
		hoistNonReactStatic.NonReactStatics<
			React.ComponentType<React.ReactElement>
		>;
}
