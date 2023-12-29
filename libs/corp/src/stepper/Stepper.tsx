import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef, useId } from "react";

export type StepperItem = {
  title?: string;
  subTitle?: string;
  description?: string;
  icon?: ReactNode;
};

export type Stepper = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> & {
  current?: number;
  initial?: number;
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  onClick?: (value: number) => void;
  connector?: (props: StepConnector) => JSX.Element;
  steps: StepperItem[];
};

export const Stepper = forwardRef<HTMLDivElement, Stepper>(
  (
    {
      size = "md",
      steps,
      isDisabled = false,
      direction = "horizontal",
      current = 0,
      initial = 0,
      onClick,
      connector: CustomConnector,
      ...props
    },
    forwardedRef,
  ) => {
    const Connector = CustomConnector ?? StepConnector;

    const components = steps
      .flatMap((step, index) => {
        const key = useId();
        const connectorKey = useId();
        const value = initial + index;

        return [
          <div
            key={key}
            onClick={() => onClick?.(value)}
            onKeyDown={(e) => e.key === "Enter" && onClick?.(value)}
          >
            <StepCard
              {...step}
              size={size}
              current={current}
              value={value}
              isClickable={Boolean(onClick !== undefined)}
            />
          </div>,
          <Connector
            key={connectorKey}
            direction={direction}
            size={size}
            active={current > value}
          />,
        ];
      })
      .slice(0, -1);

    return (
      <div
        ref={forwardedRef}
        {...props}
        aria-disabled={isDisabled}
        className={classNames(
          "flex",
          direction === "horizontal" && "w-full items-center",
          direction === "vertical" && "h-full flex-col",
        )}
      >
        {components}
      </div>
    );
  },
);

Stepper.displayName = "Stepper";

const iconClass = cva(
  "flex items-center justify-center rounded-full leading-none select-none border border-transparent group-focus/item:ring-2 ring-offset-1 ring-primary-300 dark:ring-secondary-100 dark:ring-offset-secondary-950",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9 text-lg",
        lg: "h-10 w-10 text-xl",
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

const stepCardClasses = cva(
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

type StepCard = Pick<Stepper, "size" | "current"> &
  StepperItem & { value: number; isClickable?: boolean };

function StepCard({
  title,
  description,
  subTitle,
  icon,
  value,
  current = 0,
  size = "md",
  isClickable,
}: StepCard) {
  const isNextStep = current < value;
  const isCurrentStep = current === value;
  const isCompletedStep = current > value;

  const titleRender = <h3 className={titleClasses({ size })}>{title}</h3>;
  const subTitleRender = (
    <h5 className={helpTextClasses({ size, isSubtitle: true })}>{subTitle}</h5>
  );
  const descriptionRender = (
    <p className={helpTextClasses({ size })}>{description}</p>
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={stepCardClasses({
        size,
        selectableItem: isClickable && !isCurrentStep,
      })}
    >
      {icon ?? (
        <span
          className={classNames(
            iconClass({ size }),
            isCurrentStep
              ? "bg-primary-500 dark:bg-primary-600 text-white"
              : isCompletedStep
                ? "bg-primary-100 text-primary-500 dark:bg-primary-900/50 dark:text-primary-400"
                : "bg-secondary-300 text-secondary-500 dark:bg-secondary-700 dark:text-secondary-400",
            isClickable &&
              !isCurrentStep &&
              "group-hover/item:text-primary-500 group-hover/item:border-primary-500 transition-all ease-in-out",
          )}
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

type StepConnector = Pick<Stepper, "direction" | "size"> & { active?: boolean };

const StepConnector = ({ direction, size, active = false }: StepConnector) => (
  <div className={connecterClasses({ direction, active, size })} />
);
