declare module 'framer-motion' {
  import { ReactNode } from 'react';

  interface MotionProps {
    children?: ReactNode;
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    className?: string;
    style?: any;
    [key: string]: any;
  }

  export const motion: {
    div: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLDivElement>>;
    a: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLAnchorElement>>;
    span: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLSpanElement>>;
    p: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLParagraphElement>>;
    h1: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLHeadingElement>>;
    h2: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLHeadingElement>>;
    h3: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLHeadingElement>>;
    h4: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLHeadingElement>>;
    h5: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLHeadingElement>>;
    h6: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLHeadingElement>>;
    button: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLButtonElement>>;
    img: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLImageElement>>;
    section: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    article: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    aside: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    nav: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    header: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    footer: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    main: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLElement>>;
    ul: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLUListElement>>;
    ol: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLOListElement>>;
    li: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLLIElement>>;
    form: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLFormElement>>;
    input: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLInputElement>>;
    textarea: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLTextAreaElement>>;
    select: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLSelectElement>>;
    label: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<HTMLLabelElement>>;
    [key: string]: React.ForwardRefExoticComponent<MotionProps & React.RefAttributes<any>>;
  };
}
