/**
 * Copyright (c) 2019 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-select
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  wrapper: styles['z-select'] || 'z-select',
  hasLabel: styles['z-select--label'] || 'z-select--label',
  hasSuccess: styles['z-select--success'] || 'z-select--success',
  hasWarning: styles['z-select--warning'] || 'z-select--warning',
  hasDanger: styles['z-select--danger'] || 'z-select--danger',
  hasError: styles['z-select--error'] || 'z-select--error',
  isDark: styles['z-select--dark'] || 'z-select--dark',
  label: styles['z-select__label'] || 'z-select__label',
};

export function ZSelect(e) {
  return ({
    label,
    color,
    success,
    warning,
    danger,
    error,
    dark,
    placeholder,
    selectedIndex,
    options = [],
    ...props
  }) => {
    if (color) {
      if (props.style) props.style.borderColor = color;
      else props.style = { borderColor: color };
    }
    const keyPrefix = props.id || 'select';
    const startOptions = placeholder ? [[e('option', {
      selected: true,
      disabled: true,
      hidden: true,
      key: `${keyPrefix}-option-h`,
    }, placeholder)]] : [];
    const children = startOptions.concat(options.map((text, i) => {
      const selected = selectedIndex === i;
      return e('option', { key: `${keyPrefix}-option-${i}`, value: text, selected }, text);
    }));
    const eSelect = e('select', props, children);
    const labelProps = { className: classnames.label };
    if (props.id) labelProps.for = props.id;
    const eLabel = label ? e('label', labelProps, label) : null;
    const classes = [classnames.wrapper];
    if (label) classes.push(classnames.hasLabel);
    if (success) classes.push(classnames.hasSuccess);
    if (warning) classes.push(classnames.hasWarning);
    if (danger) classes.push(classnames.hasDanger);
    if (error) classes.push(classnames.hasError);
    if (dark) classes.push(classnames.isDark);
    const className = classes.join(' ');
    return e('div', { className }, [eSelect, eLabel]);
  };
}

export default ZSelect;
