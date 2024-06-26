import { useCallback, useMemo, useState, type FC } from 'react';
import type { TabsProps, TabItemKey } from './types';

import classNames from 'classnames';
import './style.scss';

export const Tabs: FC<TabsProps> = ({ defaultTabItemKey, className, type = 'line', items, onSelect }) => {
  if (!items.length) throw new Error('[component Tabs]: items should has a least one element');

  const [tabItemKey, setTabItemKey] = useState(() => {
    if (defaultTabItemKey && items.find(({ key }) => defaultTabItemKey === key)) return defaultTabItemKey;
    return items[0].key;
  });

  const tabContent = useMemo(() => items.find(({ key }) => key === tabItemKey)?.children, [items, tabItemKey]);
  const handleClick = useCallback(
    (key: TabItemKey) => {
      setTabItemKey(key);
      // istanbul ignore else
      if (onSelect) onSelect(key);
    },
    [onSelect],
  );

  return (
    <div className={classNames('tabs', className)}>
      <ul role="tablist" className={classNames('tabs-nav', `nav-${type}`)}>
        {items.map(({ key, label, disabled }) => (
          <li
            key={key}
            role="tab"
            aria-selected={tabItemKey === key}
            className={classNames('tabs-nav-item', {
              'is-active': tabItemKey === key,
              disabled,
            })}
            onClick={() => {
              if (!disabled) handleClick(key);
            }}
          >
            {label}
          </li>
        ))}
      </ul>

      <div className="tabs-content">{tabContent}</div>
    </div>
  );
};

export default Tabs;
