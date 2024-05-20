import { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (initialStep: string) => {
  const [step, setStep] = useState(initialStep);

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step,
    );

    return <>{targetStep}</>;
  };

  return { Funnel, Step, step, setStep } as const;
};
