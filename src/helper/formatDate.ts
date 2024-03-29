import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relative);
dayjs.locale("ko");

export function fromNow(time:string | Date){
  return dayjs(time).fromNow()
}

export function formatDate(time:string | Date,format='YYYY-MM-DD'){
  return dayjs(time).format(format)
}