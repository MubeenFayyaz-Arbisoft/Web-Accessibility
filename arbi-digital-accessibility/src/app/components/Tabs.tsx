'use client';

import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ReactElement,
} from 'react';
import styles from '../styles/components/Tabs.module.scss';

interface TabProps {
  label: string;
  children: ReactElement;
}

interface TabsContainerProps {
  children: ReactElement<TabProps>[];
}

export const Tab = ({ children }: TabProps) => children;

export const Tabs: React.FC<TabsContainerProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Focus the active tab when it changes
  useEffect(() => {
    tabRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % children.length);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev === 0 ? children.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      className={styles.tabsContainer}
      onKeyDown={handleKeyDown}
      role="tablist"
      aria-label="Tabs"
    >
      <div className={styles.tabsLinks}>
        {children.map((child, index) => (
          <button
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 text-sm font-medium outline-none ${
              index === activeIndex
                ? 'text-white bg-color'
                : 'bg-white text-black hover:bg-blue-700 hover:text-white'
            }`}
            role="tab"
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="p-4 " role="tabpanel">
        {children[activeIndex]}
      </div>
    </div>
  );
};
