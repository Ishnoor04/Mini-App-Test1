export const setItemInCloudStorage = (key: string, value: string, tele:any) => {
    tele.CloudStorage.setItem(key, value); 
  };