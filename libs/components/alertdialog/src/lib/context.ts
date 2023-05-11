import { createContext } from '@rhino/utils';

export const [AlertDialogProvider, useAlertDialogContext] =
  createContext<AlertDialogContext>({
    name: 'AlertDialogContext',
    hookName: 'useAlertDialogContext',
    providerName: '<AlertDialog />',
  });

export interface AlertDialogContext {
  size: 'sm' | 'md' | 'lg';
  isBarebone: boolean;
}
