import * as React from 'react';
import type { ComboBoxProps } from '@react-types/combobox';
import { useComboBoxState } from 'react-stately';
import { useComboBox, useFilter, useButton } from 'react-aria';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { classNames } from '@rhino/utils';
import { Input, InputGroup, Suffix } from '@rhino/input';
import { Popover } from './popover';
import { ListBox } from './listbox';
export {
  Item as ComboboxItem,
  Section as ComboboxSection,
} from 'react-stately';

export type ComboBox = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
};

export function ComboBox<T extends object>(props: ComboBoxProps<T> & ComboBox) {
  const { size = 'md', variant = 'outline' } = props;

  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const { buttonProps } = useButton(triggerProps, buttonRef);

  return (
    <div className="relative">
      <InputGroup>
        <Input
          inputProps={inputProps}
          size={size}
          variant={variant}
          ref={inputRef}
        />
        <Suffix>
          <button
            {...buttonProps}
            ref={buttonRef}
            className={classNames(
              state.isFocused
                ? 'border-primary-500 text-primary-600'
                : 'border-gray-300 text-gray-500',
              'z-[2] cursor-pointer absolute right-[3px] flex p-1 items-center justify-center hover:bg-secondary-200/60 dark:hover:bg-secondary-700/50 transition-all rounded'
            )}
          >
            <ChevronUpDownIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </Suffix>
      </InputGroup>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={inputRef}
          state={state}
          isNonModal
          placement="bottom start"
          className="w-full"
        >
          <ListBox
            {...listBoxProps}
            listBoxRef={listBoxRef}
            state={state}
            size={size}
          />
        </Popover>
      )}
    </div>
  );
}
