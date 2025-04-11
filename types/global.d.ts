declare global {
  interface Window {
    hlx?: {
      codeBasePath?: string;
      RUM_MASK_URL?: string;
      RUM_MANUAL_ENHANCE?: boolean;
      lighthouse?: boolean;
    };
    placeholders: {
      [key: string]: Promise<Record<string, string>> | Record<string, string> | {};
    };
  }
}

export {}; 