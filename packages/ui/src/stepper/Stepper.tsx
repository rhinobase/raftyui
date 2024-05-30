"use client";
import { CheckIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode, forwardRef } from "react";
import { classNames, eventHandler } from "../utils";
import {
  type StepperContext,
  StepperProvider,
  useStepperContext,
} from "./context";

const stepperClasses = cva(
  "group/stepper flex aria-disabled:opacity-80 aria-disabled:cursor-not-allowed",
  {
    variants: {
      direction: {
        horizontal: "w-full items-center",
        vertical: "size-full flex-col",
      },
    },
  },
);

export type StepType = {
  title?: string;
  subTitle?: string;
  description?: string;
  icon?: ReactNode;
};

export type Stepper = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> &
  Partial<StepperContext> & {
    initial?: number;
    onValueChange?: (value: number) => void;
    connector?: (props: StepsConnector) => JSX.Element;
    steps: StepType[];
  };

export const Stepper = forwardRef<HTMLDivElement, Stepper>(
  (
    {
      steps,
      initial = 0,
      value = 0,
      onValueChange,
      size = "md",
      isDisabled = false,
      direction = "horizontal",
      connector: Connector = StepsConnector,
      ...props
    },
    forwardedRef,
  ) => {
    const handleSelect = (value: number) =>
      eventHandler(() => !isDisabled && onValueChange?.(value));

    const components = steps.flatMap((step, index) => {
      const currentValue = initial + index;

      return [
        <div
          key={currentValue}
          onClick={handleSelect(currentValue)}
          onKeyDown={handleSelect(currentValue)}
        >
          <StepperItem
            {...step}
            value={currentValue}
            isClickable={Boolean(onValueChange)}
          />
        </div>,
        <Connector
          key={`connector-${currentValue}`}
          active={value > currentValue}
        />,
      ];
    });

    // Removing the last element
    components.pop();

    return (
      <StepperProvider
        value={{
          direction,
          isDisabled,
          size,
          value,
        }}
      >
        <div
          ref={forwardedRef}
          {...props}
          aria-disabled={isDisabled}
          className={stepperClasses({ direction })}
        >
          {components}
        </div>
      </StepperProvider>
    );
  },
);
Stepper.displayName = "Stepper";

const stepperItemClasses = cva(
  "group/item flex h-full w-max items-center outline-none group-aria-disabled/stepper:opacity-80 group-aria-disabled/stepper:cursor-not-allowed cursor-default",
  {
    variants: {
      size: {
        sm: "gap-1.5 p-1.5",
        md: "gap-2 p-2",
        lg: "gap-2.5 p-2.5",
      },
      clickable: {
        true: "",
        false: "",
      },
      current: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        clickable: true,
        current: false,
        className: "cursor-pointer",
      },
    ],
    defaultVariants: {
      clickable: false,
      current: false,
      size: "md",
    },
  },
);

const stepperItemIconClasses = cva(
  "flex items-center justify-center rounded-full leading-none select-none border border-transparent transition-all ease-in-out",
  {
    variants: {
      size: {
        sm: "size-8 text-base",
        md: "size-9 text-lg",
        lg: "size-10 text-xl",
      },
      clickable: {
        true: "group-focus-visible/item:ring-2 ring-offset-2 ring-primary-300 dark:ring-primary-100 ring-offset-white dark:ring-offset-secondary-950",
        false: "",
      },
      current: {
        true: "bg-primary-500 dark:bg-primary-600 text-white",
        false: "",
      },
      incomplete: {
        true: "bg-secondary-300 text-secondary-500 dark:bg-secondary-700 dark:text-secondary-400",
        false: "",
      },
      completed: {
        true: "bg-primary-100 text-primary-500 dark:bg-primary-900/50 dark:text-primary-400",
        false: "",
      },
    },
    compoundVariants: [
      {
        clickable: true,
        current: false,
        className:
          "group-hover/item:text-primary-500 group-hover/item:border-primary-500",
      },
    ],
    defaultVariants: {
      clickable: false,
      current: false,
      completed: false,
      incomplete: false,
      size: "md",
    },
  },
);

const contentWrapperClasses = cva("", {
  variants: {
    size: {
      sm: "space-y-0",
      md: "space-y-0.5",
      lg: "space-y-1",
    },
    current: {
      true: "text-black dark:text-secondary-100",
      false: "",
    },
    clickable: {
      true: "",
      false: "",
    },
    incomplete: {
      true: "text-secondary-600 dark:text-secondary-400",
      false: "",
    },
  },
  compoundVariants: [
    {
      clickable: true,
      current: false,
      className:
        "group-hover/item:text-primary-600 dark:text-secondary-100 dark:group-hover/item:text-primary-300",
    },
  ],
  defaultVariants: {
    clickable: false,
    current: false,
    incomplete: false,
  },
});

type StepperItem = StepType & { value: number; isClickable: boolean };

function StepperItem(props: StepperItem) {
  const { size, value } = useStepperContext();

  const isCurrentStep = value === props.value;
  const isCompletedStep = value > props.value;
  const isNotCompletedStep = value < props.value;

  return (
    <div
      role="button"
      tabIndex={0}
      className={stepperItemClasses({
        size,
        clickable: props.isClickable,
        current: isCurrentStep,
      })}
    >
      {props.icon ?? (
        <span
          className={stepperItemIconClasses({
            size,
            clickable: props.isClickable,
            current: isCurrentStep,
            completed: isCompletedStep,
            incomplete: isNotCompletedStep,
          })}
        >
          {isCompletedStep ? (
            <CheckIcon height={16} width={16} className="stroke-2" />
          ) : (
            props.value + 1
          )}
        </span>
      )}
      <StepContentRender
        title={props.title}
        subTitle={props.subTitle}
        description={props.description}
        className={contentWrapperClasses({
          size,
          clickable: props.isClickable,
          current: isCurrentStep,
          incomplete: isNotCompletedStep,
        })}
      />
    </div>
  );
}

const connecterClasses = cva("", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
    direction: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
    active: {
      false: "bg-secondary-300 dark:bg-secondary-600",
      true: "bg-primary-500 dark:bg-primary-700",
    },
  },
  compoundVariants: [
    {
      direction: "vertical",
      size: "sm",
      className: "ml-[22px]",
    },
    {
      direction: "vertical",
      size: "md",
      className: "ml-[26px]",
    },
    {
      direction: "vertical",
      size: "lg",
      className: "ml-[30px]",
    },
  ],
  defaultVariants: {
    active: false,
    direction: "horizontal",
    size: "md",
  },
});

type StepsConnector = { active: boolean };

function StepsConnector(props: StepsConnector) {
  const { direction, size } = useStepperContext();

  return (
    <div
      className={connecterClasses({ direction, active: props.active, size })}
    />
  );
}

const titleAndSubTitleWrapperClasses = cva("flex items-baseline empty:hidden", {
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-1.5",
      lg: "gap-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const titleClasses = cva("leading-none w-max empty:hidden", {
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const helpTextClasses = cva("leading-none empty:hidden", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type StepContentRender = Omit<HTMLAttributes<HTMLDivElement>, "title"> &
  Omit<StepType, "icon">;

function StepContentRender({
  title,
  subTitle,
  description,
  ...props
}: StepContentRender) {
  const { size } = useStepperContext();

  return (
    <div {...props}>
      <div className={titleAndSubTitleWrapperClasses({ size })}>
        <h3 className={titleClasses({ size })}>{title}</h3>
        <h5
          className={classNames(
            helpTextClasses({ size }),
            "text-secondary-500",
          )}
        >
          {subTitle}
        </h5>
      </div>
      <p className={helpTextClasses({ size })}>{description}</p>
    </div>
  );
}
