import { CheckIcon } from "@heroicons/react/24/outline";
import { eventHandler } from "@rafty/shared";
import { cva } from "class-variance-authority";
import {
  Fragment,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import { StepperContext, StepperProvider, useStepperContext } from "./context";

const stepperClasses = cva(
  "group/stepper flex aria-disabled:opacity-60 aria-disabled:cursor-not-allowed",
  {
    variants: {
      direction: {
        horizontal: "w-full items-center",
        vertical: "h-full flex-col",
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
    onClick?: (value: number) => void;
    connector?: (props: StepsConnector) => JSX.Element;
    steps: StepType[];
  };

export const Stepper = forwardRef<HTMLDivElement, Stepper>(
  (
    {
      steps,
      current = 0,
      initial = 0,
      onClick,
      size = "md",
      isDisabled = false,
      direction = "horizontal",
      connector: Connector = StepsConnector,
      ...props
    },
    forwardedRef,
  ) => {
    const key = useId();

    const handleSelect = (value: number) =>
      eventHandler(() => !isDisabled && onClick?.(value));

    const components = steps.flatMap((step, index) => {
      const value = initial + index;

      return [
        <div
          key={`${key}-${index}`}
          onClick={handleSelect(value)}
          onKeyDown={handleSelect(value)}
        >
          <StepperItem
            {...step}
            value={value}
            isClickable={Boolean(onClick !== undefined)}
          />
        </div>,
        <Connector
          key={`${key}-${index}-connector`}
          active={current > value}
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
          current,
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
  "group/item flex h-full w-max items-center outline-none group-aria-disabled/stepper:opacity-60 group-aria-disabled/stepper:cursor-not-allowed cursor-default",
  {
    variants: {
      size: {
        sm: "gap-1.5 p-1.5",
        md: "gap-2 p-2",
        lg: "gap-2.5 p-2.5",
      },
      isClickable: {
        true: "",
        false: "",
      },
      isCurrentStep: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        isClickable: true,
        isCurrentStep: false,
        className: "cursor-pointer",
      },
    ],
  },
);

const stepperItemIconClasses = cva(
  "flex items-center justify-center rounded-full leading-none select-none border border-transparent transition-all ease-in-out",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9 text-lg",
        lg: "h-10 w-10 text-xl",
      },
      isClickable: {
        true: "group-focus/item:ring-2 ring-offset-1 ring-primary-300 dark:ring-secondary-100 dark:ring-offset-secondary-950",
        false: "",
      },
      isCurrentStep: {
        true: "bg-primary-500 dark:bg-primary-600 text-white",
        false: "",
      },
      isNotCompletedStep: {
        true: "bg-secondary-300 text-secondary-500 dark:bg-secondary-700 dark:text-secondary-400",
        false: "",
      },
      isCompletedStep: {
        true: "bg-primary-100 text-primary-500 dark:bg-primary-900/50 dark:text-primary-400",
        false: "",
      },
    },
    compoundVariants: [
      {
        isClickable: true,
        isCurrentStep: false,
        className:
          "group-hover/item:text-primary-500 group-hover/item:border-primary-500",
      },
    ],
  },
);

const contentWrapperClasses = cva("space-y-1", {
  variants: {
    isCurrentStep: {
      true: "dark:text-secondary-100",
      false: "",
    },
    isClickable: {
      true: "",
      false: "",
    },
    isNotCompletedStep: {
      true: "text-secondary-400 dark:text-secondary-500",
      false: "",
    },
  },
  compoundVariants: [
    {
      isClickable: true,
      isCurrentStep: false,
      className:
        "group-hover/item:text-primary-600 dark:text-secondary-100 dark:group-hover/item:text-primary-300",
    },
  ],
});

type StepperItem = StepType & { value: number; isClickable: boolean };

function StepperItem({
  title,
  description,
  subTitle,
  icon,
  value,
  isClickable,
}: StepperItem) {
  const { size, current } = useStepperContext();

  const isCurrentStep = current === value;
  const isCompletedStep = current > value;
  const isNotCompletedStep = current < value;

  return (
    <div
      role="button"
      tabIndex={0}
      className={stepperItemClasses({
        size,
        isClickable,
        isCurrentStep,
      })}
    >
      {icon ?? (
        <span
          className={stepperItemIconClasses({
            size,
            isClickable,
            isCurrentStep,
            isCompletedStep,
            isNotCompletedStep,
          })}
        >
          {isCompletedStep ? (
            <CheckIcon height={16} width={16} className="stroke-2" />
          ) : (
            value + 1
          )}
        </span>
      )}
      <StepContentRender
        title={title}
        subTitle={subTitle}
        description={description}
        className={contentWrapperClasses({
          isClickable,
          isCurrentStep,
          isNotCompletedStep,
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
});

type StepsConnector = { active: boolean };

function StepsConnector({ active }: StepsConnector) {
  const { direction, size } = useStepperContext();
  return <div className={connecterClasses({ direction, active, size })} />;
}

const titleAndSubTitleWrapperClasses = cva("flex items-baseline", {
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-1.5",
      lg: "gap-2",
    },
  },
});

const titleClasses = cva("leading-none w-max", {
  variants: {
    size: {
      sm: "text-base",
      md: "text-lg",
      lg: "text-xl",
    },
  },
});

const helpTextClasses = cva("leading-none", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    isSubtitle: {
      true: "text-secondary-400 dark:text-secondary-500",
    },
  },
});

type StepContentRender = Omit<HTMLAttributes<HTMLDivElement>, "title"> &
  Omit<StepType, "icon">;

const StepContentRender = forwardRef<HTMLDivElement, StepContentRender>(
  ({ title, subTitle, description, ...props }, forwardedRef) => {
    const { size } = useStepperContext();

    const titleRender = <h3 className={titleClasses({ size })}>{title}</h3>;
    const subTitleRender = (
      <h5 className={helpTextClasses({ size, isSubtitle: true })}>
        {subTitle}
      </h5>
    );
    const descriptionRender = (
      <p className={helpTextClasses({ size })}>{description}</p>
    );

    const Frag =
      title && subTitle
        ? ({ children }: PropsWithChildren) => (
            <div className={titleAndSubTitleWrapperClasses({ size })}>
              {children}
            </div>
          )
        : Fragment;

    return (
      <div {...props} ref={forwardedRef}>
        <Frag>
          {title && titleRender}
          {subTitle && subTitleRender}
        </Frag>
        {description && descriptionRender}
      </div>
    );
  },
);
