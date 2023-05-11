import { createContext } from '@rhino/utils';

export const [CardProvider, useCardContext] = createContext<CardContext>({
  name: 'CardContext',
  hookName: 'useCardContext',
  providerName: '<Card />',
});

export interface CardContext {
  size: 'sm' | 'md' | 'lg';
  variant: 'solid' | 'outline' | 'elevated';
  isBarebone: boolean;
}
