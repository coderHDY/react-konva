const BASIC_URL = "http://localhost:9000/api/v1";

export function getImgURL(imageFieldId: string) {
  if (imageFieldId) {
    if (imageFieldId.indexOf("http") === -1) {
      if (process.env.NODE_ENV !== "production") {
        return `${BASIC_URL}/files/download/${imageFieldId}`;
      }
      return `/api/v1/files/download/${imageFieldId}`;
    } else {
      return imageFieldId;
    }
  } else {
    return `/api/v1/files/download/notExist`;
  }
}
