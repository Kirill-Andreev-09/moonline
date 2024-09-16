import { ReactNode } from 'react';

export interface CardWithBlurProps {
  text: string;
  hasActionButton?: boolean;
  onActionClick?: () => void;
  icon?: ReactNode;
  subtitle?: string;
  isTypingText?: boolean;
}
