export const getItemFromCloudStorage = async (key: string, tele1:any): Promise<string> => {
    return new Promise((resolve, reject) => {
      tele1.CloudStorage.getItem(key, (error: any, value: string) => {
        if (error) {
          reject(error);
        } else {
          resolve(value);
        }
      });
    });
  };