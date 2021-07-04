const debug = true;

export const useLogger = (namespace: string) => ({
  print: <T>(method: string, data: T) => {
    if (debug) {
      const startLine = 'State mutation logger: ';
      const info = `${namespace}/${method}; Data:`;
      console.log(startLine + info, data);
    }
  } 
});