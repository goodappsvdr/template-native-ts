import { useMemo } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import localeData from "dayjs/plugin/localeData";

dayjs.locale("es");
dayjs.extend(localeData);

export function useDateFormatter() {
  return useMemo(() => {
    const formatDate = (isoDate: string) => {
      const date = dayjs(isoDate);

      const day = date.date();
      const month = date.format("MMMM");

      return `${day} de ${month}`;
    };

    const formatDateTime = (isoDate: string) => {
      // PAra que quede asi DD-MM-YYYY
      return dayjs(isoDate).format("DD-MM-YYYY");
    };

    return {
      formatDate,
      formatDateTime,
    };
  }, []);
}
