/* @flow */

import * as React from 'react';

import * as editor from 'core/editor';

import SourceTranslationForm from './SourceTranslationForm';

import type { EditorProps } from 'core/editor';


type Props = {
    ...EditorProps,
    ftlSwitch: React.Node,
};


/**
 * Editor for complex Fluent strings.
 *
 * Displayed when the Rich Editor cannot handle the translation, or if a user
 * forces showing the Fluent source.
 */
export default class SourceEditor extends React.Component<Props> {
    render() {
        const { ftlSwitch, ...props } = this.props;

        return <>
            <SourceTranslationForm { ...props } />
            <editor.EditorMenu
                { ...props }
                firstItemHook={ ftlSwitch }
            />
        </>;
    }
}
