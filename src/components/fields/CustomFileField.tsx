import * as React from 'react';
import { FC } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import { FileFieldProps, sanitizeFieldRestProps } from 'react-admin';
import { fieldPropTypes } from 'ra-ui-materialui/lib/field/types';


/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from 'react-admin';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
export const CustomFileField: FC<FileFieldProps> = props => {
    const {
        className,
        classes: classesOverride,
        emptyText = 'No file found',
        record,
        source = '',
        title = '',
        src,
        target,
        download,
        ping,
        rel,
        ...rest
    } = props;
    const sourceValue = get(record, source);
    const classes = useStyles(props);

    if (!sourceValue) {
        return emptyText ? (
            <Typography
                component="span"
                variant="body2"
                className={className}
                {...sanitizeFieldRestProps(rest)}
            >
                {emptyText}
            </Typography>
        ) : (
            <div
                className={classnames(classes.root, className)}
                {...sanitizeFieldRestProps(rest)}
            />
        );
    }

    if (Array.isArray(sourceValue)) {
        return (
            <ul
                className={classnames(classes.root, className)}
                {...sanitizeFieldRestProps(rest)}
            >
                {sourceValue.map((file, index) => {
                    const fileTitleValue = get(file, title) || title;
                    const srcValue = src && get(file, src) || file || title;

                    return (
                        <li key={index}>
                            <a
                                href={srcValue}
                                title={fileTitleValue}
                                target={target}
                                download={download}
                                ping={ping}
                                rel={rel}
                            >
                                {fileTitleValue}
                            </a>
                        </li>
                    );
                })}
            </ul>
        );
    }

    const titleValue = get(record, title) || title;

    return (
        <div
            className={classnames(classes.root, className)}
            {...sanitizeFieldRestProps(rest)}
        >
            <a
                href={sourceValue}
                title={titleValue}
                target={target}
                download={download}
                ping={ping}
                rel={rel}
            >
                {titleValue}
            </a>
        </div>
    );
};

CustomFileField.defaultProps = {
    addLabel: true,
};

const useStyles = makeStyles(
    {
        root: { display: 'inline-block' },
    },
    { name: 'RaFileField' }
);

CustomFileField.propTypes = {
    ...fieldPropTypes,
    src: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    ping: PropTypes.string,
    rel: PropTypes.string,
};

