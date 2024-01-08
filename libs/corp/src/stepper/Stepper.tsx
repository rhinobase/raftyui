import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef, useId } from "react";
import { StepperContext, StepperProvider, useStepperContext } from "./context";

const stepperClasses = cva("flex", {
  variants: {
    direction: {
      horizontal: "w-full items-center",
      vertical: "h-full flex-col",
    },
    isDisabled: {
      true: "aria-disabled:opacity-60 aria-disabled:cursor-not-allowed",
      false: "",
    },
  },
});

export type Steps = {
  title?: string;
  subTitle?: string;
  description?: string;
  icon?: ReactNode;
};

export type Stepper = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> &
  Partial<StepperContext> & {
    current?: number;
    initial?: number;
    onClick?: (value: number) => void;
    connector?: (props: StepConnector) => JSX.Element;
    steps: Steps[];
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
      connector: CustomConnector,
      ...props
    },
    forwardedRef,
  ) => {
    const Connector = CustomConnector ?? StepConnector;

    const stepperKey = useId();
    const connectorKey = useId();

    const components = steps
      .flatMap((step, index) => {
        const value = initial + index;

        return [
          <div
            key={`${stepperKey}-${index}`}
            onClick={() => !isDisabled && onClick?.(value)}
            onKeyDown={(e) =>
              !isDisabled && e.key === "Enter" && onClick?.(value)
            }
          >
            <StepperItem
              {...step}
              current={current}
              value={value}
              isClickable={Boolean(onClick !== undefined)}
            />
          </div>,
          <Connector
            key={`${connectorKey}-${index}`}
            active={current > value}
          />,
        ];
      })
      .slice(0, -1);

    return (
      <StepperProvider
        value={{
          direction,
          isDisabled,
          size,
        }}
      >
        <div
          ref={forwardedRef}
          {...props}
          aria-disabled={isDisabled}
          className={stepperClasses({ direction, isDisabled })}
        >
          {components}
        </div>
      </StepperProvider>
    );
  },
);

Stepper.displayName = "Stepper";

const iconClass = cva(
  "flex items-center justify-center rounded-full leading-none select-none border border-transparent ring-offset-1 ring-primary-300 dark:ring-secondary-100 dark:ring-offset-secondary-950",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9 text-lg",
        lg: "h-10 w-10 text-xl",
      },
      isOnclick: {
        true: "group-focus/item:ring-2",
        false: "",
      },
      active: {
        true: "group-hover/item:text-primary-500 group-hover/item:border-primary-500 transition-all ease-in-out",
        false: "",
      },
      isCurrentStep: {
        true: "bg-primary-500 dark:bg-primary-600 text-white",
        false: "",
      },
      isCompletedStep: {
        true: "bg-primary-100 text-primary-500 dark:bg-primary-900/50 dark:text-primary-400",
        false: "",
      },
      notComplete: {
        true: "bg-secondary-300 text-secondary-500 dark:bg-secondary-700 dark:text-secondary-400",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

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

const StepperItemClasses = cva(
  "group/item flex h-full w-max items-center outline-none",
  {
    variants: {
      size: {
        sm: "gap-1.5 p-1.5",
        md: "gap-2 p-2",
        lg: "gap-2.5 p-2.5",
      },
      selectableItem: {
        true: "cursor-pointer",
        false: "cursor-text",
      },
      isDisabled: {
        true: "aria-disabled:opacity-60 aria-disabled:cursor-not-allowed",
        false: "",
      },
    },
  },
);

const itemClasses = cva("flex items-baseline", {
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-1.5",
      lg: "gap-2",
    },
  },
});

type StepperItem = Pick<Stepper, "current"> &
  Steps & { value: number; isClickable?: boolean };

function StepperItem({
  title,
  description,
  subTitle,
  icon,
  value,
  current = 0,
  isClickable,
}: StepperItem) {
  const { size, isDisabled } = useStepperContext();

  const isNextStep = current < value;
  const isCurrentStep = current === value;
  const isCompletedStep = current > value;

  return (
    <div
      role="button"
      tabIndex={0}
      className={StepperItemClasses({
        size,
        selectableItem: isClickable && !isCurrentStep,
        isDisabled,
      })}
      aria-disabled={isDisabled}
    >
      {icon ?? (
        <span
          className={iconClass({
            size,
            isOnclick: onclick ? true : false,
            active: isClickable && !isCurrentStep,
            isCurrentStep,
            isCompletedStep,
            notComplete: !isCurrentStep && !isCompletedStep,
          })}
        >
          {isCompletedStep ? (
            <CheckIcon height={16} width={16} className="stroke-2" />
          ) : (
            value + 1
          )}
        </span>
      )}
      <div
        className={classNames(
          isNextStep && "text-secondary-400 dark:text-secondary-500",
          isClickable &&
            !isCurrentStep &&
            "group-hover/item:text-primary-600 dark:text-secondary-100 dark:group-hover/item:text-primary-300",
          isCurrentStep && "dark:text-secondary-100",
          "space-y-1",
        )}
      >
        <StepContentRender
          title={title}
          subTitle={subTitle}
          description={description}
        />
      </div>
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

type StepConnector = { active?: boolean };

const StepConnector = ({ active = false }: StepConnector) => {
  const { direction, size } = useStepperContext();
  return <div className={connecterClasses({ direction, active, size })} />;
};

const StepContentRender = ({
  title,
  subTitle,
  description,
}: Omit<Steps, "icon">) => {
  const { size } = useStepperContext();

  const titleRender = <h3 className={titleClasses({ size })}>{title}</h3>;
  const subTitleRender = (
    <h5 className={helpTextClasses({ size, isSubtitle: true })}>{subTitle}</h5>
  );
  const descriptionRender = (
    <p className={helpTextClasses({ size })}>{description}</p>
  );

  return (
    <>
      {title && subTitle ? (
        <div className={itemClasses({ size })}>
          {title && titleRender}
          {subTitle && subTitleRender}
        </div>
      ) : title && !subTitle ? (
        titleRender
      ) : subTitle && !title ? (
        subTitleRender
      ) : undefined}
      {description && descriptionRender}
    </>
  );
};
