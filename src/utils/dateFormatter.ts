import { differenceInHours } from "date-fns";


export function formatTimeAgo(updated_at: string): string {
    const updatedAtDate = new Date(updated_at);
    const hoursDifference = differenceInHours(new Date(), updatedAtDate);
  
    if(hoursDifference < 1) {
        return "Less than an hour ago";
    }
    return hoursDifference >= 24
      ? `${Math.floor(hoursDifference / 24)} day(s) ago`
      : `${hoursDifference} hour(s) ago`;
  }