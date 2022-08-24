import { DATE_MONTH } from "@/constants/date";

export const convertDateMonth = (date: number): string | undefined => {
  switch (date) {
    case 0:
      return DATE_MONTH.JANUARY;
    case 1:
      return DATE_MONTH.FEBRUARY;
    case 2:
      return DATE_MONTH.MARCH;
    case 3:
      return DATE_MONTH.APRIL;
    case 4:
      return DATE_MONTH.MAY;
    case 5:
      return DATE_MONTH.JUNE;
    case 6:
      return DATE_MONTH.JULY;
    case 7:
      return DATE_MONTH.AUGUST;
    case 8:
      return DATE_MONTH.SEPTEMBER;
    case 9:
      return DATE_MONTH.OCTOBER;
    case 10:
      return DATE_MONTH.NOVEMBER;
    case 11:
      return DATE_MONTH.DECEMBER;
    default:
      return;
  }
};
