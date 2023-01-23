
export type Traslate = {
  [index: string]: string;
}

export type DefaultObjet = {
  [index: string]: any;
};

export type Input = {
  label: string;
  type: string;
  placeholder: string;
  required: {
    value: boolean;
    message?: string;
  };
  icon?: React.ReactNode;
  defaultValue?: any;
  conditional?: DefaultObjet;
  name: string;
  values?: any[];
  maxValue?: number;
};

export type InfoInput = {
  [index: string]: Input;
};

export type Step = {
  id: string;
  step: number;
  iconNav: React.ReactNode | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  path: string;
  inputs: Input[];
};
